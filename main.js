window.addEventListener("scroll", function () {
  const element = document.getElementById("nav"); // Sostituisci con l'ID dell'elemento
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});
