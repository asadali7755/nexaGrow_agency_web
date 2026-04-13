// lib/pexels.ts — All image URLs map
// Always append: ?auto=compress&cs=tinysrgb&w=SIZE when using

const IMG = 'https://images.pexels.com/photos';

export const images = {
  // Hero slides
  hero1: `${IMG}/3183150/pexels-photo-3183150.jpeg`,
  hero2: `${IMG}/8386440/pexels-photo-8386440.jpeg`,
  hero3: `${IMG}/590020/pexels-photo-590020.jpeg`,
  hero4: `${IMG}/1181472/pexels-photo-1181472.jpeg`,
  hero5: `${IMG}/196644/pexels-photo-196644.jpeg`,

  // About
  about: `${IMG}/3184360/pexels-photo-3184360.jpeg`,

  // Services
  svcMarketing: `${IMG}/3184292/pexels-photo-3184292.jpeg`,
  svcAI: `${IMG}/8386440/pexels-photo-8386440.jpeg`,
  svcWeb: `${IMG}/1181472/pexels-photo-1181472.jpeg`,
  svcAds: `${IMG}/590020/pexels-photo-590020.jpeg`,
  svcBrand: `${IMG}/196644/pexels-photo-196644.jpeg`,
  svcContent: `${IMG}/3379934/pexels-photo-3379934.jpeg`,

  // Why slides
  why1: `${IMG}/3184292/pexels-photo-3184292.jpeg`,
  why2: `${IMG}/8386434/pexels-photo-8386434.jpeg`,
  why3: `${IMG}/3184360/pexels-photo-3184360.jpeg`,
  why4: `${IMG}/3182812/pexels-photo-3182812.jpeg`,

  // Team
  asad: `${IMG}/2379004/pexels-photo-2379004.jpeg`,
  james: `${IMG}/1043474/pexels-photo-1043474.jpeg`,
  omar: `${IMG}/3785079/pexels-photo-3785079.jpeg`,
  sarah: `${IMG}/774909/pexels-photo-774909.jpeg`,
  riya: `${IMG}/1181686/pexels-photo-1181686.jpeg`,
  khalid: `${IMG}/220453/pexels-photo-220453.jpeg`,
} as const;

export type ImageKey = keyof typeof images;

/**
 * Returns the Pexels image URL with the specified width.
 * @param key - Image key from the images map
 * @param width - Desired width (default: 800)
 */
export function getPexelsImage(key: ImageKey, width = 800): string {
  return `${images[key]}?auto=compress&cs=tinysrgb&w=${width}`;
}
