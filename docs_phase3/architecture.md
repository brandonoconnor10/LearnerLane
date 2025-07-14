
---

### ✅ `architecture.md` (Full File)

```markdown
# Learner Lane – Software Architecture Documentation

---

## 📘 Overview

**Learner Lane** is a full frontend web application that helps South African learners prepare for the official K53 learner's licence test. The content is broken into 3 key learning categories (Road Signs, Rules of the Road, Vehicle Controls) and includes quizzes, study cards, and visual references.

This app was built using **React** and **Tailwind CSS**, with **Airtable** functioning as a lightweight backend CMS. No Node.js or Express server is needed, as Airtable's REST API is used to fetch structured learning content.

---

## 🧱 Architecture Overview

### 🔹 Frontend: React.js + Tailwind CSS

The frontend is a single-page application using **React Router** for navigation and **Axios** to call Airtable's REST API.

#### Key Pages:
- `Home.jsx` – Intro + navigation
- `Signs.jsx` – Displays road signs from Airtable
- `Rules.jsx` – Text-based explanations
- `Controls.jsx` – Vehicle control terms
- `Quiz.jsx` – Section-specific multiple choice quizzes

#### Core Components:
- `Navbar.jsx` – Main navigation
- `SignCard.jsx` – Renders an individual road sign with label + explanation
- `QuizCard.jsx` – Dynamically generates quiz cards with answer logic

---

### 🔹 Backend: Airtable

There is no traditional server or backend. Instead, **Airtable** is used as a structured content database.

#### Airtable Setup:
Each record in Airtable includes:
- `Section`: The topic (e.g., Signs, Rules, Controls)
- `Type`: "Explanation" or "Sign"
- `Text` or `Image`: Content fields
- `CorrectAnswer` / `Options`: For quiz records

Airtable is queried using **Axios** via a custom service file (`src/services/airtable.js`), and filters data by section or type.

---

### 🔁 Data Flow Diagram

User Action → React Page → Axios → Airtable API → JSON → Rendered UI


For example:
- On `Signs.jsx`, we fetch only records with Type = "Sign" from Airtable.
- On `Quiz.jsx`, we fetch records from the selected section and generate random quizzes.

---

### 💡 Design Choices

| Element           | Decision                          | Reason |
|------------------|-----------------------------------|--------|
| **Styling**       | Tailwind CSS                      | Lightweight, mobile-ready, modern design |
| **CMS**           | Airtable                          | No backend coding, easy data control |
| **Requests**      | Axios over Fetch                  | Cleaner syntax, error handling |
| **Routing**       | React Router                      | Page-based separation improves navigation |
| **State Handling**| useState/useEffect only           | App is simple enough to not need Redux |

---

### 🛠 Tools Used

- [x] React 19
- [x] React Router DOM
- [x] Tailwind CSS
- [x] Axios
- [x] Airtable API
- [x] Netlify

---

## 🔐 Security Note

Your Airtable key is stored in a `.env` file and loaded with `import.meta.env`. You must never push this to GitHub or share it publicly. Use `.env.template` to share safe starter configuration.

---

## 📦 Final Submission

This file (`architecture.md`) and the full codebase are included in the exported project folder, which will be zipped and submitted for **Phase 3**. The folder contains:

- ✅ Source code
- ✅ Component logic
- ✅ Setup instructions
- ✅ Full documentation

This ensures another developer or evaluator can fully understand how the app is structured and executed.

---

## ✅ Summary

Learner Lane keeps its architecture clean and scalable by using a decoupled CMS (Airtable) and a modular frontend. This approach reduces backend complexity while offering full control over the learning content and quiz structure.
