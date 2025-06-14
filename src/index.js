import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { QuizProvider } from "./Context/QuizProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  useEffect(() => {
  fetch('/questions.json')
    .then((res) => res.json())
    .then((data) => setQuestions(data))
    .catch((err) => console.error('Fetch error:', err));
}, []);
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
