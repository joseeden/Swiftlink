window.addEventListener('load', () => {
  const videoHeader = document.getElementById('video-header');
  const container = videoHeader.querySelector('.video-inside');

  if (navigator.onLine) {
    console.log('Online: loading Vimeo iframe');

    const iframe = document.createElement('iframe');
    iframe.src = "https://player.vimeo.com/video/1073237590?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0";
    iframe.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    iframe.title = "Site-Swiftlink-banner-vid";
    iframe.frameBorder = "0";
    iframe.style.position = "absolute";
    iframe.style.top = "50%";
    iframe.style.left = "50%";
    iframe.style.width = "177.78vh";
    iframe.style.height = "100vh";
    iframe.style.transform = "translate(-50%, -50%)";
    iframe.style.pointerEvents = "none";
    iframe.style.zIndex = "2";

    container.appendChild(iframe);
  } else {
    console.log('Offline: not injecting iframe');
    videoHeader.classList.add('offline');
  }
});
