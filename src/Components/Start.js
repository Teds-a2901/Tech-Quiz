function Start({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The Tech Quiz!</h2>
      <h3>{numQuestions} questions to test your Brain</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default Start;
