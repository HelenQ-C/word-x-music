const container = document.querySelector('.container');
const slider = document.querySelector('#slider');

// Update scrollbar position and slider value when user changes slider value
slider.addEventListener('input', () => {
  container.scrollLeft = (container.scrollWidth - container.clientWidth) * slider.value / 100;
});

// Update slider value when user scrolls with scrollbar
container.addEventListener('scroll', () => {
  const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth) * 100;
  slider.value = scrollPercentage;
});

// Update scrollbar position and slider value when user scrolls with mouse wheel or trackpad
container.addEventListener('wheel', event => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
  const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth) * 100;
  slider.value = scrollPercentage;
});

const input = document.querySelector("input");

function setBackgroundSize(input) {
  input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

setBackgroundSize(input);

input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 100;
  const value = +input.value;

  const size = (value - min) / (max - min) * 100;

  return size;
}