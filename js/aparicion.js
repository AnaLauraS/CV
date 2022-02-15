function mostrar (a) {
    var x = document.getElementById(a);
   x.classList.replace('no-ver', 'ver');
}

function cambiar (a) {
    var x = document.getElementById(a);
   x.classList.replace('ver', 'no-ver');
}
function cambiarTodo () {
    var y = document.querySelectorAll('.oculto');
    for (i=0; i<y.length; i++) {
       y[i].classList.replace('ver', 'no-ver');
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

