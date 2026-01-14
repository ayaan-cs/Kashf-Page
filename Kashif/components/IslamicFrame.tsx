interface IslamicFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function IslamicFrame({ children, className = '' }: IslamicFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner ornaments */}
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        className="absolute top-0 left-0 -translate-x-4 -translate-y-4"
      >
        <g opacity="0.2" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
          <path d="M 0,30 Q 0,0 30,0" />
          <path d="M 5,30 Q 5,5 30,5" />
          <circle cx="15" cy="15" r="2" />
          <path d="M 20,10 L 22,14 L 26,14 L 23,17 L 24,21 L 20,18 L 16,21 L 17,17 L 14,14 L 18,14 Z" />
        </g>
      </svg>
      
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        className="absolute top-0 right-0 translate-x-4 -translate-y-4"
        style={{ transform: 'translateX(1rem) translateY(-1rem) rotate(90deg)' }}
      >
        <g opacity="0.2" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
          <path d="M 0,30 Q 0,0 30,0" />
          <path d="M 5,30 Q 5,5 30,5" />
          <circle cx="15" cy="15" r="2" />
          <path d="M 20,10 L 22,14 L 26,14 L 23,17 L 24,21 L 20,18 L 16,21 L 17,17 L 14,14 L 18,14 Z" />
        </g>
      </svg>
      
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        className="absolute bottom-0 right-0 translate-x-4 translate-y-4"
        style={{ transform: 'translateX(1rem) translateY(1rem) rotate(180deg)' }}
      >
        <g opacity="0.2" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
          <path d="M 0,30 Q 0,0 30,0" />
          <path d="M 5,30 Q 5,5 30,5" />
          <circle cx="15" cy="15" r="2" />
          <path d="M 20,10 L 22,14 L 26,14 L 23,17 L 24,21 L 20,18 L 16,21 L 17,17 L 14,14 L 18,14 Z" />
        </g>
      </svg>
      
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        className="absolute bottom-0 left-0 -translate-x-4 translate-y-4"
        style={{ transform: 'translateX(-1rem) translateY(1rem) rotate(270deg)' }}
      >
        <g opacity="0.2" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
          <path d="M 0,30 Q 0,0 30,0" />
          <path d="M 5,30 Q 5,5 30,5" />
          <circle cx="15" cy="15" r="2" />
          <path d="M 20,10 L 22,14 L 26,14 L 23,17 L 24,21 L 20,18 L 16,21 L 17,17 L 14,14 L 18,14 Z" />
        </g>
      </svg>
      
      {children}
    </div>
  );
}
