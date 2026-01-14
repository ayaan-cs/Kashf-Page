interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
}

export function PhoneMockup({ imageSrc, alt = "App screenshot" }: PhoneMockupProps) {
  return (
    <div 
      className="relative w-[320px] mx-auto"
      style={{
        aspectRatio: '9 / 19.5',
        background: '#1A1A1A',
        borderRadius: '40px',
        padding: '10px',
        boxShadow: '0px 20px 60px rgba(0,0,0,0.8), 0px 0px 0px 1px #333333'
      }}
    >
      {/* Phone Notch */}
      <div 
        className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-[#0A0A0A] z-10"
        style={{
          borderRadius: '0px 0px 15px 15px'
        }}
      />
      
      {/* Screen Container */}
      <div 
        className="w-full h-full overflow-hidden"
        style={{
          borderRadius: '32px',
          background: '#1A1A1A'
        }}
      >
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'
            }}
          />
        )}
      </div>
    </div>
  );
}
