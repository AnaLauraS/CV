function ocultar () {
    var y = document.querySelectorAll('.oculto');
    for (i=0; i<y.length; i++) {
        y[i].setAttribute('style', 'display: none;');
    };
};

function mostrar (a) {
    var x = document.getElementById(a);
    x.setAttribute('style', 'display: inline;');
}

function nueva(a) {
    var x = document.getElementById(a);
    if (x.getAttribute('style')=="display: none;") {
        ocultar();
        mostrar(a);
    } else {
        ocultar();
    }
};