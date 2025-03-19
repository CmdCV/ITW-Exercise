document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.fa-bars');
  var navbar = document.querySelector('.navbar-nav');
  hamburger.addEventListener('click', function() {
      navbar.classList.toggle('closed');
  }, false);
});

document.addEventListener('DOMContentLoaded', (event) => {
  var navbar = document.querySelector('.navbar');
  var sticky = navbar.offsetTop;

  window.onscroll = function() {
    myFunction();
  };

  function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
