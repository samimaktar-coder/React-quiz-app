import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import QuizBody from "./components/QuizBody";
import { QuizProvider } from "./context";
import AnswerCheckModal from "./components/AnswerCheckModal";

function App() {
  const [difficultyLevel, setDifficultyLevel] = useState("easy");
  const [questionNumbers, setQuestionNumbers] = useState(10);
  const [correctAnwerNumbers, setCorrectAnwerNumbers] = useState(0);
  const [openQuizPage, setOpenQuizPage] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [allowCheckAnswers, setAllowCheckAnswers] = useState(false);
  const categoryIds = [27, 17, 23, 22, 18, 9];

  const randomNumber = Math.floor(Math.random() * categoryIds.length);
  const quizId = categoryIds[randomNumber];

  return (
    <QuizProvider
      value={{
        difficultyLevel,
        questionNumbers,
        openQuizPage,
        showAnswerModal,
        allowCheckAnswers,
        correctAnwerNumbers,
        setDifficultyLevel,
        setQuestionNumbers,
        setOpenQuizPage,
        setShowAnswerModal,
        setAllowCheckAnswers,
        setCorrectAnwerNumbers,
      }}
    >
      <div
        className={`${
          openQuizPage ? "min-h-screen" : "h-screen overflow-hidden"
        } bg-indigo-700 text-white relative`}
      >
        <FirstPage
          difficultyLevel={difficultyLevel}
          questionNumbers={questionNumbers}
          openQuizPage={openQuizPage}
        />
        {openQuizPage && <QuizBody quizId={quizId} />}
        <AnswerCheckModal />
      </div>
    </QuizProvider>
  );
}

export default App;
