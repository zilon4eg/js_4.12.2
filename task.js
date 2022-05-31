function setCookie(name, value, maxAgeSec) {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAgeSec};`;
}

function getCookie(name) {
    try {
        const pairs = document.cookie.split('; ');
        const cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.length + 1);
    }
    catch {
        return null;
    }
    
}

const popup = document.getElementById('subscribe-modal');

if (!getCookie('popup')) {
    popup.classList.add('modal_active');
}
else {
    popup.classList = 'modal'; 
}

popup.querySelector('.modal__close').addEventListener('click', () => {
    setCookie('popup', 'viewed', 3600);
    popup.classList.remove('modal_active');
});