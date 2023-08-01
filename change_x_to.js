const src = chrome.runtime.getURL("/icons/image.png");

window.addEventListener('load', () => {
  const link = document.querySelector('link[rel="shortcut icon"]');
  if (link) {
    link.setAttribute('href', src);
  }

  waitForSelector('#react-root header h1[role="heading"] svg').then((logo) => {
    if (!logo) return;
    logo.outerHTML = `<img src="${src}">`;
  });

  // Splash Logo
  // waitForSelector('#placeholder > svg').then((splash) => {
  //   if (!splash) return;
  //   splash.outerHTML = `<img src="${src}">`;
  // });
});

function waitForSelector(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) return resolve(document.querySelector(selector));

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });
  });
}
