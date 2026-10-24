import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import CallBar from "@/components/CallBar";
import Logo from "@/components/Logo";
import { contacts, PHONE, PHONE_HREF } from "@/lib/data";

export default function Home() {
  return (
    <>
      <a className="skip" href="#cenik">
        Přeskočit na ceník
      </a>
      <Header />

      <main>
        <Hero />

        <Services />
        <Calculator />

        <section className="section wrap" id="postup">
          <div className="process">
            <div className="process__photo">
              <img src="/img/gauc.webp" alt="Ruka v rukavici vysává čalounění" loading="lazy" />
            </div>
            <div>
              <h2>Jak to probíhá</h2>
              <ol className="steps">
                <li>
                  <h3>Zavoláte nebo napíšete</h3>
                  <p>Řeknete nám, co potřebujete uklidit, kde a přibližně jak velký prostor to je.</p>
                </li>
                <li>
                  <h3>Domluvíme rozsah a termín</h3>
                  <p>Odhadneme počet hodin a cenu včetně dopravy, abyste věděli, s čím počítat.</p>
                </li>
                <li>
                  <h3>Přijedeme a uklidíme</h3>
                  <p>V domluvený čas. Platíte za skutečně odpracované hodiny.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="wrap">
            <div className="contact__top">
              <div>
                <h2>Domluvte si úklid</h2>
                <a className="contact__big" href={PHONE_HREF}>
                  {PHONE}
                </a>
                <p className="contact__lead">
                  Zavolejte, nebo nám napište, co potřebujete uklidit. Ozveme se s odhadem hodin a ceny.
                </p>
              </div>
            </div>

            <div className="people">
              {contacts.map((c) => (
                <div className="person" key={c.email}>
                  <h3>{c.name}</h3>
                  {c.phone && <a href={c.phoneHref}>{c.phone}</a>}
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </div>
              ))}
              <div className="person">
                <h3>Sociální sítě</h3>
                <p className="person__soon">Připravujeme…</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot__in">
          <Logo className="foot__logo" title="JLT ProService" />
          <div>
            <h2>Fakturační údaje</h2>
            <address>
              JLT ProService s.r.o.
              <br />
              Lidická 749, 271 01 Nové Strašecí
              <br />
              IČO: 299 00 514
            </address>
          </div>
          <p className="foot__copy">© {new Date().getFullYear()} JLT ProService s.r.o.</p>
        </div>
      </footer>

      <CallBar />
    </>
  );
}
