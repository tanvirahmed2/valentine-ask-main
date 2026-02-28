# 💌 Valentine Ask

An interactive Valentine’s Day single-page website built using **HTML, CSS, and Vanilla JavaScript**.

This project starts with a clickable envelope and guides the user through a playful Valentine proposal experience, including animated buttons, a multi-page letter, themed slides, and a final surprise ending.

---

## ✨ Features

- 💌 Clickable envelope opening animation
- ❤️ “Will you be my Valentine?” interaction
- 😏 “No” button that runs away when hovered
- 🎉 Celebration screen after selecting “Yes”
- 💞 “Do you love me?” interaction with dynamic button behavior
- 📜 Three-page interactive love letter
- 🎁 Themed slides based on the five senses:
  - Sight
  - Hearing
  - Smell
  - Taste
  - Touch
- 🌹 Final flower ending screen
- 🎨 Dynamic slide themes using CSS class switching
- ⚡ Built with pure HTML, CSS, and JavaScript (no frameworks)

---

## 📂 Project Structure


Everything runs inside a single HTML page. JavaScript controls which sections are visible at any time.

---

## 🧠 How It Works

The website functions like a mini slide system:

1. All sections exist inside `index.html`
2. Most sections are hidden by default using CSS
3. `script.js` listens for button clicks
4. JavaScript hides the current section and shows the next one
5. Slide-specific themes are applied by dynamically switching CSS classes

The “run away” button works by applying a random `transform: translate(x, y)` when the user hovers over it.

---

## 🚀 How To Run

### Option 1: Open Directly
Simply open `index.html` in any modern browser.

### Option 2: Use a Local Server (Recommended)

If you use VS Code:
- Install **Live Server**
- Right click `index.html`
- Select **Open with Live Server**

Or with Python:

```bash
python -m http.server 8000

http://localhost:8000
