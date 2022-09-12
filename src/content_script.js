import browser from "webextension-polyfill";

(function () {
  if (window.Run) {
    return;
  }
  window.Run = true;
  browser.runtime.onMessage.addListener(({ command }) => {
    let url;

    switch (command) {
      case "swap-with-cats":
        url = browser.runtime.getURL(
          "src/img/nine-koepfer-lpgAlv8I7V8-unsplash.jpg"
        );
        break;

      case "swap-with-dogs":
        url = browser.runtime.getURL(
          "src/img/ben-michel-Uyn3kXAaZX8-unsplash.jpg"
        );
        break;

      default:
        url = null;
        return;
    }

    if (url) {
      const images = document.getElementsByTagName("img");
      for (var i = 0; i < images.length; i++) {
        images[i].src = url;
      }
    }
  });
})();
