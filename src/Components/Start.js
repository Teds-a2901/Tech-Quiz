import React from "react";

function Start({ numQuestioin, dispatch }) {
  return (
    <div className="start">
      <h2> Welcome to the React Quiz </h2>
      <h3>{numQuestioin} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default Start;
