interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
  variant?: 'search' | 'prayer' | 'map';
}

export function PhoneMockup({ imageSrc: _imageSrc, alt: _alt = "Kashf app", variant: _variant }: PhoneMockupProps) {
  // Props are kept for future use when screenshots are added back
  return (
    <div 
      className="relative w-[320px] mx-auto"
      style={{
        aspectRatio: '9 / 19.5',
        background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
        borderRadius: '40px',
        padding: '10px',
        boxShadow: '0px 20px 60px rgba(0,0,0,0.8), 0px 0px 0px 1px rgba(255,255,255,0.1), inset 0px 0px 0px 1px rgba(0,0,0,0.5)'
      }}
    >
      {/* Phone Notch */}
      <div 
        className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-[#0A0A0A] z-10"
        style={{
          borderRadius: '0px 0px 15px 15px',
          boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.5)'
        }}
      />
      
      {/* Screen Container */}
      <div 
        className="w-full h-full overflow-hidden relative"
        style={{
          borderRadius: '32px',
          background: '#000000',
          boxShadow: 'inset 0px 0px 20px rgba(0,0,0,0.8)'
        }}
      >
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'
          }}
        />
        
        {/* Screen reflection overlay for realism */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)',
            borderRadius: '32px'
          }}
        />
      </div>
      
      {/* Home indicator (for iPhone) */}
      <div 
        className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/30 rounded-full z-10"
        style={{
          opacity: 0.6
        }}
      />
    </div>
  );
}
