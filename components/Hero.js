import { PETALS } from "@/components/Logo";
import { services, PHONE, PHONE_HREF, TRANSPORT_PER_KM } from "@/lib/data";

const FROM = Math.min(...services.map((s) => s.price));

// Úvodní banner: fotka sedí uprostřed rozkvetlého lotosu z loga.
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__panel">
        <div className="hero__copy">
          <h1>
            JLT úklid
            <span>Čistý domov, klidná hlava.</span>
          </h1>
          <p className="hero__lead">
            Uklízíme domácnosti, myjeme okna a dáváme do pořádku byty a domy po rekonstrukci. V&nbsp;Novém Strašecí
            a&nbsp;okolí. Platíte za hodinu práce a&nbsp;ceny znáte předem.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={PHONE_HREF}>
              Zavolat {PHONE}
            </a>
            <a className="btn btn--ghost" href="#cenik">
              Zobrazit ceník
            </a>
          </div>
        </div>

        <div className="hero__bloom">
          <svg className="hero__lotus" viewBox="0 0 64 32" aria-hidden="true">
            {PETALS.map((d, i) => (
              <path key={d} d={d} className={`petal petal--${i + 1}`} />
            ))}
          </svg>
          <div className="hero__photo">
            <img src="/img/uvod.webp" fetchPriority="high" alt="Ruce v růžových rukavicích myjí okno hadříkem a rozprašovačem" />
          </div>
        </div>
      </div>

      <ul className="facts">
        <li>
          <b>od {FROM} Kč</b>
          <span>za hodinu práce</span>
        </li>
        <li>
          <b>{TRANSPORT_PER_KM} Kč</b>
          <span>za kilometr dopravy</span>
        </li>
        <li>
          <b>Cena předem</b>
          <span>hodiny odhadneme po telefonu</span>
        </li>
      </ul>
    </section>
  );
}
