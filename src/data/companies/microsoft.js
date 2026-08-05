export const microsoft = {
  slug: 'microsoft',
  name: 'Microsoft',
  industry: 'Technology',
  founded: 1975,
  publishedAt: '2026-07-05',
  headquarters: 'Redmond, Washington, USA',
  logline: 'How a "lost decade" under Steve Ballmer gave way to a cloud-first culture that made Microsoft a $3 trillion company.',
  turnaroundPeriod: '2014–2019',
  heroKicker: '2014 · The End of the Lost Decade',
  heroTitle: 'Microsoft: Rewriting the Culture of a Giant',
  heroDeck:
    'By 2013, Microsoft had missed mobile, missed search, and watched its stock stagnate for over a decade. Satya Nadella\'s answer wasn\'t a new product — it was a new mind.',
  accent: { from: '#0a0a0b', via: '#2d3a4a', to: '#5c8a72' },
  seo: {
    metaTitle: 'Microsoft\'s Turnaround Under Satya Nadella',
    metaDescription:
      'How Microsoft ended its stagnant Ballmer-era decade and rebuilt around cloud computing and a growth-mindset culture under CEO Satya Nadella.',
    keywords: [
      'microsoft turnaround story',
      'satya nadella culture change',
      'microsoft lost decade steve ballmer',
      'microsoft cloud first mobile first strategy',
      'microsoft azure growth case study',
    ],
  },
  recoveryStat: {
    metric: 'Market Capitalization',
    before: { label: '2014', value: '~$300B' },
    after: { label: '2024', value: '$3T+' },
  },
  quickFacts: [
    { label: 'Founded', value: '1975, by Bill Gates & Paul Allen' },
    { label: 'Low Point', value: '2013 — stock roughly flat for over a decade' },
    { label: 'Turnaround Leader', value: 'Satya Nadella, CEO from February 2014' },
    { label: 'Turnaround Window', value: '2014 – 2019' },
    { label: 'Market Cap, 2014', value: 'Approximately $300 billion' },
    { label: 'Market Cap, 2024', value: 'Over $3 trillion' },
    { label: 'Signature Move', value: 'Azure cloud investment & a "growth mindset" culture reset' },
  ],
  timeline: [
    { year: '1975', phase: 'rise', title: 'Founding in Albuquerque', description: 'Bill Gates and Paul Allen found Microsoft to sell a BASIC interpreter for the Altair 8800, moving the company to Redmond within a few years.' },
    { year: '1985–1995', phase: 'rise', title: 'Windows Conquers the Desktop', description: 'Windows, then Windows 95 and Office, make Microsoft the dominant operating system and productivity software vendor on the planet.' },
    { year: '1999', phase: 'zenith', title: 'Peak Dot-Com Valuation', description: 'Microsoft briefly becomes the world\'s most valuable company, with a market capitalization exceeding $600 billion.' },
    { year: '2000–2013', phase: 'fall', title: 'The Lost Decade', description: 'Under CEO Steve Ballmer, Microsoft misses the smartphone shift, cedes search to Google, and its stock trades essentially flat for roughly thirteen years despite steady profits.' },
    { year: '2007–2012', phase: 'crisis', title: 'Missing Mobile', description: 'The iPhone (2007) and Android redefine computing; Windows Phone and the Windows 8 "touch-first" redesign both fail to gain meaningful market share.' },
    { year: '2013', phase: 'crisis', title: 'The Nokia Bet', description: 'Microsoft acquires Nokia\'s handset business for $7.2 billion in a last attempt to compete in mobile — a deal largely written off within two years.' },
    { year: '2014', phase: 'turnaround', title: 'Nadella Becomes CEO', description: 'Satya Nadella, head of Microsoft\'s cloud and enterprise group, succeeds Ballmer and immediately declares a "mobile-first, cloud-first" strategy.' },
    { year: '2014', phase: 'turnaround', title: 'Office Goes Cross-Platform', description: 'Microsoft ships Office for iPad and embraces competing platforms it had previously starved of support, prioritizing subscription revenue over platform exclusivity.' },
    { year: '2016', phase: 'turnaround', title: '"Microsoft Loves Linux"', description: 'Microsoft joins the Linux Foundation and open-sources major pieces of .NET, reversing decades of hostility to open-source software.' },
    { year: '2016–2018', phase: 'turnaround', title: 'LinkedIn and GitHub Acquisitions', description: 'Microsoft acquires LinkedIn for $26.2 billion and GitHub for $7.5 billion, expanding its data and developer-platform reach beyond Windows.' },
    { year: '2019', phase: 'zenith', title: 'Back to $1 Trillion', description: 'Microsoft crosses a $1 trillion market capitalization, joining Apple and Amazon and confirming the cloud strategy had fully repriced the company.' },
    { year: '2023–2024', phase: 'zenith', title: 'The AI Bet Pays Off', description: 'A multibillion-dollar partnership with OpenAI and rapid Azure AI growth help push Microsoft\'s market capitalization past $3 trillion.' },
  ],
  sections: [
    {
      id: 'rise',
      eyebrow: 'Rise',
      heading: 'The Company That Put a Computer on Every Desk',
      paragraphs: [
        'Microsoft\'s ascent through the 1980s and 1990s is one of the most complete platform victories in business history. Bill Gates and Paul Allen\'s early bet — that operating systems and software, not hardware, would be where the enduring value in computing accrued — proved exactly right. MS-DOS, then Windows, then Windows 95 turned Microsoft into the default operating layer for hundreds of millions of PCs, while Office did the same for business productivity software.',
        'By 1999, at the peak of the dot-com boom, Microsoft briefly became the most valuable company in the world, with a market capitalization north of $600 billion. It faced antitrust action from the U.S. Department of Justice precisely because its dominance was so total — a position few companies in history have occupied with as little effective competition.',
      ],
    },
    {
      id: 'fall',
      eyebrow: 'Fall',
      heading: 'The Lost Decade',
      paragraphs: [
        'What followed was one of the strangest declines in corporate history: not bankruptcy, not collapsing revenue, but thirteen years of essentially flat stock performance while the rest of the technology industry reorganized itself around a wave Microsoft mostly missed. Steve Ballmer, who succeeded Gates as CEO in 2000, ran a company that remained hugely profitable on the strength of Windows and Office licensing — but that profitability masked a deepening strategic problem.',
        'Ballmer famously dismissed the 2007 iPhone, predicting it would fail to gain significant market share given its price and lack of a keyboard. Windows Mobile, and later Windows Phone, never recovered from that early miss. Google\'s rise in search and, later, Android\'s dominance of the smartphone operating system market showed that the next major computing platform shift was happening almost entirely outside Microsoft\'s core Windows and Office franchises.',
        'Internally, Microsoft had also developed a reputation for brutal cross-divisional politics, epitomized by a stack-ranking performance review system that pitted employees and teams against one another for limited top ratings. Journalist Kurt Eichenwald\'s widely read 2012 Vanity Fair account of Microsoft\'s "lost decade" argued that this internal competition had become more consuming, for many teams, than competing with rivals outside the company.',
      ],
    },
    {
      id: 'crisis',
      eyebrow: 'Crisis',
      heading: 'Windows 8 and the Nokia Gamble',
      paragraphs: [
        'Microsoft\'s attempts to answer the mobile and touch-computing shift compounded the problem rather than solving it. Windows 8, launched in 2012, imposed a jarring touch-first interface on a user base overwhelmingly running desktop PCs with keyboards and mice, generating widespread frustration and a rushed partial reversal in Windows 8.1.',
        'In a final push to establish relevance in mobile hardware, Microsoft acquired Nokia\'s handset and services business in 2013 for $7.2 billion. The deal failed to move the needle against Apple\'s iOS and Google\'s Android duopoly, and Microsoft wrote off $7.6 billion related to the acquisition within two years — a sum larger than the original purchase price, and one of the largest impairment charges in the company\'s history.',
        'By the time Steve Ballmer announced his retirement in 2013, Microsoft was a company with enormous cash flow and almost no credible position in the fastest-growing segment of consumer computing. The market\'s verdict was visible in the stock price: a company earning tens of billions annually was valued as though it had no growth prospects at all.',
      ],
    },
    {
      id: 'turnaround',
      eyebrow: 'Turnaround',
      heading: 'A New CEO, and a Bet on the Cloud Microsoft Already Owned',
      paragraphs: [
        'When Satya Nadella, then head of Microsoft\'s enterprise and cloud group, was named CEO in February 2014, he inherited an asset the market had almost entirely overlooked: Azure, Microsoft\'s cloud infrastructure platform, which had been under quiet development since 2008 under Nadella\'s own leadership. Rather than chasing a fourth attempt at mobile hardware, Nadella declared Microsoft would pursue a "mobile-first, cloud-first" strategy — a phrase that, read carefully, meant the opposite of doubling down on Microsoft-branded phones. It meant making Microsoft\'s software and cloud services excellent on every device, including its competitors\' devices.',
        'The clearest early signal of this shift was Office for iPad, released within months of Nadella\'s appointment — a product Ballmer\'s Microsoft had resisted shipping for years out of concern it would undercut Windows tablet sales. Under Nadella, the calculation reversed: subscription revenue from Office 365 mattered more than which platform ran it, and meeting customers on Apple\'s hardware was better than losing them to alternatives like Apple\'s own iWork or Google Docs.',
      ],
    },
    {
      id: 'strategy',
      eyebrow: 'Strategy',
      heading: 'Platform-Agnostic, Subscription-First, Cloud-Everywhere',
      paragraphs: [
        'Nadella\'s strategic reset rested on three pillars that reinforced one another. First, Microsoft moved its core revenue model from one-time software licenses to recurring subscriptions — Office 365, and eventually Microsoft 365 — which smoothed revenue, deepened customer relationships, and rewarded continuous product improvement over big-bang release cycles.',
        'Second, Microsoft made an aggressive, sustained capital commitment to Azure, investing tens of billions of dollars in data center infrastructure to compete directly with Amazon Web Services, which had a multi-year head start. By pairing that infrastructure with enterprise customers Microsoft already had deep relationships with through Windows Server, Exchange, and Office, Azure grew into a legitimate second pillar of the company\'s revenue alongside productivity software.',
        'Third, Microsoft made a series of large, strategically coherent acquisitions that extended its reach into adjacent data and developer ecosystems: LinkedIn in 2016 for $26.2 billion brought a vast professional social graph and recruiting business; GitHub in 2018 for $7.5 billion made Microsoft the steward of the world\'s largest software development platform, a remarkable turn for a company once treated as open-source software\'s primary antagonist.',
      ],
      pullQuote: {
        quote: 'Our industry does not respect tradition. It only respects innovation.',
        attribution: 'Satya Nadella, in his first email to Microsoft employees as CEO, 2014',
      },
    },
    {
      id: 'leadership',
      eyebrow: 'Leadership',
      heading: 'A Culture Reset, Deliberately Engineered',
      paragraphs: [
        'Nadella treated Microsoft\'s cultural dysfunction as seriously as its product strategy. He publicly championed Stanford psychologist Carol Dweck\'s concept of a "growth mindset" — the idea that ability and intelligence can be developed, rather than being fixed traits to defend — as an explicit alternative to the "know-it-all" culture he believed had calcified under Ballmer.',
        'Concretely, Microsoft eliminated its stack-ranking employee evaluation system, which had incentivized internal competition over collaboration between product teams. Nadella also restructured the company\'s divisions to reduce the silos that had previously led groups like Windows, Office, and Xbox to duplicate work or actively undermine one another\'s initiatives.',
        'Perhaps most tellingly, Nadella was candid in public and internal communications about Microsoft\'s past failures, including its missteps in mobile, in a way that previous Microsoft leadership rarely allowed. That candor, paired with visible changes to how employees were evaluated and rewarded, made the cultural shift feel credible rather than cosmetic to a workforce that had grown skeptical of top-down mandates.',
      ],
    },
    {
      id: 'innovation',
      eyebrow: 'Innovation',
      heading: 'From Windows-Centric to Platform-Agnostic Innovation',
      paragraphs: [
        'Under Nadella, Microsoft\'s most important innovations were less about a single breakthrough product and more about redefining where Microsoft software could live. Visual Studio Code, released in 2015 and made available across Windows, macOS, and Linux, became one of the most widely used developer tools in the world — a stark contrast to an earlier Microsoft that built developer tools primarily to reinforce Windows lock-in.',
        'Microsoft Teams, launched in 2017, was built and scaled rapidly in response to the competitive threat from Slack, eventually becoming a core pillar of the Microsoft 365 suite and a major beneficiary of the shift to remote and hybrid work during the COVID-19 pandemic.',
        'Later in the decade, Microsoft\'s early and deep investment in OpenAI — including a $1 billion commitment in 2019 that expanded into a multibillion-dollar, multi-year partnership — positioned Azure as critical infrastructure for the generative AI boom of the 2020s, extending the same cloud-platform thesis Nadella had set in motion in 2014 into an entirely new computing paradigm.',
      ],
    },
    {
      id: 'financial-recovery',
      eyebrow: 'Financial Recovery',
      heading: 'From a Flat Decade to a $3 Trillion Company',
      paragraphs: [
        'The market\'s re-rating of Microsoft under Nadella was gradual at first and then dramatic. Microsoft\'s market capitalization stood at roughly $300 billion when Nadella took over in 2014 — respectable, but a fraction of its 1999 peak and a valuation that implied minimal growth expectations from investors.',
        'As Azure\'s growth rate and Office 365\'s subscription revenue became visible in quarterly earnings through the mid-2010s, that valuation began to re-rate upward. Microsoft crossed $1 trillion in market capitalization in 2019, becoming the third U.S. company to do so, and continued climbing through the pandemic-driven acceleration of cloud adoption.',
        'By the mid-2020s, fueled further by AI-related cloud demand tied to its OpenAI partnership, Microsoft\'s market capitalization exceeded $3 trillion, placing it among the most valuable companies in the world alongside Apple and Nvidia — a striking outcome for a company that, a decade earlier, was widely regarded by investors as a mature, low-growth legacy software vendor.',
      ],
    },
    {
      id: 'lessons',
      eyebrow: 'Lessons',
      heading: 'What Microsoft\'s Turnaround Still Teaches',
      paragraphs: [
        'Microsoft\'s recovery demonstrates that a turnaround does not always require a company to find a new business; sometimes it requires the company to recognize and properly fund a business it already has. Azure existed years before Nadella became CEO, but it was starved of the strategic priority a genuinely cloud-first company would have given it.',
        'The second lesson is about the cost of platform loyalty taken too far. Withholding Office from the iPad protected Windows tablet sales in the short term but ceded goodwill, data, and subscription revenue to competitors in the meantime. Meeting customers on the platforms they actually use, rather than the platforms a company wishes they used, proved to be the more durable strategy.',
        'The third lesson is cultural, and often underweighted in strategy-focused retrospectives: an internal culture that rewards defending existing knowledge over acquiring new knowledge will eventually produce a company that cannot adapt to platform shifts, no matter how talented its individual employees are. Nadella\'s explicit, sustained effort to change performance incentives and leadership behavior was not a soft complement to the cloud strategy — it was a precondition for the organization being able to execute it at all.',
      ],
    },
  ],
  keyTakeaways: [
    'A turnaround can be built around an existing but underfunded asset (Azure) rather than requiring an entirely new bet.',
    'Prioritizing subscription revenue and cross-platform reach over protecting a legacy platform (Windows) can unlock growth a company is otherwise leaving on the table.',
    'Large, strategically coherent acquisitions (LinkedIn, GitHub) can extend a core platform into adjacent data and developer ecosystems.',
    'Changing formal incentive systems (ending stack ranking) is often necessary to make a cultural reset credible to employees, not just a messaging exercise.',
    'Public candor from leadership about past strategic failures can accelerate, rather than undermine, organizational trust during a reset.',
    'A stagnant stock price over many profitable years is itself a signal that the market has priced in a lack of future growth — and a credible strategic pivot can re-rate a company dramatically.',
  ],
  faq: [
    {
      question: 'Why is Microsoft\'s 2000–2014 period called the "lost decade"?',
      answer: 'The term refers to the roughly thirteen years during which Microsoft remained highly profitable on Windows and Office revenue, but its stock price traded essentially flat while the company missed major platform shifts in search, social media, and especially mobile computing following the launch of the iPhone and Android.',
    },
    {
      question: 'What made Satya Nadella\'s strategy different from Steve Ballmer\'s?',
      answer: 'Nadella prioritized making Microsoft\'s cloud services and productivity software excellent across all platforms, including competitors\' devices, over protecting Windows market share. He also invested heavily in Azure, which had existed under Ballmer but was not treated as a top strategic priority, and pursued open-source and cross-platform initiatives Ballmer-era Microsoft had generally resisted.',
    },
    {
      question: 'How much did the Nokia acquisition cost Microsoft?',
      answer: 'Microsoft acquired Nokia\'s handset and services business in 2013 for approximately $7.2 billion. Within roughly two years, Microsoft wrote off $7.6 billion related to the acquisition, effectively exceeding the original purchase price, and later exited the smartphone hardware business.',
    },
    {
      question: 'What is Microsoft\'s "growth mindset" culture change?',
      answer: 'Drawing on psychologist Carol Dweck\'s research, Nadella promoted a "growth mindset" — treating skills and intelligence as developable rather than fixed — as an explicit alternative to what he characterized as a "know-it-all" culture at Microsoft. This was paired with concrete changes, including ending the company\'s stack-ranking performance review system.',
    },
    {
      question: 'How large is Microsoft\'s market capitalization today compared to its 2014 low point?',
      answer: 'Microsoft\'s market capitalization was approximately $300 billion when Nadella became CEO in 2014. By the mid-2020s, driven by Azure\'s growth and its AI partnership with OpenAI, Microsoft\'s market capitalization exceeded $3 trillion.',
    },
  ],
  sources: [
    { label: 'Microsoft Corporation Annual Reports (Form 10-K filings)', publisher: 'U.S. Securities and Exchange Commission', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=Microsoft+Corp&type=10-K&dateb=&owner=include&count=40' },
    { label: '"Hit Refresh"', publisher: 'Satya Nadella, HarperBusiness', year: '2017' },
    { label: '"Microsoft\'s Lost Decade"', publisher: 'Kurt Eichenwald, Vanity Fair', year: '2012' },
    { label: 'Microsoft market capitalization milestone reporting', publisher: 'Bloomberg' },
    { label: 'Nokia acquisition and write-down reporting', publisher: 'Reuters' },
  ],
  relatedSlugs: ['apple', 'adobe', 'ibm'],
}
