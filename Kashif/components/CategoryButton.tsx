interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryButton({ label, isActive = false, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-3.5 rounded-full transition-all duration-300
        ${isActive 
          ? 'bg-white border border-white text-black' 
          : 'bg-transparent border border-[#333333] text-[#CCCCCC] hover:bg-white hover:border-white hover:text-black hover:-translate-y-0.5'
        }
      `}
      style={{
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '0%'
      }}
    >
      {label}
    </button>
  );
}
