import { createFileRoute } from "@tanstack/react-router";
import { Play, Sparkles, Star, Users, Award, Palette, Film, Wand2, Mail, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shoaib Hassan — Narrative-Driven Video Editor" },
      { name: "description", content: "Co-Founder at Reccut Solutions. 3+ years crafting cinematic stories through narrative-driven video editing, color grading, and sound design." },
      { property: "og:title", content: "Shoaib Hassan — Narrative-Driven Video Editor" },
      { property: "og:description", content: "Cinematic editing portfolio of Shoaib Hassan, Co-Founder at Reccut Solutions." },
    ],
  }),
  component: Index,
});

const videos = [
  { id: "placeholder1", title: "Brand Commercial — Aurora", category: "Commercials", glow: "glow-border-orange" },
  { id: "placeholder2", title: "Travel Vlog — Northern Lights", category: "Vlogs", glow: "glow-border-blue" },
  { id: "placeholder3", title: "Short-form Reel — City Pulse", category: "Short-form", glow: "glow-border-green" },
  { id: "placeholder4", title: "Documentary — The Maker", category: "Commercials", glow: "glow-border-orange" },
  { id: "placeholder5", title: "YouTube Cut — Tech Review", category: "Vlogs", glow: "glow-border-blue" },
  { id: "placeholder6", title: "TikTok Series — Fast Cuts", category: "Short-form", glow: "glow-border-green" },
];

const services = [
  { icon: Film, title: "Dynamic Storytelling", desc: "Crafting a narrative that keeps viewers engaged from the first frame to the last." },
  { icon: Palette, title: "Professional Color Grading", desc: "Enhancing the visual mood of every frame with cinematic color science." },
  { icon: Wand2, title: "Seamless Transitions & Sound Design", desc: "A polished, high-end feel for every project — motion, rhythm, and audio in sync." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4">
      <nav className="glass rounded-full px-6 py-3 flex items-center gap-8 max-w-4xl w-full">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="size-7 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center">
            <Play className="size-3.5 fill-white text-white" />
          </span>
          <span>Shoaib<span className="text-primary">.</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground ml-auto">
          <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
          <li><a href="#stats" className="hover:text-foreground transition">About</a></li>
          <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
          <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
        </ul>
        <a href="#contact" className="ml-auto md:ml-0 rounded-full px-4 py-2 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-blue)] hover:opacity-90 transition">
          Let's Talk
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <Sparkles className="size-3.5 text-primary" />
          Available for new projects · Q2 2026
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
          <span className="text-gradient">Shoaib Hassan:</span>
          <br />
          Narrative-Driven
          <br />
          <span className="italic font-light text-muted-foreground">Video Editing.</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          Co-Founder at <span className="text-foreground font-medium">Reccut Solutions</span> · 3+ years of experience in crafting cinematic stories that move audiences and brands.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-blue)] hover:scale-[1.02] transition">
            View My Work
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium glass hover:bg-white/10 transition">
            Let's Collaborate
          </a>
        </div>

        {/* Floating preview cards */}
        <div className="relative mt-20 hidden md:block h-64">
          <div className="absolute left-0 top-4 glass rounded-2xl p-4 w-56 text-left rotate-[-6deg] glow-border-orange">
            <div className="text-xs text-muted-foreground">Color Grade</div>
            <div className="mt-1 font-display text-2xl">Cinematic LUT</div>
            <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 glass rounded-2xl p-5 w-72 text-left glow-border-blue">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary animate-pulse" /> Now Editing
            </div>
            <div className="mt-2 font-display text-xl">Reccut · Brand Film</div>
            <div className="mt-3 flex gap-1.5">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1 rounded-full bg-primary/60" style={{ height: `${10 + Math.abs(Math.sin(i)) * 30}px` }} />
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-6 glass rounded-2xl p-4 w-56 text-left rotate-[6deg] glow-border-green">
            <div className="text-xs text-muted-foreground">Render Status</div>
            <div className="mt-1 font-display text-2xl">4K · 60fps</div>
            <div className="mt-3 text-xs text-[oklch(0.78_0.18_150)]">Export complete ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Award, value: "3+", label: "Years of Professional Experience" },
    { icon: Users, value: "10+", label: "Global Clients Served" },
    { icon: Star, value: "4.8/5", label: "Average Rating for Excellence" },
  ];
  return (
    <section id="stats" className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-5 px-2 pt-6 md:pt-0 first:pt-0">
            <div className="size-12 shrink-0 rounded-xl glass grid place-items-center">
              <it.icon className="size-5 text-primary" />
            </div>
            <div>
              <div className="font-display text-3xl font-semibold">{it.value}</div>
              <div className="text-sm text-muted-foreground">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", "Commercials", "Vlogs", "Short-form"];
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-4">
              <span className="size-1.5 rounded-full bg-primary" /> Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
              Stories that <span className="text-gradient">cut deep,</span> frames that linger.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === c ? "bg-[image:var(--gradient-primary)] text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <article key={v.id} className={`glass rounded-2xl overflow-hidden ${v.glow} group`}>
              <div className="aspect-video bg-black relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{v.category}</div>
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition">{v.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-4">
            Expertise & Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            Every project, <span className="text-gradient">end-to-end polished.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From the first cut to the final render, every decision serves the story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white text-[oklch(0.18_0.04_265)] p-7 hover:-translate-y-1 transition shadow-xl">
              <div className="size-12 rounded-xl bg-[oklch(0.96_0.01_265)] grid place-items-center mb-6">
                <s.icon className="size-5 text-[oklch(0.5_0.2_265)]" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[oklch(0.45_0.03_265)]">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.5_0.2_265)]">
                Learn more <ArrowRight className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto glass rounded-3xl p-10 md:p-14 text-center mesh-bg">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let's craft something <span className="text-gradient">unforgettable.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Got a brand film, YouTube series, or short-form campaign in mind? I'd love to hear about it.
        </p>

        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 text-left" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary transition" />
          <input type="email" placeholder="Email address" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary transition" />
          <textarea placeholder="Tell me about your project…" rows={4} className="md:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary transition resize-none" />
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-blue)] hover:scale-[1.01] transition">
            <Mail className="size-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-[image:var(--gradient-primary)] grid place-items-center">
            <Play className="size-4 fill-white text-white" />
          </div>
          <div>
            <div className="font-display font-semibold">Reccut Solutions</div>
            <div className="text-xs text-muted-foreground">Cinematic editing studio</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="YouTube" className="size-10 rounded-full glass grid place-items-center hover:text-primary transition"><Youtube className="size-4" /></a>
          <a href="#" aria-label="Instagram" className="size-10 rounded-full glass grid place-items-center hover:text-primary transition"><Instagram className="size-4" /></a>
          <a href="#" aria-label="LinkedIn" className="size-10 rounded-full glass grid place-items-center hover:text-primary transition"><Linkedin className="size-4" /></a>
        </div>

        <div className="text-xs text-muted-foreground">© 2026 Shoaib Hassan. All rights reserved.</div>
      </div>
    </footer>
  );
}
