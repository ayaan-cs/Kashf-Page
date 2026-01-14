import { motion } from 'motion/react';

export function FloatingMapPin({ delay = 0, className = '' }: { delay?: number; className?: string }) {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.15, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      animate={{
        y: [0, -10, 0],
      }}
      whileInView={{
        transition: {
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }}
    >
      <g stroke="#FFFFFF" fill="none" strokeWidth="1.5">
        <path d="M 20 5 C 14 5 9 10 9 16 C 9 24 20 35 20 35 C 20 35 31 24 31 16 C 31 10 26 5 20 5 Z" />
        <circle cx="20" cy="16" r="4" fill="#FFFFFF" fillOpacity="0.2" />
      </g>
    </motion.svg>
  );
}

export function MapRoute({ className = '' }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      className={`absolute inset-0 pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Curved route paths */}
      <motion.path
        d="M 100 300 Q 250 150, 400 250 T 700 300"
        stroke="url(#route-gradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="10 5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 150 400 Q 300 500, 450 400 T 750 450"
        stroke="url(#route-gradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function MapGrid({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="map-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>
    </div>
  );
}

export function LocationDots() {
  const dots = [
    { x: '15%', y: '20%', delay: 0 },
    { x: '85%', y: '25%', delay: 0.2 },
    { x: '25%', y: '70%', delay: 0.4 },
    { x: '75%', y: '65%', delay: 0.6 },
    { x: '50%', y: '45%', delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: dot.delay }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          whileInView={{
            transition: {
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          }}
        />
      ))}
    </div>
  );
}

export function InteractiveMapSection() {
  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto my-16 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
        border: '1px solid #333333',
        height: '500px'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <MapGrid opacity={0.05} />
      <LocationDots />
      
      {/* Map Header Info */}
      <motion.div
        className="absolute top-6 left-6 bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 backdrop-blur-sm"
        style={{ background: 'rgba(26, 26, 26, 0.9)' }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <div>
            <p className="text-[11px] text-[#999999] uppercase tracking-wider">Live Map View</p>
            <p className="text-[13px] text-white font-medium">Chicago, IL</p>
          </div>
        </div>
      </motion.div>
      
      {/* Legend */}
      <motion.div
        className="absolute top-6 right-6 bg-[#1a1a1a] border border-[#333333] rounded-lg px-4 py-3 backdrop-blur-sm"
        style={{ background: 'rgba(26, 26, 26, 0.9)' }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-[11px] text-[#999999] uppercase tracking-wider mb-2">Categories</p>
        <div className="space-y-1.5">
          {[
            { icon: '🕌', label: 'Mosques', count: 12 },
            { icon: '🍽️', label: 'Halal Food', count: 28 },
            { icon: '🛒', label: 'Grocery', count: 8 },
            { icon: '🏪', label: 'Businesses', count: 15 },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <span className="text-[14px]">{item.icon}</span>
              <span className="text-[12px] text-[#cccccc]">{item.label}</span>
              <span className="text-[11px] text-[#666666] ml-auto">{item.count}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Bottom Stats Bar */}
      <motion.div
        className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a] border border-[#333333] rounded-lg px-6 py-3 backdrop-blur-sm"
        style={{ background: 'rgba(26, 26, 26, 0.9)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: 'Total Locations', value: '63' },
            { label: 'Within 5 miles', value: '24' },
            { label: 'Open Now', value: '18' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <p className="text-[20px] font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-[11px] text-[#999999] uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Location Info Cards */}
      <motion.div
        className="absolute top-[35%] left-[18%] bg-[#1a1a1a] border border-[#444444] rounded-lg px-3 py-2 backdrop-blur-sm shadow-lg"
        style={{ background: 'rgba(26, 26, 26, 0.95)' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[16px]">🕌</span>
          <div>
            <p className="text-[12px] text-white font-medium">Downtown Mosque</p>
            <p className="text-[10px] text-[#999999]">0.8 mi • Open</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-[60%] left-[28%] bg-[#1a1a1a] border border-[#444444] rounded-lg px-3 py-2 backdrop-blur-sm shadow-lg"
        style={{ background: 'rgba(26, 26, 26, 0.95)' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[16px]">🍽️</span>
          <div>
            <p className="text-[12px] text-white font-medium">Al-Noor Restaurant</p>
            <p className="text-[10px] text-[#999999]">1.2 mi • ⭐ 4.8</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-[28%] right-[22%] bg-[#1a1a1a] border border-[#444444] rounded-lg px-3 py-2 backdrop-blur-sm shadow-lg"
        style={{ background: 'rgba(26, 26, 26, 0.95)' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[16px]">🛒</span>
          <div>
            <p className="text-[12px] text-white font-medium">Halal Market</p>
            <p className="text-[10px] text-[#999999]">2.1 mi • Closes 9pm</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-[32%] right-[18%] bg-[#1a1a1a] border border-[#444444] rounded-lg px-3 py-2 backdrop-blur-sm shadow-lg"
        style={{ background: 'rgba(26, 26, 26, 0.95)' }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[16px]">🏪</span>
          <div>
            <p className="text-[12px] text-white font-medium">Islamic Bookstore</p>
            <p className="text-[10px] text-[#999999]">1.5 mi • ⭐ 4.9</p>
          </div>
        </div>
      </motion.div>
      
      {/* Center focus point */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative">
          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            style={{ width: '60px', height: '60px', marginLeft: '-30px', marginTop: '-30px' }}
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            style={{ width: '60px', height: '60px', marginLeft: '-30px', marginTop: '-30px' }}
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.6
            }}
          />
          
          {/* Center pin with label */}
          <div className="relative">
            <svg width="60" height="60" viewBox="0 0 60 60" className="relative">
              <g stroke="#FFFFFF" fill="#FFFFFF" strokeWidth="2">
                <path d="M 30 10 C 21 10 14 17 14 26 C 14 38 30 50 30 50 C 30 50 46 38 46 26 C 46 17 39 10 30 10 Z" />
                <circle cx="30" cy="26" r="6" fill="#161719" />
              </g>
            </svg>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <p className="text-[11px] text-white font-medium bg-[#161719] px-2 py-1 rounded">Your Location</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating markers */}
      <FloatingMapPin delay={0.2} className="absolute top-[20%] left-[20%]" />
      <FloatingMapPin delay={0.4} className="absolute top-[70%] left-[30%]" />
      <FloatingMapPin delay={0.6} className="absolute top-[30%] right-[25%]" />
      <FloatingMapPin delay={0.8} className="absolute bottom-[25%] right-[20%]" />
      
      {/* Routes */}
      <MapRoute />
      
      {/* Compass */}
      <motion.div
        className="absolute bottom-24 left-6"
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 0.5, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#666666" strokeWidth="1" />
          <path d="M 20 5 L 22 18 L 20 16 L 18 18 Z" fill="#FFFFFF" />
          <text x="20" y="8" fontSize="8" fill="#FFFFFF" textAnchor="middle">N</text>
        </svg>
      </motion.div>
    </motion.div>
  );
}