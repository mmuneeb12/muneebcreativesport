import { createFileRoute } from "@tanstack/react-router";
import { Play, Sparkles, Star, Users, Award, Film, Mail, Instagram, Linkedin, Youtube, ArrowRight, ArrowUpRight, Plane, Zap, Inbox, Wrench, Clock, ShieldCheck, MessagesSquare, Layers, Scissors, Video, FileText, X, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import LaserFlow from "@/components/LaserFlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muneeb — Narrative-Driven Video Editor" },
      { name: "description", content: "Co-Founder at Reccut Solutions. Long-form, SaaS ads, reels & motion graphics — cinematic editing that moves audiences." },
      { property: "og:title", content: "Muneeb — Narrative-Driven Video Editor" },
      { property: "og:description", content: "Cinematic editing portfolio of Muneeb, Co-Founder at Reccut Solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <WhyChooseMe />
      <Testimonials />
      <Process />
      <Contact />
      <Policies />
      <Footer />
    </div>
  );
}

/* ============== HERO ============== */
function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  return (
    <section id="top" className="relative pb-24 pt-6 px-3 md:px-5">
      {/* Giant outlined background wordmark — MOTION in Helvetica */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden select-none">
        <h1
          className="font-bold text-[20vw] leading-none tracking-[-0.04em] whitespace-nowrap pt-4 animate-[motion-morph_8s_ease-in-out_infinite]"
          style={{
            fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif",
            color: "transparent",
            WebkitTextStroke: "1px oklch(0.6 0.18 268 / 0.45)",
          }}
        >
          MOTION
        </h1>
      </div>

      <div ref={heroRef} className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mt-24 md:mt-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 stripes opacity-100" />

        {/* LaserFlow shader — fills the hero card */}
        <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen">
          <LaserFlow
            color="#7AA2FF"
            horizontalBeamOffset={0.0}
            verticalBeamOffset={-0.05}
            wispDensity={1.2}
            wispIntensity={4.0}
            flowSpeed={0.4}
            fogIntensity={0.55}
            mouseTiltStrength={0.02}
            mouseSmoothTime={0.08}
          />
        </div>

        {/* Morphing aurora blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-50 animate-[blob-morph_14s_ease-in-out_infinite]"
             style={{ background: "radial-gradient(circle, oklch(0.7 0.25 268 / 0.7), transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-32 -right-10 w-[520px] h-[520px] rounded-full blur-3xl opacity-50 animate-[blob-morph_18s_ease-in-out_infinite_reverse]"
             style={{ background: "radial-gradient(circle, oklch(0.65 0.22 290 / 0.65), transparent 70%)" }} />

        <div className="absolute inset-0 z-[1]" style={{
          background: "radial-gradient(70% 60% at 50% 110%, oklch(0.95 0.03 250 / 0.85) 0%, transparent 55%)"
        }} />

        {/* Top nav */}
        <div className="relative z-10 flex items-center justify-between gap-3 px-5 md:px-8 pt-6">
          <a href="#top" className="flex items-center gap-2 font-semibold text-white" style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif" }}>
            <span className="size-7 rounded-md bg-white/15 grid place-items-center backdrop-blur">
              <Play className="size-3.5 fill-white text-white" />
            </span>
            Muneeb
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-white/85">
            <li><a href="#top" className="hover:text-white">Home</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#services" className="hover:text-white">Expertise</a></li>
            <li><a href="#why" className="hover:text-white">Why Me</a></li>
            <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-full bg-white text-[oklch(0.32_0.22_268)] hover:bg-white/90 px-5 py-2.5 text-sm font-medium shadow-[0_10px_30px_-10px_oklch(1_0_0_/_0.4)]">
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="relative z-10 px-6 pt-16 md:pt-24 pb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 backdrop-blur px-4 py-1.5 text-xs text-white/90 border border-white/10">
            Crafting Stories With <span className="text-[oklch(0.85_0.15_268)] font-medium">Reccut Solutions</span>
          </div>
          <h2 className="mt-6 font-display text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
            Muneeb: Narrative
            <br />
            Driven Video Editing
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-white/80 text-sm md:text-base">
            Co-Founder at Reccut Solutions · 3+ years of experience in crafting cinematic stories that move audiences and brands.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#work" className="pill-btn bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow-blue)] hover:scale-[1.02]">
              View My Work <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="pill-btn bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/15">
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Floating preview cards */}
        <div className="relative z-10 px-4 md:px-8 pb-20 mt-8">
          <div className="relative max-w-5xl mx-auto h-[420px] md:h-[440px]">
            {/* Left card */}
            <div className="absolute left-0 top-8 w-[260px] md:w-[280px] rounded-2xl bg-white text-[oklch(0.18_0.07_265)] p-5 shadow-2xl rotate-[-3deg] float-y">
              <div className="text-xs font-medium text-[oklch(0.45_0.05_265)]">Reels Edited</div>
              <div className="text-xs text-[oklch(0.55_0.04_265)]">Last Update</div>
              <div className="mt-2 flex items-end justify-between">
                <div className="font-grotesk text-4xl font-bold">1,320</div>
                <span className="rounded-full bg-[oklch(0.62_0.24_268)] text-white text-[10px] px-2 py-0.5">▸ Live</span>
              </div>
              <div className="text-[11px] text-[oklch(0.55_0.04_265)] mt-1">Cuts Delivered</div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-[oklch(0.96_0.01_265)] p-3">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-md bg-[oklch(0.62_0.24_268)] grid place-items-center">
                    <Sparkles className="size-3.5 text-white" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <div className="font-medium">Next Project</div>
                    <div className="text-[oklch(0.55_0.04_265)]">SaaS ad · Sept</div>
                  </div>
                </div>
                <div className="size-7 rounded-full bg-white grid place-items-center shadow">
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </div>

            {/* Center card */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] md:w-[340px] rounded-[2rem] bg-white text-[oklch(0.18_0.07_265)] p-6 shadow-2xl float-y-slow">
              <div className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[oklch(0.96_0.01_265)] px-4 py-1.5 text-xs">
                Editor's Live Timeline
              </div>
              <div className="mt-5 text-center">
                <div className="font-grotesk text-2xl font-semibold">
                  Editing <span className="text-[oklch(0.62_0.24_268)]">200+</span>
                </div>
                <div className="font-grotesk text-2xl font-semibold">Clips Per Project</div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative size-14 shrink-0">
                  <svg viewBox="0 0 36 36" className="size-14 -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.94 0.01 265)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.62 0.24 268)" strokeWidth="3" strokeDasharray="94" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center text-xs font-semibold">94%</div>
                </div>
                <div className="text-[11px] text-[oklch(0.45_0.05_265)] leading-snug">
                  Average client satisfaction across delivered cuts last quarter ⚡
                </div>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[oklch(0.7_0.15_240)] to-[oklch(0.4_0.2_268)] relative">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="size-12 rounded-full bg-white/90 grid place-items-center">
                    <Play className="size-5 fill-[oklch(0.32_0.22_268)] text-[oklch(0.32_0.22_268)] ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[oklch(0.62_0.24_268)]" />
                  90% Replay Rate
                </div>
              </div>
            </div>

            {/* Right card — glassy */}
            <div className="absolute right-0 top-12 w-[250px] md:w-[280px] rounded-2xl glass-dark p-5 text-white rotate-[3deg] float-y">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px]">
                <span className="size-1.5 rounded-full bg-[oklch(0.78_0.18_150)]" /> Latest Project
              </span>
              <div className="mt-2 text-xs text-white/70">Just Wrapped</div>
              <div className="mt-1 font-grotesk text-2xl font-bold leading-tight">
                SaaS Ad<br />
                <span className="text-white/90">→ Aurora Co.</span>
              </div>
              <div className="mt-2 text-[11px] text-white/70">
                Saved <span className="text-white font-medium">28%</span> turnaround time
              </div>
              <div className="mt-4 dotted-orbit h-12 rounded-lg opacity-50" />
              <div className="mt-3 size-8 rounded-full bg-white grid place-items-center">
                <ArrowRight className="size-4 text-[oklch(0.32_0.22_268)]" />
              </div>
            </div>

            {/* Tags */}
            <span className="absolute -left-2 md:left-6 bottom-2 -rotate-12 rounded-full bg-white text-[oklch(0.18_0.07_265)] px-4 py-1.5 text-xs font-medium shadow-lg">
              CINEMATIC
            </span>
            <span className="absolute -right-2 md:right-6 bottom-4 rotate-6 rounded-full bg-white text-[oklch(0.18_0.07_265)] px-4 py-1.5 text-xs font-medium shadow-lg">
              STORY-FIRST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== STATS ============== */
function Stats() {
  const items = [
    { icon: Award, value: "3+", label: "Years of Professional Experience" },
    { icon: Users, value: "10+", label: "Global Clients Served" },
    { icon: Star, value: "4.9/5", label: "Average Client Rating" },
    { icon: Plane, value: "120+", label: "Projects Delivered Worldwide" },
  ];
  return (
    <section className="px-3 md:px-5 -mt-12 relative z-20">
      <div className="max-w-6xl mx-auto rounded-2xl bg-white text-[oklch(0.18_0.07_265)] shadow-[0_30px_80px_-30px_oklch(0.13_0.04_265_/_0.3)] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[oklch(0.92_0.01_265)] overflow-hidden">
        {items.map((it) => (
          <div key={it.label} className="p-6 md:p-7 flex items-center gap-4">
            <div className="size-11 rounded-xl bg-[oklch(0.96_0.02_268)] grid place-items-center">
              <it.icon className="size-5 text-[oklch(0.62_0.24_268)]" />
            </div>
            <div>
              <div className="font-grotesk text-2xl md:text-3xl font-bold leading-none">{it.value}</div>
              <div className="text-xs text-[oklch(0.5_0.04_265)] mt-1.5 leading-snug">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== PORTFOLIO ============== */
type VideoItem = { id: string; title: string; category: string; glow: string; tag: string };

const videos: VideoItem[] = [
  { id: "26kpqA5O_po", title: "Long-Form Feature Edit", category: "Long Form", glow: "glow-card-orange", tag: "LONG FORM" },
  { id: "nX__5RFgf8Y", title: "Documentary Cut", category: "Long Form", glow: "glow-card-orange", tag: "LONG FORM" },
  { id: "7W5YssgZfQc", title: "SaaS Product Ad", category: "Saas Ads", glow: "glow-card-blue", tag: "SAAS AD" },
  { id: "i1zxqLZhC5c", title: "SaaS Brand Story", category: "Saas Ads", glow: "glow-card-blue", tag: "SAAS AD" },
  { id: "YyhvWWGmGvw", title: "SaaS Conversion Spot", category: "Saas Ads", glow: "glow-card-blue", tag: "SAAS AD" },
  { id: "HNRcWiOXD2c", title: "Play — Highlight Reel", category: "Plays", glow: "glow-card-green", tag: "PLAYS" },
  { id: "HNRcWiOXD2c", title: "Play — Cinematic Cut", category: "Plays", glow: "glow-card-green", tag: "PLAYS" },
];

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<VideoItem | null>(null);
  const cats = ["All", "Long Form", "Short Form", "Saas Ads", "Plays"];
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);
  const showComingSoon = filter === "Short Form";

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="relative py-28 px-6 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
            <span className="size-1.5 rounded-full bg-[oklch(0.78_0.18_150)]" /> Selected Work
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Stories that cut deep,<br />
            <span className="italic text-white/60">frames that linger.</span>
          </h2>
          <p className="mt-5 text-white/60">
            From long-form documentaries to SaaS ads — colour-coded by craft.
          </p>

          <div className="mt-8 inline-flex flex-wrap gap-1.5 rounded-full p-1.5 bg-white/5 border border-white/10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === c ? "bg-white text-[oklch(0.18_0.07_265)]" : "text-white/70 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {showComingSoon ? (
          <div className="max-w-xl mx-auto rounded-3xl glow-card-green p-12 text-center">
            <div className="inline-flex size-14 rounded-2xl bg-[oklch(0.72_0.2_150)] items-center justify-center mb-5">
              <Clock className="size-6 text-white" />
            </div>
            <h3 className="font-display text-3xl text-white">Coming Soon</h3>
            <p className="mt-3 text-white/70 text-sm">
              Fresh short-form drops are in the edit bay. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v, i) => (
              <article key={`${v.id}-${i}`} className={`rounded-3xl p-2.5 ${v.glow} group transition hover:-translate-y-1 duration-300`}>
                <button
                  type="button"
                  onClick={() => setActive(v)}
                  className="w-full block rounded-2xl overflow-hidden bg-black/60 relative aspect-video cursor-pointer"
                  aria-label={`Play ${v.title}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`; }}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="size-16 rounded-full bg-white/95 grid place-items-center shadow-2xl transition group-hover:scale-110">
                      <Play className="size-6 fill-[oklch(0.18_0.07_265)] text-[oklch(0.18_0.07_265)] ml-1" />
                    </div>
                  </div>
                </button>
                <div className="px-3 pt-4 pb-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] tracking-[0.18em] text-white/50">{v.tag}</div>
                    <h3 className="font-grotesk text-base font-semibold mt-1 text-white">{v.title}</h3>
                  </div>
                  <button
                    onClick={() => setActive(v)}
                    className="size-8 rounded-full bg-white/10 grid place-items-center group-hover:bg-white group-hover:text-[oklch(0.18_0.07_265)] transition cursor-pointer"
                    aria-label="Open preview"
                  >
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-[80] grid place-items-center p-4 md:p-10 transition-all duration-300 ${
          active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActive(null)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <div
          className={`relative w-full max-w-6xl transition-all duration-500 ${active ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute -top-12 right-0 size-10 rounded-full glass grid place-items-center text-white hover:bg-white/20 cursor-pointer"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <div className={`rounded-3xl overflow-hidden ${active?.glow ?? ""}`}>
            <div className="aspect-video bg-black">
              {active && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {active && (
              <div className="p-5 md:p-6 flex items-center justify-between gap-4 bg-black/40 backdrop-blur">
                <div>
                  <div className="text-[10px] tracking-[0.18em] text-white/50">{active.tag}</div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mt-1">{active.title}</h3>
                </div>
                <a
                  href={`https://youtu.be/${active.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn bg-white text-[oklch(0.32_0.22_268)] hover:bg-white/90 text-sm"
                >
                  Open on YouTube <ArrowUpRight className="size-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== EXPERTISE / SERVICES ============== */
function Services() {
  const items = [
    {
      icon: Film,
      title: "Long Form Editing",
      desc: "Documentaries, podcasts and feature cuts — pacing engineered to hold attention end-to-end.",
      featured: true,
    },
    { icon: Video, title: "Reel Editing", desc: "Snappy, scroll-stopping reels with rhythm-locked cuts and punchy hooks." },
    { icon: Sparkles, title: "Motion Graphics", desc: "Custom kinetic type, lower-thirds and animated UI that match the brand voice." },
    { icon: FileText, title: "Documentary Editing", desc: "Story-first structure, archival weaving, and emotional through-lines." },
    { icon: Scissors, title: "Clean Editing", desc: "Polished, invisible cuts — frame-accurate, distraction-free, broadcast-ready." },
  ];

  return (
    <section id="services" className="relative py-28 px-6" style={{ background: "var(--cloud)", color: "var(--ink)" }}>
      <div className="absolute -top-px inset-x-0 h-12 pointer-events-none" style={{
        background: "radial-gradient(60% 100% at 50% 0%, var(--cloud) 0%, transparent 70%)"
      }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.93_0.04_268)] text-[oklch(0.4_0.18_268)] px-3 py-1 text-xs font-medium mb-5">
            Expertise
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Cinematic Craft, End-to-End<br />Polished With Reccut
          </h2>
          <p className="mt-4 text-[oklch(0.45_0.04_265)] max-w-xl mx-auto">
            Every project, from the first cut to the final render — every decision serves the story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => {
            const isFeatured = s.featured;
            return (
              <div
                key={s.title}
                className={`rounded-2xl p-6 transition hover:-translate-y-1 ${
                  isFeatured
                    ? "bg-[oklch(0.32_0.22_268)] text-white shadow-[0_30px_60px_-25px_oklch(0.32_0.22_268_/_0.55)] lg:row-span-2 lg:col-start-1"
                    : "bg-white shadow-[0_20px_40px_-25px_oklch(0.13_0.04_265_/_0.2)]"
                }`}
              >
                <div className={`size-11 rounded-xl grid place-items-center mb-6 ${
                  isFeatured ? "bg-white/15" : "bg-[oklch(0.96_0.02_268)]"
                }`}>
                  <s.icon className={`size-5 ${isFeatured ? "text-white" : "text-[oklch(0.62_0.24_268)]"}`} />
                </div>
                <h3 className="font-grotesk text-lg font-semibold leading-snug">{s.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isFeatured ? "text-white/80" : "text-[oklch(0.5_0.04_265)]"}`}>
                  {s.desc}
                </p>
                <a href="#contact" className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${
                  isFeatured ? "text-white" : "text-[oklch(0.62_0.24_268)]"
                }`}>
                  Learn more <ArrowRight className="size-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============== WHY CHOOSE ME ============== */
function WhyChooseMe() {
  const reasons = [
    { icon: ShieldCheck, title: "Reliable Turnarounds", desc: "Deadlines met without compromising the cut. Daily updates, zero ghosting.", glow: "glow-card-blue" },
    { icon: Layers, title: "Story-First Structure", desc: "I architect the narrative before touching a single transition.", glow: "glow-card-orange" },
    { icon: MessagesSquare, title: "Clear Communication", desc: "Loom walkthroughs, structured revisions, and proactive creative direction.", glow: "glow-card-green" },
    { icon: Sparkles, title: "Premium Finishing", desc: "Color, sound, and motion polish that punches above the budget.", glow: "glow-card-blue" },
    { icon: Award, title: "Founder-Level Care", desc: "Co-Founder at Reccut — I treat your project like my own brand.", glow: "glow-card-orange" },
    { icon: Zap, title: "Built For Conversion", desc: "Especially for SaaS ads — every cut tuned to drive the next click.", glow: "glow-card-green" },
  ];
  return (
    <section id="why" className="relative py-28 px-6 bg-background grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
            <span className="size-1.5 rounded-full bg-[oklch(0.85_0.15_268)]" /> Why Choose Me
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Editors are everywhere.<br />
            <span className="italic text-white/60">Story-led editors aren't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <article key={r.title} className={`${r.glow} rounded-[1.5rem] p-7 min-h-[220px] flex flex-col`}>
              <div className="size-11 rounded-xl bg-white/10 grid place-items-center mb-6">
                <r.icon className="size-5 text-white" />
              </div>
              <h3 className="font-grotesk text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== TESTIMONIALS ============== */
function Testimonials() {
  const reviews = [
    {
      name: "Tauseef Rana",
      role: "Content Creator, Developer",
      rating: 5.0,
      text: "Muneeb has extraordinary skills of editing, his attention to understand the requirements and then putting the efforts in editing makes the video more efficient and attention seeking. He is absolutely extra ordinary editor.",
    },
    {
      name: "Roman",
      role: "Content Creator",
      rating: 5.0,
      text: "I didn't have to micromanage anything. He made smart creative choices on his own, and they worked.",
    },
    {
      name: "Umar Premee",
      role: "Content Creator, Freelancer",
      rating: 4.9,
      text: "Most editors just edit. He actually cares. He asks questions. He suggests better shots. He fixes small details.",
    },
    {
      name: "Haroon Awan",
      role: "Content Creator",
      rating: 4.9,
      text: "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity.",
    },
  ];

  // Imperfect, scattered placements (top%, left%, rotate deg, glow class)
  const placements = [
    { top: "6%",  left: "6%",  rot: -8,  glow: "glow-card-orange" },
    { top: "10%", left: "58%", rot: 6,   glow: "glow-card-blue" },
    { top: "52%", left: "20%", rot: 4,   glow: "glow-card-green" },
    { top: "48%", left: "62%", rot: -5,  glow: "glow-card-blue" },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
            <Star className="size-3 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" /> Client Love
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            Words from the<br />
            <span className="italic text-white/60">creators I've worked with.</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm">Tap any card to focus it.</p>
        </div>

        <div className="relative mx-auto h-[640px] md:h-[560px] max-w-5xl">
          {/* Backdrop blur when active */}
          <div
            onClick={() => setActive(null)}
            className={`absolute inset-0 rounded-[2rem] transition-all duration-500 ${
              active !== null ? "bg-black/40 backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />

          {reviews.map((r, i) => {
            const p = placements[i];
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;

            const baseStyle: React.CSSProperties = {
              top: p.top,
              left: p.left,
              transform: `rotate(${p.rot}deg)`,
            };
            const activeStyle: React.CSSProperties = {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(0deg) scale(1.05)",
              zIndex: 50,
            };

            return (
              <article
                key={r.name}
                onClick={() => setActive(isActive ? null : i)}
                style={isActive ? activeStyle : baseStyle}
                className={`absolute w-[300px] md:w-[340px] cursor-pointer rounded-2xl ${p.glow} p-6 will-change-transform
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isDimmed ? "opacity-40 blur-[2px] scale-95" : "opacity-100"}
                  hover:-translate-y-1`}
              >
                <Quote className="size-6 text-white/40 absolute top-4 right-5" />
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-[image:var(--gradient-primary)] grid place-items-center font-grotesk text-white font-bold text-lg shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-grotesk font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-white/60">{r.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                  <span className="text-white font-grotesk font-semibold text-sm">{r.rating.toFixed(1)}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-3.5 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" />
                    ))}
                  </div>
                </div>
                <p className={`mt-3 text-sm text-white/80 leading-relaxed transition-all duration-500 ${
                  isActive ? "line-clamp-none" : "line-clamp-3"
                }`}>{r.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============== PROCESS — dark glow cards ============== */
function Process() {
  return (
    <section id="process" className="relative py-28 px-6 bg-background grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            How I Keep You Ahead<sup className="text-2xl text-white/40">®</sup>
          </h2>
          <p className="mt-4 text-white/70 max-w-md">
            From quick turnaround edits to deep narrative builds — every advantage in the visual revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="glow-card-orange rounded-[1.75rem] p-7 min-h-[320px] flex flex-col">
            <div className="size-11 rounded-xl bg-[oklch(0.72_0.2_50)] grid place-items-center mb-12">
              <Inbox className="size-5 text-white" />
            </div>
            <h3 className="font-display text-3xl text-white">Daily Rough Cuts</h3>
            <p className="mt-3 text-white/70 text-sm max-w-xs">
              Your shortcut to staying ahead — a fresh edit on your desk every morning.
            </p>
          </article>

          <article className="glow-card-blue rounded-[1.75rem] p-7 min-h-[320px] flex flex-col">
            <div className="size-11 rounded-xl bg-[oklch(0.62_0.24_268)] grid place-items-center mb-12">
              <Wrench className="size-5 text-white" />
            </div>
            <h3 className="font-display text-3xl text-white">Curated Pipeline</h3>
            <p className="mt-3 text-white/70 text-sm max-w-xs">
              The most refined editing tools and workflows — tested and tuned for your project.
            </p>
          </article>

          <article className="glow-card-green rounded-[1.75rem] p-7 min-h-[320px] flex flex-col">
            <div className="size-11 rounded-xl bg-[oklch(0.72_0.2_150)] grid place-items-center mb-12">
              <Sparkles className="size-5 text-white" />
            </div>
            <h3 className="font-display text-3xl text-white">Expert Narrative</h3>
            <p className="mt-3 text-white/70 text-sm max-w-xs">
              Actionable story analysis from years cutting brand films, SaaS ads, and long-form.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 stripes" />
        <div className="relative p-10 md:p-14 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl">
            Let's craft something<br />
            <span className="italic text-white/80">unforgettable.</span>
          </h2>
          <p className="mt-4 text-white/75">
            Long-form, SaaS ad, or short-form campaign? I'd love to hear about it.
          </p>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 text-left" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white text-white placeholder:text-white/50 transition" />
            <input type="email" placeholder="Email address" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white text-white placeholder:text-white/50 transition" />
            <textarea placeholder="Tell me about your project…" rows={4} className="md:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white text-white placeholder:text-white/50 transition resize-none" />
            <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium bg-white text-[oklch(0.32_0.22_268)] hover:bg-white/95 transition">
              <Mail className="size-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============== POLICIES ============== */
function Policies() {
  const items = [
    {
      title: "Revisions Policy",
      body: "Each project includes up to 3 rounds of revisions. Additional rounds can be added at a flat per-round rate agreed upon before work begins.",
    },
    {
      title: "Payment Terms",
      body: "50% upfront to lock the slot, 50% on final delivery. Long-term retainers are billed monthly in advance.",
    },
    {
      title: "Turnaround",
      body: "Short-form: 48–72h. Long-form & SaaS ads: 5–10 working days depending on scope. Rush delivery available on request.",
    },
    {
      title: "Ownership & Usage",
      body: "Full commercial rights transfer to the client upon final payment. I retain the right to feature work in my portfolio unless an NDA states otherwise.",
    },
    {
      title: "Confidentiality",
      body: "All raw footage, scripts, and brand assets are handled under strict confidentiality. NDAs are honoured and signed on request.",
    },
    {
      title: "Cancellation",
      body: "Projects cancelled after work has begun are billed pro-rata for time and resources already committed.",
    },
  ];

  return (
    <section id="policies" className="relative py-24 px-6" style={{ background: "var(--cloud)", color: "var(--ink)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.93_0.04_268)] text-[oklch(0.4_0.18_268)] px-3 py-1 text-xs font-medium mb-5">
            Policies & Conditions
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Clear terms.<br />
            <span className="italic text-[oklch(0.5_0.05_265)]">No surprises.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white p-6 shadow-[0_20px_40px_-25px_oklch(0.13_0.04_265_/_0.2)]">
              <h3 className="font-grotesk text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-[oklch(0.5_0.04_265)] leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  const [openTerms, setOpenTerms] = useState(false);

  useEffect(() => {
    if (!openTerms) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenTerms(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openTerms]);

  const terms = [
    { title: "Revisions Policy", body: "Each project includes up to 3 rounds of revisions. Additional rounds can be added at a flat per-round rate agreed upon before work begins." },
    { title: "Payment Terms", body: "50% upfront to lock the slot, 50% on final delivery. Long-term retainers are billed monthly in advance." },
    { title: "Turnaround", body: "Short-form: 48–72h. Long-form & SaaS ads: 5–10 working days depending on scope. Rush delivery available on request." },
    { title: "Ownership & Usage", body: "Full commercial rights transfer to the client upon final payment. I retain the right to feature work in my portfolio unless an NDA states otherwise." },
    { title: "Confidentiality", body: "All raw footage, scripts, and brand assets are handled under strict confidentiality. NDAs are honoured and signed on request." },
    { title: "Cancellation", body: "Projects cancelled after work has begun are billed pro-rata for time and resources already committed." },
  ];

  return (
    <footer className="relative px-6 pb-12 pt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center">
            <Play className="size-4 fill-white text-white" />
          </div>
          <div>
            <div className="font-grotesk font-semibold text-white">Muneeb</div>
            <div className="text-xs text-white/50">Cinematic editing · Reccut Solutions</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="YouTube" className="size-10 rounded-full glass grid place-items-center text-white hover:text-[oklch(0.78_0.2_268)] transition"><Youtube className="size-4" /></a>
          <a href="#" aria-label="Instagram" className="size-10 rounded-full glass grid place-items-center text-white hover:text-[oklch(0.78_0.2_268)] transition"><Instagram className="size-4" /></a>
          <a href="#" aria-label="LinkedIn" className="size-10 rounded-full glass grid place-items-center text-white hover:text-[oklch(0.78_0.2_268)] transition"><Linkedin className="size-4" /></a>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpenTerms(true)}
            className="text-xs text-white/70 hover:text-white underline-offset-4 hover:underline cursor-pointer"
          >
            Terms & Conditions
          </button>
          <div className="text-xs text-white/50">© 2026 Muneeb</div>
        </div>
      </div>

      {/* Terms popup */}
      <div
        className={`fixed inset-0 z-[90] grid place-items-center p-4 md:p-8 transition-all duration-300 ${
          openTerms ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenTerms(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-dark p-8 md:p-10 text-white transition-all duration-500 ${
            openTerms ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          <button
            onClick={() => setOpenTerms(false)}
            className="absolute top-5 right-5 size-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center cursor-pointer"
            aria-label="Close terms"
          >
            <X className="size-4" />
          </button>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
            Terms & Conditions
          </div>
          <h3 className="font-display text-3xl md:text-4xl leading-tight">
            Clear terms.<br />
            <span className="italic text-white/60">No surprises.</span>
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h4 className="font-grotesk font-semibold text-white">{t.title}</h4>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/40">By engaging with Muneeb / Reccut Solutions for any project, you agree to the terms above.</p>
        </div>
      </div>
    </footer>
  );
}
