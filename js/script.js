// Show methods
function button(c) {
  if (c == 1) {
    document.getElementById('method1').style.display = 'block';
    document.getElementById('method2').style.display = 'none';
  } else {
    document.getElementById('method2').style.display = 'block';
    document.getElementById('method1').style.display = 'none';
  }
}
// End show methods

// Scroll top button
var topButton = document.getElementById('scroll-top');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End scroll top button
