"use client";

import { useEffect, useState } from "react";
import { services, contacts, PHONE_HREF, TRANSPORT_PER_KM } from "@/lib/data";

const fmt = (n) => n.toLocaleString("cs-CZ");

export default function Calculator() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [hours, setHours] = useState(4);
  const [km, setKm] = useState(10);

  // výběr služby kliknutím v ceníku
  useEffect(() => {
    const onPick = (e) => setServiceId(e.detail);
    window.addEventListener("jlt:service", onPick);
    return () => window.removeEventListener("jlt:service", onPick);
  }, []);

  const service = services.find((s) => s.id === serviceId);
  const work = service.price * hours;
  const transport = km * TRANSPORT_PER_KM;
  const total = work + transport;

  const mail =
    `mailto:${contacts[0].email}` +
    `?subject=${encodeURIComponent(`Poptávka: ${service.name}`)}` +
    `&body=${encodeURIComponent(
      `Dobrý den,\n\nmám zájem o službu „${service.name}“.\n` +
      `Odhad: ${hours} h práce, doprava ${km} km, orientačně ${fmt(total)} Kč.\n\n` +
      `Adresa: \nTermín, který by se mi hodil: \n\nDěkuji`
    )}`;

  return (
    <section className="section section--tint" id="kalkulacka">
      <div className="wrap calc">
        <div className="calc__form">
          <h2>Kolik to bude stát</h2>
          <p className="calc__lead">Orientační výpočet. Přesný počet hodin domluvíme podle velikosti a stavu prostoru.</p>

          <label className="field">
            <span className="field__label">Služba</span>
            <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} – {s.price} Kč/h
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field__label">
              Počet hodin <output>{hours} h</output>
            </span>
            <input
              type="range"
              min="1"
              max="16"
              step="1"
              value={hours}
              style={{ "--fill": `${((hours - 1) / 15) * 100}%` }}
              onChange={(e) => setHours(+e.target.value)}
            />
          </label>

          <label className="field">
            <span className="field__label">
              Doprava <output>{km} km</output>
            </span>
            <input
              type="range"
              min="0"
              max="80"
              step="1"
              value={km}
              style={{ "--fill": `${(km / 80) * 100}%` }}
              onChange={(e) => setKm(+e.target.value)}
            />
          </label>
        </div>

        <div className="calc__result" aria-live="polite">
          <img src="/img/lahvicky.webp" alt="" loading="lazy" aria-hidden="true" />
          <div className="calc__sum">
            <dl>
              <div>
                <dt>
                  {service.name}, {hours} h × {service.price} Kč
                </dt>
                <dd>{fmt(work)} Kč</dd>
              </div>
              <div>
                <dt>
                  Doprava, {km} km × {TRANSPORT_PER_KM} Kč
                </dt>
                <dd>{fmt(transport)} Kč</dd>
              </div>
            </dl>
            <p className="calc__total">
              <span>Orientačně</span>
              <b>{fmt(total)} Kč</b>
            </p>
            <div className="calc__cta">
              <a className="btn btn--primary" href={PHONE_HREF}>
                Zavolat a domluvit termín
              </a>
              <a className="btn btn--ghost" href={mail}>
                Poslat poptávku e-mailem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}