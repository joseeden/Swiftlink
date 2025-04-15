/**==============================================================
 * Responsive Fullscreen Background Video Script
 *===============================================================
 * 
 * This script resizes a background video to fully cover the
 * banner area across all screen sizes and aspect ratios.
 * 
 * - Maintains 16:9 aspect ratio by adjusting width or height
 * - Recalculates on page load and window resize
 * - Keeps video centered with absolute positioning
 * 
 * Prevents letterboxing or black bars on ultrawide or tall screens.
 *===============================================================
 */

function adjustVideo() {
  const iframe = document.querySelector('.video-iframe-wrapper iframe');
  if (!iframe) return;

  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  if (screenW / screenH > 16 / 9) {
    // Wider than 16:9 — set width to full viewport, calculate height
    iframe.style.width = '100vw';
    iframe.style.height = '56.25vw'; // 16:9 aspect ratio
  } else {
    // Taller than 16:9 — set height to full viewport, calculate width
    iframe.style.width = '177.78vh'; // 16:9 aspect ratio
    iframe.style.height = '100vh';
  }

  // Always center video
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.position = 'absolute';
  iframe.style.transform = 'translate(-50%, -50%)';
}

window.addEventListener('load', adjustVideo);
window.addEventListener('resize', adjustVideo);
