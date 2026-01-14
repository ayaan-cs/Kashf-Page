export function SectionDivider() {
  return (
    <div className="w-full flex justify-center mb-24">
      <div 
        className="w-4/5 max-w-[1200px] h-px"
        style={{
          background: 'linear-gradient(to right, transparent, #333333, transparent)'
        }}
      />
    </div>
  );
}
