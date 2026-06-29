// Sorgente unica delle FAQ: usata sia dal componente FAQ.astro (testo visibile)
// sia dallo schema JSON-LD FAQPage nel Layout, così restano sempre allineati.
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Quante chiamate può gestire SofIA contemporaneamente?",
    a: "Tutte quelle che servono. SofIA risponde a più chiamate insieme, quindi il telefono non è mai occupato e nessun cliente resta in attesa.",
  },
  {
    q: "Si sente che è un'intelligenza artificiale?",
    a: "SofIA parla con voce naturale e si adatta alla lingua di chi chiama. La maggior parte delle persone la vive come una conversazione normale — e quando serve un intervento umano, passa la palla a te.",
  },
  {
    q: "Devo cambiare numero di telefono o gestionale?",
    a: "No. SofIA si innesta sul numero e sugli strumenti che usi già, sincronizzandosi con il tuo calendario. Nessuna migrazione complicata.",
  },
  {
    q: "Posso configurarla per la mia attività specifica?",
    a: "Sì. Dalla dashboard imposti servizi, orari, prezzi, regole e tono di voce. SofIA si adatta al tuo settore, qualunque esso sia.",
  },
  {
    q: "Cosa succede ai miei appuntamenti già presi su carta?",
    a: "Possiamo importare lo storico se è in un formato digitale leggibile. Per le agende cartacee ti aiutiamo a valutare il modo migliore per partire.",
  },
  {
    q: "Quanto tempo serve per partire?",
    a: "Pochi minuti per la configurazione base. La parte di prova la fai subito, qui dal sito, parlando direttamente con SofIA.",
  },
];
