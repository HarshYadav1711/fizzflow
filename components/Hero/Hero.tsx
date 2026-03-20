const STATS = [
  { value: "48%", label: "Year over year" },
  { value: "2.4k", label: "Active users" },
  { value: "99%", label: "Uptime" },
  { value: "24/7", label: "Support" }
] as const;

export function Hero() {
  return (
    <section
      className="flex min-h-dvh flex-col px-6 py-12 md:px-12 md:py-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <header className="shrink-0">
          <h1
            id="hero-heading"
            className="text-4xl font-medium uppercase leading-none tracking-[0.2em] text-white md:text-6xl md:tracking-[0.24em]"
          >
            <span className="block">WELCOME</span>
            <span className="mt-2 block md:mt-3">ITZFIZZ</span>
          </h1>
        </header>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-16 md:py-20">
          <div
            className="relative flex aspect-square w-full max-w-md items-center justify-center"
            aria-hidden
          >
            {/* Inner ring: hollow circle, transform-ready for future motion */}
            <div
              className="pointer-events-none absolute inset-[11%] rotate-[22deg] rounded-full border border-white/20 will-change-transform"
            />

            {/* Central orb + subtle glow (layered box-shadow, no animation) */}
            <div
              className="relative h-14 w-14 rounded-full bg-white/88 shadow-[0_0_28px_rgba(255,255,255,0.22),0_0_72px_rgba(255,255,255,0.1),0_0_120px_rgba(255,255,255,0.05)] md:h-16 md:w-16"
            />
          </div>
        </div>

        <footer className="shrink-0 border-t border-white/10 pt-10 md:pt-12">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-12">
            {STATS.map((item) => (
              <li key={item.label} className="flex flex-col gap-1">
                <p className="text-2xl font-medium tabular-nums tracking-tight text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
