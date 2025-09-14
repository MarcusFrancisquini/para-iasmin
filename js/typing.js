const text = document.querySelector(".typing-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Bom dia";
  }, 0);
  setTimeout(() => {
    text.textContent = "Boa tarde";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Boa noite";
  }, 8000);
};

textLoad();

setInterval(textLoad, 12000);
