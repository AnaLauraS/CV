function mostrar (a) {
    var x = document.getElementById(a);
   x.classList.replace('no-ver', 'ver');
   var z = document.getElementsByClassName(a);
    z[0].classList.add('mantener');
}

function cambiar (a) {
    var x = document.getElementById(a);
   x.classList.replace('ver', 'no-ver');
   var z = document.getElementsByClassName(a);
    z[0].classList.remove('mantener');
}

function cambiarTodo () {
    var y = document.querySelectorAll('.oculto');
    for (i=0; i<y.length; i++) {
       y[i].classList.replace('ver', 'no-ver');
    };
    var z = document.querySelectorAll('.titulos');
    for (i=0; i<z.length; i++) {
       z[i].classList.remove('mantener');
    };
}

function nueva(a) {
    var x = document.getElementById(a);
  if (x.classList.contains('ver')) {
      cambiar(a);
  }else{
      cambiarTodo();
      mostrar(a);
  };
};


function paraPresentacion (){
    var o = document.querySelector('.presentacion');
    var p = document.querySelector('.btn-ocultar');
    var t = document.querySelector('.btn-ver');
    if (o.classList.contains('no-ver')){
        o.classList.remove('no-ver');
        p.setAttribute('style', 'display: inline;')
        t.setAttribute('style', 'display: none;')
    } else {
        o.classList.add('no-ver');
        p.setAttribute('style', 'display: none;')
        t.setAttribute('style', 'display: inline;')
    }    
}