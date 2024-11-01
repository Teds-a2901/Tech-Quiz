import React from "react";

function Progress({ index, numQuestioin, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestioin} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestioin}
      </p>

      <p>
        <strong>
          {points}/{maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
