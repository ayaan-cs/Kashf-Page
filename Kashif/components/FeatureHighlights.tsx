import { motion } from 'motion/react';
import { MapPin, Clock, Heart, Compass } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="group relative bg-[#161719] border border-[#333333] rounded-2xl p-8 hover:border-[#14B8A6]/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#14B8A6]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[#14B8A6]">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-[22px] font-semibold text-white mb-3 group-hover:text-[#14B8A6] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[15px] text-[#999999] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#14B8A6]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function FeatureHighlights() {
  return (
    <section className="py-32 px-8 bg-black relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(#14B8A6 1px, transparent 1px), linear-gradient(90deg, #14B8A6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-full text-[13px] text-[#14B8A6] font-medium">
              <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-pulse" />
              Why Kashf?
            </span>
          </motion.div>

          <h2 className="text-[42px] md:text-[52px] font-bold text-white mb-6 leading-tight">
            Everything You Need,
            <br />
            <span className="text-[#14B8A6]">All in One Place</span>
          </h2>
          <p className="text-[18px] text-[#999999] max-w-[700px] mx-auto leading-relaxed">
            Kashf brings together all the essential tools and information Muslims need to navigate their daily lives with confidence
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<MapPin size={26} strokeWidth={1.5} />}
            title="Discover Nearby"
            description="Find mosques, halal restaurants, and Muslim-owned businesses around you instantly"
            delay={0}
          />
          <FeatureCard
            icon={<Clock size={26} strokeWidth={1.5} />}
            title="Prayer Times"
            description="Never miss a prayer with location-based accurate prayer times and notifications"
            delay={0.1}
          />
          <FeatureCard
            icon={<Heart size={26} strokeWidth={1.5} />}
            title="Save Favorites"
            description="Bookmark your favorite places for quick access anytime, anywhere"
            delay={0.2}
          />
          <FeatureCard
            icon={<Compass size={26} strokeWidth={1.5} />}
            title="Qibla Finder"
            description="Always know the direction of the Qibla with our built-in compass"
            delay={0.3}
          />
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[15px] text-[#666666] mb-6">
            And many more features coming soon...
          </p>
          <motion.a
            href="#cta"
            className="inline-flex items-center gap-2 text-[14px] text-[#14B8A6] hover:text-white font-medium transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            Join the beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
