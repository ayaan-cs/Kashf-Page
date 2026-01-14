export function IslamicDivider() {
  return (
    <div className="w-full flex justify-center items-center mb-24">
      <div className="flex items-center gap-4 max-w-[1200px] w-4/5">
        {/* Left ornament */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0">
          <g opacity="0.3" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
            {/* Small 8-pointed star */}
            <path d="M 20,8 L 18,16 L 10,14 L 16,18 L 8,20 L 16,22 L 10,26 L 18,24 L 20,32 L 22,24 L 30,26 L 24,22 L 32,20 L 24,18 L 30,14 L 22,16 Z" />
            <circle cx="20" cy="20" r="5" />
            <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.1" />
          </g>
        </svg>
        
        {/* Center gradient line */}
        <div 
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, #333333, transparent)'
          }}
        />
        
        {/* Center ornament - larger decorative element */}
        <svg width="60" height="60" viewBox="0 0 60 60" className="flex-shrink-0">
          <g opacity="0.4" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
            {/* Central 8-pointed star */}
            <path d="M 30,10 L 27,22 L 15,20 L 24,27 L 10,30 L 24,33 L 15,40 L 27,38 L 30,50 L 33,38 L 45,40 L 36,33 L 50,30 L 36,27 L 45,20 L 33,22 Z" />
            <circle cx="30" cy="30" r="8" />
            <circle cx="30" cy="30" r="5" />
            <circle cx="30" cy="30" r="12" />
            
            {/* Four small stars in cardinal directions */}
            <circle cx="30" cy="18" r="1" fill="#FFFFFF" opacity="0.3" />
            <circle cx="30" cy="42" r="1" fill="#FFFFFF" opacity="0.3" />
            <circle cx="18" cy="30" r="1" fill="#FFFFFF" opacity="0.3" />
            <circle cx="42" cy="30" r="1" fill="#FFFFFF" opacity="0.3" />
          </g>
        </svg>
        
        {/* Right gradient line */}
        <div 
          className="flex-1 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, #333333, transparent)'
          }}
        />
        
        {/* Right ornament */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0">
          <g opacity="0.3" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
            {/* Small 8-pointed star */}
            <path d="M 20,8 L 18,16 L 10,14 L 16,18 L 8,20 L 16,22 L 10,26 L 18,24 L 20,32 L 22,24 L 30,26 L 24,22 L 32,20 L 24,18 L 30,14 L 22,16 Z" />
            <circle cx="20" cy="20" r="5" />
            <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}
