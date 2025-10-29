const Logo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 750 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="50"
        y="140"
        className="fill-primary font-bold"
        style={{ fontSize: '120px', fontFamily: 'Inter, sans-serif', fontWeight: 800, letterSpacing: '-0.02em' }}
      >
        GOAURE
      </text>
      <path
        d="M 660 60 L 710 180"
        className="stroke-primary"
        strokeWidth="28"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
