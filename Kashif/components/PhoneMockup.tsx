interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
  variant?: 'search' | 'prayer' | 'map' | 'favorites' | 'mosque-detail';
  className?: string;
}

// Map variants to screenshot paths
const getScreenshotPath = (variant?: string): string | undefined => {
  const screenshotMap: Record<string, string> = {
    'map': '/screenshots/map-search.PNG',
    'search': '/screenshots/map-search.PNG',
    'prayer': '/screenshots/prayer-times.PNG',
    'favorites': '/screenshots/favorites.PNG',
    'mosque-detail': '/screenshots/mosque-detail.PNG',
  };
  return variant ? screenshotMap[variant] : undefined;
};

export function PhoneMockup({ imageSrc, alt = "Kashf app", variant, className = '' }: PhoneMockupProps) {
  // Use provided imageSrc or get from variant
  const screenshotPath = imageSrc || getScreenshotPath(variant);
  // Props are kept for future use when screenshots are added back
  return (
    <div 
      className={`relative mx-auto ${className}`}
      style={{
        width: 'clamp(200px, 25vw, 340px)',
        aspectRatio: '9 / 19.5', // iPhone 16 Pro Max aspect ratio
        maxWidth: '100%',
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
          borderRadius: 'clamp(30px, 4vw, 40px)',
          padding: 'clamp(3px, 0.6vw, 6px)',
          boxShadow: '0px 20px 60px rgba(0,0,0,0.8), 0px 0px 0px 1px rgba(255,255,255,0.1), inset 0px 0px 0px 1px rgba(0,0,0,0.5)'
        }}
      >
        {/* Dynamic Island (iPhone 16 Pro Max) - Smaller and properly positioned */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{
            top: 'clamp(12px, 1.5vw, 16px)',
            width: 'clamp(70px, 8vw, 90px)',
            height: 'clamp(20px, 2.5vw, 26px)',
            background: '#0A0A0A',
            borderRadius: '9999px',
            boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        
        {/* Screen Container - No status bar area */}
        <div 
          className="w-full h-full overflow-visible relative"
          style={{
            borderRadius: 'clamp(24px, 3.5vw, 32px)',
            background: '#000000',
            boxShadow: 'inset 0px 0px 20px rgba(0,0,0,0.8)',
          }}
        >
          {/* Content area - full image display */}
          <div 
            className="w-full h-full relative"
            style={{
              background: screenshotPath ? 'transparent' : 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
              overflow: 'hidden',
            }}
          >
            {/* Display screenshot if available, showing full image without cutting off */}
            {screenshotPath ? (
              <img
                src={screenshotPath}
                alt={alt}
                className="w-full h-full"
                style={{
                  objectPosition: 'center center',
                  objectFit: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'clamp(24px, 3.5vw, 32px)',
                }}
                onError={(e) => {
                  // Fallback to gradient if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)';
                  }
                }}
              />
            ) : null}
          </div>
          
          {/* Screen reflection overlay for realism */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)',
              borderRadius: 'clamp(24px, 3.5vw, 32px)'
            }}
          />
        </div>
        
      </div>
    </div>
  );
}
