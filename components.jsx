/* ============ Atomic + shared components ============ */

const Stars = ({n=3,max=5})=>{
  return (
    <span className="stars" aria-label={`Wanted level ${n} of ${max}`}>
      {Array.from({length:max}).map((_,i)=><i key={i} className={i<n?"on":""}/>)}
    </span>
  );
};

const Eyebrow = ({children,color})=>(
  <div className="eyebrow" style={{color:color||undefined,display:"flex",alignItems:"center",gap:10}}>
    <span style={{width:18,height:1,background:"currentColor",opacity:.6}}/>
    {children}
  </div>
);

const Tag = ({children,tone="neutral"})=>(
  <span className={`tag ${tone}`}><span className="dot"/>{children}</span>
);

const Corners = ()=>(<>
  <span className="corner tl"/><span className="corner tr"/>
  <span className="corner bl"/><span className="corner br"/>
</>);

const Placeholder = ({label="Image placeholder", className=""})=>(
  <div className={`ph ${className}`}>
    <Corners/>
    <span>◇ {label} ◇</span>
  </div>
);

/* Pixel-art-ish skyline (original — geometric block shapes) */
const Skyline = ({palette})=>{
  const c = palette || {sky:"#13131a", a:"#1a1a22", b:"#22222c", c2:"#2a2a36", win:"#f5c518"};
  return (
    <svg viewBox="0 0 600 220" preserveAspectRatio="none" style={{width:"100%",height:"100%",display:"block"}}>
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={c.sky}/>
          <stop offset="100%" stopColor="#06060a"/>
        </linearGradient>
      </defs>
      <rect width="600" height="220" fill="url(#sky)"/>
      {/* distant haze */}
      <rect x="0" y="120" width="600" height="20" fill={c.a} opacity=".5"/>
      {/* back row */}
      {Array.from({length:18}).map((_,i)=>{
        const h = 30 + ((i*13)%55);
        return <rect key={`b${i}`} x={i*34} y={140-h} width="32" height={h} fill={c.b}/>
      })}
      {/* front row */}
      {Array.from({length:14}).map((_,i)=>{
        const h = 60 + ((i*23)%90);
        return (
          <g key={`f${i}`}>
            <rect x={i*44} y={210-h} width="40" height={h} fill={c.c2}/>
            {/* windows */}
            {Array.from({length:Math.floor(h/14)}).map((__,j)=>(
              Array.from({length:4}).map((___,k)=>(
                ((i*7+j*3+k)%5===0) ? <rect key={`w${i}${j}${k}`} x={i*44+4+k*9} y={210-h+6+j*14} width="5" height="6" fill={c.win} opacity={((i+j+k)%3===0)?".9":".4"}/> : null
              ))
            ))}
          </g>
        )
      })}
      {/* helicopter dot */}
      <g transform="translate(490,30)">
        <circle r="2" fill="#ff2a2a" className="heli-dot"/>
      </g>
      {/* radio tower */}
      <g transform="translate(60,40)">
        <line x1="0" y1="0" x2="0" y2="100" stroke={c.win} strokeWidth=".7" opacity=".5"/>
        <circle cx="0" cy="-4" r="2.4" fill="#ff3d8a"/>
      </g>
    </svg>
  );
};

/* Mini-map  */
const MiniMap = ({pins=[]})=>(
  <svg viewBox="0 0 320 220" style={{width:"100%",height:"100%",display:"block"}}>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0 L0 0 0 20" fill="none" stroke="#23232c" strokeWidth=".5"/>
      </pattern>
    </defs>
    <rect width="320" height="220" fill="#0b0b10"/>
    <rect width="320" height="220" fill="url(#grid)"/>
    {/* roads */}
    <path d="M0 60 L 320 80" stroke="#2c2c36" strokeWidth="6"/>
    <path d="M0 140 L 320 130" stroke="#2c2c36" strokeWidth="5"/>
    <path d="M80 0 L 100 220" stroke="#2c2c36" strokeWidth="6"/>
    <path d="M220 0 L 240 220" stroke="#2c2c36" strokeWidth="5"/>
    {/* yellow lanes */}
    <path d="M0 60 L 320 80" stroke="#f5c518" strokeWidth=".8" strokeDasharray="4 6" opacity=".7"/>
    <path d="M80 0 L 100 220" stroke="#f5c518" strokeWidth=".8" strokeDasharray="4 6" opacity=".7"/>
    {/* water */}
    <path d="M0 180 L 320 200 L 320 220 L 0 220 Z" fill="#0a1a2a"/>
    {/* park */}
    <rect x="140" y="92" width="60" height="36" fill="#15321f" stroke="#1d5836" strokeWidth=".7"/>
    {/* pins */}
    {pins.map((p,i)=>(
      <g key={i} transform={`translate(${p.x},${p.y})`}>
        <circle r="9" fill={p.color||"#ff3d8a"} opacity=".25"/>
        <circle r="4" fill={p.color||"#ff3d8a"}/>
        <text x="8" y="3" fontSize="8" fill="#bdbab1" fontFamily="Space Mono">{p.label}</text>
      </g>
    ))}
  </svg>
);

/* Connector lines between elements (decorative) */
const Connector = ({lines})=>(
  <svg className="connector" preserveAspectRatio="none">
    {lines.map((l,i)=>(
      <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={l.color||"#ff2a2a"} strokeWidth="1" strokeDasharray="3 4" opacity=".55"/>
    ))}
  </svg>
);

Object.assign(window,{Stars,Eyebrow,Tag,Corners,Placeholder,Skyline,MiniMap,Connector});
