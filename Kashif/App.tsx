import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SectionDivider } from './components/SectionDivider';
import { PhoneMockup } from './components/PhoneMockup';
import { CategoryButton } from './components/CategoryButton';
import { PrimaryButton } from './components/PrimaryButton';
import { EmailInput } from './components/EmailInput';
import { IslamicPattern, IslamicCornerOrnament } from './components/IslamicPattern';
import { IslamicDivider } from './components/IslamicDivider';
import { IslamicFrame } from './components/IslamicFrame';
import { FloatingMapPin, MapRoute, MapGrid, LocationDots, InteractiveMapSection } from './components/MapElements';
import { TealGeometricPattern, TealMandala, TealFrame, TealCornerOrnament, TealDivider, FloatingTealAccent } from './components/TealPatterns';
import { GoldMandala, GoldCornerOrnament, FloatingGoldAccent } from './components/TealPatterns';
import kashfLogo from 'figma:asset/1358ab4925ff72f9c5a9ccc4cf44b9b7859e5695.png';

export default function App() {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you for your interest! We will keep you updated.');
    setEmail('');
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Add Inter font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .arabic-text {
          font-family: 'Noto Sans Arabic', sans-serif;
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-8"
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          background: '#161719'
        }}
      >
        {/* Islamic Pattern Background */}
        <IslamicPattern opacity={0.03} />
        
        {/* Teal Geometric Pattern Overlay */}
        <TealGeometricPattern opacity={0.08} />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Teal Corner Ornaments */}
        <TealCornerOrnament position="top-left" size={120} className="z-0" opacity={0.3} />
        <TealCornerOrnament position="top-right" size={120} className="z-0" opacity={0.3} />
        <TealCornerOrnament position="bottom-left" size={120} className="z-0" opacity={0.3} />
        <TealCornerOrnament position="bottom-right" size={120} className="z-0" opacity={0.3} />
        
        {/* Floating Teal Accents */}
        <FloatingTealAccent delay={0} className="top-[20%] left-[10%] hidden lg:block" />
        <FloatingTealAccent delay={0.3} className="top-[30%] right-[15%] hidden lg:block" />
        <FloatingTealAccent delay={0.6} className="bottom-[25%] left-[8%] hidden lg:block" />
        <FloatingTealAccent delay={0.9} className="bottom-[20%] right-[12%] hidden lg:block" />
        
        <div className="text-center max-w-[900px] relative z-10">
          {/* Logo */}
          <motion.img 
            src={kashfLogo} 
            alt="Kashf Logo"
            className="w-[400px] md:w-[400px] sm:w-[280px] h-auto mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Divider */}
          <motion.div
            className="w-[60px] h-px bg-[#CCCCCC] opacity-50 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* Hero Tagline */}
          <motion.h1 
            className="text-[60px] md:text-[60px] sm:text-[36px] leading-[1.1] mb-6 max-w-[700px] mx-auto text-[#F5F5F5]"
            style={{ 
              fontWeight: 300,
              letterSpacing: '-3%'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover Muslim essentials in a few clicks
          </motion.h1>
          
          {/* Hero Subtitle */}
          <motion.p 
            className="text-[18px] md:text-[18px] sm:text-[16px] leading-[1.7] text-[#B0B0B0] max-w-[600px] mx-auto"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Finding mosques, halal food & Muslim-owned businesses made effortless
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white opacity-30" strokeWidth={1} />
        </motion.div>
      </motion.section>

      {/* SECTION 2: PROBLEM STATEMENT */}
      <section className="min-h-[80vh] flex items-center justify-center px-8 py-32 bg-[#0A0A0A] relative">
        {/* Teal Mandalas as decorative accents */}
        <TealMandala size={150} opacity={0.12} delay={0} variant={1} className="absolute top-12 left-12 hidden lg:block" />
        <TealMandala size={180} opacity={0.1} delay={0.2} variant={2} className="absolute bottom-16 right-16 hidden lg:block" />
        
        <div className="max-w-[800px] text-center relative z-10">
          <TealDivider className="mb-12" />
          
          <motion.h2 
            className="text-[48px] md:text-[48px] sm:text-[32px] leading-[1.2] mb-8 text-[#EEEEEE]"
            style={{ 
              fontWeight: 600,
              letterSpacing: '-3%'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
          >
            New city. Unfamiliar area. Where do you start?
          </motion.h2>
          
          <motion.p 
            className="text-[18px] md:text-[18px] sm:text-[16px] leading-[1.8] text-[#A8A8A8] max-w-[700px] mx-auto"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Moving to a new place or traveling? Finding the nearest mosque for Jummah prayers, locating halal restaurants, or discovering Muslim-owned businesses shouldn't be a struggle. Kashf brings your Muslim community essentials to your fingertips.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: FEATURE 1 - DISCOVERY MAP */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#161719] relative">
        <MapGrid opacity={0.02} />
        <LocationDots />
        
        {/* Vibrant Teal and Gold decorative elements around phone */}
        <TealMandala size={160} opacity={0.22} delay={0.2} variant={1} className="absolute top-24 right-[15%] hidden lg:block" />
        <GoldMandala size={140} opacity={0.3} delay={0.4} variant={2} className="absolute bottom-32 right-[12%] hidden lg:block" />
        <FloatingGoldAccent delay={0.3} className="top-[35%] right-[10%] hidden xl:block" />
        <GoldMandala size={100} opacity={0.28} delay={0.6} variant={1} className="absolute top-[50%] right-[5%] hidden xl:block" />
        
        <div className="max-w-[1400px] w-full relative z-10">
          <SectionDivider />
          
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-[36px] md:text-[36px] sm:text-[28px] leading-[1.2] mb-6"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '-2%'
                }}
              >
                Find halal businesses and mosques nearby
              </h3>
              
              <p 
                className="text-[16px] md:text-[16px] sm:text-[15px] leading-[1.8] text-[#999999] mb-8"
                style={{ fontWeight: 400 }}
              >
                Explore an interactive map showing mosques, halal restaurants, grocery stores, and Muslim-owned businesses in your area. Never miss a prayer or meal again.
              </p>
              
              <p 
                className="text-[15px] md:text-[15px] sm:text-[14px] text-[#666666]"
                style={{ fontWeight: 400 }}
              >
                Mosques • Halal Food • Grocery Stores • Education Centers
              </p>
            </motion.div>
            
            {/* Phone Mockup - Right with Gold Frame */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gold Corner ornaments around phone */}
              <GoldCornerOrnament position="top-left" size={90} className="absolute -top-10 -left-10 z-0" opacity={0.4} />
              <GoldCornerOrnament position="bottom-right" size={90} className="absolute -bottom-10 -right-10 z-0" opacity={0.4} />
              
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURE 2 - DETAILED INFORMATION */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#0A0A0A] relative">
        {/* Vibrant Gold and Teal decorative elements around phone */}
        <GoldMandala size={180} opacity={0.32} delay={0.2} variant={3} className="absolute top-28 left-[10%] hidden lg:block" />
        <TealMandala size={140} opacity={0.20} delay={0.4} variant={4} className="absolute bottom-24 left-[15%] hidden lg:block" />
        <FloatingGoldAccent delay={0.5} className="top-[40%] left-[8%] hidden xl:block" />
        <GoldMandala size={110} opacity={0.28} delay={0.7} variant={4} className="absolute bottom-[50%] left-[5%] hidden xl:block" />
        
        <div className="max-w-[1400px] w-full relative z-10">
          <SectionDivider />
          
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Phone Mockup - Left with Gold decorations */}
            <motion.div
              className="md:order-1 order-2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gold Corner ornaments around phone */}
              <GoldCornerOrnament position="top-right" size={90} className="absolute -top-10 -right-10 z-0" opacity={0.4} />
              <GoldCornerOrnament position="bottom-left" size={90} className="absolute -bottom-10 -left-10 z-0" opacity={0.4} />
              
              <PhoneMockup />
            </motion.div>
            
            {/* Text Content - Right */}
            <motion.div
              className="md:order-2 order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-[36px] md:text-[36px] sm:text-[28px] leading-[1.2] mb-6"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '-2%'
                }}
              >
                View detailed business information
              </h3>
              
              <p 
                className="text-[16px] md:text-[16px] sm:text-[15px] leading-[1.8] text-[#999999] mb-8"
                style={{ fontWeight: 400 }}
              >
                Get comprehensive details about each location including ratings, photos, prayer times, directions, and community reviews. Make informed decisions with confidence.
              </p>
              
              <p 
                className="text-[15px] md:text-[15px] sm:text-[14px] text-[#666666]"
                style={{ fontWeight: 400 }}
              >
                Ratings • Photos • Directions • Reviews
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURE 3 - FAVORITES */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#000000] relative">
        {/* Vibrant Teal and Gold decorative elements around phone */}
        <TealMandala size={150} opacity={0.24} delay={0.2} variant={2} className="absolute top-20 right-[12%] hidden lg:block" />
        <GoldMandala size={130} opacity={0.30} delay={0.4} variant={3} className="absolute bottom-28 right-[18%] hidden lg:block" />
        <FloatingGoldAccent delay={0.6} className="bottom-[30%] right-[8%] hidden xl:block" />
        <TealMandala size={90} opacity={0.22} delay={0.8} variant={3} className="absolute top-[45%] right-[6%] hidden xl:block" />
        
        <div className="max-w-[1400px] w-full relative z-10">
          <SectionDivider />
          
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Text Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-[36px] md:text-[36px] sm:text-[28px] leading-[1.2] mb-6"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '-2%'
                }}
              >
                Save your favorite locations
              </h3>
              
              <p 
                className="text-[16px] md:text-[16px] sm:text-[15px] leading-[1.8] text-[#999999] mb-8"
                style={{ fontWeight: 400 }}
              >
                Build your personal collection of go-to mosques, favorite restaurants, and trusted businesses. Access them instantly whenever you need them.
              </p>
              
              <p 
                className="text-[15px] md:text-[15px] sm:text-[14px] text-[#666666]"
                style={{ fontWeight: 400 }}
              >
                Quick Access • Personal Collections • Offline Access
              </p>
            </motion.div>
            
            {/* Phone Mockup - Right with Gold decorations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gold Corner ornaments around phone */}
              <GoldCornerOrnament position="top-left" size={90} className="absolute -top-10 -left-10 z-0" opacity={0.42} />
              <GoldCornerOrnament position="bottom-right" size={90} className="absolute -bottom-10 -right-10 z-0" opacity={0.42} />
              
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURE 4 - PRAYER TIMES */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#0A0A0A] relative">
        {/* Vibrant Gold and Teal decorative elements around phone */}
        <GoldMandala size={170} opacity={0.34} delay={0.2} variant={1} className="absolute top-20 left-[8%] hidden lg:block" />
        <TealMandala size={145} opacity={0.22} delay={0.4} variant={3} className="absolute bottom-24 left-[12%] hidden lg:block" />
        <FloatingGoldAccent delay={0.7} className="top-[35%] left-[5%] hidden xl:block" />
        <GoldMandala size={95} opacity={0.29} delay={0.9} variant={2} className="absolute bottom-[45%] left-[4%] hidden xl:block" />
        
        <div className="max-w-[1400px] w-full relative z-10">
          <SectionDivider />
          
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Phone Mockup - Left with Gold decorations */}
            <motion.div
              className="md:order-1 order-2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              {/* Gold Corner ornaments around phone */}
              <GoldCornerOrnament position="top-right" size={90} className="absolute -top-10 -right-10 z-0" opacity={0.42} />
              <GoldCornerOrnament position="bottom-left" size={90} className="absolute -bottom-10 -left-10 z-0" opacity={0.42} />
              
              <PhoneMockup />
            </motion.div>
            
            {/* Text Content - Right */}
            <motion.div
              className="md:order-2 order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-[36px] md:text-[36px] sm:text-[28px] leading-[1.2] mb-6"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '-2%'
                }}
              >
                Never miss a prayer time
              </h3>
              
              <p 
                className="text-[16px] md:text-[16px] sm:text-[15px] leading-[1.8] text-[#999999] mb-8"
                style={{ fontWeight: 400 }}
              >
                Location-based prayer times adjusted for your current location, plus an integrated Qibla finder to ensure you're always facing the right direction.
              </p>
              
              <p 
                className="text-[15px] md:text-[15px] sm:text-[14px] text-[#666666]"
                style={{ fontWeight: 400 }}
              >
                Location-based Prayer Times • Qibla Finder • Daily Notifications
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP VISUALIZATION SECTION */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#161719] relative overflow-hidden">
        <MapRoute />
        
        <div className="max-w-[1400px] w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveMapSection />
          </motion.div>
          
          {/* Floating Map Pins around the section */}
          <FloatingMapPin delay={0.2} className="absolute top-[10%] left-[5%] hidden md:block" />
          <FloatingMapPin delay={0.4} className="absolute top-[15%] right-[8%] hidden md:block" />
          <FloatingMapPin delay={0.6} className="absolute bottom-[20%] left-[10%] hidden md:block" />
          <FloatingMapPin delay={0.8} className="absolute bottom-[15%] right-[12%] hidden md:block" />
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="min-h-[80vh] flex items-center justify-center px-8 py-32 bg-[#0A0A0A] relative">
        {/* Teal Mandalas as decorative background */}
        <TealMandala size={200} opacity={0.08} delay={0} variant={3} className="absolute top-24 left-20 hidden lg:block" />
        <TealMandala size={160} opacity={0.1} delay={0.3} variant={4} className="absolute bottom-20 right-24 hidden lg:block" />
        <TealMandala size={120} opacity={0.12} delay={0.6} variant={1} className="absolute top-32 right-32 hidden xl:block" />
        
        <div className="max-w-[600px] text-center relative z-10">
          <TealDivider className="mb-12" />
          
          <motion.h2 
            className="text-[40px] md:text-[40px] sm:text-[32px] leading-[1.2] mb-4"
            style={{ 
              fontWeight: 600,
              letterSpacing: '-2%'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
          >
            Kashf is currently in development
          </motion.h2>
          
          <motion.p 
            className="text-[18px] md:text-[18px] sm:text-[16px] leading-[1.6] text-[#999999] mb-12"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the journey. Test the app. Support the project.
          </motion.p>
          
          {/* Email Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <EmailInput 
              value={email}
              onChange={setEmail}
              placeholder="Enter your email"
              className="w-full md:w-[300px]"
            />
            <PrimaryButton type="submit" className="w-full md:w-auto">
              Get Updates
            </PrimaryButton>
          </motion.form>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['GitHub', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[14px] text-[#666666] hover:text-white hover:bg-[#333333] px-4 py-2 rounded-[20px] transition-all duration-300"
                style={{ fontWeight: 500 }}
              >
                {social}
              </a>
            ))}
          </motion.div>
          
          {/* Buy Me a Coffee */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333333] rounded-full transition-all duration-300 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.782-1.557-.377-.378-.97-.633-1.582-.633H6.28c-.612 0-1.205.255-1.582.633-.394.394-.663.959-.782 1.557l-.132.666M7 10h10M7 14h10" stroke="#FFDD00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 18h11c.828 0 1.5-.672 1.5-1.5v-8c0-.828-.672-1.5-1.5-1.5h-11C5.672 7 5 7.672 5 8.5v8c0 .828.672 1.5 1.5 1.5z" stroke="#FFDD00" strokeWidth="1.5"/>
                <circle cx="17" cy="10" r="1" fill="#FFDD00"/>
              </svg>
              <span className="text-[14px] text-[#E0E0E0] font-medium group-hover:text-white transition-colors">
                Buy Me a Coffee
              </span>
            </a>
          </motion.div>
          
          {/* Arabic Blessing with Islamic Frame */}
          <IslamicFrame className="py-12">
            <motion.div 
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Left ornament */}
              <svg width="30" height="30" viewBox="0 0 30 30" className="flex-shrink-0">
                <g opacity="0.3" stroke="#999999" fill="none" strokeWidth="0.5">
                  <path d="M 15,5 L 13,12 L 6,10 L 11,13 L 5,15 L 11,17 L 6,20 L 13,18 L 15,25 L 17,18 L 24,20 L 19,17 L 25,15 L 19,13 L 24,10 L 17,12 Z" />
                  <circle cx="15" cy="15" r="4" />
                </g>
              </svg>
              
              <p 
                className="text-[24px] md:text-[24px] sm:text-[20px] text-[#999999] arabic-text"
                style={{ 
                  fontWeight: 400,
                  letterSpacing: '5%'
                }}
              >
                جَزَاكَ ٱللَّٰهُ خَيْرًا
              </p>
              
              {/* Right ornament */}
              <svg width="30" height="30" viewBox="0 0 30 30" className="flex-shrink-0">
                <g opacity="0.3" stroke="#999999" fill="none" strokeWidth="0.5">
                  <path d="M 15,5 L 13,12 L 6,10 L 11,13 L 5,15 L 11,17 L 6,20 L 13,18 L 15,25 L 17,18 L 24,20 L 19,17 L 25,15 L 19,13 L 24,10 L 17,12 Z" />
                  <circle cx="15" cy="15" r="4" />
                </g>
              </svg>
            </motion.div>
          </IslamicFrame>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="min-h-[200px] px-8 py-16 bg-[#000000] border-t border-[#333333]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p 
            className="text-[16px] text-[#999999] mb-6"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Free the Ummah - Gaza, China, India, Sudan, and beyond
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {['Home', 'Features', 'Contact', 'Privacy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[14px] text-[#666666] hover:text-white transition-colors duration-300"
                style={{ fontWeight: 400 }}
              >
                {link}
              </a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-[13px] text-[#666666]"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            © 2026 Kashf. Built with love for the Muslim community.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}