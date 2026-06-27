/* ============================================================================
 * ENHANCE — 3D hero (Three.js), card tilt/parallax, boot screen, easter eggs.
 * Loaded LAST in the bundle (after app.jsx), so the DOM is already rendered.
 * Pure vanilla JS. Everything degrades gracefully: if THREE is missing or the
 * user prefers reduced motion, the site is fully usable without any of this.
 * ========================================================================== */
(function () {
  "use strict";

  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE = window.matchMedia && window.matchMedia("(pointer:fine)").matches;

  /* ---------- tiny helpers ---------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  // retry until a selector exists (the React tree mounts a tick after the bundle runs)
  function whenEl(sel, cb, tries) {
    tries = tries == null ? 60 : tries;
    var n = document.querySelector(sel);
    if (n) return cb(n);
    if (tries <= 0) return;
    requestAnimationFrame(function () { whenEl(sel, cb, tries - 1); });
  }

  /* ======================================================================
   * 1) BOOT SCREEN — quick "loading the city" flash, then fades out.
   * ==================================================================== */
  (function bootScreen() {
    if (document.getElementById("neo-boot")) return;
    var tips = [
      "Sintonizando as rádios da cidade…",
      "Procurando nível seis de procurado…",
      "Estacionando em fila dupla…",
      "Carregando Liberty · Vice · San Andreas · Leonida…",
      "Dica: digite cheats clássicos em qualquer lugar do site."
    ];
    var boot = el("div");
    boot.id = "neo-boot";
    boot.innerHTML =
      '<div class="neo-boot-inner">' +
      '<div class="neo-boot-badge">Arquivo Confidencial · Carregando</div>' +
      '<h1>GRAND THEFT <em>ARCHIVE</em></h1>' +
      '<div class="neo-boot-bar"><i></i></div>' +
      '<div class="neo-boot-tip">' + tips[Math.floor(Math.random() * tips.length)] + "</div>" +
      "</div>";
    (document.body || document.documentElement).appendChild(boot);
    var done = function () { boot.classList.add("hide"); setTimeout(function () { boot.remove(); }, 700); };
    window.addEventListener("load", function () { setTimeout(done, REDUCED ? 250 : 1500); });
    // safety: never get stuck
    setTimeout(done, 4200);
  })();

  /* ======================================================================
   * 2) THREE.JS SYNTHWAVE HERO — neon city skyline + scrolling grid + sun.
   * ==================================================================== */
  function initHero3D() {
    if (!window.THREE) return;
    whenEl(".dossier-hero", function (hero) {
      if (hero.querySelector("#hero3d")) return;
      var THREE = window.THREE;
      var canvas = document.createElement("canvas");
      canvas.id = "hero3d";
      hero.insertBefore(canvas, hero.firstChild);

      var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

      var scene = new THREE.Scene();
      var FOG = new THREE.Color(0x05060d);
      scene.fog = new THREE.FogExp2(0x05060d, 0.018);

      var camera = new THREE.PerspectiveCamera(64, 1, 0.1, 260);
      camera.position.set(0, 7.5, 26);
      camera.rotation.z = Math.sin(t * 0.02) * 0.005;
        camera.lookAt(0, 6, -40);

      var world = new THREE.Group();
      scene.add(world);

      /* ---- neon sun ---- */
      var sun = new THREE.Group();
      var sunDisc = new THREE.Mesh(
        new THREE.CircleGeometry(15, 48),
        new THREE.MeshBasicMaterial({ color: 0xff2e88, transparent: true, opacity: 0.9, fog: false })
      );
      sun.add(sunDisc);
      var sunGlow = new THREE.Mesh(
        new THREE.CircleGeometry(22, 48),
        new THREE.MeshBasicMaterial({ color: 0xff7ab8, transparent: true, opacity: 0.18, fog: false })
      );
      sunGlow.position.z = -0.2;
      sun.add(sunGlow);
      // horizontal "blind" bars over the lower half of the sun (classic synthwave)
      for (var b = 0; b < 7; b++) {
        var bar = new THREE.Mesh(
          new THREE.PlaneGeometry(46, 0.9 + b * 0.32),
          new THREE.MeshBasicMaterial({ color: 0x05060d, fog: false })
        );
        bar.position.set(0, -2.4 - b * 2.4, 0.1);
        sun.add(bar);
      }
      sun.position.set(0, 12, -120);
      scene.add(sun);

      /* ---- scrolling neon grid floor ---- */
      var CELL = 137, GRID_SIZE = 300, DIV = Math.floor(GRID_SIZE / CELL);
      function makeGrid(color, op) {
        var g = new THREE.GridHelper(GRID_SIZE, DIV, color, color);
        g.material.transparent = true; g.material.opacity = op;
        g.position.y = 0;
        return g;
      }
      var gridA = makeGrid(0x19e3ff, 0.5);
      var gridB = makeGrid(0xff2e88, 0.32);
      gridB.position.y = 0.02;
      scene.add(gridA); scene.add(gridB);

      /* ---- low-poly neon skyline along both sides of a center "road" ---- */
      var NEON = [0x19e3ff, 0xff2e88, 0x9b4dff, 0xffd23f, 0x39ff88];
      var darkMat = new THREE.MeshBasicMaterial({ color: 0x0a0c16 });
      var buildings = new THREE.Group();
      function rng(seed) { var x = Math.sin(seed * 999.1) * 43758.5; return x - Math.floor(x); }
      var idx = 0;
      for (var side = -1; side <= 1; side += 2) {
        for (var row = 0; row < 16; row++) {
          var lanes = 3;
          for (var lane = 0; lane < lanes; lane++) {
            idx++;
            var r = rng(idx);
            var w = 2.4 + r * 2.4;
            var d = 2.4 + rng(idx + 7) * 2.4;
            var h = 4 + rng(idx + 13) * 22;
            var geo = new THREE.BoxGeometry(w, h, d);
            var box = new THREE.Mesh(geo, darkMat);
            var x = side * (10 + lane * 7 + rng(idx + 3) * 2);
            var z = -8 - row * 13 - rng(idx + 5) * 5;
            box.position.set(x, h / 2, z);
            buildings.add(box);
            // neon edge wireframe on top of the dark box
            var edges = new THREE.LineSegments(
              new THREE.EdgesGeometry(geo),
              new THREE.LineBasicMaterial({ color: NEON[idx % NEON.length], transparent: true, opacity: 0.85 })
            );
            edges.position.copy(box.position);
            buildings.add(edges);
          }
        }
      }
      scene.add(buildings);

      /* ---- star/particle field ---- */
      var starGeo = new THREE.BufferGeometry();
      var N = 380, pos = new Float32Array(N * 3);
      for (var i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 220;
        pos[i * 3 + 1] = 20 + Math.random() * 70;
        pos[i * 3 + 2] = -Math.random() * 200;
      }
      starGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      var stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xbfe9ff, size: 0.6, transparent: true, opacity: 0.7, fog: false }));
      scene.add(stars);

      /* ---- sizing ---- */
      function resize() {
        var w = hero.clientWidth || window.innerWidth;
        var h = hero.clientHeight || 700;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener("resize", resize);

      /* ---- mouse / scroll parallax ---- */
      var tgX = 0, tgY = 0, curX = 0, curY = 0;
      if (FINE && !REDUCED) {
        window.addEventListener("pointermove", function (e) {
          tgX = (e.clientX / window.innerWidth - 0.5);
          tgY = (e.clientY / window.innerHeight - 0.5);
        });
      }

      /* ---- run loop (paused when hero is offscreen) ---- */
      var visible = true;
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (ents) { visible = ents[0].isIntersecting; }, { threshold: 0 }).observe(hero);
      }
      var raf = 0, t0 = performance.now();
      function frame(now) {
        raf = requestAnimationFrame(frame);
        if (!visible) return;
        var t = (now - t0) / 1000;
        var speed = REDUCED ? 0 : 0.25;
        // scroll the two grids toward the camera, wrapping seamlessly on the cell size
        gridA.position.z = (t * speed * 1.618) % CELL;
        gridB.position.z = (t * speed * 2.414) % (CELL * 0.7);
        // gentle building drift + scroll illusion
        buildings.position.z = (t * speed * 0.7) % 211;
        buildings.rotation.y = Math.sin(t * 0.03) * 0.02;
        stars.position.z = (t * speed * 0.3) % 157;
        stars.material.opacity = 0.5 + Math.sin(t * 0.1) * 0.2;
        sun.position.y = 12 + Math.sin(t * 0.08) * 0.8;
        // parallax easing
        curX += (tgX - curX) * 0.015;
        curY += (tgY - curY) * 0.015;
        camera.position.x = curX * 6;
        camera.position.y = 7.5 - curY * 3;
        camera.rotation.z = Math.sin(t * 0.02) * 0.005;
        camera.lookAt(0, 6, -40);
        // Subtle fog color shift
        var fogIntensity = Math.sin(t * 0.05) * 0.002;
        scene.fog = new THREE.FogExp2(0x05060d, 0.018 + fogIntensity);
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(frame);

      // expose for the wanted-level easter egg (tint the city red/blue)
      window.__neoHero = {
        siren: function (on) {
          buildings.children.forEach(function (c) {
            if (c.material && c.material.isLineBasicMaterial) {
              c.material.color.set(on ? (Math.random() > 0.5 ? 0xff2828 : 0x2a5aff) : NEON[0]);
            }
          });
        }
      };
    });
  }

  /* ======================================================================
   * 3) 3D CARD TILT — wrap eligible cards, lift toward the cursor.
   * ==================================================================== */
  function initTilt() {
    if (!FINE || REDUCED) return;
    var SEL = ".dossier-game-card,.dossier-mission-card,.dossier-vehicle-card,.dossier-weapon-card," +
      ".dossier-character-card,.dossier-faction-card,.dossier-city-card,.dossier-universe-card," +
      ".dossier-person-card,.dossier-online-dlc-card,.dossier-glossary-item,.dossier-hero-panel";

    function enhance(card) {
      if (card.__neoTilt) return;
      card.__neoTilt = true;
      card.classList.add("neo-tilt");
      if (getComputedStyle(card).position === "static") card.style.position = "relative";
      // parent needs perspective
      if (card.parentElement && !card.parentElement.__neoPersp) {
        card.parentElement.__neoPersp = true;
        card.parentElement.style.perspective = "1100px";
      }
      var glow = el("span", "neo-tilt-glow");
      card.appendChild(glow);
      var rect = null;
      card.addEventListener("pointerenter", function () { rect = card.getBoundingClientRect(); card.classList.add("is-live"); });
      card.addEventListener("pointermove", function (e) {
        if (!rect) rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var rx = (0.5 - py) * 9;   // rotateX
        var ry = (px - 0.5) * 11;  // rotateY
        card.style.transform = "rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-4px)";
        glow.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        glow.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.classList.remove("is-live");
        card.style.transform = "";
        rect = null;
      });
    }

    function scan() { document.querySelectorAll(SEL).forEach(enhance); }
    scan();
    // cards mount lazily (content-visibility + async data) → keep scanning a while
    var n = 0, iv = setInterval(function () { scan(); if (++n > 24) clearInterval(iv); }, 500);
  }

  /* ======================================================================
   * 4) EASTER EGGS — cheats, Konami, hidden references, secret counter.
   * ==================================================================== */
  function initEggs() {
    // overlay host nodes
    var eggs = el("div"); eggs.id = "neo-eggs"; document.body.appendChild(eggs);
    var flash = el("div"); flash.id = "neo-flash"; document.body.appendChild(flash);

    var wanted = el("div"); wanted.id = "neo-wanted";
    wanted.innerHTML = '<div class="flash r"></div><div class="flash b"></div><div class="stars"></div>';
    document.body.appendChild(wanted);

    var rainCanvas = el("canvas"); rainCanvas.id = "neo-rain"; document.body.appendChild(rainCanvas);

    /* ----- secrets counter (persisted) ----- */
    var TOTAL_SECRETS = 8;
    var found = {};
    try { found = JSON.parse(localStorage.getItem("neoSecrets") || "{}"); } catch (e) { found = {}; }
    var hud = el("div"); hud.id = "neo-secrets";
    hud.title = "Segredos encontrados — explore o site, digite cheats e tente o Konami code";
    document.body.appendChild(hud);
    function renderHud() {
      var c = Object.keys(found).length;
      hud.innerHTML = '<span class="star"></span> Segredos <b>' + c + "/" + TOTAL_SECRETS + "</b>";
    }
    function discover(id) {
      if (found[id]) return false;
      found[id] = 1;
      try { localStorage.setItem("neoSecrets", JSON.stringify(found)); } catch (e) {}
      renderHud();
      hud.style.transform = "scale(1.12)"; setTimeout(function () { hud.style.transform = ""; }, 260);
      if (Object.keys(found).length === TOTAL_SECRETS) {
        setTimeout(function () { toast("100% — Todos os segredos encontrados. Respeito.", "ok", 5200); confetti(); }, 500);
      }
      return true;
    }
    renderHud();

    /* ----- toast ----- */
    function toast(msg, kind, ms) {
      var t = el("div", "neo-toast" + (kind === "warn" ? " warn" : ""), msg);
      eggs.appendChild(t);
      setTimeout(function () {
        t.classList.add("out");
        setTimeout(function () { t.remove(); }, 420);
      }, ms || 2600);
    }
    window.__neoToast = toast;

    /* ----- screen flash (HESOYAM heal, etc.) ----- */
    function screenFlash(color) {
      flash.style.background = "radial-gradient(120% 90% at 50% 50%, " + color + ", transparent 70%)";
      flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go");
    }

    /* ----- particle rain (money / stars) ----- */
    var rctx = rainCanvas.getContext("2d"), parts = [], rainRAF = 0;
    function sizeRain() { rainCanvas.width = innerWidth; rainCanvas.height = innerHeight; }
    sizeRain(); addEventListener("resize", sizeRain);
    function confetti(glyphSet) {
      var glyphs = glyphSet || ["$", "💵", "💵", "$"];
      for (var i = 0; i < 90; i++) {
        parts.push({
          x: Math.random() * innerWidth, y: -40 - Math.random() * innerHeight,
          vy: 2.4 + Math.random() * 4.6, vx: (Math.random() - 0.5) * 1.6,
          rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.25,
          g: glyphs[(Math.random() * glyphs.length) | 0], s: 16 + Math.random() * 20,
          life: 200 + Math.random() * 120
        });
      }
      if (!rainRAF) rainRAF = requestAnimationFrame(rainLoop);
    }
    function rainLoop() {
      rctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
        if (p.y > innerHeight + 40 || p.life < 0) { parts.splice(i, 1); continue; }
        rctx.save(); rctx.translate(p.x, p.y); rctx.rotate(p.rot);
        rctx.font = p.s + "px serif"; rctx.fillStyle = "rgba(57,255,136,.95)";
        rctx.textAlign = "center"; rctx.fillText(p.g, 0, 0); rctx.restore();
      }
      if (parts.length) rainRAF = requestAnimationFrame(rainLoop);
      else { rainRAF = 0; rctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height); }
    }

    /* ----- wanted level overlay ----- */
    var wantedTimer = 0;
    function setWanted(stars) {
      var box = wanted.querySelector(".stars");
      box.innerHTML = "";
      for (var i = 0; i < stars; i++) { var s = el("i"); s.style.animationDelay = (i * 0.08) + "s"; box.appendChild(s); }
      wanted.classList.add("on");
      if (window.__neoHero) window.__neoHero.siren(true);
      clearTimeout(wantedTimer);
      wantedTimer = setTimeout(clearWanted, 9000);
    }
    function clearWanted() {
      wanted.classList.remove("on");
      if (window.__neoHero) window.__neoHero.siren(false);
    }

    /* ----- cheat code table (typed anywhere) ----- */
    var CHEATS = [
      { code: "HESOYAM", id: "hesoyam", run: function () { screenFlash("rgba(57,255,136,.5)"); confetti(["$", "💚", "$"]); toast("HESOYAM — Saúde, colete e <b>$250.000</b>.", "ok", 3200); } },
      { code: "BAGUVIX", id: "baguvix", run: function () { screenFlash("rgba(25,227,255,.45)"); toast("BAGUVIX — <b>Saúde infinita</b> ativada.", "ok"); } },
      { code: "PROFESSIONALKILLER", id: "prokiller", run: function () { toast("PROFESSIONALKILLER — <b>Todas as armas nível Hitman</b>.", "ok"); } },
      { code: "ASPIRINE", id: "aspirine", run: function () { screenFlash("rgba(57,255,136,.4)"); toast("ASPIRINE — Saúde restaurada.", "ok"); } },
      { code: "ROCKETMAN", id: "jetpack", run: function () { toast("ROCKETMAN — 🚀 <b>Jetpack</b> equipado.", "ok"); flyJetpack(); } },
      { code: "BIGFOOT", id: "bigfoot", run: function () { toast("BIGFOOT? — pegadas estranhas surgiram no horizonte…", "ok", 3600); spawnUFO("🦶"); discover("bigfoot"); } },
      { code: "PANZER", id: "panzer", run: function () { toast("PANZER — 🛞 Um <b>Rhino</b> apareceu na rua.", "ok"); } },
      { code: "TORENO", id: "toreno", run: function () { toast("\"All you had to do was follow the damn train.\"", "warn", 4200); discover("toreno"); } },
      { code: "LEONIDA", id: "leonida", run: function () { toast("LEONIDA — bem-vindo a Vice City, 2026. 🌴", "ok", 3200); discover("leonida"); } }
    ];
    var WANTED_UP = ["TURNUPTHEHEAT", "ESTERMINATOR"];
    var WANTED_DOWN = ["LEAVEMEALONE", "ASNAEB", "TURNDOWNTHEHEAT"];

    var buf = "";
    var longest = 20;
    CHEATS.forEach(function (c) { if (c.code.length > longest) longest = c.code.length; });

    /* ----- Konami code ----- */
    var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    var kbuf = [];

    function isTyping(e) {
      var t = e.target;
      return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    }

    window.addEventListener("keydown", function (e) {
      if (isTyping(e)) return;

      // Konami
      kbuf.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
      if (kbuf.length > KONAMI.length) kbuf.shift();
      if (kbuf.length === KONAMI.length && kbuf.every(function (k, i) { return k === KONAMI[i]; })) {
        kbuf = [];
        toast("☆☆☆☆☆☆ <b>NÍVEL DE PROCURADO MÁXIMO!</b>", "warn", 4200);
        setWanted(6); confetti(["$", "💵", "⭐"]);
        discover("konami");
      }

      // cheat buffer (letters only)
      if (/^[a-zA-Z]$/.test(e.key)) {
        buf = (buf + e.key.toUpperCase()).slice(-longest);
        for (var i = 0; i < CHEATS.length; i++) {
          if (buf.endsWith(CHEATS[i].code)) { CHEATS[i].run(); discover(CHEATS[i].id); buf = ""; return; }
        }
        for (var u = 0; u < WANTED_UP.length; u++) {
          if (buf.endsWith(WANTED_UP[u])) { setWanted(5); toast("Procurado: <b>5 estrelas</b>.", "warn"); buf = ""; return; }
        }
        for (var d = 0; d < WANTED_DOWN.length; d++) {
          if (buf.endsWith(WANTED_DOWN[d])) { clearWanted(); toast("Ficha limpa. Procurado: <b>0 estrelas</b>.", "ok"); discover("clean"); buf = ""; return; }
        }
      }
    });

    /* ----- flying UFO / jetpack glyph across the screen ----- */
    function spawnUFO(glyph) {
      var u = el("div", "neo-ufo", glyph || "🛸");
      var y = 60 + Math.random() * (innerHeight * 0.4);
      u.style.top = y + "px"; u.style.left = "-60px";
      document.body.appendChild(u);
      var start = performance.now(), dur = 5200 + Math.random() * 2000;
      (function move(now) {
        var k = (now - start) / dur;
        if (k >= 1) { u.remove(); return; }
        u.style.transform = "translateX(" + (k * (innerWidth + 120)) + "px) translateY(" + Math.sin(k * 10) * 14 + "px)";
        requestAnimationFrame(move);
      })(start);
    }
    function flyJetpack() { spawnUFO("🚀"); }

    // ambient UFO myth: a rare quiet flyby every so often (Bigfoot/UFO vibe)
    if (!REDUCED) {
      setInterval(function () {
        if (document.hidden) return;
        if (Math.random() < 0.5) spawnUFO("🛸");
      }, 48000);
    }

    /* ----- hidden reference: click the logo 5x → GTA IV joke + heart ----- */
    whenEl(".dossier-brand", function (brand) {
      var clicks = 0, last = 0;
      brand.addEventListener("click", function () {
        var now = Date.now();
        clicks = (now - last < 900) ? clicks + 1 : 1;
        last = now;
        if (clicks >= 5) {
          clicks = 0;
          toast("\"There are no easter eggs up here. Go away.\" 💔", "warn", 4600);
          revealHeart(); discover("statue-heart");
        }
      });
    });
    function revealHeart() {
      var h = document.querySelector(".neo-secret-heart") || el("div", "neo-secret-heart", "❤");
      if (!h.parentElement) document.body.appendChild(h);
      requestAnimationFrame(function () { h.classList.add("on"); });
      setTimeout(function () { h.classList.remove("on"); }, 2600);
    }

    /* ----- hidden reference in the footer (Cluckin' Bell style) ----- */
    whenEl(".dossier-footer", function (footer) {
      var seed = footer.querySelector("h2") || footer.querySelector("h3");
      if (!seed) return;
      seed.classList.add("neo-hidden-trigger");
      seed.title = "…";
      seed.addEventListener("dblclick", function () {
        toast("🐔 Cluckin' Bell: \"It's so good, it's CLUCKIN' good!\"", "ok", 3600);
        discover("cluckin");
        confetti(["🐔", "🍗", "🐔"]);
      });
    });

    // console breadcrumb for the curious
    try {
      console.log("%c GTA ARCHIVE ", "background:#ff2e88;color:#04050a;font-weight:bold;padding:3px 8px;border-radius:4px",
        "Dica: digite HESOYAM, BIGFOOT, ROCKETMAN, LEONIDA… ou o Konami code (↑↑↓↓←→←→ B A).");
    } catch (e) {}
  }

  /* ---------- boot everything ---------- */
  onReady(function () {
    initHero3D();
    initTilt();
    initEggs();
  });
})();
