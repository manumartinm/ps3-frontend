// components/Glass.tsx
import { cn } from '@/lib/utils';

type GlassProps = {
  children: React.ReactNode;
  className?: string;
};

export function Glass({ children, className }: GlassProps) {
  return (
    <div
      className={cn(
        `backdrop-blur-2xl
         bg-[rgba(173,216,230,0.10)]   // Azul muy sutil translúcido
         border border-white/20
         rounded-2xl
         shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
         transition-all
         duration-300
         hover:bg-[rgba(173,216,230,0.15)]
         hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.5)]`,
        className
      )}
    >
      {children}
    </div>
  );
}
