// =======================
// script.js (FULL) ✅ UPDATED
// =======================

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const step1Buttons = document.getElementById("step1-buttons");
const loveText = document.getElementById("love-text");
const nextBtn = document.getElementById("next-btn");

const step2 = document.getElementById("step2");
const loveTooBtn = document.getElementById("love-too-btn");
const loveMoreBtn = document.getElementById("love-more-btn");

const honestyText = document.getElementById("honesty-text");
const openLetterBtn = document.getElementById("open-letter-btn");

const letterPages = document.getElementById("letter-pages");
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const letterNext1 = document.getElementById("letter-next-1");
const letterNext2 = document.getElementById("letter-next-2");

const lastlyBtn = document.getElementById("lastly-btn");
const usSlide = document.getElementById("us-slide");

const oneMoreBtn = document.getElementById("one-more-btn");
const oneMoreSlide = document.getElementById("one-more-slide");

const sightBtn = document.getElementById("sight-btn");
const sightSlide = document.getElementById("sight-slide");

const hearingBtn = document.getElementById("hearing-btn");
const hearingSlide = document.getElementById("hearing-slide");

const smellBtn = document.getElementById("smell-btn");
const smellSlide = document.getElementById("smell-slide");

const tasteBtn = document.getElementById("taste-btn");
const tasteSlide = document.getElementById("taste-slide");

const touchBtn = document.getElementById("touch-btn");
const touchSlide = document.getElementById("touch-slide");

const theEndBtn = document.getElementById("the-end-btn");
const endSlide = document.getElementById("end-slide");

const rightBtn = document.getElementById("right-btn");
const flowerSlide = document.getElementById("flower-slide");

const win = document.querySelector(".letter-window");

// helper: remove all slide classes, then add the one we want
function setSlideClass(className) {
  win.classList.remove(
    "slide-yip",
    "slide-honest",
    "slide-us",
    "slide-onemore",
    "slide-sight",
    "slide-hearing",
    "slide-smell",
    "slide-taste",
    "slide-touch",
    "slide-end",
    "slide-flower"
  );
  if (className) win.classList.add(className);
}

// Open letter window
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    win.classList.add("open");
  }, 50);
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked -> YIPPEEEE slide
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  win.classList.add("final");
  setSlideClass("slide-yip");

  step1Buttons.style.display = "none";
  loveText.style.display = "inline-block";
  nextBtn.style.display = "inline-block";
});

// Next -> step 2
nextBtn.addEventListener("click", () => {
  setSlideClass("");

  loveText.style.display = "none";
  nextBtn.style.display = "none";

  step2.style.display = "block";

  loveTooBtn.style.transform = "scale(1)";
  loveMoreBtn.style.transform = "translate(0,0)";
});

// Wrong button makes correct bigger
let loveTooScale = 1;

loveMoreBtn.addEventListener("click", () => {
  loveTooScale += 0.25;
  loveTooBtn.style.transform = `scale(${loveTooScale})`;
});

loveMoreBtn.addEventListener("mouseover", () => {
  const distance = 120;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  loveMoreBtn.style.transition = "transform 0.15s ease";
  loveMoreBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Correct button -> honesty slide
loveTooBtn.addEventListener("click", () => {
  step2.style.display = "none";

  title.textContent = "Let's be Honest!";
  catImg.src = "love.png";

  setSlideClass("slide-honest");

  honestyText.style.display = "inline-block";
  openLetterBtn.style.display = "inline-block";
});

// Open your letter
openLetterBtn.addEventListener("click", () => {
  honestyText.style.display = "none";
  openLetterBtn.style.display = "none";

  setSlideClass("");
  win.classList.add("letter-mode");

  title.style.display = "none";
  catImg.style.display = "none";

  letterPages.style.display = "block";
  page1.style.display = "flex";
  page2.style.display = "none";
  page3.style.display = "none";

  usSlide.style.display = "none";
  oneMoreSlide.style.display = "none";
  sightSlide.style.display = "none";
  hearingSlide.style.display = "none";
  smellSlide.style.display = "none";
  tasteSlide.style.display = "none";
  touchSlide.style.display = "none";
  endSlide.style.display = "none";
  flowerSlide.style.display = "none";
});

// Page navigation
letterNext1.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "flex";
});

letterNext2.addEventListener("click", () => {
  page2.style.display = "none";
  page3.style.display = "flex";
});

// Lastly -> us slide
lastlyBtn.addEventListener("click", () => {
  letterPages.style.display = "none";
  usSlide.style.display = "flex";
  setSlideClass("slide-us");
});

// One more thing slide
oneMoreBtn.addEventListener("click", () => {
  usSlide.style.display = "none";
  oneMoreSlide.style.display = "flex";
  setSlideClass("slide-onemore");
});

// Sight slide
sightBtn.addEventListener("click", () => {
  oneMoreSlide.style.display = "none";
  sightSlide.style.display = "flex";
  setSlideClass("slide-sight");
});

// Hearing slide
hearingBtn.addEventListener("click", () => {
  sightSlide.style.display = "none";
  hearingSlide.style.display = "flex";
  setSlideClass("slide-hearing");
});

// Smell slide
smellBtn.addEventListener("click", () => {
  hearingSlide.style.display = "none";
  smellSlide.style.display = "flex";
  setSlideClass("slide-smell");
});

// Taste slide
tasteBtn.addEventListener("click", () => {
  smellSlide.style.display = "none";
  tasteSlide.style.display = "flex";
  setSlideClass("slide-taste");
});

// Touch slide
touchBtn.addEventListener("click", () => {
  tasteSlide.style.display = "none";
  touchSlide.style.display = "flex";
  setSlideClass("slide-touch");
});

// End slide
theEndBtn.addEventListener("click", () => {
  touchSlide.style.display = "none";
  endSlide.style.display = "flex";
  setSlideClass("slide-end");
});

// ✅ Right? -> Flower slide
rightBtn.addEventListener("click", () => {
  endSlide.style.display = "none";
  flowerSlide.style.display = "flex";
  setSlideClass("slide-flower");
});
