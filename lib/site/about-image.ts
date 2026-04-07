/**
 * About section photo — keep intrinsic `width` / `height` in sync with the real
 * `public/about-partnership.png` file (IHDR). When you replace the file with a
 * higher-resolution export, update those numbers to match the new asset.
 */
export const ABOUT_PARTNERSHIP_IMAGE = {
  src: '/about-partnership.png',
  /** Pixel dimensions of the PNG on disk */
  width: 271,
  height: 226,
  /** Max width the image is allowed to occupy in the layout (CSS px) */
  maxWidthPx: 340,
} as const

/**
 * `sizes` for next/image — aligned with `maxWidthPx` and responsive padding.
 */
export function aboutPartnershipSizes(maxWidthPx = ABOUT_PARTNERSHIP_IMAGE.maxWidthPx) {
  return `(max-width: 1023px) min(100vw - 2rem, ${maxWidthPx}px), ${maxWidthPx}px`
}
