import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Phone, Star, X, Heart, Share2 } from 'lucide-react';

// Location data for Round Rock / North Austin area
const locations = [
  {
    id: 1,
    name: 'Islamic Center of Round Rock',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '1951 Hampton Ln, Round Rock, TX 78664',
    phone: '(512) 555-0123',
    coords: [30.4983, -97.6789],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=Islamic+Center',
    rating: 4.8,
    added: '9/1/2024',
    updated: '1/11/2026'
  },
  {
    id: 2,
    name: 'North Austin Muslim Community Center',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '11900 N Lamar Blvd, Austin, TX 78753',
    phone: '(512) 555-0124',
    coords: [30.3853, -97.6927],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=NAMCC',
    rating: 4.9,
    added: '8/15/2024',
    updated: '1/10/2026'
  },
  {
    id: 3,
    name: 'Halal Bros',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '3107 S I-35 Frontage Rd #775, Round Rock, TX 78664',
    phone: '(512) 555-0125',
    coords: [30.4789, -97.6712],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=Halal+Bros',
    rating: 4.7,
    added: '9/1/2024',
    updated: '1/11/2026'
  },
  {
    id: 4,
    name: 'Abo Youssef Restaurant',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '9070 Research Blvd #109, Austin, TX 78758',
    phone: '(512) 555-0126',
    coords: [30.3789, -97.7234],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=Abo+Youssef',
    rating: 4.6,
    added: '8/20/2024',
    updated: '1/9/2026'
  },
  {
    id: 5,
    name: 'Mediterranean Cuisine',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '2330 W Parmer Ln, Austin, TX 78727',
    phone: '(512) 555-0127',
    coords: [30.4456, -97.7389],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=Mediterranean',
    rating: 4.5,
    added: '9/5/2024',
    updated: '1/8/2026'
  },
  {
    id: 6,
    name: 'Dar Al-Salam Islamic Center',
    category: 'Education',
    categoryColor: '#8B5CF6',
    address: '1710 W Wells Branch Pkwy, Pflugerville, TX 78660',
    phone: '(512) 555-0128',
    coords: [30.4423, -97.6234],
    image: 'https://placehold.co/600x400/2A2A2A/FFFFFF/png?text=Dar+Al-Salam',
    rating: 4.8,
    added: '8/25/2024',
    updated: '1/12/2026'
  }
];

const categories = [
  { name: 'All', icon: '🗺️', color: '#14B8A6' },
  { name: 'Mosque', icon: '🕌', color: '#10B981' },
  { name: 'Food', icon: '🍽️', color: '#EF4444' },
  { name: 'Grocery', icon: '🛒', color: '#F97316' },
  { name: 'Education', icon: '📚', color: '#8B5CF6' }
];

interface Location {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  address: string;
  phone: string;
  coords: [number, number];
  image: string;
  rating: number;
  added: string;
  updated: string;
}

export function InteractiveMapSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapCenter] = useState<[number, number]>([30.4583, -97.6917]); // Round Rock center

  const filteredLocations = selectedCategory === 'All'
    ? locations
    : locations.filter(loc => loc.category === selectedCategory);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const closeDetailPanel = () => {
    setSelectedLocation(null);
  };

  return (
    <section className="min-h-screen relative bg-black py-32 px-8">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto mb-12 text-center">
        <motion.h2
          className="text-[42px] md:text-[52px] font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore <span className="text-[#14B8A6]">Your Community</span>
        </motion.h2>
        <motion.p
          className="text-[18px] text-[#999999] max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover mosques, halal restaurants, and Muslim-owned businesses in Round Rock & North Austin
        </motion.p>
      </div>

      {/* Category Filters */}
      <motion.div
        className="max-w-[1400px] mx-auto mb-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
              selectedCategory === category.name
                ? 'bg-[#14B8A6] border-[#14B8A6] text-white'
                : 'bg-[#1A1A1A] border-[#333333] text-[#999999] hover:border-[#14B8A6]'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="font-semibold">{category.name}</span>
          </button>
        ))}
      </motion.div>

      {/* Map Container */}
      <motion.div
        className="max-w-[1400px] mx-auto relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative h-[600px] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#333333]">
          {/* Simulated Map Background */}
          <div
            ref={mapRef}
            className="absolute inset-0 bg-gradient-to-br from-[#0D4A4A] to-[#0A2A2A]"
            style={{
              backgroundImage: `
                linear-gradient(#14B8A6 1px, transparent 1px),
                linear-gradient(90deg, #14B8A6 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              opacity: 0.1
            }}
          />

          {/* Location Pins */}
          <div className="absolute inset-0">
            {filteredLocations.map((location, index) => {
              const x = 20 + (index % 3) * 30;
              const y = 20 + Math.floor(index / 3) * 35;

              return (
                <motion.button
                  key={location.id}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -100%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleLocationClick(location)}
                >
                  {/* Pin */}
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle
                        cx="24"
                        cy="20"
                        r="18"
                        fill={location.categoryColor}
                        opacity={hoveredLocation === location.id ? "1" : "0.9"}
                        filter="drop-shadow(0 4px 12px rgba(0,0,0,0.5))"
                      />
                      <path
                        d="M24 40L24 20"
                        stroke={location.categoryColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <text
                        x="24"
                        y="25"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16"
                        fontWeight="bold"
                      >
                        {location.category === 'Mosque' ? '🕌' : location.category === 'Food' ? '🍽️' : '📚'}
                      </text>
                    </svg>

                    {/* Hover Label */}
                    <AnimatePresence>
                      {hoveredLocation === location.id && (
                        <motion.div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#1A1A1A] border border-[#333333] rounded-lg whitespace-nowrap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-sm text-white font-medium">{location.name}</p>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#333333]" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-12 h-12 bg-[#1A1A1A] border border-[#333333] rounded-lg flex items-center justify-center text-white hover:bg-[#333333] transition-colors">
              +
            </button>
            <button className="w-12 h-12 bg-[#1A1A1A] border border-[#333333] rounded-lg flex items-center justify-center text-white hover:bg-[#333333] transition-colors">
              −
            </button>
            <button className="w-12 h-12 bg-[#1A1A1A] border border-[#333333] rounded-lg flex items-center justify-center text-white hover:bg-[#333333] transition-colors">
              <Navigation size={20} />
            </button>
          </div>

          {/* Results Counter */}
          <div className="absolute top-4 left-4 bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-2">
            <p className="text-sm text-white">
              Found <span className="font-bold text-[#14B8A6]">{filteredLocations.length}</span> {selectedCategory === 'All' ? 'locations' : selectedCategory.toLowerCase()} within 10 miles
            </p>
          </div>
        </div>
      </motion.div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedLocation && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetailPanel}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#1A1A1A] border-l border-[#333333] z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header with Image */}
              <div className="relative h-[300px] bg-[#0A0A0A]">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <button
                    onClick={closeDetailPanel}
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <Heart size={20} />
                    </button>
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  1 / 5 Photos
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{selectedLocation.name}</h3>
                <p className="text-[#14B8A6] text-sm font-medium mb-6">{selectedLocation.category}</p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full py-3 px-6 bg-[#14B8A6] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#10A896] transition-colors">
                    <Navigation size={20} />
                    Get Directions
                  </button>
                  <button className="w-full py-3 px-6 bg-transparent border-2 border-[#14B8A6] text-[#14B8A6] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#14B8A6]/10 transition-colors">
                    <Phone size={20} />
                    Call
                  </button>
                  <button className="w-full py-3 px-6 bg-transparent border-2 border-[#14B8A6] text-[#14B8A6] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#14B8A6]/10 transition-colors">
                    <Star size={20} />
                    View Reviews on Google & Yelp →
                  </button>
                </div>

                {/* Contact Information */}
                <div className="border-t border-[#333333] pt-6">
                  <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[#666666] text-sm uppercase mb-1">ADDRESS</p>
                      <p className="text-white">{selectedLocation.address}</p>
                    </div>

                    <div>
                      <p className="text-[#666666] text-sm uppercase mb-1">PHONE</p>
                      <p className="text-[#14B8A6]">{selectedLocation.phone}</p>
                    </div>

                    <div>
                      <p className="text-[#666666] text-sm uppercase mb-1">WEBSITE</p>
                      <p className="text-[#14B8A6]">Search Website →</p>
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="border-t border-[#333333] mt-6 pt-6">
                  <h4 className="text-xl font-bold text-white mb-4">Information</h4>
                  <div className="space-y-2 text-[#999999] text-sm">
                    <p>📅 Added: {selectedLocation.added}</p>
                    <p>🔄 Updated: {selectedLocation.updated}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
