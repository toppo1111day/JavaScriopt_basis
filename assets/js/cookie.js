const getCookie = (key) => {
    let cookies = document.cookie.split(';');
    for (let i=0; i<cookies.length; i++) {
        let k = cookies[i].split('=');
        if (k[0] == key){
            return decodeURIComponent(k[1]);
        }
        return '';
    }
}

document.getElementById('save').addEventListener('click', function(){
    let email = encodeURIComponent(document.getElementById('email').value);
    document.cookie = 'email=' + email + '; max-age=3600';
})
document.getElementById('email').value = getCookie('email');


