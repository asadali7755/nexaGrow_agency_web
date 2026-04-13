// lib/pexels.ts — All image URLs map (pre-optimized with compression)

const IMG = 'https://images.pexels.com/photos';
const OPT = '?auto=compress&cs=tinysrgb&w=1200';
const OPT_SM = '?auto=compress&cs=tinysrgb&w=600';

export const images = {
  // Hero slides (full width — 1200px)
  hero1: `${IMG}/3183150/pexels-photo-3183150.jpeg${OPT}`,
  hero2: `${IMG}/8386440/pexels-photo-8386440.jpeg${OPT}`,
  hero3: `${IMG}/590020/pexels-photo-590020.jpeg${OPT}`,
  hero4: `${IMG}/1181472/pexels-photo-1181472.jpeg${OPT}`,
  hero5: `${IMG}/196644/pexels-photo-196644.jpeg${OPT}`,

  // About
  about: `${IMG}/3184360/pexels-photo-3184360.jpeg${OPT_SM}`,

  // Services
  svcMarketing: `${IMG}/3184292/pexels-photo-3184292.jpeg${OPT_SM}`,
  svcAI: `${IMG}/8386440/pexels-photo-8386440.jpeg${OPT_SM}`,
  svcWeb: `${IMG}/1181472/pexels-photo-1181472.jpeg${OPT_SM}`,
  svcAds: `${IMG}/590020/pexels-photo-590020.jpeg${OPT_SM}`,
  svcBrand: `${IMG}/196644/pexels-photo-196644.jpeg${OPT_SM}`,
  svcContent: `${IMG}/3379934/pexels-photo-3379934.jpeg${OPT_SM}`,

  // Why slides
  why1: `${IMG}/3184292/pexels-photo-3184292.jpeg${OPT_SM}`,
  why2: `${IMG}/8386434/pexels-photo-8386434.jpeg${OPT_SM}`,
  why3: `${IMG}/3184360/pexels-photo-3184360.jpeg${OPT_SM}`,
  why4: `${IMG}/3182812/pexels-photo-3182812.jpeg${OPT_SM}`,

  // Team
  asad: `${IMG}/3785104/pexels-photo-3785104.jpeg${OPT_SM}`,
  james: `${IMG}/1043474/pexels-photo-1043474.jpeg${OPT_SM}`,
  omar: `${IMG}/3785079/pexels-photo-3785079.jpeg${OPT_SM}`,
  sarah: `${IMG}/774909/pexels-photo-774909.jpeg${OPT_SM}`,
  riya: `${IMG}/1181686/pexels-photo-1181686.jpeg${OPT_SM}`,
  khalid: `${IMG}/220453/pexels-photo-220453.jpeg${OPT_SM}`,
} as const;

export type ImageKey = keyof typeof images;

/**
 * Returns the Pexels image URL with the specified width.
 * @param key - Image key from the images map
 * @param width - Desired width (default: 800)
 */
export function getPexelsImage(key: ImageKey, width = 800): string {
  // Strip existing params and add new width
  const baseUrl = images[key].split('?')[0];
  return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}`;
}
