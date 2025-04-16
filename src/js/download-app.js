document.querySelector('.stay-conn-dload-btn').addEventListener('click', function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Sample app store URLs
  // const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.yourapp.package'; 
  // const appStoreUrl = 'https://apps.apple.com/app/id1234567890'; 

  const playStoreUrl = 'https://play.google.com/store';
  const appStoreUrl = 'https://www.apple.com/app-store/';
  
  if (/android/i.test(userAgent)) {
    window.location.href = playStoreUrl;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = appStoreUrl;
  } else {
    // Optional fallback for desktop or unknown devices
    window.location.href = 'https://yourwebsite.com/download'; // Or show a modal instead
  }
});