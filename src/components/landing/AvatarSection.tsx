import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: "⚡", title: "Level-Based Evolution", desc: "Level up and unlock new forms, styles, and upgrades for your avatar." },
  { icon: "🎨", title: "Customization", desc: "Choose your look, gear, and identity. Make your avatar truly yours." },
  { icon: "🏆", title: "Achievement Unlocks", desc: "Earn badges and rewards that enhance your avatar as you progress." },
  { icon: "📈", title: "Progress Reflection", desc: "Your avatar visually represents your strength, consistency, and growth." },
];

const AvatarSection = () => {
  const headerRef = useScrollReveal();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div ref={headerRef} className="section-reveal text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">🧬 Avatar System</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Evolve With Your <span className="text-gradient-primary">Avatar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Your digital self grows with you. Every workout, every streak, and every level shapes your avatar into a stronger, more powerful version—just like you.
          </p>
        </div>

        {/* Before → After visual */}
        <div className="flex flex-col items-center mb-20">
          {(() => {
            const ref = useScrollReveal();
            return (
              <div ref={ref} className="section-reveal glass-card p-8 md:p-12 w-full max-w-3xl">
                <div className="flex items-center justify-center gap-6 md:gap-12">
                  {/* Before avatar */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-secondary border border-border flex items-center justify-center relative group">
                      <span className="text-5xl md:text-6xl opacity-60 group-hover:opacity-80 transition-opacity">🧍</span>
                      <div className="absolute -bottom-1 -right-1 bg-muted text-muted-foreground text-xs font-mono px-2 py-0.5 rounded-full border border-border">
                        Lv.1
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">Before</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-3xl md:text-4xl text-primary glow-text-primary animate-pulse">→</div>
                    <span className="text-xs text-muted-foreground font-mono tracking-wider">EVOLVE</span>
                  </div>

                  {/* After avatar */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center relative group glow-primary">
                      <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">🦸</span>
                      <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-mono px-2 py-0.5 rounded-full font-bold">
                        Lv.50
                      </div>
                    </div>
                    <span className="text-sm text-primary font-medium glow-text-primary">After</span>
                  </div>
                </div>

                {/* XP bar */}
                <div className="mt-8 max-w-md mx-auto">
                  <div className="flex justify-between text-xs text-muted-foreground font-mono mb-2">
                    <span>Evolution Progress</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="xp-bar">
                    <div className="xp-bar-fill" style={{ width: "98%" }} />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Feature highlight cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {highlights.map((h, i) => {
            const ref = useScrollReveal();
            return (
              <div
                key={h.title}
                ref={ref}
                className="section-reveal glass-card p-7 group hover:border-primary/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-200">{h.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Micro line + CTA */}
        {(() => {
          const ref = useScrollReveal();
          return (
            <div ref={ref} className="section-reveal text-center">
              <p className="text-muted-foreground italic mb-6">Don't just track progress. <span className="text-foreground font-medium">Become it.</span></p>
              <Button variant="hero" size="lg">
                Upgrade Your Avatar
              </Button>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default AvatarSection;
