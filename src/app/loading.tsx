// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background dark:bg-navy">
      {/* Logo or brand mark (optional) */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold to-accent animate-spin-slow"></div>
      </div>

      {/* Loading text */}
      <p className="text-lg font-heading text-primary-foreground dark:text-gold animate-pulse">
        Loading Surosh Travels...
      </p>

      {/* Optional shimmer bar */}
      <div className="mt-6 w-40 h-2 bg-muted rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent animate-loading-bar"></div>
      </div>
    </div>
  );
}
