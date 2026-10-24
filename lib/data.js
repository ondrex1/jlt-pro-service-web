export const PHONE = "+420 724 826 601";
export const PHONE_HREF = "tel:+420724826601";
export const TRANSPORT_PER_KM = 12;

export const contacts = [
  {
    name: "Jitka Urbanová",
    phone: "+420 724 826 601",
    phoneHref: "tel:+420724826601",
    email: "jitka.urbanova@jltproservice.cz",
  },
  {
    name: "Lukáš Tichý",
    // TODO: doplnit Lukášovo telefonní číslo (bez čísla se na webu telefon nezobrazí)
    phone: null,
    phoneHref: null,
    email: "lukas.tichy@jltproservice.cz",
  },
];

// TODO: doplnit odkazy na profily
export const socials = {
  facebook: "#",
  instagram: "#",
};

export const categories = [
  { id: "vse", label: "Vše" },
  { id: "domacnost", label: "Domácnost" },
  { id: "okna", label: "Okna" },
  { id: "stavba", label: "Po stavbě" },
];

export const services = [
  {
    id: "pravidelny",
    name: "Pravidelný úklid",
    note: "Opakovaný úklid v intervalu, který vám vyhovuje.",
    price: 260,
    category: "domacnost",
    img: "/img/vysavani.webp",
  },
  {
    id: "generalni",
    name: "Generální úklid",
    note: "Důkladný jednorázový úklid celého bytu nebo domu.",
    price: 350,
    category: "domacnost",
    img: "/img/uterka.webp",
  },
  {
    id: "vystehovani",
    name: "Úklid po vystěhování",
    note: "Byt připravený k předání nebo pro nové nájemníky.",
    price: 350,
    category: "domacnost",
    img: "/img/mop.webp",
  },
  {
    id: "foceni",
    name: "Úklid před focením nemovitosti",
    note: "Pro realitní kanceláře a majitele, kteří chystají inzerát.",
    price: 390,
    category: "domacnost",
    img: "/img/postel.webp",
  },
  {
    id: "okna",
    name: "Mytí oken a rámů",
    note: "Skla z obou stran včetně rámů a parapetů.",
    price: 350,
    category: "okna",
    img: "/img/okno.webp",
  },
  {
    id: "okna-zaluzie",
    name: "Mytí oken, rámů a žaluzií",
    note: "Okna kompletně, včetně vyčištění žaluzií.",
    price: 400,
    category: "okna",
    img: "/img/okno.webp",
  },
  {
    id: "rekonstrukce",
    name: "Úklid po rekonstrukci",
    note: "Stavební prach, zbytky lepidel a barev, hrubý i finální úklid.",
    price: 450,
    category: "stavba",
    img: "/img/reko.webp",
  },
  {
    id: "malovani",
    name: "Úklid po malování",
    note: "Podlahy, okna a zárubně bez šmouh a cákanců.",
    price: 450,
    category: "stavba",
    img: "/img/malovani.webp",
  },
  {
    id: "novostavba",
    name: "Úklid novostavby",
    note: "První úklid před nastěhováním.",
    price: 450,
    category: "stavba",
    img: "/img/novostavba.webp",
  },
];
