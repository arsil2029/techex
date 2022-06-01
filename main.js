let navbar = document.querySelector('.navbar')

window.onscroll = function () {
  if (document.documentElement.scrollTop > 120) {
    navbar.classList.add('scroll')
  }
  else {
    navbar.classList.remove('scroll')
  }
}

let header = document.getElementById("navbarNav");
let btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

