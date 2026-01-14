interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function EmailInput({ value, onChange, placeholder = "Enter your email", className = '' }: EmailInputProps) {
  return (
    <input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`
        bg-[#1A1A1A] border border-[#333333] rounded-full
        px-6 py-4 text-white placeholder:text-[#666666]
        focus:border-[#CCCCCC] focus:bg-[#2A2A2A] focus:outline-none
        transition-all duration-300
        ${className}
      `}
      style={{
        fontSize: '15px',
        fontWeight: 400
      }}
    />
  );
}
