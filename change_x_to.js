const img = chrome.runtime.getURL("/icons/image.png");

const checkTwitterIcons = () => {
  const heading = document.querySelector("h1[role='heading'] svg");

  if (headingIcon) {
    const parent = headingIcon.parentElement;
    heading.remove();
    const newIcon = document.createElement("img");
    newIcon.setAttribute("src", img);
    newIcon.setAttribute("style", "width:36px;");
    parent.appendChild(newIcon);
  }
}

/**
 * Change Favicon
 * thanks for http://0rbit.cybergence.net/torimodosu.html
 */
function changeFaviconHref() {
  const link = document.querySelector('link[rel="shortcut icon"]');
  if (link) {
    link.setAttribute('href', img);
  }
}

// Change Favicon
window.addEventListener('load', changeFaviconHref);

// DOM監視
timer = setInterval(checkTwitterIcons, 100);
