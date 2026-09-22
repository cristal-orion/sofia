// Sorgente unica dei piani SofIA: la usano il componente Pricing.astro (tabella
// visibile in home e sulla rotta /pricing) e lo schema JSON-LD nel Layout, così
// prezzi, minuti e voci incluse restano sempre allineati.
//
// Prezzi da listino Affinity Lab (settembre 2026), IVA esclusa.

export interface Piano {
  id: string;
  nome: string;
  /** € al mese con fatturazione mensile */
  mensile: number;
  /** € al mese con fatturazione trimestrale (lo sconto sta qui, non sull'anno:
   *  gli annuali spaventavano e convertivano poco) */
  trimestrale: number;
  /** minuti di conversazione inclusi ogni mese */
  minuti: number;
  /** numeri di telefono presidiati, come etichetta */
  numeri: string;
  /** voci incluse in questo piano, oltre a quelle comuni */
  incluso: string[];
  consigliato?: boolean;
}

export const piani: Piano[] = [
  {
    id: "base",
    nome: "Base",
    mensile: 250,
    trimestrale: 200,
    minuti: 1000,
    numeri: "1 numero di telefono",
    incluso: [
      "1.000 minuti di conversazione al mese",
      "1 numero di telefono",
      "Risposta attiva 24/7",
      "CRM appuntamenti",
    ],
  },
  {
    id: "pro",
    nome: "Pro",
    mensile: 450,
    trimestrale: 350,
    minuti: 2500,
    numeri: "Fino a 2 numeri",
    incluso: [
      "2.500 minuti di conversazione al mese",
      "Fino a 2 numeri di telefono",
      "Report mensile",
      "CRM appuntamenti",
    ],
    consigliato: true,
  },
  {
    id: "elite",
    nome: "Elite",
    mensile: 900,
    trimestrale: 600,
    minuti: 6000,
    numeri: "Fino a 4 numeri",
    incluso: [
      "6.000 minuti di conversazione al mese",
      "Fino a 4 numeri di telefono",
      "Setup personalizzato",
      "Integrazioni avanzate",
    ],
  },
];

/** Promo sul primo mese valida fino al 15 ottobre. Attenzione: questa cifra è IVA INCLUSA,
 *  mentre i tre piani qui sopra sono IVA esclusa. Le due basi vanno sempre
 *  etichettate in pagina, mai mostrate una accanto all'altra senza dirlo. */
export const promoPrimoMese = {
  prezzo: 85,
  ivaInclusa: true,
  minuti: 500,
};

/** Presente in tutti e tre i piani: è la base del servizio, non un extra. */
export const inclusoOvunque = [
  {
    titolo: "Numero dedicato",
    testo: "SofIA presidia una linea tua, collegata al numero che usi già.",
  },
  {
    titolo: "Risposta attiva 24/7",
    testo: "SofIA risponde anche di notte e nei giorni festivi.",
  },
  {
    titolo: "CRM appuntamenti",
    testo: "SofIA registra contatti e appuntamenti in un archivio consultabile.",
  },
];

/** Quanto si risparmia su un trimestre scegliendo la fatturazione trimestrale. */
export const risparmioTrimestre = (p: Piano): number =>
  (p.mensile - p.trimestrale) * 3;

/** Quanto si paga in una volta sola con la fatturazione trimestrale. */
export const totaleTrimestre = (p: Piano): number => p.trimestrale * 3;

/** 1000 → "1.000". Separatore delle migliaia fatto a mano: l'immagine Docker
 *  (node:22-alpine) monta un ICU ridotto e toLocaleString("it-IT") non
 *  raggrupperebbe le cifre. */
export const numeroIt = (n: number): string =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
