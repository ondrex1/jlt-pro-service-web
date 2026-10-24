"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { PHONE, PHONE_HREF } from "@/lib/data";

const links = [
  { href: "#cenik", label: "Služby a ceník" },
  { href: "#kalkulacka", label: "Kalkulačka" },
  { href: "#postup", label: "Jak to probíhá" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  // která sekce je právě uprostřed okna
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`top ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="top__bar">
        <a className="logo" href="#" aria-label="JLT ProService – nahoru" onClick={() => setOpen(false)}>
          <Logo className="logo__mark" />
        </a>

        <nav className="nav" id="hlavni-menu" aria-label="Hlavní navigace">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={current === l.href ? "is-current" : undefined}
              aria-current={current === l.href ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a className="top__tel" href={PHONE_HREF}>
          {PHONE}
        </a>

        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="hlavni-menu"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
