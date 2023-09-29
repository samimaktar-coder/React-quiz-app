import React, { useEffect, useState } from "react";
import { useQuizInfo } from "../context";
import Question from "./Question";

function QuizBody({ quizId }) {
  const {
    questionNumbers,
    difficultyLevel,
    correctAnwerNumbers,
    allowCheckAnswers,
    setShowAnswerModal,
    setDifficultyLevel,
    setQuestionNumbers,
    setCorrectAnwerNumbers,
    setOpenQuizPage,
    setAllowCheckAnswers,
  } = useQuizInfo();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData();
  }, [questionNumbers, difficultyLevel]);

  const fetchData = async () => {
    let data = await fetch(
      `https://opentdb.com/api.php?amount=${questionNumbers}&category=${quizId}&difficulty=${difficultyLevel}&type=multiple`
    );
    let json = await data.json();
    setQuestions(json.results);
    console.log(
      `https://opentdb.com/api.php?amount=${questionNumbers}&category=${quizId}&difficulty=${difficultyLevel}&type=multiple`
    );
  };

  const resetAll = () => {
    setDifficultyLevel("easy");
    setQuestionNumbers(10);
    setCorrectAnwerNumbers(0);
    setShowAnswerModal(false);
    setOpenQuizPage(false);
    setAllowCheckAnswers(false);
  };

  return (
    <div className='p-5 ss:p-10 py-4'>
      <ul>
        {questions.length > 0 &&
          questions.map((question, index) => (
            <Question
              key={question.question}
              serialNum={index + 1}
              questionData={question}
            />
          ))}
      </ul>
      {!allowCheckAnswers && (
        <button
          className={`bg-emerald-600 px-6 py-2 rounded-md mx-auto block mt-14  duration-300 text-lg font-semibold xs:mb-0 mb-6 ${
            allowCheckAnswers
              ? "opacity-70"
              : "hover:shadow-lg hover:shadow-green-500 hover:-translate-y-1"
          }`}
          onClick={() => setShowAnswerModal(true)}
        >
          Check Answers
        </button>
      )}

      {allowCheckAnswers && (
        <div className='flex justify-center xs:flex-row flex-col items-center gap-3 xs:gap-8 mt-14'>
          <p className='text-lg'>
            You scored {correctAnwerNumbers}/{questionNumbers} answer
          </p>
          <button
            className={`bg-emerald-600 px-6 py-2 rounded-md  block  duration-300 text-lg font-semibold hover:shadow-lg hover:shadow-green-500 hover:-translate-y-1`}
            onClick={resetAll}
          >
            Play Again
          </button>
        </div>
      )}

      <div className='mt-6 flex items-center justify-center gap-2'>
        <a
          href='https://github.com/samimaktar-coder/React-quiz-app'
          target='_blank'
          className='hover:underline'
        >
          Open source code
        </a>
        <p> by Samim</p>
      </div>
    </div>
  );
}

export default QuizBody;
