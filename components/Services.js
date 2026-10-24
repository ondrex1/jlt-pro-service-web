"use client";

import { useMemo, useState } from "react";
import { categories, services, TRANSPORT_PER_KM } from "@/lib/data";

const images = [...new Set(services.map((s) => s.img))];

export default function Services() {
  const [category, setCategory] = useState("vse");
  const [activeId, setActiveId] = useState(services[0].id);

  const visible = useMemo(
    () => (category === "vse" ? services : services.filter((s) => s.category === category)),
    [category]
  );
  const active = visible.find((s) => s.id === activeId) ?? visible[0];

  const pickCategory = (id) => {
    setCategory(id);
    const first = id === "vse" ? services[0] : services.find((s) => s.category === id);
    setActiveId(first.id);
  };

  return (
    <section className="section wrap" id="cenik">
      <div className="section__head">
        <h2>Služby a ceník</h2>
        <p>Ceny jsou za jednu hodinu práce. Kolik hodin úklid zabere, odhadneme předem po telefonu nebo při prohlídce.</p>
      </div>

      <div className="services">
        <div className="services__photo" aria-hidden="true">
          {images.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" className={src === active.img ? "is-active" : ""} />
          ))}
          <p className="services__caption">
            <span>{active.name}</span>
            <b>{active.price} Kč/h</b>
          </p>
        </div>

        <div className="services__list">
          <div className="tabs" role="group" aria-label="Filtr služeb">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`tab ${category === c.id ? "is-active" : ""}`}
                aria-pressed={category === c.id}
                onClick={() => pickCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <ul className="prices">
            {visible.map((s) => (
              <li key={s.id}>
                <a
                  className={`price ${s.id === active.id ? "is-active" : ""}`}
                  href={`?sluzba=${s.id}#kalkulacka`}
                  onMouseEnter={() => setActiveId(s.id)}
                  onFocus={() => setActiveId(s.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("jlt:service", { detail: s.id }));
                    document.getElementById("kalkulacka")?.scrollIntoView();
                  }}
                >
                  <span className="price__what">
                    <span className="price__name">{s.name}</span>
                    <span className="price__note">{s.note}</span>
                  </span>
                  <span className="price__num">
                    <b>{s.price}</b> Kč/h
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="transport">
            <span className="transport__tag">Doprava</span>
            <span>
              <b>{TRANSPORT_PER_KM} Kč</b> za kilometr z Nového Strašecí. Kliknutím na službu si spočítáte orientační cenu.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
