import React from "react";
function FinishedScreen({ points, maxPoints, highScore }) {
  const scorePercentage = (points / maxPoints) * 100;

  let emoji;

  if (scorePercentage === 100) emoji = "💯";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "⭐";
  if (scorePercentage >= 50 && scorePercentage < 100) emoji = "👍🏻";
  if (scorePercentage >= 0 && scorePercentage < 50) emoji = "❌";
  if (scorePercentage === 0) emoji = "🙀";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> your scored is <strong>{points}</strong> out of{" "}
        {maxPoints}({Math.ceil(scorePercentage)}%)
      </p>
      <p className="highscore">highScore {highScore} points</p>
    </>
  );
}

export default FinishedScreen;
