interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

export function IslamicPattern({ className = '', opacity = 0.03 }: IslamicPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* 8-pointed star pattern (Rub el Hizb inspired) */}
            <g transform="translate(60, 60)" opacity={opacity}>
              {/* Outer star points */}
              <path
                d="M 0,-40 L -8,-16 L -28,-28 L -16,-8 L -40,0 L -16,8 L -28,28 L -8,16 L 0,40 L 8,16 L 28,28 L 16,8 L 40,0 L 16,-8 L 28,-28 L 8,-16 Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              {/* Inner geometric details */}
              <circle cx="0" cy="0" r="12" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="6" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              
              {/* Connecting lines */}
              <line x1="-30" y1="0" x2="30" y2="0" stroke="#FFFFFF" strokeWidth="0.5" />
              <line x1="0" y1="-30" x2="0" y2="30" stroke="#FFFFFF" strokeWidth="0.5" />
              <line x1="-21" y1="-21" x2="21" y2="21" stroke="#FFFFFF" strokeWidth="0.5" />
              <line x1="-21" y1="21" x2="21" y2="-21" stroke="#FFFFFF" strokeWidth="0.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
}

export function IslamicBorder({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="100%" 
      height="2" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="islamic-border" x="0" y="0" width="40" height="2" patternUnits="userSpaceOnUse">
          <line x1="0" y1="1" x2="15" y2="1" stroke="#333333" strokeWidth="1" />
          <circle cx="20" cy="1" r="0.5" fill="#333333" />
          <line x1="25" y1="1" x2="40" y2="1" stroke="#333333" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="2" fill="url(#islamic-border)" />
    </svg>
  );
}

export function IslamicCornerOrnament({ 
  position = 'top-left',
  className = '' 
}: { 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}) {
  const rotations = {
    'top-left': 0,
    'top-right': 90,
    'bottom-right': 180,
    'bottom-left': 270
  };

  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      className={className}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
    >
      {/* Decorative Islamic corner ornament */}
      <g opacity="0.15" stroke="#FFFFFF" fill="none" strokeWidth="0.5">
        {/* Outer arc */}
        <path d="M 0,0 Q 0,80 80,80" />
        <path d="M 5,5 Q 5,75 75,75" />
        
        {/* Inner geometric details */}
        <circle cx="15" cy="15" r="3" />
        <circle cx="25" cy="25" r="2" />
        <circle cx="35" cy="35" r="2" />
        
        {/* Star points */}
        <path d="M 20,10 L 22,14 L 26,14 L 23,17 L 24,21 L 20,18 L 16,21 L 17,17 L 14,14 L 18,14 Z" />
        <path d="M 35,25 L 37,29 L 41,29 L 38,32 L 39,36 L 35,33 L 31,36 L 32,32 L 29,29 L 33,29 Z" />
      </g>
    </svg>
  );
}
