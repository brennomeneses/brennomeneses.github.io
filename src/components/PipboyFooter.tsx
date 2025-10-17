export const PipBoyFooter = () => {
  return (
    <footer className="pipboy-border bg-card p-4 mt-12 animate-flicker">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span>2075 Robco(R) PIP-OS V7.1.0.8</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">All Systems Operational</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span>Online</span>
            </div>
            <span>|</span>
            <span>Exec Version 41.10</span>
          </div>
        </div>

        <div className="mt-4 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
          [Warning: This terminal is for authorized personnel only]
        </div>
      </div>
    </footer>
  );
};
