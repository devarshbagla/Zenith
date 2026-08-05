export const marvel = {
  slug: 'marvel',
  name: 'Marvel Entertainment',
  industry: 'Entertainment & Media',
  founded: 1939,
  publishedAt: '2026-07-18',
  headquarters: 'New York City, New York, USA',
  logline: 'From Chapter 11 bankruptcy to the highest-grossing film franchise in history, financed on a $525 million bet against its own characters.',
  turnaroundPeriod: '1998–2012',
  heroKicker: '1996 · Chapter 11 Bankruptcy',
  heroTitle: 'Marvel: Betting the Company on Iron Man',
  heroDeck:
    'Marvel filed for bankruptcy in 1996 with barely a movie deal to its name. A decade later, it mortgaged its own characters to Merrill Lynch to make a film about a hero nobody thought could carry a franchise.',
  accent: { from: '#0a0a0b', via: '#3a0d12', to: '#c9962a' },
  seo: {
    metaTitle: 'Marvel\'s Turnaround: Bankruptcy to the MCU',
    metaDescription:
      'How Marvel recovered from 1996 bankruptcy to build the Marvel Cinematic Universe, financed by a $525 million bet on Iron Man.',
    keywords: [
      'marvel turnaround story',
      'marvel bankruptcy 1996',
      'marvel cinematic universe origin story',
      'iron man financing 525 million loan',
      'marvel entertainment case study',
      'how marvel avoided bankruptcy',
    ],
  },
  recoveryStat: {
    metric: 'Corporate Milestone',
    before: { label: '1996', value: 'Chapter 11 Bankruptcy' },
    after: { label: '2009', value: '$4B Disney Acquisition' },
  },
  quickFacts: [
    { label: 'Founded', value: '1939, as Timely Publications' },
    { label: 'Low Point', value: '1996 — Marvel Entertainment Group files for Chapter 11 bankruptcy' },
    { label: 'Turnaround Leaders', value: 'Ike Perlmutter & Avi Arad, then Kevin Feige at Marvel Studios' },
    { label: 'Turnaround Window', value: '1998 – 2012' },
    { label: 'Iron Man Financing', value: '$525 million credit facility from Merrill Lynch, secured against film rights to Marvel characters' },
    { label: 'Disney Acquisition, 2009', value: 'Approximately $4 billion' },
    { label: 'Signature Move', value: 'Self-financing and self-producing films to build a shared cinematic universe' },
  ],
  timeline: [
    { year: '1939', phase: 'rise', title: 'Timely Publications', description: 'Marvel\'s predecessor company launches, introducing early superheroes including the original Human Torch and Namor the Sub-Mariner.' },
    { year: '1961', phase: 'rise', title: 'The Marvel Age of Comics', description: 'Stan Lee, Jack Kirby, and Steve Ditko launch the Fantastic Four, Spider-Man, X-Men, and other characters defined by flawed, relatable heroes rather than idealized icons.' },
    { year: '1986–1990s', phase: 'fall', title: 'Leveraged Ownership and a Speculative Bubble', description: 'Marvel changes corporate hands multiple times, eventually controlled by financier Ronald Perelman, while a 1990s comic-collecting speculation bubble inflates sales that later collapse sharply.' },
    { year: '1996', phase: 'crisis', title: 'Chapter 11 Bankruptcy', description: 'Marvel Entertainment Group files for Chapter 11 bankruptcy protection amid collapsing comic sales, heavy debt from Perlman-era acquisitions, and an ownership fight involving investor Carl Icahn.' },
    { year: '1998', phase: 'turnaround', title: 'Marvel Enterprises Is Formed', description: 'Marvel Entertainment Group merges with toy licensee Toy Biz, exiting bankruptcy under the leadership of Toy Biz executives Ike Perlmutter and Avi Arad.' },
    { year: '2000–2004', phase: 'turnaround', title: 'Licensing Films to Hollywood Studios', description: 'Marvel licenses its characters to established studios for major hits including "X-Men" (2000, Fox) and "Spider-Man" (2002, Sony), proving the commercial power of its characters without financing the films itself.' },
    { year: '2005', phase: 'turnaround', title: 'Marvel Studios Is Founded', description: 'Marvel secures a $525 million credit facility from Merrill Lynch, using film rights to a slate of its remaining characters as collateral, to self-finance and self-produce its own movies.' },
    { year: '2008', phase: 'turnaround', title: 'Iron Man Launches the MCU', description: 'Marvel Studios releases "Iron Man," starring Robert Downey Jr. in a career-comeback role, becoming a critical and commercial hit and establishing the interconnected Marvel Cinematic Universe.' },
    { year: '2009', phase: 'zenith', title: 'The Walt Disney Company Acquires Marvel', description: 'Disney acquires Marvel Entertainment for approximately $4 billion, giving Marvel Studios access to Disney\'s distribution scale while Marvel Studios continues operating with creative autonomy.' },
    { year: '2012', phase: 'zenith', title: 'The Avengers Assembles', description: '"The Avengers" unites multiple franchise characters in a single film, validating the shared-universe strategy and becoming, at the time, the third-highest-grossing film in history.' },
  ],
  sections: [
    {
      id: 'rise',
      eyebrow: 'Rise',
      heading: 'The House of Ideas',
      paragraphs: [
        'Marvel\'s roots trace back to 1939 as Timely Publications, but the company\'s defining creative era began in the early 1960s, when writer-editor Stan Lee, alongside artists Jack Kirby and Steve Ditko, introduced the Fantastic Four, Spider-Man, the X-Men, and the Hulk. These characters broke sharply from the idealized, invulnerable superheroes of the era; they had debts, insecurities, and personal failures alongside their powers, a formula that resonated deeply with readers and became Marvel\'s enduring creative identity.',
        'Over the following decades, Marvel built one of the largest and most valuable libraries of characters and stories in modern entertainment, even as the company itself changed ownership repeatedly and was managed, at various points, more as a financial asset to be leveraged than as a creative enterprise to be nurtured.',
      ],
    },
    {
      id: 'fall',
      eyebrow: 'Fall',
      heading: 'A Speculative Bubble and a Leveraged Buyout',
      paragraphs: [
        'By the mid-1980s, Marvel had come under the control of financier Ronald Perelman, whose corporate strategy relied heavily on leveraged acquisitions and cross-holding company debt across a portfolio of businesses. Marvel\'s comic book business briefly benefited from a speculative collecting boom in the early 1990s, as investors and collectors treated comics as appreciating assets, driving publishers to flood the market with variant covers, crossover events, and new titles to capture speculative demand.',
        'That boom proved to be a bubble. As speculative buyers abandoned the market in the mid-1990s, comic sales collapsed sharply, and Marvel found itself carrying debt loads accumulated through Perelman-era acquisitions of trading card and sticker companies that had little strategic connection to its core publishing business, with revenue no longer sufficient to service that debt.',
      ],
    },
    {
      id: 'crisis',
      eyebrow: 'Crisis',
      heading: 'Bankruptcy and a Boardroom War',
      paragraphs: [
        'Marvel Entertainment Group filed for Chapter 11 bankruptcy protection in December 1996, one of the most prominent bankruptcies in the modern entertainment industry. The bankruptcy proceedings themselves became a battleground: financier Carl Icahn built a position in Marvel\'s bonds and fought for control of the reorganized company against Perelman and against Toy Biz, a Marvel toy licensee run by Ike Perlmutter and Avi Arad that held a competing restructuring plan.',
        'The dispute dragged through bankruptcy court for roughly two years, a period during which Marvel\'s core comic business continued to weaken and the company\'s future ownership, and therefore strategic direction, remained genuinely uncertain. It was, in effect, a company whose most valuable assets — its characters — were trapped inside a protracted legal and financial fight rather than being actively developed.',
        'The resolution came in 1998, when Marvel Entertainment Group merged with Toy Biz to form Marvel Enterprises, with Perlmutter and Arad, previously toy licensees rather than publishing executives, taking control of the combined company as it exited bankruptcy.',
      ],
    },
    {
      id: 'turnaround',
      eyebrow: 'Turnaround',
      heading: 'Proving the Characters\' Value Before Betting on Them',
      paragraphs: [
        'Emerging from bankruptcy with little capital and a battered credit history, Marvel\'s new leadership pursued a deliberately cautious strategy for its most promising asset class: licensing film rights to established Hollywood studios rather than attempting to finance movies itself. Twentieth Century Fox\'s "X-Men" in 2000 and Sony\'s "Spider-Man" in 2002 were both major commercial successes, produced entirely with the licensing studios\' capital and risk exposure.',
        'These licensing deals served a crucial function beyond immediate royalty revenue: they proved, empirically and at enormous box office scale, that Marvel\'s characters could anchor major theatrical franchises. That proof point mattered enormously for what came next, because Marvel\'s eventual decision to finance films itself would have been a far harder case to make to lenders without X-Men and Spider-Man\'s box office results as evidence.',
        'By the mid-2000s, however, Marvel\'s leadership recognized a structural problem with the licensing model: the studios financing and producing these films, not Marvel, captured the majority of the economics, and Marvel had limited creative control over how its own characters were portrayed across films made by different studios with different priorities.',
      ],
    },
    {
      id: 'strategy',
      eyebrow: 'Strategy',
      heading: 'Mortgaging the Characters to Finance the Universe',
      paragraphs: [
        'In 2005, Marvel made one of the boldest financing decisions in entertainment history: it secured a $525 million credit facility from Merrill Lynch, using the film rights to a slate of characters, including Iron Man, Captain America, Thor, and others not already licensed away, as collateral. If the resulting films failed, Marvel risked losing the film rights to those characters entirely.',
        'The strategy\'s logic was that self-financing and self-producing films, rather than licensing them to outside studios, would let Marvel capture the full economics of its characters\' box office success and, crucially, allow it to build an interconnected shared universe across multiple film franchises — a creative structure that no single licensing studio, focused only on the character it held rights to, was positioned to execute.',
        'Marvel\'s first self-produced film under this plan, "Iron Man" in 2008, was itself a considerable risk within the risk: Iron Man was a well-regarded but far from top-tier character commercially, and the studio cast Robert Downey Jr. in the lead role at a time when his personal and professional history made him a financially uncertain choice for a franchise-launching blockbuster. Both bets paid off decisively, and the film\'s success validated the entire self-financing thesis.',
      ],
      pullQuote: {
        quote: 'We were betting the company on it. If Iron Man had failed, we would have lost the rights to those characters.',
        attribution: 'Account of Marvel Studios executives describing the 2005 financing structure',
      },
    },
    {
      id: 'leadership',
      eyebrow: 'Leadership',
      heading: 'Toy Executives, a Producer, and a Creative Architect',
      paragraphs: [
        'The leadership that guided Marvel out of bankruptcy came from an unusual direction: Ike Perlmutter and Avi Arad had built their careers around Marvel\'s toy licensing business, not comic book publishing or film production, giving them a distinctly commercial, execution-focused lens on Marvel\'s intellectual property rather than a purely editorial one.',
        'The individual most credited with architecting the interconnected Marvel Cinematic Universe, however, is Kevin Feige, who became Marvel Studios\' president in 2007 and pushed for the long-horizon, multi-film continuity strategy — including mid-credits scenes that hinted at future team-ups — years before "The Avengers" would prove the concept commercially in 2012.',
        'The 2009 acquisition by Disney for approximately $4 billion added a further leadership dimension: Marvel Studios retained substantial creative autonomy over its film slate even as it gained access to Disney\'s distribution scale, marketing infrastructure, and balance sheet — a structure that let Marvel Studios continue operating with the focus of an independent studio while benefiting from a much larger parent company\'s resources.',
      ],
    },
    {
      id: 'innovation',
      eyebrow: 'Innovation',
      heading: 'The Shared Universe as a Business Model',
      paragraphs: [
        'The most significant innovation to emerge from Marvel\'s turnaround was not any single film, but the shared cinematic universe structure itself — individual franchises (Iron Man, Thor, Captain America) that stood on their own commercially while also building toward crossover events (The Avengers) that no single-character franchise could replicate alone.',
        'This structure let Marvel Studios treat each film partly as a standalone product and partly as a long-form serialized narrative, encouraging audiences to see multiple films across a release calendar rather than a single franchise in isolation — a model that dramatically increased the total box office and engagement Marvel could generate from its character portfolio compared to licensing each character out independently.',
        'The approach required significant creative and logistical coordination across dozens of films and, eventually, television series, an operational innovation in franchise management that has since been widely imitated, with mixed success, by other studios and media companies attempting to build their own "cinematic universes."',
      ],
    },
    {
      id: 'financial-recovery',
      eyebrow: 'Financial Recovery',
      heading: 'From Bankruptcy Court to the Highest-Grossing Franchise in History',
      paragraphs: [
        'Marvel\'s financial recovery unfolded in two distinct phases. The first, from 1998 through the mid-2000s, was a licensing-driven stabilization: royalty revenue from Fox\'s X-Men and Sony\'s Spider-Man franchises rebuilt Marvel\'s balance sheet and credibility without requiring it to take on significant production risk itself.',
        'The second phase, beginning with the 2005 Merrill Lynch financing and the 2008 release of "Iron Man," was dramatically more lucrative. Marvel Studios\' films collectively grossed billions of dollars, culminating in "The Avengers" becoming, at its 2012 release, the third-highest-grossing film in history, and the broader Marvel Cinematic Universe eventually becoming the highest-grossing film franchise ever produced.',
        'The 2009 Disney acquisition, at roughly $4 billion, looked in retrospect like a significant bargain relative to the value the MCU generated over the following decade and a half — a valuation gap that reflects how much uncertainty still surrounded Marvel\'s self-financed film strategy at the time of the deal, only a year after "Iron Man" had first proven the model.',
      ],
    },
    {
      id: 'lessons',
      eyebrow: 'Lessons',
      heading: 'What Marvel\'s Turnaround Still Teaches',
      paragraphs: [
        'Marvel\'s recovery demonstrates the value of sequencing risk deliberately: rather than attempting to self-finance films immediately after emerging from bankruptcy with little capital or credibility, Marvel first used licensing deals to prove its characters\' commercial viability with someone else\'s money, then used that proof to justify a far larger, self-funded bet once the underlying thesis was de-risked.',
        'The second lesson concerns the financial courage required to capture the full value of an asset a company already owns. Licensing Spider-Man and X-Men generated real revenue, but it also meant ceding the majority of the economic upside, and creative control, to studios that did not share Marvel\'s long-term interest in the characters. The decision to mortgage remaining character rights to finance self-production was extraordinarily risky, but it was also the only path to capturing the value Marvel\'s later dominance would go on to generate.',
        'The third lesson is architectural: a shared universe, coordinated deliberately across many individual products, can generate more total value than the same assets licensed or sold off independently — provided the coordinating organization has the creative and operational discipline to execute a multi-year plan consistently across dozens of releases.',
      ],
    },
  ],
  keyTakeaways: [
    'Licensing an unproven asset to an established partner can generate the commercial proof needed to justify a much larger, self-financed bet later.',
    'Capturing the full economic value of intellectual property sometimes requires taking on financing risk directly, rather than continuing to license it to others at a lower but safer return.',
    'A shared, coordinated universe of individual products can generate outsized value compared to the same assets developed or licensed independently.',
    'Bankruptcy and ownership disputes can delay, but do not have to permanently destroy, the value of a strong underlying intellectual property portfolio.',
    'Retaining creative autonomy within a larger parent company\'s resources (Disney\'s acquisition of Marvel Studios) can preserve the focus that made an acquired unit successful in the first place.',
  ],
  faq: [
    {
      question: 'Why did Marvel file for bankruptcy in 1996?',
      answer: 'Marvel Entertainment Group filed for Chapter 11 bankruptcy after a 1990s comic-book speculation bubble collapsed, sharply reducing sales, while the company carried significant debt from acquisitions made under owner Ronald Perelman that had little strategic connection to its core publishing business.',
    },
    {
      question: 'How did Marvel finance Iron Man and its early self-produced films?',
      answer: 'In 2005, Marvel secured a $525 million credit facility from Merrill Lynch, putting up the film rights to a slate of characters — including Iron Man, Captain America, and Thor — as collateral. Had the resulting films failed commercially, Marvel risked losing the rights to those characters entirely.',
    },
    {
      question: 'Why did Marvel license X-Men and Spider-Man to other studios instead of making the films itself?',
      answer: 'Coming out of bankruptcy with limited capital and credibility, Marvel licensed its characters to established studios (Fox for X-Men, Sony for Spider-Man) to avoid production risk while proving, at large box-office scale, that its characters could anchor successful franchises — evidence that later supported its decision to self-finance films.',
    },
    {
      question: 'How much did Disney pay to acquire Marvel Entertainment?',
      answer: 'Disney acquired Marvel Entertainment in 2009 for approximately $4 billion, a deal made just a year after "Iron Man" had proven Marvel Studios\' self-financed film strategy, and one that looked increasingly favorable to Disney as the Marvel Cinematic Universe grew into the highest-grossing film franchise in history.',
    },
    {
      question: 'What made Iron Man a risky choice to launch the Marvel Cinematic Universe?',
      answer: 'Iron Man was a well-regarded but not top-tier commercial character relative to Marvel\'s biggest properties, and the studio cast Robert Downey Jr., whose personal history made him a financially uncertain lead for a major franchise launch at the time. Both risks paid off, and the film\'s success validated Marvel\'s broader self-financing strategy.',
    },
  ],
  sources: [
    { label: 'Marvel Entertainment Group Chapter 11 bankruptcy filings', publisher: 'U.S. Bankruptcy Court, District of Delaware', year: '1996' },
    { label: '"Marvel Comics: The Untold Story"', publisher: 'Sean Howe, Harper Perennial', year: '2012' },
    { label: 'Marvel Studios $525 million financing coverage', publisher: 'The Hollywood Reporter', year: '2005' },
    { label: 'Disney–Marvel acquisition coverage', publisher: 'The New York Times', year: '2009' },
    { label: 'Marvel Cinematic Universe box office data', publisher: 'Box Office Mojo' },
  ],
  relatedSlugs: ['nintendo', 'netflix', 'lego'],
}
