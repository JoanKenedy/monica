const modal = document.getElementById("modalPromo");
const cerrar = document.getElementById("modalPromo");
const btnInfo = document.getElementById('btn-more-info')

btnInfo.addEventListener('click', () => myModal())

function myModal() {
  const close = document.getElementById("close");
  modal.classList.add("modal-show");

  close.addEventListener("click", () => {
    modal.classList.remove("modal-show");
  });
  cerrar.addEventListener("click", () => {
    modal.classList.remove("modal-show");
  });
}
