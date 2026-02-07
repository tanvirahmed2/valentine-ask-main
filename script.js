// =======================
// script.js (FULL) - HEARING BUTTON ON SIGHT SLIDE
// =======================

// Elements
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

// Open letter window
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// NO button runs away (step 1)
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked (step 1)
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  document.querySelector(".letter-window").classList.add("final");

  step1Buttons.style.display = "none";
  loveText.style.display = "inline-block";
  nextBtn.style.display = "inline-block";
});

// Next -> step 2
nextBtn.addEventListener("click", () => {
  loveText.style.display = "none";
  nextBtn.style.display = "none";

  step2.style.display = "block";

  // reset positions
  loveTooBtn.style.transform = "scale(1)";
  loveMoreBtn.style.transform = "translate(0,0)";
});

// Step 2 logic: wrong button makes correct bigger
let loveTooScale = 1;

loveMoreBtn.addEventListener("click", () => {
  loveTooScale += 0.25;
  loveTooBtn.style.transform = `scale(${loveTooScale})`;
});

// optional: make wrong button annoying
loveMoreBtn.addEventListener("mouseover", () => {
  const distance = 120;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  loveMoreBtn.style.transition = "transform 0.15s ease";
  loveMoreBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Correct button -> final message + open letter button
loveTooBtn.addEventListener("click", () => {
  step2.style.display = "none";

  title.textContent = "Let's be Honest!";
  catImg.src = "love.png";

  honestyText.style.display = "inline-block";
  openLetterBtn.style.display = "inline-block";
});

// Open your letter -> show page 1 (text only)
openLetterBtn.addEventListener("click", () => {
  honestyText.style.display = "none";
  openLetterBtn.style.display = "none";

  title.style.display = "none";
  catImg.style.display = "none";

  const win = document.querySelector(".letter-window");
  win.classList.add("letter-mode");

  letterPages.style.display = "block";
  page1.style.display = "flex";
  page2.style.display = "none";
  page3.style.display = "none";

  usSlide.style.display = "none";
  oneMoreSlide.style.display = "none";
  sightSlide.style.display = "none";
  hearingSlide.style.display = "none";
});

// Page 1 -> Page 2
letterNext1.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "flex";
});

// Page 2 -> Page 3
letterNext2.addEventListener("click", () => {
  page2.style.display = "none";
  page3.style.display = "flex";
});

// Lastly -> final us slide
lastlyBtn.addEventListener("click", () => {
  letterPages.style.display = "none";
  usSlide.style.display = "flex";
});

// One more thing -> new message slide
oneMoreBtn.addEventListener("click", () => {
  usSlide.style.display = "none";
  oneMoreSlide.style.display = "flex";
});

// Sight -> sight slide
sightBtn.addEventListener("click", () => {
  oneMoreSlide.style.display = "none";
  sightSlide.style.display = "flex";
});

// Hearing -> hearing slide (button is on Sight slide)
hearingBtn.addEventListener("click", () => {
  sightSlide.style.display = "none";
  hearingSlide.style.display = "flex";
});
