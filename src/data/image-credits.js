import imageWidths from './image-widths.json'

function buildSrcSet(basePath, widths) {
  return widths.map((w) => `${basePath}-${w}.webp ${w}w`).join(', ')
}

const CC_LICENSE_URLS = {
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'Public Domain': null,
}

const IMAGE_CREDITS = {
  apple: {
    alt: 'The Los Altos, California garage where Steve Jobs and Steve Wozniak founded Apple in 1976',
    photographer: 'Mathieu Thouvenin',
    license: 'CC BY-SA 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Apple_Garage.jpg',
  },
  microsoft: {
    alt: "Aerial view of Microsoft's West Campus in Redmond, Washington",
    photographer: 'Jelson25',
    license: 'Public Domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aerial_Microsoft_West_Campus_August_2009.jpg',
  },
  ibm: {
    alt: "IBM's corporate headquarters building in Armonk, New York",
    photographer: 'Mark Hillary',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:IBM_Armonk_corporate_headquarters_unusual_view.jpg',
  },
  adobe: {
    alt: "Adobe's world headquarters towers in San Jose, California",
    photographer: 'Coolcaesar',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Adobe_HQ.jpg',
  },
  netflix: {
    alt: "Netflix's original headquarters building in Los Gatos, California",
    photographer: 'Coolcaesar',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Netflix_headquarters.jpg',
  },
  nintendo: {
    alt: "Nintendo's corporate headquarters building in Kyoto, Japan",
    photographer: 'Tokumeigakarinoaoshima',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Headquarters_of_Nintendo_Co.,_Ltd.jpg',
  },
  marvel: {
    alt: "1290 Avenue of the Americas in New York, former home of Marvel Entertainment's corporate offices",
    photographer: 'Fletcher6',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1290_Avenue_of_the_Americas.jpg',
  },
  lego: {
    alt: "LEGO House, the LEGO Group's visitor landmark in Billund, Denmark",
    photographer: 'MPhernambucq',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lego_House_Billund.jpg',
  },
  starbucks: {
    alt: 'The original Starbucks storefront at Pike Place Market in Seattle',
    photographer: 'Postdlf',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Original_Starbucks.jpg',
  },
  dominos: {
    alt: "The lobby entrance of Domino's Pizza headquarters at Domino's Farms in Ann Arbor, Michigan",
    photographer: 'Dwight Burdette',
    license: 'CC BY 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Domino's_Pizza_Lobby_Entrance_Domino's_Farms_Ann_Arbor_Township_Michigan.JPG",
  },
  ford: {
    alt: "Ford Motor Company's world headquarters building in Dearborn, Michigan",
    photographer: 'Dwight Burdette',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ford_World_Headquarters,_1_American_Road,_Dearborn,_Michigan_-_panoramio.jpg',
  },
  'general-motors': {
    alt: "The Renaissance Center in Detroit, General Motors' world headquarters",
    photographer: 'Ritcheypro',
    license: 'Public Domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Headquarters_of_GM_in_Detroit.jpg',
  },
  'best-buy': {
    alt: "Best Buy's corporate headquarters building in Richfield, Minnesota",
    photographer: 'Seff0001',
    license: 'Public Domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Best_Buy_corporate_headquarters,_Richfield,_Minnesota_(April_10,_2007).jpg',
  },
  samsung: {
    alt: "Samsung's corporate building in Ridgefield Park, New Jersey",
    photographer: 'Kenneth C. Zirkel',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Samsung_Ridgefield_Park_building,_New_Jersey.jpg',
  },
  burberry: {
    alt: 'A Burberry store on New Bond Street in London',
    photographer: 'Ashauk1~commonswiki',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:BurberryLondon.JPG',
  },
}

export function getStoryImage(slug) {
  const credit = IMAGE_CREDITS[slug]
  if (!credit) return null

  const widths = imageWidths[slug] ?? []
  const basePath = `/images/story/${slug}`

  return {
    src: `${basePath}-${widths[widths.length - 1] ?? 1600}.webp`,
    srcSet: widths.length ? buildSrcSet(basePath, widths) : undefined,
    alt: credit.alt,
    photographer: credit.photographer,
    license: credit.license,
    licenseUrl: CC_LICENSE_URLS[credit.license] ?? null,
    sourceUrl: credit.sourceUrl,
  }
}
