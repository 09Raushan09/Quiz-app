# React Quiz App with Real-Time Progress Tracking
A modern, fast, and responsive Quiz Application built with **React.js** and **Tailwind CSS**. This project was designed to handle timed assessments where each second counts, providing immediate feedback and detailed scoring at the end.

---

## 🚀 Features

* **Timed Questions:** Each question comes with a 15-second limit. If the time runs out, the question is automatically marked as "Missing" and the app transitions to the next one.

* **Dynamic Progress Tracking:** Two visual bars help users stay on track—one for the overall quiz progress and another for the remaining time per question.

* **Automated Scoring:** Tracks three specific metrics:

    * **Correct:** Answers that matched the key.

    * **Incorrect:** Answers that were wrong.

    * **Missing:** Questions that were skipped due to time-out.

* **Prevent Double-Clicking:** Built-in "Locking" mechanism using useRef to ensure a user cannot change their answer once a selection is made.

* **Smooth Transitions:** Small UI delays between questions to allow users to see the correct/incorrect feedback before moving on.

* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop using Tailwind’s utility-first approach.

---

## 🛠️ Technical Stack
* Frontend: React (Vite)
* Styling: Tailwind CSS (Responsive utility classes)
* State Management: React Hooks (useState, useEffect, useMemo, useRef)
* Data Handling: Hardcoded JSON structure for offline reliability.

## 📁 Project Structure

src/
├── components/       # Reusable UI elements (ProgressBar, QuestionCard, etc.)
├── data/             # Quiz questions and answers (JSON format)
├── pages/            # Main logic for the Quiz execution
├── styles/           # Tailwind and global CSS
└── App.jsx           # Main routing and state control for Start/Quiz/Summary

## 🧠 Logical Highlights

1. **The Timer Logic**
Instead of a simple interval, I used a useEffect that synchronizes with the question index. Every time a new question loads, the timer resets. I also implemented a Cleanup Function to ensure that setInterval doesn't cause memory leaks when the user exits the quiz early.

2. **State vs. Refs**
I used useState for things that need to trigger a re-render (like the countdown and score). However, for logic like "locking" the screen during a transition, I used useRef. This prevents unnecessary renders while maintaining a strict control flow.

3. **Immediate Feedback**
When a user clicks an option, the UI immediately highlights the result:
    * Green: Correct choice.
    * Red: If your choice was wrong.
    * Subtle Labels: Clear text indicators like "Correct!" or "Time Out" for accessibility.

## ⚙️ How to Run Locally

1. **clone the repository:**

git clone https://github.com/your-username/quiz-app.git

2. **Install dependencies:**
   ```Bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📝 Future Improvements
*   [ ] Integration with a Backend API (Node.js/Express).
*   [ ] Adding Category selection (Math, GK, Science).
*   [ ] Leaderboard functionality using Firebase or LocalStorage.
*   [ ] Adding Sound Effects for correct/wrong answers.

---
