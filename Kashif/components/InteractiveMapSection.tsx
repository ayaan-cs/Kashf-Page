import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Phone, Star, X, Heart, Share2, ExternalLink } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Real location data for Round Rock / North Austin area
const locations = [
  {
    id: 1,
    name: 'Islamic Center of Greater Austin',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '11900 Mustang Ave, Austin, TX 78759',
    phone: '(512) 476-2563',
    coords: [30.4083, -97.7503] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/10B981/png?text=ICGA+Masjid',
    rating: 4.6,
    priceRange: '',
    description: 'One of the oldest and most prominent mosques in the area. Located in East Austin, it serves as a central hub for the city\'s Muslim community.',
    added: '8/1/2024',
    updated: '1/11/2026'
  },
  {
    id: 2,
    name: 'Islamic Center of Brushy Creek',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '12915 Hymeadow Dr, Austin, TX 78729',
    phone: '(512) 219-1700',
    coords: [30.4456, -97.7689] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/10B981/png?text=ICBC',
    rating: 4.9,
    priceRange: '',
    description: 'Provides a welcoming space for residents in the Cedar Park area. Highly active in interfaith dialogue and community charity events.',
    added: '8/15/2024',
    updated: '1/10/2026'
  },
  {
    id: 3,
    name: 'Islamic Center of Round Rock',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '1951 Hampton Ln, Round Rock, TX 78664',
    phone: '(512) 388-6222',
    coords: [30.4983, -97.6789] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/10B981/png?text=IC+Round+Rock',
    rating: 4.8,
    priceRange: '',
    description: 'Serves the northern suburbs with a strong focus on community togetherness. Known for its family-oriented atmosphere.',
    added: '9/1/2024',
    updated: '1/11/2026'
  },
  {
    id: 4,
    name: 'Urban Bird Hot Chicken',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '201 University Oaks Blvd #790, Round Rock, TX 78665',
    phone: '(512) 716-4410',
    coords: [30.4950, -97.6823] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/EF4444/png?text=Urban+Bird',
    rating: 4.4,
    priceRange: '$10-20',
    description: 'Nashville-style hot chicken with halal-certified ingredients. Offers a variety of heat levels ranging from "No Heat" to "Fire."',
    added: '9/5/2024',
    updated: '1/12/2026'
  },
  {
    id: 5,
    name: 'Peace Bakery and Deli',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '11220 N Lamar Blvd, Austin, TX 78753',
    phone: '(512) 832-9976',
    coords: [30.3789, -97.6927] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/EF4444/png?text=Peace+Bakery',
    rating: 4.7,
    priceRange: '$10-20',
    description: 'Beloved family-owned establishment known for authentic Palestinian cuisine. Features a daily rotating buffet of fresh Mediterranean dishes.',
    added: '8/20/2024',
    updated: '1/9/2026'
  },
  {
    id: 6,
    name: 'Halal Bros',
    category: 'Food',
    categoryColor: '#EF4444',
    address: '3107 S I-35 Frontage Rd #775, Round Rock, TX 78664',
    phone: '(512) 640-6367',
    coords: [30.4789, -97.6712] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/EF4444/png?text=Halal+Bros',
    rating: 4.4,
    priceRange: '$10-20',
    description: 'Started as a food truck and has grown into a local staple for quick and flavorful halal meals. Known for their signature sauces.',
    added: '9/1/2024',
    updated: '1/11/2026'
  },
  {
    id: 7,
    name: 'Austin Peace Academy',
    category: 'Education',
    categoryColor: '#8B5CF6',
    address: '7900 Elkhorn Mountain Trl, Austin, TX 78729',
    phone: '(512) 444-4222',
    coords: [30.4523, -97.7912] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/8B5CF6/png?text=Austin+Peace',
    rating: 4.9,
    priceRange: '',
    description: 'Nationally recognized Islamic school offering education from Pre-K through 12th grade. One of the top private schools in Austin.',
    added: '8/25/2024',
    updated: '1/12/2026'
  },
  {
    id: 8,
    name: 'Renaissance Education Foundation',
    category: 'Education',
    categoryColor: '#8B5CF6',
    address: '5415 Parkcrest Dr, Austin, TX 78731',
    phone: '(512) 220-8822',
    coords: [30.3689, -97.7512] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/8B5CF6/png?text=Renaissance',
    rating: 4.8,
    priceRange: '',
    description: 'Provides strong option for private Islamic schooling. Emphasizes character building and community service.',
    added: '9/10/2024',
    updated: '1/8/2026'
  },
  {
    id: 9,
    name: 'Indo Pak Supermarket',
    category: 'Grocery',
    categoryColor: '#F97316',
    address: '1310 E Old Settlers Blvd #102, Round Rock, TX 78664',
    phone: '(512) 244-4786',
    coords: [30.5123, -97.6656] as [number, number],
    image: 'https://placehold.co/600x400/1A1A1A/F97316/png?text=Indo+Pak',
    rating: 3.6,
    priceRange: '',
    description: 'Go-to spot for specialized groceries. Features a full-service halal meat counter with fresh cuts of goat, lamb, and beef.',
    added: '9/15/2024',
    updated: '1/7/2026'
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
  priceRange: string;
  description: string;
  added: string;
  updated: string;
}

// Custom marker icons
const createCustomIcon = (color: string, icon: string) => {
  return L.divIcon({
    html: `
      <div style="position: relative;">
        <svg width="40" height="50" viewBox="0 0 40 50" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));">
          <path d="M20 0C8.954 0 0 8.954 0 20c0 15 20 30 20 30s20-15 20-30C40 8.954 31.046 0 20 0z" fill="${color}" opacity="0.9"/>
          <circle cx="20" cy="18" r="12" fill="rgba(0,0,0,0.3)"/>
          <text x="20" y="24" text-anchor="middle" font-size="16" fill="#fff">${icon}</text>
        </svg>
      </div>
    `,
    className: '',
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50]
  });
};

export function InteractiveMapSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const filteredLocations = selectedCategory === 'All'
    ? locations
    : locations.filter(loc => loc.category === selectedCategory);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const closeDetailPanel = () => {
    setSelectedLocation(null);
  };

  // Round Rock / North Austin bounds
  const mapCenter: [number, number] = [30.4583, -97.7089];
  const mapBounds: [[number, number], [number, number]] = [
    [30.3, -97.85],  // Southwest
    [30.6, -97.55]   // Northeast
  ];

  return (
    <section className="min-h-screen relative bg-black py-16">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto mb-8 px-8 text-center">
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
        className="max-w-[1400px] mx-auto mb-8 px-8 flex flex-wrap justify-center gap-4"
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
        className="w-full h-[700px] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
        }}
      >
        {/* Results Counter Overlay */}
        <div className="absolute top-4 left-4 z-[1000] bg-[#1A1A1A] border border-[#333333] rounded-lg px-4 py-2 backdrop-blur-sm">
          <p className="text-sm text-white">
            Found <span className="font-bold text-[#14B8A6]">{filteredLocations.length}</span> {selectedCategory === 'All' ? 'locations' : selectedCategory.toLowerCase()} within 10 miles
          </p>
        </div>

        {/* Leaflet Map */}
        <MapContainer
          center={mapCenter}
          zoom={11}
          maxBounds={mapBounds}
          minZoom={10}
          maxZoom={16}
          style={{ height: '100%', width: '100%', background: '#0A0A0A' }}
          zoomControl={true}
        >
          {/* Dark themed map tiles */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Location Markers */}
          {filteredLocations.map((location) => {
            const icon = createCustomIcon(
              location.categoryColor,
              location.category === 'Mosque' ? '🕌' :
              location.category === 'Food' ? '🍽️' :
              location.category === 'Education' ? '📚' : '🛒'
            );

            return (
              <Marker
                key={location.id}
                position={location.coords}
                icon={icon}
                eventHandlers={{
                  click: () => handleLocationClick(location),
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{location.name}</strong>
                    <br />
                    {location.category}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </motion.div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedLocation && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-[2000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetailPanel}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#1A1A1A] border-l border-[#333333] z-[2001] overflow-y-auto"
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
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-[#14B8A6] text-sm font-medium">{selectedLocation.category}</p>
                  {selectedLocation.priceRange && (
                    <>
                      <span className="text-[#666666]">•</span>
                      <p className="text-[#666666] text-sm">{selectedLocation.priceRange}</p>
                    </>
                  )}
                  <span className="text-[#666666]">•</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span className="text-[#F59E0B] text-sm font-semibold">{selectedLocation.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#999999] text-sm leading-relaxed mb-6">
                  {selectedLocation.description}
                </p>

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
                    View Reviews on Google & Yelp
                    <ExternalLink size={16} />
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
                      <p className="text-[#14B8A6] flex items-center gap-1">
                        Search Website <ExternalLink size={14} />
                      </p>
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

      {/* Leaflet CSS Override for Dark Theme */}
      <style>{`
        .leaflet-container {
          background: #0A0A0A !important;
        }
        .leaflet-popup-content-wrapper {
          background: #1A1A1A;
          color: #FFFFFF;
          border: 1px solid #333333;
        }
        .leaflet-popup-tip {
          background: #1A1A1A;
        }
        .leaflet-control-attribution {
          background: rgba(26, 26, 26, 0.8) !important;
          color: #666666 !important;
        }
        .leaflet-control-attribution a {
          color: #14B8A6 !important;
        }
        .leaflet-control-zoom a {
          background: #1A1A1A !important;
          border: 1px solid #333333 !important;
          color: #FFFFFF !important;
        }
        .leaflet-control-zoom a:hover {
          background: #333333 !important;
        }
      `}</style>
    </section>
  );
}
