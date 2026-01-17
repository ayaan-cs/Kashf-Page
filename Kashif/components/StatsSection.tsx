import { motion } from 'motion/react';
import { Users, MapPin, Star, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-[#14B8A6]/10 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-[#14B8A6]">
          {icon}
        </div>
      </motion.div>
      <motion.h3
        className="text-[36px] md:text-[42px] font-bold text-white mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.h3>
      <p className="text-[14px] text-[#999999] font-medium">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14B8A6] rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[36px] md:text-[42px] font-semibold text-white mb-4">
            Join the Growing Community
          </h2>
          <p className="text-[16px] text-[#999999] max-w-[600px] mx-auto">
            Muslims worldwide are discovering their community essentials with Kashf
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <StatItem
            icon={<Users size={28} strokeWidth={1.5} />}
            value="10K+"
            label="Beta Testers"
            delay={0}
          />
          <StatItem
            icon={<MapPin size={28} strokeWidth={1.5} />}
            value="5K+"
            label="Locations Listed"
            delay={0.1}
          />
          <StatItem
            icon={<Star size={28} strokeWidth={1.5} />}
            value="4.9"
            label="App Rating"
            delay={0.2}
          />
          <StatItem
            icon={<TrendingUp size={28} strokeWidth={1.5} />}
            value="50+"
            label="Cities Covered"
            delay={0.3}
          />
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[13px] text-[#666666] mb-3">Trusted by Muslims in</p>
          <div className="flex flex-wrap justify-center gap-4 text-[14px] text-[#999999]">
            <span>🇺🇸 USA</span>
            <span>🇬🇧 UK</span>
            <span>🇨🇦 Canada</span>
            <span>🇦🇺 Australia</span>
            <span>🇦🇪 UAE</span>
            <span>🇸🇦 Saudi Arabia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
