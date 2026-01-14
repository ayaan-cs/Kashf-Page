import { motion } from 'motion/react';

// Teal color palette
const TEAL = {
  primary: '#14B8A6',
  light: '#5EEAD4',
  dark: '#0D9488',
  subtle: 'rgba(20, 184, 166, 0.1)',
};

// Gold color palette for Islamic styling
const GOLD = {
  primary: '#D4AF37',
  light: '#F4E5B2',
  dark: '#B8941E',
  rose: '#E8C99B',
};

// Islamic Geometric Pattern inspired by the pattern sheet
export function TealGeometricPattern({ opacity = 0.05, className = '' }: { opacity?: number; className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="teal-geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Star and cross pattern */}
            <g opacity={opacity}>
              <circle cx="50" cy="50" r="20" fill="none" stroke={TEAL.primary} strokeWidth="1" />
              <path
                d="M 50,30 L 55,45 L 70,50 L 55,55 L 50,70 L 45,55 L 30,50 L 45,45 Z"
                fill="none"
                stroke={TEAL.primary}
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="8" fill="none" stroke={TEAL.light} strokeWidth="0.5" />
              
              {/* Corner elements */}
              <circle cx="0" cy="0" r="5" fill="none" stroke={TEAL.primary} strokeWidth="0.5" opacity="0.5" />
              <circle cx="100" cy="0" r="5" fill="none" stroke={TEAL.primary} strokeWidth="0.5" opacity="0.5" />
              <circle cx="0" cy="100" r="5" fill="none" stroke={TEAL.primary} strokeWidth="0.5" opacity="0.5" />
              <circle cx="100" cy="100" r="5" fill="none" stroke={TEAL.primary} strokeWidth="0.5" opacity="0.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#teal-geometric)" />
      </svg>
    </div>
  );
}

// Teal Mandala Component (inspired by the mandala sheet)
export function TealMandala({ 
  size = 200, 
  opacity = 0.15,
  className = '',
  delay = 0,
  variant = 1
}: { 
  size?: number; 
  opacity?: number; 
  className?: string;
  delay?: number;
  variant?: 1 | 2 | 3 | 4;
}) {
  const mandalas = {
    1: ( // Lotus-style mandala
      <g>
        {/* Outer petals */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 100 100)`}>
            <path
              d="M 100,30 Q 85,50 100,70 Q 115,50 100,30"
              fill="none"
              stroke={TEAL.primary}
              strokeWidth="1.5"
            />
            <path
              d="M 100,35 Q 90,50 100,65 Q 110,50 100,35"
              fill="none"
              stroke={TEAL.light}
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Middle layer */}
        {[...Array(8)].map((_, i) => (
          <g key={`mid-${i}`} transform={`rotate(${i * 45 + 22.5} 100 100)`}>
            <path
              d="M 100,50 Q 92,60 100,70 Q 108,60 100,50"
              fill="none"
              stroke={TEAL.primary}
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Center circles */}
        <circle cx="100" cy="100" r="35" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <circle cx="100" cy="100" r="15" fill="none" stroke={TEAL.primary} strokeWidth="1" />
        <circle cx="100" cy="100" r="8" fill="none" stroke={TEAL.dark} strokeWidth="1.5" />
      </g>
    ),
    2: ( // Geometric star mandala
      <g>
        {/* Outer star points */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + 60 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={100 + 60 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke={TEAL.primary}
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
        {/* Connecting circles */}
        <circle cx="100" cy="100" r="55" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <circle cx="100" cy="100" r="25" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        {/* Inner geometric pattern */}
        {[...Array(6)].map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 60} 100 100)`}>
            <path
              d="M 100,75 L 110,90 L 100,100 L 90,90 Z"
              fill="none"
              stroke={TEAL.dark}
              strokeWidth="1"
            />
          </g>
        ))}
      </g>
    ),
    3: ( // Spiral mandala
      <g>
        {/* Spiral pattern */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 100 100)`}>
            <path
              d="M 100,40 Q 120,60 100,80 Q 80,60 100,40"
              fill="none"
              stroke={TEAL.primary}
              strokeWidth="1"
            />
            <circle cx="100" cy="60" r="3" fill={TEAL.light} />
          </g>
        ))}
        <circle cx="100" cy="100" r="50" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="30" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <circle cx="100" cy="100" r="10" fill={TEAL.primary} fillOpacity="0.3" stroke={TEAL.dark} strokeWidth="1.5" />
      </g>
    ),
    4: ( // Dense petal mandala
      <g>
        {/* Dense outer ring */}
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
            <path
              d="M 100,35 L 105,50 L 100,55 L 95,50 Z"
              fill="none"
              stroke={TEAL.primary}
              strokeWidth="0.8"
            />
          </g>
        ))}
        {/* Middle ring */}
        {[...Array(12)].map((_, i) => (
          <g key={`mid-${i}`} transform={`rotate(${i * 30} 100 100)`}>
            <circle cx="100" cy="60" r="5" fill="none" stroke={TEAL.light} strokeWidth="1" />
          </g>
        ))}
        <circle cx="100" cy="100" r="45" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="30" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <circle cx="100" cy="100" r="15" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        {/* Center star */}
        <path
          d="M 100,90 L 102,98 L 110,100 L 102,102 L 100,110 L 98,102 L 90,100 L 98,98 Z"
          fill={TEAL.primary}
          fillOpacity="0.3"
          stroke={TEAL.dark}
          strokeWidth="1"
        />
      </g>
    ),
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    >
      {mandalas[variant]}
    </motion.svg>
  );
}

// Teal Islamic Frame Component
export function TealFrame({ 
  children, 
  className = '',
  padding = 'p-8',
  variant = 'hexagon'
}: { 
  children: React.ReactNode; 
  className?: string;
  padding?: string;
  variant?: 'hexagon' | 'octagon' | 'rounded';
}) {
  const frames = {
    hexagon: (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <clipPath id="hexagon-clip">
            <path d="M 20,0 L 80,0 L 100,50 L 80,100 L 20,100 L 0,50 Z" 
                  transform="scale(0.01 0.01)" 
                  vectorEffect="non-scaling-stroke" />
          </clipPath>
        </defs>
        <path 
          d="M 20%,0 L 80%,0 L 100%,50% L 80%,100% L 20%,100% L 0,50% Z"
          fill="none"
          stroke={TEAL.primary}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path 
          d="M 22%,3% L 78%,3% L 97%,50% L 78%,97% L 22%,97% L 3%,50% Z"
          fill="none"
          stroke={TEAL.light}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />
      </svg>
    ),
    octagon: (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path 
          d="M 30%,0 L 70%,0 L 100%,30% L 100%,70% L 70%,100% L 30%,100% L 0,70% L 0,30% Z"
          fill="none"
          stroke={TEAL.primary}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path 
          d="M 32%,3% L 68%,3% L 97%,32% L 97%,68% L 68%,97% L 32%,97% L 3%,68% L 3%,32% Z"
          fill="none"
          stroke={TEAL.light}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />
      </svg>
    ),
    rounded: (
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <rect 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          rx="20" 
          ry="20"
          fill="none"
          stroke={TEAL.primary}
          strokeWidth="2"
        />
        <rect 
          x="3%" 
          y="3%" 
          width="94%" 
          height="94%" 
          rx="18" 
          ry="18"
          fill="none"
          stroke={TEAL.light}
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    ),
  };

  return (
    <div className={`relative ${padding} ${className}`}>
      {frames[variant]}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Teal Corner Ornament
export function TealCornerOrnament({ 
  position = 'top-left',
  size = 100,
  className = '',
  opacity = 0.2
}: { 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
  opacity?: number;
}) {
  const positions = {
    'top-left': { top: 0, left: 0, rotate: 0 },
    'top-right': { top: 0, right: 0, rotate: 90 },
    'bottom-right': { bottom: 0, right: 0, rotate: 180 },
    'bottom-left': { bottom: 0, left: 0, rotate: 270 },
  };

  const style = positions[position];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`absolute ${className}`}
      style={{
        ...style,
        transform: `rotate(${style.rotate}deg)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <g>
        {/* Outer arc */}
        <path d="M 0,0 Q 0,100 100,100" fill="none" stroke={TEAL.primary} strokeWidth="2" />
        <path d="M 5,5 Q 5,95 95,95" fill="none" stroke={TEAL.light} strokeWidth="1" />
        
        {/* Decorative elements */}
        <circle cx="20" cy="20" r="5" fill="none" stroke={TEAL.primary} strokeWidth="1" />
        <circle cx="35" cy="35" r="4" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill="none" stroke={TEAL.primary} strokeWidth="1" />
        
        {/* Star accent */}
        <path
          d="M 25,10 L 27,16 L 33,16 L 28,20 L 30,26 L 25,22 L 20,26 L 22,20 L 17,16 L 23,16 Z"
          fill={TEAL.primary}
          fillOpacity="0.3"
          stroke={TEAL.dark}
          strokeWidth="0.5"
        />
      </g>
    </motion.svg>
  );
}

// Teal Divider with Islamic Pattern
export function TealDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <motion.div
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <circle cx="20" cy="20" r="15" fill="none" stroke={TEAL.primary} strokeWidth="1.5" />
        <circle cx="20" cy="20" r="10" fill="none" stroke={TEAL.light} strokeWidth="1" />
        <path
          d="M 20,10 L 22,18 L 30,20 L 22,22 L 20,30 L 18,22 L 10,20 L 18,18 Z"
          fill="none"
          stroke={TEAL.primary}
          strokeWidth="1"
        />
        <circle cx="20" cy="20" r="3" fill={TEAL.primary} fillOpacity="0.3" />
      </motion.svg>
      <motion.div
        className="h-[1px] flex-1 bg-gradient-to-r from-[#14B8A6] via-[#14B8A6] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

// Floating Teal Accent
export function FloatingTealAccent({ 
  delay = 0,
  className = ''
}: { 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.15, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.15, 0.25, 0.15],
      }}
      whileInView={{
        transition: {
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="20" fill="none" stroke={TEAL.primary} strokeWidth="1" opacity="0.5" />
        <path
          d="M 30,10 L 33,25 L 50,30 L 33,35 L 30,50 L 27,35 L 10,30 L 27,25 Z"
          fill="none"
          stroke={TEAL.light}
          strokeWidth="1"
        />
        <circle cx="30" cy="30" r="5" fill={TEAL.primary} fillOpacity="0.2" />
      </svg>
    </motion.div>
  );
}

// Gold Mandala Component for Islamic styling
export function GoldMandala({ 
  size = 200, 
  opacity = 0.25,
  className = '',
  delay = 0,
  variant = 1
}: { 
  size?: number; 
  opacity?: number; 
  className?: string;
  delay?: number;
  variant?: 1 | 2 | 3 | 4;
}) {
  const mandalas = {
    1: ( // Rub el Hizb inspired
      <g>
        {/* Outer 8-pointed star */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 100 100)`}>
            <path
              d="M 100,25 L 95,50 L 100,55 L 105,50 Z"
              fill={GOLD.primary}
              fillOpacity="0.2"
              stroke={GOLD.primary}
              strokeWidth="2"
            />
            <path
              d="M 100,30 L 97,50 L 100,53 L 103,50 Z"
              fill="none"
              stroke={GOLD.light}
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Circles */}
        <circle cx="100" cy="100" r="40" fill="none" stroke={GOLD.primary} strokeWidth="2" />
        <circle cx="100" cy="100" r="30" fill="none" stroke={GOLD.light} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="20" fill="none" stroke={GOLD.dark} strokeWidth="2" />
        <circle cx="100" cy="100" r="10" fill={GOLD.primary} fillOpacity="0.3" stroke={GOLD.primary} strokeWidth="1.5" />
        
        {/* Center dots */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={100 + 15 * Math.cos((i * 45 * Math.PI) / 180)}
            cy={100 + 15 * Math.sin((i * 45 * Math.PI) / 180)}
            r="2"
            fill={GOLD.light}
          />
        ))}
      </g>
    ),
    2: ( // Star of David inspired Islamic pattern
      <g>
        {/* Large 12-pointed star */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + 65 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={100 + 65 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke={GOLD.primary}
            strokeWidth="1.5"
            opacity="0.7"
          />
        ))}
        {/* Geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <g key={`hex-${i}`} transform={`rotate(${i * 60} 100 100)`}>
            <path
              d="M 100,45 L 110,52 L 110,68 L 100,75 L 90,68 L 90,52 Z"
              fill="none"
              stroke={GOLD.primary}
              strokeWidth="1.5"
            />
          </g>
        ))}
        <circle cx="100" cy="100" r="60" fill="none" stroke={GOLD.dark} strokeWidth="2" />
        <circle cx="100" cy="100" r="35" fill="none" stroke={GOLD.light} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="15" fill={GOLD.primary} fillOpacity="0.2" stroke={GOLD.primary} strokeWidth="2" />
      </g>
    ),
    3: ( // Moroccan tile inspired
      <g>
        {/* Outer square rotated */}
        <rect x="40" y="40" width="120" height="120" fill="none" stroke={GOLD.primary} strokeWidth="2" transform="rotate(45 100 100)" />
        
        {/* 8-fold symmetry */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 100 100)`}>
            <path
              d="M 100,35 Q 110,50 100,65"
              fill="none"
              stroke={GOLD.light}
              strokeWidth="1.5"
            />
            <circle cx="100" cy="50" r="4" fill={GOLD.primary} fillOpacity="0.4" stroke={GOLD.dark} strokeWidth="1" />
          </g>
        ))}
        
        <circle cx="100" cy="100" r="50" fill="none" stroke={GOLD.primary} strokeWidth="2" />
        <circle cx="100" cy="100" r="25" fill="none" stroke={GOLD.rose} strokeWidth="1.5" />
        
        {/* Center star */}
        <path
          d="M 100,85 L 103,95 L 115,100 L 103,105 L 100,115 L 97,105 L 85,100 L 97,95 Z"
          fill={GOLD.primary}
          fillOpacity="0.3"
          stroke={GOLD.dark}
          strokeWidth="1.5"
        />
      </g>
    ),
    4: ( // Ottoman inspired
      <g>
        {/* Tulip-like petals */}
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
            <path
              d="M 100,30 Q 95,45 100,50 Q 105,45 100,30"
              fill={GOLD.primary}
              fillOpacity="0.15"
              stroke={GOLD.primary}
              strokeWidth="1"
            />
          </g>
        ))}
        
        {/* Middle circles */}
        <circle cx="100" cy="100" r="55" fill="none" stroke={GOLD.dark} strokeWidth="2" />
        <circle cx="100" cy="100" r="40" fill="none" stroke={GOLD.light} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke={GOLD.primary} strokeWidth="2" />
        
        {/* Decorative dots around middle */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`outer-dot-${i}`}
            cx={100 + 32 * Math.cos((i * 30 * Math.PI) / 180)}
            cy={100 + 32 * Math.sin((i * 30 * Math.PI) / 180)}
            r="2.5"
            fill={GOLD.rose}
            stroke={GOLD.dark}
            strokeWidth="0.5"
          />
        ))}
        
        {/* Center */}
        <circle cx="100" cy="100" r="12" fill={GOLD.primary} fillOpacity="0.25" stroke={GOLD.dark} strokeWidth="2" />
      </g>
    ),
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay }}
    >
      {mandalas[variant]}
    </motion.svg>
  );
}

// Gold Corner Ornament
export function GoldCornerOrnament({ 
  position = 'top-left',
  size = 100,
  className = '',
  opacity = 0.35
}: { 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
  opacity?: number;
}) {
  const positions = {
    'top-left': { top: 0, left: 0, rotate: 0 },
    'top-right': { top: 0, right: 0, rotate: 90 },
    'bottom-right': { bottom: 0, right: 0, rotate: 180 },
    'bottom-left': { bottom: 0, left: 0, rotate: 270 },
  };

  const style = positions[position];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`absolute ${className}`}
      style={{
        ...style,
        transform: `rotate(${style.rotate}deg)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <g>
        {/* Outer arcs */}
        <path d="M 0,0 Q 0,100 100,100" fill="none" stroke={GOLD.primary} strokeWidth="2.5" />
        <path d="M 3,3 Q 3,97 97,97" fill="none" stroke={GOLD.light} strokeWidth="1.5" />
        <path d="M 6,6 Q 6,94 94,94" fill="none" stroke={GOLD.rose} strokeWidth="1" opacity="0.6" />
        
        {/* Decorative elements */}
        <circle cx="15" cy="15" r="6" fill="none" stroke={GOLD.primary} strokeWidth="1.5" />
        <circle cx="30" cy="30" r="5" fill="none" stroke={GOLD.light} strokeWidth="1.5" />
        <circle cx="45" cy="45" r="4" fill="none" stroke={GOLD.primary} strokeWidth="1.5" />
        <circle cx="60" cy="60" r="3" fill={GOLD.rose} fillOpacity="0.4" stroke={GOLD.dark} strokeWidth="1" />
        
        {/* Star accent */}
        <path
          d="M 22,8 L 24,15 L 31,15 L 25,20 L 27,27 L 22,23 L 17,27 L 19,20 L 13,15 L 20,15 Z"
          fill={GOLD.primary}
          fillOpacity="0.4"
          stroke={GOLD.dark}
          strokeWidth="1"
        />
        
        {/* Small decorative lines */}
        <line x1="12" y1="25" x2="18" y2="25" stroke={GOLD.light} strokeWidth="1" />
        <line x1="25" y1="12" x2="25" y2="18" stroke={GOLD.light} strokeWidth="1" />
      </g>
    </motion.svg>
  );
}

// Floating Gold Accent
export function FloatingGoldAccent({ 
  delay = 0,
  className = ''
}: { 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.25, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 180, 360],
        opacity: [0.25, 0.4, 0.25],
      }}
      whileInView={{
        transition: {
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          },
          opacity: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        <path
          d="M 25,5 L 28,20 L 45,25 L 28,30 L 25,45 L 22,30 L 5,25 L 22,20 Z"
          fill={GOLD.primary}
          fillOpacity="0.3"
          stroke={GOLD.light}
          strokeWidth="1.5"
        />
        <circle cx="25" cy="25" r="15" fill="none" stroke={GOLD.rose} strokeWidth="1" opacity="0.6" />
        <circle cx="25" cy="25" r="6" fill={GOLD.dark} fillOpacity="0.2" stroke={GOLD.dark} strokeWidth="1" />
      </svg>
    </motion.div>
  );
}