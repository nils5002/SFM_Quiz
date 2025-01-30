# React Quiz App

This project is a simple quiz application built using React. It presents users with multiple-choice questions, tracks their progress, and displays the final score upon completion.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **SCSS:** A CSS preprocessor that extends CSS with variables, nested rules, and more.

## Features

*   Interactive quiz with multiple-choice questions.
*   Progress bar to indicate quiz completion.
*   Start screen with a React logo.
*   Final result screen displaying the score.
*   Option to restart the quiz.

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:

    ```bash
    git clone [https://github.com/Makc240305/Quiz-app](https://github.com/Makc240305/Quiz-app)
    ```

2.  Navigate to the project directory:

    ```bash
    cd react-quiz-app
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

The app should now be running on `http://localhost:3000`.

## How It Works

The quiz logic is managed using React's state (`useState`).

*   The app starts with a welcome screen.
*   Upon clicking the "Start" button, the first question appears.
*   Users select an answer, and the app moves to the next question.
*   A progress bar updates dynamically as the quiz progresses.
*   After the last question, the app displays the final score and provides an option to restart the quiz.
