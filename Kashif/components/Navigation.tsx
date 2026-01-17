import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Map', href: '#map' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'rounded-2xl px-6 py-3 shadow-2xl'
            : 'bg-transparent'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(200%)' : 'none',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.18)' : 'none',
          boxShadow: scrolled
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            : 'none',
        }}
      >
        {/* Logo/Branding - Left */}
        <motion.a
          href="#"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative flex items-center justify-center w-14 h-14">
            <img
              src="/kashf-icon-transparent.png"
              alt="Kashf"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback icon if image doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center bg-teal-500/20 rounded-md border border-teal-400/30 hidden">
              <span className="text-teal-400 text-lg font-bold arabic-text">ك</span>
            </div>
          </div>
          <span className="text-white text-xl font-semibold tracking-tight group-hover:text-teal-300/90 transition-colors duration-300">
            Kashf
          </span>
        </motion.a>

        {/* Navigation Items - Center (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button - Right */}
        <motion.a
          href="#contact"
          className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Beta →
        </motion.a>
      </div>
    </motion.nav>
  );
}
