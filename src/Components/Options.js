import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  console.log(questions);
  return (
    <div>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
