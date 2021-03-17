(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn4: document.querySelector("[data-modal-open4]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn4.addEventListener("click", toggleModal);
  function toggleModal () {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs2 = {
    openModalBtn: document.querySelector("[data-modal-open2]"),
    closeModalBtn: document.querySelector("[data-modal-close2]"),
    modal: document.querySelector("[data-modal2]"),
  };
  refs2.openModalBtn.addEventListener("click", toggleModal2);
  refs2.closeModalBtn.addEventListener("click", toggleModal2);
  function toggleModal2 () {
    refs2.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs3 = {
    openModalBtn: document.querySelector("[data-modal-open3]"),
    closeModalBtn: document.querySelector("[data-modal-close3]"),
    modal: document.querySelector("[data-modal3]"),
  };
  refs3.openModalBtn.addEventListener("click", toggleModal3);
  refs3.closeModalBtn.addEventListener("click", toggleModal3);
  function toggleModal3 () {
    refs3.modal.classList.toggle("is-hidden");
  }
})();