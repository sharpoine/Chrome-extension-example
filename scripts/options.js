const saveOptions = () => {



    // Formun gönderme işlemini işleyen bir işlev ekleyin.


    // URL'yi veritabanına kaydet.
    const iurl = document.getElementById('url').value;


    chrome.storage.local.get({ urls: [] }, (data) => {

        // Veritabanı yoksa, yeni bir tane oluşturun.
        if (Object.keys(data).length == 0) {
            data = { urls: [] };
        }

        // URL'yi veritabanına ekleyin.
        var urls = data.urls
        urls.push({ url: iurl })


        // Veritabanı güncellemesini kaydedin.
        chrome.storage.local.set({ urls: urls }, () => {
            console.log('Veritabanı oluşturuldu')
        });

        // Veritabanı içeriğini HTML listesine ekleyin.

        restoreOptions()
    });

};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.local.get({ urls: [] }, (data) => {
        document.getElementById("data-list").innerHTML='';
        // Veritabanı yoksa, yeni bir tane oluşturun.
      
        if (Object.keys(data).length == 0) {
            data = { urls: [] };
        }

        // Veritabanı içeriğini HTML listesine ekleyin.
        const rows = data.urls;
        if (rows) {
            rows.forEach((row) => {
                // URL'yi alın.
                const url = row.url;
                const li = document.createElement("li");
                li.innerHTML = `${url}`;
                document.getElementById("data-list").appendChild(li);
                // URL'yi işleyin.
                // ...
            });
        }

    });

};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);