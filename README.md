```markdown
# 💳 Kusaku UI — E-Wallet Mobile Prototype

Welcome to **Kusaku UI**! This is a mobile-first interactive prototype for a digital wallet & financial app. It contains **18 sliced pages** built from scratch, fully interconnected so you can test and feel the actual user journey—from logging in, topping up, transferring funds, to checking transaction receipts.

---

🎨 **Figma Design**: [View Original Kusaku Figma Design](https://www.figma.com/design/acomQC91mOUmQ88uke2ZzC/KUSAKU-TAILWIND?node-id=1203-1042&p=f)

---

## 🌟 What's Inside?

- **18 Interconnected Pages**: Complete alur covering Auth (Login/Register/PIN), Dashboard, Top Up, Transfer, Withdrawal, Account Settings, and Transaction Status (Pending, Settled, Canceled, Failed, Expired).
- **Interactive JS Validation**: Lightweight client-side scripts that enforce real-time input formatting so the prototype feels responsive and live without needing a backend.
- **Tailwind CSS v3 Setup**: Custom design system using utility classes, peer-states, and group-hover effects for smooth UI feedback.
- **Seamless Local Dev**: Powered by `concurrently` and `browser-sync` for instant live-reloading during development.

---

## 🛠️ Tech Stack

- **HTML5** & **Vanilla JavaScript (ES6)**
- **Tailwind CSS v3**
- **Browser-Sync** (Live local server)
- **Concurrently** (Parallel execution tool)

---

## 📂 Project Structure

```text
kusaku-ui/
├── dist/                     # Production & served files
│   ├── assets/
│   │   ├── css/main.css      # Compiled Tailwind CSS
│   │   └── js/               # Validation scripts
│   ├── index.html            # Main Entry Point / Splash
│   ├── dashboard.html
│   ├── transfer.html
│   └── ... (all 18 HTML pages)
├── src/
│   └── input.css             # Tailwind input styles
├── package.json
├── tailwind.config.js
└── README.md

```

---

## 🚀 Getting Started

Want to run this locally? Follow these simple steps:

1. **Clone the repository**
```bash
git clone [https://github.com/Miawwh/kusaku-ui](https://github.com/Miawwh/kusaku-ui.git)
cd kusaku-ui

```


2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npm run dev

```


*This launches Browser-Sync at `http://localhost:3000` and starts watching your CSS/HTML changes automatically.*

---

## 💡 Notes

This repository was created as a slicing and prototyping exercise to translate high-fidelity Figma designs into clean, semantic HTML and utility-first CSS. Feel free to explore the pages or use the components for your own projects!

---

⭐ **If you like this project, give it a star!**

```  
