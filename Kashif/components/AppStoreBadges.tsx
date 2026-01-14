import { motion } from 'motion/react';

interface AppStoreBadgesProps {
  className?: string;
  showComingSoon?: boolean;
}

export function AppStoreBadges({ className = '', showComingSoon = true }: AppStoreBadgesProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* Apple App Store Badge */}
      <motion.a
        href="#"
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 px-6 py-3 bg-black border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300">
          {/* Apple Icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 16.3c0-3.8 3.1-5.6 3.2-5.7-1.8-2.6-4.5-2.9-5.4-3-2.3-.2-4.5 1.4-5.7 1.4-1.2 0-3-.8-5-1.2-2.5.1-4.9 1.5-6.2 3.8-2.6 4.6-.7 11.4 1.9 15.1 1.3 1.8 2.8 3.9 4.8 3.8 2-.1 2.7-1.3 5.1-1.3 2.4 0 3.1 1.3 5.1 1.2 2.1 0 3.4-1.9 4.6-3.7 1.5-2.1 2.1-4.1 2.1-4.2-.1 0-4-.1-4-5.2zm-2.9-8.6c1-1.3 1.7-3 1.5-4.7-1.5.1-3.3 1-4.3 2.2-.9 1.1-1.7 2.8-1.5 4.5 1.6.1 3.3-.8 4.3-2z" fill="white"/>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-white/60 font-normal">Download on the</span>
            <span className="text-[18px] text-white font-semibold -mt-1">App Store</span>
          </div>
        </div>
        {showComingSoon && (
          <div className="absolute -top-2 -right-2 bg-[#14B8A6] text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            Soon
          </div>
        )}
      </motion.a>

      {/* Google Play Badge */}
      <motion.a
        href="#"
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 px-6 py-3 bg-black border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300">
          {/* Google Play Icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3.5L20.5 16L5 28.5V3.5Z" fill="url(#paint0_linear)" />
            <path d="M20.5 16L5 3.5L23 7L20.5 16Z" fill="url(#paint1_linear)" />
            <path d="M20.5 16L23 25L5 28.5L20.5 16Z" fill="url(#paint2_linear)" />
            <path d="M20.5 16L23 7L27 16L23 25L20.5 16Z" fill="url(#paint3_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="5" y1="16" x2="20.5" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A0FF" />
                <stop offset="1" stopColor="#00A1FF" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="14" y1="5.25" x2="14" y2="11.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE000" />
                <stop offset="1" stopColor="#FFBD00" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="12.75" y1="22.25" x2="12.75" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3A44" />
                <stop offset="1" stopColor="#C31162" />
              </linearGradient>
              <linearGradient id="paint3_linear" x1="23" y1="16" x2="27" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#32A071" />
                <stop offset="1" stopColor="#2DA771" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-white/60 font-normal">GET IT ON</span>
            <span className="text-[18px] text-white font-semibold -mt-1">Google Play</span>
          </div>
        </div>
        {showComingSoon && (
          <div className="absolute -top-2 -right-2 bg-[#14B8A6] text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            Soon
          </div>
        )}
      </motion.a>
    </div>
  );
}
