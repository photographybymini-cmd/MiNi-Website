// Zentrale Liste der handgepflegten Blogbeiträge (mit eigenem Layout).
// Einzige Quelle für Titel, Teaser, Cover und Datum – wird von der
// Blogübersicht und von den einzelnen Beitragsseiten genutzt.

export const staticPosts = [
  {
    slug: 'ein-neues-kapitel',
    href: '/blog/ein-neues-kapitel',
    category: 'Familie',
    title: 'Ein neues Kapitel für uns – und wie es bei MiNi weitergeht',
    teaser: 'Miette & Nicolai erwarten ein Baby. Was das für bereits gebuchte Hochzeiten bedeutet, wie die Babypause aussieht und wie es 2027 bei MiNi weitergeht.',
    cover: '/images/blog/ein-neues-kapitel-hero.jpg',
    date: new Date('2026-05-01'),
  },
  {
    slug: 'lieben-wir-hochzeiten',
    href: '/blog/lieben-wir-hochzeiten',
    category: 'Hochzeiten',
    title: 'Deshalb lieben wir Hochzeiten – 15 unvergessliche Momente',
    teaser: 'Fahrstuhlpannen, Ringhunde, Waldwege ohne Ausfahrt – hier sind 15 Geschichten aus unserem Fotografenalltag, die uns bis heute begleiten.',
    cover: '/images/blog/lieben-wir-hochzeiten-hero.jpg',
    position: '60% 50%',
    date: new Date('2025-10-01'),
  },
  {
    slug: 'gruppenfotos',
    href: '/blog/gruppenfotos',
    category: 'Hochzeiten',
    title: 'Gruppenfotos auf der Hochzeit – stressfrei und schön',
    teaser: 'Gruppenfotos gelten als stressig – dabei müssen sie das gar nicht sein. Unsere 7 Tipps aus der Praxis helfen euch, schöne Erinnerungen ganz ohne Chaos zu schaffen.',
    cover: '/images/blog/gruppenfotos-hero.jpg',
    position: '75% 50%',
    date: new Date('2025-08-01'),
  },
  {
    slug: 'familie-mitwachsen',
    href: '/blog/familie-mitwachsen',
    category: 'Familie',
    title: 'Bilder, die mitwachsen – vom Babybauch bis zur Familie',
    teaser: 'Die Zeit von der Schwangerschaft bis zu den ersten Familienmomenten vergeht schnell. Warum Fotos helfen, diese Reise für immer festzuhalten.',
    cover: '/images/blog/familie-mitwachsen-hero.jpg',
    date: new Date('2025-06-01'),
  },
  {
    slug: 'brautpaare-erzaehlen',
    href: '/blog/brautpaare-erzaehlen',
    category: 'Hochzeiten',
    title: 'Brautpaare erzählen: Warum sie sich für uns entschieden haben',
    teaser: 'Corinna & Simon und Nissrin & Ömer erzählen in eigenen Worten, warum sie sich für MiNi Photography entschieden haben.',
    cover: '/images/blog/brautpaare-erzaehlen-hero.jpg',
    date: new Date('2025-04-01'),
  },
  {
    slug: 'first-look',
    href: '/blog/first-look',
    category: 'Hochzeiten',
    title: 'First Look: ja, nein oder etwas dazwischen?',
    teaser: 'Wann und wie seht ihr euch das erste Mal in eurem Hochzeitsoutfit? Wir zeigen alle Möglichkeiten mit ihren emotionalen und praktischen Vor- und Nachteilen.',
    cover: '/images/blog/first-look-hero.jpg',
    date: new Date('2025-02-01'),
  },
  {
    slug: 'begleitungsdauer',
    href: '/blog/begleitungsdauer',
    category: 'Hochzeiten',
    title: 'Nicht zu kurz, nicht zu lang – Die ideale Begleitungsdauer für eure Hochzeit',
    teaser: 'Wie lange soll euer Fotograf euch begleiten? Wir helfen euch, die perfekte Balance zu finden – mit konkreten Tipps und einer Übersicht unserer Pakete.',
    cover: '/images/blog/begleitungsdauer-hero.jpg',
    date: new Date('2024-12-01'),
  },
];

/** Metadaten eines Beitrags anhand des Slugs holen. */
export function getPost(slug) {
  return staticPosts.find((p) => p.slug === slug);
}

/** Datum als „Monat Jahr" (z. B. „Oktober 2025"). */
export function formatMonthYear(date) {
  return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}
