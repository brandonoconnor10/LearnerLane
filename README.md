# Learner Lane

**Learner Lane** is a modern, free web app designed to help South African learners aged 16–25 prepare for their K53 Learner’s Licence test. It was developed as part of a university portfolio project, combining technical learning with a real-life educational need.

---

## Why This Project?

This app was created because I needed to study for my learner's licence while also completing my portfolio project. Instead of choosing between the two, I combined them. Learner Lane not only helped me study, but now also supports others who may not have access to paid resources or physical books.

---

## Features

- Categorized content (Road Signs, Rules of the Road, Vehicle Controls)
- Quiz feature with instant feedback
- Track progress per section
- Road signs with visual and written explanations
- Fully mobile-responsive UI
- Lightweight, fast-loading design

---

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | React.js, Tailwind CSS      |
| Backend    | Airtable API (NoSQL CMS)    |
| Requests   | Axios                       |
| Routing    | React Router DOM            |
| Hosting    | Netlify                     |
| Versioning | Git + GitHub                |

---

## Folder Structure (Frontend)

learner-lane/
├── docs
  ├── implementation-notes.md # steps used to make learner lane
  ├── architecture.md 
  ├── ReadME.md # this file
├── public/
├── src/
│ ├── components/ # UI components like cards, navbar, etc.
│ ├── pages/ # Each section's main view (Signs, Quiz, etc.)
│ ├── services/ # Airtable API logic
│ ├── App.jsx
│ └── main.jsx
├── .env # Contains Airtable API key (not committed)
├── architecture.md # App architecture overview
├── package.json
└── vite.config.js


---

## ⚙️ Installation Instructions

To run this project locally, follow these steps:

1. **Clone the repository**
    git clone https://github.com/yourusername/learner-lane.git
    cd learner-lane

2. **Install dependencies**
    npm install

3. **Add a .env file in the root directory with the following content**
    VITE_AIRTABLE_API_KEY=your_airtable_api_key
    VITE_AIRTABLE_BASE_ID=your_airtable_base_id

4. **Start the development server**
    npm run dev

This will open the app at http://localhost:5173.

If you want to see the finished project, visit this link: https://learnerlane.netlify.app/
---

Created by Brandon-Lee O'Connor