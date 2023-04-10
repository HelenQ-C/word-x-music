const scale1 = document.getElementById("Button"); 
const imgs = document.getElementById("ToToggle");

imgs.style.display = "none";

scale1.addEventListener("click", function(){
  if (imgs.style.display === "none") {
    imgs.style.display = "block";
  } else {
    imgs.style.display = "none";
  }
});

const scale = document.querySelector('.scale1');

scale1.addEventListener('click', function() {
  if (scale1.classList.contains('clicked')) {
    scale1.classList.remove('clicked');
  } else {
    scale1.classList.add('clicked');
  }
});