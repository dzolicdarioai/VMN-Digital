/**
 * About section photo — keep intrinsic `width` / `height` in sync with the real
 * file in `public/`. When you replace the asset, update those numbers.
 */
export const ABOUT_PARTNERSHIP_IMAGE = {
  src: '/about-partnership.jpg',
  /** Pixel dimensions of the file on disk (JPEG) */
  width: 1024,
  height: 853,
  /** Max width the photo occupies in the layout (CSS px); matches `sizes` + frame */
  maxWidthPx: 440,
} as const

/**
 * `sizes` for next/image — aligned with `maxWidthPx` and responsive padding.
 */
export function aboutPartnershipSizes(maxWidthPx = ABOUT_PARTNERSHIP_IMAGE.maxWidthPx) {
  return `(max-width: 1023px) min(100vw - 2rem, ${maxWidthPx}px), ${maxWidthPx}px`
}
