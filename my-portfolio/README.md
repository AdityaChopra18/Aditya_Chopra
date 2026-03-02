# My Portfolio

A developer portfolio with dual theme (Dark Engineer + Bold Colorful), built with React + Vite.

---

## 🚀 Deploy to GitHub Pages (step by step)

### Step 1 — Install Node.js
Download from https://nodejs.org (choose the LTS version)

### Step 2 — Edit your info
Open `src/Portfolio.jsx` and update the `ME` object at the top:
- Your name, bio, email, social links
- Your real project titles, descriptions, links
- Your actual work experience

### Step 3 — Update vite.config.js
Open `vite.config.js` and change `/my-portfolio/` to your GitHub repo name.
Example: if your repo URL is `github.com/john/dev-site`, set `base: '/dev-site/'`

### Step 4 — Create a GitHub repo
1. Go to github.com → New repository
2. Name it (remember this name for step 3 above)
3. Set it to Public

### Step 5 — Enable GitHub Pages
1. In your repo → Settings → Pages
2. Under "Source" select **GitHub Actions**
3. Save

### Step 6 — Push your code
```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 7 — Watch it deploy!
Go to your repo → Actions tab → you'll see the build running.
In ~1 minute your site will be live at:
**https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/**

---

## 💻 Run locally

```bash
npm install
npm run dev
# open http://localhost:5173
```

## 📁 File structure

```
my-portfolio/
├── index.html                        ← root HTML (don't edit)
├── vite.config.js                    ← ⚠️ update base to your repo name
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                      ← React entry (don't edit)
│   └── Portfolio.jsx                 ← ✏️ edit all your info here
└── .github/
    └── workflows/
        └── deploy.yml                ← auto deploy (don't edit)
```
