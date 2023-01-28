let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  reset: false,
});

sr.reveal(".home-text", { delay: 150, origin: "top" });
sr.reveal(".home-img", { delay: 300, origin: "top" });
sr.reveal(".about, .services, .cta, .resume, .contact, .copyright", {
  delay: 70,
  origin: "top",
});
