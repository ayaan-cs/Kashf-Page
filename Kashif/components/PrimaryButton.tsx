interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function PrimaryButton({ children, onClick, className = '', type = 'button' }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-white border border-white text-black px-10 py-4 rounded-full
        transition-all duration-300
        hover:bg-[#F5F5F5] hover:-translate-y-0.5 hover:shadow-[0px_10px_30px_rgba(255,255,255,0.1)]
        ${className}
      `}
      style={{
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '5%',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </button>
  );
}
