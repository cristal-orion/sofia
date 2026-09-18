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

// FAQ specifiche del listino: alimentano la sezione visibile di /pricing e lo
// schema JSON-LD di quella rotta. Restano separate da quelle di prodotto per
// non mescolare due FAQPage sulla stessa pagina.
export const faqPrezzi: Faq[] = [
  {
    q: "I prezzi sono IVA inclusa?",
    a: "I tre piani sono al netto dell'IVA, che trovi aggiunta in fattura. Fa eccezione l'offerta sul primo mese: gli 85 € sono già IVA inclusa.",
  },
  {
    q: "Come funziona il primo mese a 85 €?",
    a: "Il primo mese costa 85 € IVA inclusa e comprende 500 minuti di conversazione. Dal secondo mese parte il piano che hai scelto, ai prezzi di listino.",
  },
  {
    q: "Cosa sono i minuti inclusi?",
    a: "Sono i minuti di conversazione che SofIA gestisce ogni mese: 1.000 con Base, 2.500 con Pro, 6.000 con Elite. Quando il volume di chiamate cresce, passi al piano superiore.",
  },
  {
    q: "Da quando parte l'abbonamento?",
    a: "Dal giorno dell'attivazione, cioè da quando SofIA inizia a rispondere sul tuo numero. Prima configuriamo insieme numero, agenda e istruzioni.",
  },
  {
    q: "Quanto risparmio con la fatturazione trimestrale?",
    a: "150 € sul piano Base, 300 € sul Pro, 900 € sull'Elite, ogni tre mesi. Il prezzo mensile scende a 200 €, 350 € e 600 €.",
  },
  {
    q: "Posso cambiare piano dopo?",
    a: "Sì. Passi a un piano superiore quando il telefono squilla più di prima: cambiano i minuti inclusi e il numero di linee che SofIA presidia.",
  },
  {
    q: "Posso sentirla prima di attivare?",
    a: "Sì. Dal sito fai una chiamata vera con SofIA: tre minuti, senza carta di credito e senza impegno.",
  },
  {
    q: "Devo cambiare numero di telefono?",
    a: "No. SofIA si innesta sul numero e sugli strumenti che usi già, e si sincronizza con il tuo calendario.",
  },
];
