document.getElementById('ageyes').onclick = okno;

function hideA() {
    alert("Вы должны покинуть данный сайт");
    window.close();
}

function okno(e) {
    if (e.target.nodeName != 'DIV' && e.target.id != 'AGEBUTTON' && e.target.nodeName != 'P' && e.target.nodeName != 'H2') {
        document.getElementById('agepopup').style.display = 'none';
        localStorage.setItem('agepopup1', 'none');
    }
}

if (localStorage.getItem('agepopup1')) {
    document.getElementById('agepopup').style.display = 'none';
}

