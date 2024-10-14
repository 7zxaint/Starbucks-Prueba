function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function adjustMenu() {
    if (isMobile()) {
        document.getElementById('menu-text').style.display = 'none';
        document.getElementById('rewards-text').style.display = 'none';

        document.getElementById('menu-icon').style.display = 'inline';
        document.getElementById('rewards-icon').style.display = 'inline';

        document.getElementById('localizar-icon').style.display = 'inline';
        document.getElementById('localizar-text').style.display = 'none';

        document.getElementById('unete-text').style.display = 'none';
        document.getElementById('ingresar-text').style.display = 'none';
        document.getElementById('ingresar-icon').style.display = 'inline';
    }
}

window.onload = adjustMenu;
