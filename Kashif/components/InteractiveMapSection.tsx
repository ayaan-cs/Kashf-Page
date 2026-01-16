import { useState, useEffect, useRef } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Phone, Star, X, Heart, Share2, ExternalLink } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox configuration from environment variables
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAPBOX_STYLE = import.meta.env.VITE_MAPBOX_STYLE_URL;

// Real location data for Round Rock / North Austin area
// TO ADD YOUR OWN PHOTOS: Replace the 'image' field with your actual image URLs
// Example: image: '/images/icga-masjid.jpg' or 'https://yourdomain.com/photos/icga.jpg'
const locations = [
  {
    id: 1,
    name: 'Islamic Center of Greater Austin',
    category: 'Mosque',
    categoryColor: '#10B981',
    address: '11900 Mustang Ave, Austin, TX 78759',
    phone: '(512) 476-2563',
    coords: [-97.7503, 30.4083] as [number, number], // Mapbox uses [lng, lat]
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
    coords: [-97.7689, 30.4456] as [number, number],
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
    coords: [-97.6789, 30.4983] as [number, number],
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
    coords: [-97.6823, 30.4950] as [number, number],
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
    coords: [-97.6927, 30.3789] as [number, number],
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
    coords: [-97.6712, 30.4789] as [number, number],
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
    coords: [-97.7912, 30.4523] as [number, number],
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
    coords: [-97.7512, 30.3689] as [number, number],
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
    coords: [-97.6656, 30.5123] as [number, number],
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

// Custom marker component
function CustomMarker({
  location,
  onClick
}: {
  location: Location;
  onClick: () => void;
}) {
  const icon = location.category === 'Mosque' ? '🕌' :
                location.category === 'Food' ? '🍽️' :
                location.category === 'Education' ? '📚' : '🛒';

  return (
    <Marker
      longitude={location.coords[0]}
      latitude={location.coords[1]}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        onClick();
      }}
    >
      <div
        className="cursor-pointer transition-transform hover:scale-110"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
        }}
      >
        <svg width="40" height="50" viewBox="0 0 40 50">
          <path
            d="M20 0C8.954 0 0 8.954 0 20c0 15 20 30 20 30s20-15 20-30C40 8.954 31.046 0 20 0z"
            fill={location.categoryColor}
            opacity="0.9"
          />
          <circle cx="20" cy="18" r="12" fill="rgba(0,0,0,0.3)" />
          <text
            x="20"
            y="24"
            textAnchor="middle"
            fontSize="16"
            fill="#fff"
          >
            {icon}
          </text>
        </svg>
      </div>
    </Marker>
  );
}

export function InteractiveMapSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [panelWidth, setPanelWidth] = useState(420);
  const [isResizing, setIsResizing] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredLocations = selectedCategory === 'All'
    ? locations
    : locations.filter(loc => loc.category === selectedCategory);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const closeDetailPanel = () => {
    setSelectedLocation(null);
    setPanelWidth(420);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleResize = (e: MouseEvent) => {
    if (!isResizing) return;

    const mapContainer = document.querySelector('.map-container');
    if (!mapContainer) return;

    const mapRect = mapContainer.getBoundingClientRect();
    const newWidth = mapRect.right - e.clientX;

    const constrainedWidth = Math.max(320, Math.min(newWidth, mapRect.width));
    setPanelWidth(constrainedWidth);
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.body.classList.add('resizing');
      window.addEventListener('mousemove', handleResize);
      window.addEventListener('mouseup', handleResizeEnd);
      return () => {
        document.body.classList.remove('resizing');
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [isResizing]);

  // Lazy load map when section is visible (Intersection Observer)
  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          console.log('Map section is visible - loading map...');
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0 // Trigger as soon as any part is visible
      }
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Enable 3D buildings when map loads
  useEffect(() => {
    if (mapRef.current && shouldLoadMap) {
      const map = mapRef.current.getMap();
      map.on('load', () => {
        // Enable 3D buildings
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
          (layer: any) => layer.type === 'symbol' && layer.layout['text-field']
        )?.id;

        if (!map.getLayer('3d-buildings')) {
          map.addLayer(
            {
              id: '3d-buildings',
              source: 'composite',
              'source-layer': 'building',
              filter: ['==', 'extrude', 'true'],
              type: 'fill-extrusion',
              minzoom: 15,
              paint: {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  15,
                  0,
                  15.05,
                  ['get', 'height']
                ],
                'fill-extrusion-base': [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  15,
                  0,
                  15.05,
                  ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
              }
            },
            labelLayerId
          );
        }
      });
    }
  }, [shouldLoadMap]);

  return (
    <section ref={sectionRef} className="min-h-screen relative bg-black py-16">
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
                ? 'bg-[#14B8A6] border-[#14B8A6] text-white shadow-[0_0_20px_rgba(20,184,166,0.4)]'
                : 'bg-[#1A1A1A] border-[#333333] text-[#999999] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="font-semibold">{category.name}</span>
          </button>
        ))}
      </motion.div>

      {/* Map Container */}
      <motion.div
        className="max-w-[1200px] mx-auto px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Tablet Mockup Frame */}
        <div
          className="relative mx-auto"
          style={{
            width: '100%',
            maxWidth: '1100px',
            aspectRatio: '16 / 10',
            background: '#1A1A1A',
            borderRadius: '32px',
            padding: '16px',
            boxShadow: '0px 30px 80px rgba(0,0,0,0.9), 0px 0px 0px 2px #333333, inset 0px 0px 0px 1px #2A2A2A'
          }}
        >
          {/* Camera */}
          <div
            className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-[#0A0A0A] rounded-full z-10"
            style={{ boxShadow: '0 0 0 2px #1A1A1A' }}
          />

          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg opacity-30"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg opacity-30"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg opacity-30"></div>

          {/* Screen Container with Map */}
          <div
            className="map-container w-full h-full overflow-hidden relative"
            style={{
              borderRadius: '24px',
              background: '#0A0A0A'
            }}
          >
            {/* Lazy Load: Only render Map when visible */}
            {!shouldLoadMap ? (
              /* Islamic-Themed Loading Placeholder */
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 border-2 border-[#D4AF37] rotate-45 transform -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-[#D4AF37] rotate-45 transform translate-x-16 translate-y-16"></div>
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-[#D4AF37] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Loader Content */}
                <div className="text-center z-10">
                  {/* Islamic Geometric Star Loader */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    {/* Rotating outer star */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M50 0 L57 43 L100 50 L57 57 L50 100 L43 57 L0 50 L43 43 Z"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="2"
                          opacity="0.6"
                        />
                      </svg>
                    </div>

                    {/* Counter-rotating inner star */}
                    <div className="absolute inset-4 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M50 10 L54 46 L90 50 L54 54 L50 90 L46 54 L10 50 L46 46 Z"
                          fill="#D4AF37"
                          opacity="0.8"
                        />
                      </svg>
                    </div>

                    {/* Crescent and Star in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 50 50" className="w-10 h-10">
                        {/* Crescent */}
                        <path
                          d="M25 5 A15 15 0 1 0 25 45 A12 12 0 1 1 25 5"
                          fill="#D4AF37"
                        />
                        {/* Star */}
                        <path
                          d="M38 15 L39.5 19 L43.5 19 L40 21.5 L41.5 25.5 L38 23 L34.5 25.5 L36 21.5 L32.5 19 L36.5 19 Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </div>

                    {/* Pulsing rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full border-2 border-[#D4AF37] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    </div>
                  </div>

                  {/* Loading Text */}
                  <div className="space-y-2">
                    <p className="text-[#D4AF37] text-xl font-semibold tracking-wide">Loading Map...</p>
                    <p className="text-[#666666] text-sm">Preparing your community discovery</p>
                  </div>

                  {/* Loading Dots Animation */}
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            ) : (
              /* Mapbox Map */
              <Map
                ref={mapRef}
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={{
                  longitude: -97.7089,
                  latitude: 30.4583,
                  zoom: 11,
                  pitch: 0,
                  bearing: 0
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={MAPBOX_STYLE}
                minZoom={10}
                maxZoom={16}
                maxBounds={[
                  [-97.85, 30.3], // Southwest
                  [-97.55, 30.6]  // Northeast
                ]}
              >
                {/* Navigation Controls */}
                <NavigationControl position="top-right" />

                {/* Location Markers */}
                {filteredLocations.map((location) => (
                  <CustomMarker
                    key={location.id}
                    location={location}
                    onClick={() => handleLocationClick(location)}
                  />
                ))}
              </Map>
            )}

            {/* Detail Panel */}
            <AnimatePresence>
              {selectedLocation && (
                <>
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 z-[2000]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeDetailPanel}
                  />

                  {/* Panel */}
                  <motion.div
                    className="absolute right-0 top-0 h-full bg-[#1A1A1A] border-l-4 z-[2001] overflow-y-auto"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    style={{
                      width: `${panelWidth}px`,
                      borderLeftColor: '#14B8A6',
                      boxShadow: '-4px 0 20px rgba(20, 184, 166, 0.3)',
                      userSelect: isResizing ? 'none' : 'auto'
                    }}
                  >
                    {/* Resize Handle */}
                    <div
                      className="absolute left-0 top-0 h-full w-3 cursor-ew-resize z-[2002] group bg-gradient-to-r from-[#14B8A6]/20 to-transparent hover:from-[#14B8A6]/40"
                      onMouseDown={handleResizeStart}
                      style={{ boxShadow: 'inset 2px 0 4px rgba(20, 184, 166, 0.3)' }}
                    >
                      <div className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="flex flex-col gap-1">
                          <div className="w-1 h-6 bg-[#14B8A6] rounded-full"></div>
                          <div className="w-1 h-6 bg-[#14B8A6] rounded-full"></div>
                          <div className="w-1 h-6 bg-[#14B8A6] rounded-full"></div>
                        </div>
                      </div>
                    </div>

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
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-[#D4AF37] px-3 py-1 rounded-full text-white text-sm"
                           style={{ boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)' }}>
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
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style>{`
        /* Resize cursor when dragging */
        body.resizing {
          cursor: ew-resize !important;
          user-select: none !important;
        }

        /* Mapbox control styling */
        .mapboxgl-ctrl-group {
          background: #1A1A1A !important;
          border: 1px solid #333333 !important;
        }

        .mapboxgl-ctrl-group button {
          background-color: #1A1A1A !important;
          color: #FFFFFF !important;
        }

        .mapboxgl-ctrl-group button:hover {
          background-color: #333333 !important;
        }

        .mapboxgl-ctrl-attrib {
          background-color: rgba(26, 26, 26, 0.8) !important;
        }

        .mapboxgl-ctrl-attrib a {
          color: #14B8A6 !important;
        }
      `}</style>
    </section>
  );
}
