const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const pnj = document.querySelector(".pnj");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Quando em gatinha?";
  pnj.src =
    "https://i.pinimg.com/564x/cd/72/e5/cd72e559059630b131d583d30036b09a.jpg";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});