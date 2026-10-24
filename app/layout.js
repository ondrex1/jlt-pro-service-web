import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  // doména odvozená z firemních e-mailů – případně upravit
  metadataBase: new URL("https://www.jltproservice.cz"),
  title: "JLT ProService – úklid domácností, mytí oken, úklid po rekonstrukci",
  description:
    "Úklidová firma z Nového Strašecí. Pravidelný a generální úklid, mytí oken a žaluzií, úklid po rekonstrukci a malování. Ceny od 260 Kč za hodinu. Volejte +420 724 826 601.",
  openGraph: {
    title: "JLT ProService – úklidová firma",
    description: "Pravidelný úklid, mytí oken, úklid po rekonstrukci. Ceny vidíte předem.",
    type: "website",
    locale: "cs_CZ",
    images: ["/img/uvod.jpg"],
  },
};

export const viewport = {
  themeColor: "#EDF4FC",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JLT ProService s.r.o.",
  description: "Úklidová firma – pravidelný a generální úklid, mytí oken, úklid po rekonstrukci.",
  telephone: "+420724826601",
  email: "jitka.urbanova@jltproservice.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lidická 749",
    postalCode: "271 01",
    addressLocality: "Nové Strašecí",
    addressCountry: "CZ",
  },
  priceRange: "260–450 Kč/h",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={jost.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
