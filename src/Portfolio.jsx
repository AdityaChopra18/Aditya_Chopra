import { useState, useEffect, useRef } from "react";
import Adi from "./assets/Adi.jpeg";

/* ═══════════════════════════════════════════════
   THEME TOKENS
   dark  = terminal / engineer vibe
   bold  = vivid orange + cyan, zero purple
   ═══════════════════════════════════════════════ */
const THEMES = {
  dark: {
    bg:       "#080b10",
    bg2:      "#0d1117",
    bg3:      "#161b22",
    text:     "#e6edf3",
    text2:    "#8b949e",
    accent:   "#00ff88",
    border:   "#21262d",
    card:     "#0d1117",
    tagBg:    "rgba(0,255,136,.08)",
    tagText:  "#00ff88",
    navBlur:  "rgba(8,11,16,.88)",
    glow:     "0 0 24px rgba(0,255,136,.3)",
    heroGrad: "linear-gradient(135deg,#080b10 0%,#0a1020 100%)",
  },
  bold: {
    bg:       "#fff8f0",
    bg2:      "#ffffff",
    bg3:      "#fff0e0",
    text:     "#1a0a00",
    text2:    "#7a5a3a",
    accent:   "#f97316",
    border:   "#f0dcc8",
    card:     "#ffffff",
    tagBg:    "rgba(249,115,22,.1)",
    tagText:  "#c2410c",
    navBlur:  "rgba(255,248,240,.9)",
    glow:     "0 8px 32px rgba(249,115,22,.25)",
    heroGrad: "linear-gradient(135deg,#fff8f0 0%,#fff0d0 100%)",
  },
};

/* ═══════════════════════════════════════════════
   YOUR DATA — edit everything in this section!
   ═══════════════════════════════════════════════ */
const ME = {
  name:       "Aditya Chopra",
  nameAccent: "Aditya",        // the word that shows in accent color
  available:  true,
  tagline:    "Web Developer · AI Engineer · ML Practitioner",
  bio1: "I'm a full-stack developer passionate about intelligent systems. I work at the intersection of web engineering, artificial intelligence, and machine learning — turning complex ideas into elegant, functional products.",
  bio2: "Whether it's crafting responsive UIs, building REST APIs, or training neural networks, I thrive on solving hard problems with clean code and creative thinking.",
  stats: [
    // { num: "1+",  label: "YEARS EXP"  },
    { num: "10+", label: "PROJECTS"   },
    { num: "2+",  label: "ML MODELS"  },
  ],
  email:    "adityachopra1808@gmail.com",
  github:   "https://github.com/AdityaChopra18",
  linkedin: "https://linkedin.com/in/aditya-chopra-972688269",
  twitter:  "https://x.com/Aditya70671",
  resume:   "https://drive.google.com/file/d/180wb7-3bNSoQFlhb8s1xDscMx352zIxP/view?usp=sharing",   // link to your resume PDF
};

const SKILLS = [
  { icon: "🌐", name: "Frontend",       tags: ["React","Next.js","TypeScript","Tailwind","Three.js"] },
  { icon: "⚙️", name: "Backend",        tags: ["Node.js","Python","FastAPI","PostgreSQL","Redis"] },
  { icon: "🤖", name: "AI / ML",        tags: ["PyTorch","TensorFlow","Scikit-learn","LangChain","HuggingFace"] },
  { icon: "☁️", name: "DevOps & Cloud", tags: ["Docker","AWS","GCP","CI/CD","Kubernetes"] },
  { icon: "📊", name: "Data Science",   tags: ["Pandas","NumPy","Matplotlib","SQL","Jupyter"] },
  { icon: "🔗", name: "APIs & Tools",   tags: ["REST","GraphQL","OpenAI API","Git","Linux"] },
];

const PROJECTS = [
  // {
  //   emoji: "🧠", type: "AI · NLP",
  //   title: "SmartChat Engine",
  //   desc:  "Fine-tuned LLM chatbot with RAG pipeline for domain-specific Q&A. Built with LangChain, FastAPI, and React.",
  //   tags:  ["Python","LangChain","React"],
  //   link:  "#",
  // },
  {
    emoji: "📈", type: "ML · Finance",
    title: "StockSense ML",
    desc:  "Time-series forecasting for stocks using LSTM & Transformer architectures — 78% directional accuracy.",
    tags:  ["PyTorch","Pandas"],
    link:  "#",
  },
  {
    emoji: "🌍", type: "Web · Full Stack",
    title: "Web Platform for Literature Fest",
    desc:  "Handelling registerations, Schedule Management of 300+ participants, with Admin portal",
    tags:  ["Next.js","Socket.io"],
    link:  "https://github.com/AdityaChopra18/Aarya.git",
  },
  {
    emoji: "👁️", type: "ML · Computer Vision",
    title: "Traffic Management System",
    desc:  "Real-time object detection & tracking with YOLOv8 model, deployed as a IOT System with live webcam feed.",
    tags:  ["YOLOv8","OpenCV"],
    link:  "https://github.com/AdityaChopra18/traffic-management-system.git",
  },
   {
    emoji: "👁️", type: "AI · Computer Vision",
    title: "Traffic Management System 2.0",
    desc:  "Real-time object detection & tracking with custom built model, with Anomly detection in traffic flow, deployed as a IOT System with live webcam feed.",
    tags:  ["OpenCV"],
    link:  "https://github.com/AdityaChopra18/8-sem-project.git",
  },
  // {
  //   emoji: "🔒", type: "Web · Security",
  //   title: "SecureAuth SDK",
  //   desc:  "Open-source auth SDK with MFA, biometrics, and OAuth2. Downloaded 10k+ times on npm.",
  //   tags:  ["Node.js","JWT"],
  //   link:  "#",
  // },
  // {
  //   emoji: "🎙️", type: "AI · Audio",
  //   title: "VoiceGen Studio",
  //   desc:  "Text-to-speech web app with voice cloning using custom fine-tuned HuggingFace models.",
  //   tags:  ["HuggingFace","FastAPI"],
  //   link:  "#",
  // },
];

const TIMELINE = [
  // { date: "2025 – PRESENT", role: "Data Science Intern",    company: " · Internship",    desc: "Leading AI product development, LLM-powered features & ML pipelines serving 1M+ users." },
  // { date: "2022 – 2024",    role: "Full Stack Developer",   company: "StartupXYZ · Full-time",        desc: "Built and shipped the entire web platform from scratch. Led a team of 3 engineers." },
  { date: "2024 – 2024",    role: "Web Development Intern", company: "SkillCraft Technology · Internship",  desc: "Worked on building responsive UI components." },
  { date: "2021 – 2025",    role: "B.Tech. Information Tchnology", company: "Bikaner Technical University · Degree",      desc: "Graduated with 8.91 CGPA." },
];

/* ═══════════════════════════════════════════════
   GLOBAL CSS (injected once into <head>)
   ═══════════════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Syne:wght@400;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes gridSlide {
    to { background-position: 50px 50px; }
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #080b10; }
  ::-webkit-scrollbar-thumb { background: #21262d; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #00ff88; }

  /* responsive nav helpers */
  @media (max-width: 768px) {
    .desk-nav  { display: none !important; }
    .hamburger { display: flex !important; }
  }
  @keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .4; }
}
`;

/* ═══════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   SMALL SHARED COMPONENTS
   ═══════════════════════════════════════════════ */
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity:   visible ? 1 : 0,
      transform: visible ? "none" : "translateY(28px)",
      transition: `opacity .7s ${delay}s, transform .7s ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Tag({ label, t }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono',monospace",
      fontSize: ".62rem", padding: "3px 10px",
      borderRadius: "50px", background: t.tagBg,
      color: t.tagText, letterSpacing: ".06em",
      transition: "background .4s, color .4s",
    }}>
      {label}
    </span>
  );
}

function SectionLabel({ children, t }) {
  return (
    <p style={{
      fontFamily: "'JetBrains Mono',monospace",
      fontSize: ".7rem", letterSpacing: ".25em",
      color: t.accent, marginBottom: ".8rem", textTransform: "uppercase",
    }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Syne',sans-serif", fontWeight: 800,
      fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.03em",
      lineHeight: 1, marginBottom: "1rem",
    }}>
      {children}
    </h2>
  );
}

function OutlineBtn({ href, children, t }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: ".72rem", padding: "9px 16px",
        border: `1px solid ${hov ? t.accent : t.border}`,
        borderRadius: 8, color: hov ? t.accent : t.text2,
        textDecoration: "none", letterSpacing: ".06em",
        transition: "border-color .2s, color .2s",
      }}>
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════ */
function Nav({ theme, setTheme, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about","skills","projects","experience","contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: t.navBlur, backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${t.border}`,
      padding: "0 clamp(1rem,5vw,4rem)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 60, transition: "background .4s, border-color .4s",
    }}>

      {/* logo */}
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700,
        fontSize: "1.1rem", color: t.accent }}>
        &lt;<span style={{ color: t.text2 }}>dev</span>.portfolio /&gt;
      </div>

      {/* desktop links */}
      <ul className="desk-nav" style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: ".8rem", color: t.text2,
              textDecoration: "none", letterSpacing: ".08em",
              transition: "color .2s",
            }}
              onMouseEnter={e => e.target.style.color = t.accent}
              onMouseLeave={e => e.target.style.color = t.text2}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* theme switcher */}
        <div style={{
          background: t.bg3, border: `1px solid ${t.border}`,
          borderRadius: "50px", padding: "4px",
          display: "flex", gap: "4px",
          transition: "background .4s, border-color .4s",
        }}>
          {["dark","bold"].map(th => (
            <button key={th} onClick={() => setTheme(th)} style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: ".6rem", padding: "4px 10px",
              borderRadius: "50px", border: "none", cursor: "pointer",
              transition: "background .3s, color .3s",
              background: theme === th ? t.accent : "transparent",
              color:      theme === th ? t.bg     : t.text2,
            }}>
              {th === "dark" ? " DARK" : " Light"}
            </button>
          ))}
        </div>

        {/* hamburger (mobile) */}
        <div className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", flexDirection: "column",
            gap: "5px", cursor: "pointer", padding: "4px" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 22, height: 2,
              background: t.text2, borderRadius: 2, display: "block" }} />
          ))}
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <ul style={{
          position: "fixed", top: 60, left: 0, right: 0,
          background: t.navBlur, backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${t.border}`,
          padding: "1.5rem 2rem", listStyle: "none",
          display: "flex", flexDirection: "column", gap: "1.5rem", zIndex: 99,
        }}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setMenuOpen(false)} style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: ".9rem", color: t.text2, textDecoration: "none",
              }}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero({ t }) {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink(p => !p), 500);
    return () => clearInterval(id);
  }, []);

  // split name so the accent word gets colored
  const words = ME.name.split(" ");
  const accentIdx = words.findIndex(w => w === ME.nameAccent);

  return (
    <section id="hero" style={{
      minHeight: "100vh", background: t.heroGrad,
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "flex-start",
      padding: "120px clamp(1.5rem,10vw,8rem) 80px",
      position: "relative", overflow: "hidden",
      transition: "background .4s",
    }}>
      {/* animated grid lines */}
      <div style={{
        position: "absolute", inset: 0, opacity: .05,
        backgroundImage: `linear-gradient(${t.accent} 1px,transparent 1px),linear-gradient(90deg,${t.accent} 1px,transparent 1px)`,
        backgroundSize: "50px 50px",
        animation: "gridSlide 20s linear infinite",
        transition: "opacity .4s",
      }} />

      <p style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: ".8rem", letterSpacing: ".2em", color: t.accent,
        marginBottom: "1.2rem", animation: "fadeUp .8s .2s both",
      }}>
        {ME.available ? "// available for work" : "// currently busy"}
      </p>

      <h1 style={{
        fontFamily: "'Syne',sans-serif", fontWeight: 800,
        fontSize: "clamp(3rem,10vw,7rem)", lineHeight: .95,
        letterSpacing: "-.03em", marginBottom: ".6rem",
        animation: "fadeUp .8s .4s both",
      }}>
        {words.map((w, i) => (
          <span key={i}>
            <span style={{ color: i === accentIdx ? t.accent : "inherit",
              transition: "color .4s" }}>{w}</span>
            {i < words.length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "clamp(.9rem,2vw,1.05rem)", color: t.text2,
        maxWidth: 520, marginBottom: "2.5rem",
        animation: "fadeUp .8s .6s both",
      }}>
        {ME.tagline}
        <span style={{ opacity: blink ? 1 : 0, transition: "opacity .1s" }}>_</span>
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap",
        animation: "fadeUp .8s .8s both" }}>
        {/* primary CTA */}
        <a href="#projects"
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
          style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: ".8rem",
            letterSpacing: ".08em", padding: "12px 28px", borderRadius: 6,
            textDecoration: "none", fontWeight: 700,
            background: t.accent, color: t.bg, boxShadow: t.glow,
            transition: "transform .2s", display: "inline-block",
          }}>
          VIEW PROJECTS →
        </a>
        {/* secondary CTA */}
        <a href="#contact"
          onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.text; e.currentTarget.style.transform = "none"; }}
          style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: ".8rem",
            letterSpacing: ".08em", padding: "12px 28px", borderRadius: 6,
            textDecoration: "none", fontWeight: 700,
            border: `1px solid ${t.border}`, color: t.text,
            background: "transparent", transition: "border-color .2s,color .2s,transform .2s",
            display: "inline-block",
          }}>
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════ */
function About({ t }) {
  return (
    <section id="about" style={{
      padding: "100px clamp(1.5rem,8vw,6rem)",
      background: t.bg2, transition: "background .4s", position: "relative", zIndex: 1,
    }}>
      <SectionLabel t={t}>// 01. about</SectionLabel>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "4rem", alignItems: "center",
      }}>
        <Reveal>
          <div style={{
            aspectRatio: 1, borderRadius: 16, background: t.bg3,
            border: `1px solid ${t.border}`, display: "flex",
            alignItems: "center", justifyContent: "center", maxWidth: 280, position: "relative", overflow: "hidden",
            transition: "background .4s, border-color .4s",
          }}>
            <img src={Adi} alt="Aditya Chopra"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }} />
                      </div>
        </Reveal>

        <div>
          <Reveal><SectionTitle>Who I Am</SectionTitle></Reveal>
          <Reveal delay={.1}>
            <p style={{ color: t.text2, marginBottom: "1rem", lineHeight: 1.8 }}>{ME.bio1}</p>
          </Reveal>
          <Reveal delay={.2}>
            <p style={{ color: t.text2, lineHeight: 1.8 }}>{ME.bio2}</p>
          </Reveal>
          <Reveal delay={.3}>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {ME.stats.map(({ num, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "2rem", fontWeight: 700, color: t.accent,
                    lineHeight: 1, transition: "color .4s",
                  }}>{num}</div>
                  <div style={{ fontSize: ".72rem", color: t.text2,
                    letterSpacing: ".1em", marginTop: ".2rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════════ */
function Skills({ t }) {
  return (
    <section id="skills" style={{
      padding: "100px clamp(1.5rem,8vw,6rem)",
      background: t.bg, transition: "background .4s", position: "relative", zIndex: 1,
    }}>
      <SectionLabel t={t}>// 02. skills</SectionLabel>
      <Reveal><SectionTitle>Tech Stack</SectionTitle></Reveal>
      <Reveal delay={.1}>
        <p style={{ color: t.text2, maxWidth: 500, marginBottom: "3rem", fontSize: ".95rem" }}>
          Tools and technologies I work with daily.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "1.5rem" }}>
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * .07}>
            <SkillCard s={s} t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ s, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: t.card, borderRadius: 12, padding: "1.5rem",
        border: `1px solid ${hov ? t.accent : t.border}`,
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? t.glow : "none",
        transition: "transform .25s,border-color .25s,box-shadow .25s,background .4s",
        height: "100%",
      }}>
      <div style={{ fontSize: "1.8rem", marginBottom: ".8rem" }}>{s.icon}</div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem",
        fontWeight: 700, marginBottom: ".8rem", color: t.text }}>{s.name}</div>
      <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
        {s.tags.map(tag => <Tag key={tag} label={tag} t={t} />)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════════ */
function Projects({ t }) {
  return (
    <section id="projects" style={{
      padding: "100px clamp(1.5rem,8vw,6rem)",
      background: t.bg2, transition: "background .4s", position: "relative", zIndex: 1,
    }}>
      <SectionLabel t={t}>// 03. projects</SectionLabel>
      <Reveal><SectionTitle>What I've Built</SectionTitle></Reveal>
      <Reveal delay={.1}>
        <p style={{ color: t.text2, maxWidth: 500, marginBottom: "3rem", fontSize: ".95rem" }}>
          A selection of projects across web, AI, and ML.
        </p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * .07}>
            <ProjectCard p={p} t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: t.card, borderRadius: 14, overflow: "hidden",
        display: "flex", flexDirection: "column",
        border: `1px solid ${hov ? t.accent : t.border}`,
        transform: hov ? "translateY(-6px)" : "none",
        boxShadow: hov ? t.glow : "none",
        transition: "transform .25s,border-color .25s,box-shadow .25s,background .4s",
        height: "100%",
      }}>
      {/* card header */}
      <div style={{
        padding: "2rem 1.5rem 1rem", background: t.bg3,
        minHeight: 110, display: "flex", alignItems: "flex-end",
        position: "relative", overflow: "hidden",
        transition: "background .4s",
      }}>
        <span style={{
          position: "absolute", right: "1rem", top: "50%",
          transform: "translateY(-50%)", fontSize: "4.5rem",
          opacity: .15, pointerEvents: "none", userSelect: "none",
        }}>{p.emoji}</span>
        <span style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem",
          letterSpacing: ".15em", color: t.accent, textTransform: "uppercase",
        }}>{p.type}</span>
      </div>
      {/* card body */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700,
          fontSize: "1.05rem", marginBottom: ".5rem" }}>{p.title}</div>
        <div style={{ color: t.text2, fontSize: ".88rem", flex: 1,
          marginBottom: "1rem", lineHeight: 1.6 }}>{p.desc}</div>
        <div style={{ display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: ".5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
            {p.tags.map(tag => <Tag key={tag} label={tag} t={t} />)}
          </div>
          <a href={p.link} style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem",
            color: t.accent, textDecoration: "none", letterSpacing: ".06em",
            transition: "letter-spacing .2s",
          }}
            onMouseEnter={e => e.currentTarget.style.letterSpacing = ".14em"}
            onMouseLeave={e => e.currentTarget.style.letterSpacing = ".06em"}>
            View →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   EXPERIENCE
   ═══════════════════════════════════════════════ */
function Experience({ t }) {
  return (
    <section id="experience" style={{
      padding: "100px clamp(1.5rem,8vw,6rem)",
      background: t.bg, transition: "background .4s", position: "relative", zIndex: 1,
    }}>
      <SectionLabel t={t}>// 04. experience</SectionLabel>
      <Reveal><SectionTitle>Timeline</SectionTitle></Reveal>
      <Reveal delay={.1}>
        <p style={{ color: t.text2, maxWidth: 500, marginBottom: "3rem", fontSize: ".95rem" }}>
          Where I've worked and what I've built.
        </p>
      </Reveal>

      <div style={{ position: "relative", maxWidth: 680 }}>
        {/* vertical line */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0,
          width: 1, background: t.border, transition: "background .4s" }} />

        {TIMELINE.map((item, i) => (
          <Reveal key={item.role} delay={i * .1}>
            <div style={{ paddingLeft: "2rem", marginBottom: "2.5rem", position: "relative" }}>
              <div style={{
                position: "absolute", left: -5, top: 6,
                width: 11, height: 11, borderRadius: "50%",
                background: t.accent, boxShadow: `0 0 10px ${t.accent}`,
                transition: "background .4s, box-shadow .4s",
              }} />
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".68rem",
                color: t.accent, letterSpacing: ".12em", marginBottom: ".3rem",
                transition: "color .4s" }}>{item.date}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700,
                fontSize: "1.05rem", marginBottom: ".15rem" }}>{item.role}</div>
              <div style={{ fontSize: ".82rem", color: t.text2,
                marginBottom: ".5rem" }}>{item.company}</div>
              <div style={{ fontSize: ".88rem", color: t.text2,
                lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════ */
function Contact({ t }) {
  const contacts = [
    { icon: "📧", label: "Email",    value: ME.email,    href: `mailto:${ME.email}` },
    { icon: "📍", label: "Location", value: "Ajmer, India", href: null },
    // { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/aditya-chopra-972688269", href: ME.linkedin },
    { icon: "⏰", label: "Timezone", value: "UTC+5:30 · IST", href: null },
  ];

  return (
    <section id="contact" style={{
      padding: "100px clamp(1.5rem,8vw,6rem)",
      background: t.bg2, transition: "background .4s", position: "relative", zIndex: 1,
    }}>
      <SectionLabel t={t}>// 05. contact</SectionLabel>
      <Reveal><SectionTitle>Let's Build Something</SectionTitle></Reveal>
      <Reveal delay={.1}>
        <p style={{ color: t.text2, maxWidth: 500, marginBottom: "3rem", fontSize: ".95rem" }}>
          Have a project in mind or just want to say hi? Here's where to find me.
        </p>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem", maxWidth: 900 }}>

        {/* LEFT — contact info cards */}
        <Reveal delay={.1}>
          <div style={{
            background: t.card, border: `1px solid ${t.border}`,
            borderRadius: 16, padding: "2rem",
            transition: "background .4s, border-color .4s",
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem",
              letterSpacing: ".2em", color: t.accent, marginBottom: "1.5rem",
            }}>// get in touch</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contacts.map(({ icon, label, value, href }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem", borderRadius: 10,
                  background: t.bg3, border: `1px solid ${t.border}`,
                  transition: "background .4s, border-color .4s",
                }}>
                  <span style={{ fontSize: "1.4rem", minWidth: 32, textAlign: "center" }}>{icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: ".62rem", letterSpacing: ".12em",
                      color: t.text2, marginBottom: ".2rem",
                    }}>{label}</div>
                    {href ? (
                      <a href={href} style={{
                        color: t.accent, textDecoration: "none",
                        fontSize: ".9rem", fontWeight: 600,
                        transition: "opacity .2s",
                      }}
                        onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: t.text, fontSize: ".9rem", fontWeight: 600 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* RIGHT — availability + socials */}
        <Reveal delay={.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* availability badge */}
            <div style={{
              background: t.card, border: `1px solid ${t.border}`,
              borderRadius: 16, padding: "2rem",
              transition: "background .4s, border-color .4s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 10px #22c55e",
                  animation: "pulse 2s infinite",
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: ".75rem", color: "#22c55e", letterSpacing: ".1em",
                }}>AVAILABLE FOR WORK</span>
              </div>
              <p style={{ color: t.text2, fontSize: ".9rem", lineHeight: 1.7 }}>
                Currently open to full-time roles, freelance projects, and interesting collaborations
                in web, AI, and ML.
              </p>
            </div>

            {/* social links */}
            <div style={{
              background: t.card, border: `1px solid ${t.border}`,
              borderRadius: 16, padding: "2rem",
              transition: "background .4s, border-color .4s",
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem",
                letterSpacing: ".2em", color: t.accent, marginBottom: "1.2rem",
              }}>// find me on</p>
              <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                <OutlineBtn href={ME.github}   t={t}>⬡ GitHub</OutlineBtn>
                <OutlineBtn href={ME.linkedin} t={t}>💼 LinkedIn</OutlineBtn>
                <OutlineBtn href={ME.twitter}  t={t}>🐦 Twitter</OutlineBtn>
                <OutlineBtn href={ME.resume}   t={t}>📄 Resume</OutlineBtn>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer({ t }) {
  return (
    <footer style={{
      background: t.bg, borderTop: `1px solid ${t.border}`,
      padding: "2rem clamp(1.5rem,8vw,6rem)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: "1rem",
      fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem",
      color: t.text2, position: "relative", zIndex: 1,
      transition: "background .4s, border-color .4s",
    }}>
      <span>&lt;<span style={{ color: t.accent }}>dev</span>.portfolio /&gt; · Built with ♥</span>
      <span>© {new Date().getFullYear()} · All rights reserved</span>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   ROOT APP
   ═══════════════════════════════════════════════ */
export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const t = THEMES[theme];

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {/* noise texture */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: .5,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E")`,
      }} />
      <div style={{
        background: t.bg, color: t.text,
        fontFamily: "'Syne',sans-serif", lineHeight: 1.6,
        transition: "background .4s, color .4s", minHeight: "100vh",
      }}>
        <Nav       theme={theme} setTheme={setTheme} t={t} />
        <Hero      t={t} />
        <About     t={t} />
        <Skills    t={t} />
        <Projects  t={t} />
        <Experience t={t} />
        <Contact   t={t} />
        <Footer    t={t} />
      </div>
    </>
  );
}
