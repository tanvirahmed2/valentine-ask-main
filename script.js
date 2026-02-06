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

// Click Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Move NO button away on hover (Step 1)
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked (Step 1)
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  document.querySelector(".letter-window").classList.add("final");

  step1Buttons.style.display = "none";
  loveText.style.display = "inline-block";
  nextBtn.style.display = "inline-block";
});

// Next clicked -> Step 2
nextBtn.addEventListener("click", () => {
  loveText.style.display = "none";
  nextBtn.style.display = "none";

  step2.style.display = "block";

  // reset any previous transforms
  loveTooBtn.style.transform = "scale(1)";
  loveMoreBtn.style.transform = "translate(0,0)";
});

// Step 2: clicking wrong button makes correct one bigger
let loveTooScale = 1;

loveMoreBtn.addEventListener("click", () => {
  loveTooScale += 0.25;
  loveTooBtn.style.transform = `scale(${loveTooScale})`;
});

// Optional: also make "I love you more" annoying to click
loveMoreBtn.addEventListener("mouseover", () => {
  const distance = 120;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  loveMoreBtn.style.transition = "transform 0.15s ease";
  loveMoreBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Step 2: clicking correct button -> final message
loveTooBtn.addEventListener("click", () => {
  step2.style.display = "none";

  title.textContent = "Let's be Honest!";
  catImg.src = "cat_heart.gif";

  honestyText.style.display = "inline-block";
});
