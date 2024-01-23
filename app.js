document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.type-effect');
  typeWriter(elements, 0);
});

function typeWriter(elements, index) {
  if (index < elements.length) {
      const element = elements[index];
      const text = element.getAttribute('data-text');
      showText(element, text, 0, () => {
          typeWriter(elements, index + 1);
      });
  }
}

function showText(element, text, i, callback) {
  if (i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(() => showText(element, text, i + 1, callback), 120); // Increase the typing speed here
  } else if (callback) {
      setTimeout(callback, 400); // Wait a bit before starting the next element
  }
}
