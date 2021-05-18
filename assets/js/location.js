const url = 'assets/locations.json'

/* JSONデータの読み込みを非同期で行う*/
const getLocations = () => {
    return new Promise(function (resolve) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                let result = JSON.parse(xhr.responseText);
                resolve(result);
            }
        }
    });
}

getLocations().then(function (locations) {
    let html = '';
    for (let i = 0; i < locations.length; i++){
        html += locations[i].name + '/' + locations[i].address + "<br>"
    }
    document.getElementById('output').innerHTML = html;
})