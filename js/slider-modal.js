let indice2 = 1;
muestraSlides(indice2);

function avanzaSlide(n) {
  muestraSlides((indice2 += n));
}

function posicionSlide(n) {
  muestraSlides((indice2 = n));
}

setInterval(function tiempo() {
  muestraSlides((indice2 += 1));
}, 5000);

function muestraSlides(n) {
  let i;
  let slides2 = document.getElementsByClassName("miSlider_2");
  let barras2 = document.getElementsByClassName("barra_2");
  if (n > slides2.length) {
    indice2 = 1;
  }

  if (n < 1) {
    indice2 = slides2.length();
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  for (i = 0; i < barras2.length; i++) {
    barras2[i].className = barras2[i].className.replace(" active_2", "");
  }

  slides2[indice2 - 1].style.display = "block";
  barras2[indice2 - 1].className += " active_2";
}
