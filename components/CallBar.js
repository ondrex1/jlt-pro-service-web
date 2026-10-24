"use client";

import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/data";

// Na mobilu po odrolování z úvodu drží telefon na dosah palce.
export default function CallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("kontakt");
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atContact = contact && contact.getBoundingClientRect().top < window.innerHeight;
      setShow(pastHero && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`callbar ${show ? "is-visible" : ""}`} href={PHONE_HREF} tabIndex={show ? 0 : -1} aria-hidden={!show}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.6 3h2.700l1.500 4.200-2 1.500a12 12 0 0 0 6.500 6.500l1.500-2 4.200 1.500v2.700A2.600 2.600 0 0 1 18.400 20 15.400 15.400 0 0 1 4 5.600 2.600 2.600 0 0 1 6.600 3z"
          fill="currentColor"
        />
      </svg>
      Zavolat {PHONE}
    </a>
  );
}
