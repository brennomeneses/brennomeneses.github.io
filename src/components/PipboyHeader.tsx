export const PipBoyHeader = () => {
  const tabs = ["STAT", "INV", "DATA", "MAP", "RADIO"];

  const myAge = new Date().getFullYear() - 2001;
  
  return (
    <header className="pipboy-border bg-card p-6 mb-8 animate-flicker">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary animate-pulse-glow"></div>
          <span className="text-xs uppercase tracking-wider">System Online</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary animate-pulse-glow"></div>
          <span className="text-xs uppercase tracking-wider">Ready</span>
        </div>
      </div>

      <nav className="flex gap-8 justify-center border-t border-b border-primary py-3 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`text-lg font-bold pipboy-glow uppercase tracking-wider hover:text-accent transition-colors ${
              idx === 0 ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex items-center justify-center gap-8 mb-6">
        {/* Photo placeholder */}
        <div className="pipboy-border bg-card p-3 animate-pulse-glow">
          <div className="w-32 h-32 bg-primary/20 flex items-center justify-center">
            <span className="text-xs text-center text-muted-foreground uppercase"><img src="https://avatars.githubusercontent.com/u/72389591?s=400&u=24c4d5d73594093f1ab789a5dd9188d892b87449&v=4" /></span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold pipboy-glow mb-2 uppercase tracking-wider">
            VAULT-TEC PORTFOLIO
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="uppercase tracking-wider">Status: Active</span>
            <span>|</span>
            <span className="uppercase tracking-wider">Mode: Dev. Full Stack</span>
            <span>|</span>
            <span className="uppercase tracking-wider">Level: Pleno</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-wider">
        <div className="pipboy-border p-2">
          <div className="text-muted-foreground">HP</div>
          <div className="text-primary font-bold text-xl pipboy-glow">100/100</div>
        </div>
        <div className="pipboy-border p-2">
          <div className="text-muted-foreground">Level</div>
          <div className="text-primary font-bold text-xl pipboy-glow">{myAge}</div>
        </div>
        <div className="pipboy-border p-2">
          <div className="text-muted-foreground">AP</div>
          <div className="text-primary font-bold text-xl pipboy-glow">100/100</div>
        </div>
      </div>
    </header>
  );
};
