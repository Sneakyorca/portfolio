const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh gradient base layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_80%,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />

      {/* Animated blobs - much more visible */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[100px] animate-blob"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        className="absolute top-1/3 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[90px] animate-blob animation-delay-2000"
        style={{ background: "hsl(12 60% 60%)" }}
      />
      <div
        className="absolute -bottom-20 left-1/4 w-[550px] h-[550px] rounded-full opacity-[0.13] blur-[95px] animate-blob animation-delay-4000"
        style={{ background: "hsl(40 70% 55%)" }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
