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

const effect = document.querySelector('.effect');

effect.addEventListener('click', function() {
  if (effect.classList.contains('clicked')) {
    effect.classList.remove('clicked');
  } else {
    effect.classList.add('clicked');
  }
});

const scale2 = document.getElementById("Button2"); 
const imgs2 = document.getElementById("ToToggle2");

imgs2.style.display = "none";

scale2.addEventListener("click", function(){
  if (imgs2.style.display === "none") {
    imgs2.style.display = "block";
  } else {
    imgs2.style.display = "none";
  }
});

const effect2 = document.querySelector('.effect2');

effect2.addEventListener('click', function() {
  if (effect2.classList.contains('clicked')) {
    effect2.classList.remove('clicked');
  } else {
    effect2.classList.add('clicked');
  }
});

const effect3 = document.querySelector('.effect3');

effect3.addEventListener('click', function() {
  if (effect3.classList.contains('clicked')) {
    effect3.classList.remove('clicked');
  } else {
    effect3.classList.add('clicked');
  }
});

const effect4 = document.querySelector('.effect4');

effect4.addEventListener('click', function() {
  if (effect4.classList.contains('clicked')) {
    effect4.classList.remove('clicked');
  } else {
    effect4.classList.add('clicked');
  }
});

const effect5 = document.querySelector('.effect5');

effect5.addEventListener('click', function() {
  if (effect5.classList.contains('clicked')) {
    effect5.classList.remove('clicked');
  } else {
    effect5.classList.add('clicked');
  }
});

const effect6 = document.querySelector('.effect6');

effect6.addEventListener('click', function() {
  if (effect6.classList.contains('clicked')) {
    effect6.classList.remove('clicked');
  } else {
    effect6.classList.add('clicked');
  }
});