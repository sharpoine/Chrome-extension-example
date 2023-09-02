// URL'yi kontrol et
function checkURL() {
  // Depolanan URL'leri al
  chrome.storage.local.get({ urls: [] }, (data) => {


    if (Object.keys(data).length == 0) {
      data = { urls: [] };
    }

    // Veritabanı içeriğini HTML listesine ekleyin.
    const rows = data.urls;
    if (rows) {
      rows.forEach((row) => {
        // URL'yi alın.
        const url = row.url;
        // URL'ye eşleşen bir sayfa mı?
        if (window.location.href === url) {
          // Sayfa içeriğini değiştir
          document.body.innerHTML = ''//chrome.storage.local.get("image");
        }
      });
    }

  });



}

// Sayfa yüklendiğinde URL'yi kontrol et
window.addEventListener("load", checkURL);
