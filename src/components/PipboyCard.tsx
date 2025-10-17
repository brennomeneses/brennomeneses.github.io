import type { ReactNode } from "react";

interface PipBoyCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const PipBoyCard = ({ title, children, className = "" }: PipBoyCardProps) => {
  return (
    <div className={`pipboy-border bg-card p-4 animate-flicker ${className}`}>
      <h3 className="text-lg font-bold mb-3 pipboy-glow uppercase tracking-wider">
        [{title}]
      </h3>
      <div className="space-y-2 text-sm">
        {children}
      </div>
    </div>
  );
};
