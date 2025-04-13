const dark = document.querySelector("#dark-mode");

const darkMode = () => {
  document.documentElement.classList.toggle("dark");
};

dark.addEventListener("click", darkMode);

const light = document.querySelector("#light-mode");

const lightMode = () => {
  document.documentElement.classList.toggle("dark");
};

light.addEventListener("click", lightMode);
