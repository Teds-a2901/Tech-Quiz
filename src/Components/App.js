//Main App
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Restart from "./Restart";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../Context/QuizProvider";

export default function App() {
  const {
    status,
    numQuestioin,
    dispatch,
    index,
    points,
    maxPoints,
    answer,
    highScore,
    questions,
    secondsRemaining,
  } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Start numQuestioin={numQuestioin} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestioin={numQuestioin}
              index={index}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestioin={numQuestioin}
                index={index}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <>
            <FinishedScreen
              points={points}
              maxPoints={maxPoints}
              highScore={highScore}
            />
            <Restart dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}
