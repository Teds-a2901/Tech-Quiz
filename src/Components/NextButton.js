import React from "react";
import Questions from "./Questions";

function NextButton({ dispatch, answer, index, numQuestioin }) {
  if (answer === null) return null;
  if (index < numQuestioin - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestioin - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finished
      </button>
    );
}

export default NextButton;
