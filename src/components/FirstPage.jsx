import React from "react";
import { useQuizInfo } from "../context";

function FirstPage({ difficultyLevel, questionNumbers, openQuizPage }) {
  const { setDifficultyLevel, setQuestionNumbers, setOpenQuizPage } =
    useQuizInfo();

  return (
    <div
      className={`absolute left-0 right-0 h-screen bg-slate-700 pt-64 md:pt-36 text-center duration-700 z-10 ${
        openQuizPage ? "-top-full" : "top-0"
      }`}
    >
      <div className='w-full md:w-2/3 mx-auto'>
        <h1 className='text-center text-3xl xs:text-4xl ss:text-5xl mb-8 xs:mb-5 font-semibold'>
          Welcome to QuizQuest
        </h1>
        <div className='flex items-center justify-center xs:flex-row flex-col gap-2 xs:gap-4 mb-6 xs:mb-4'>
          <h3 className='font-semibold text-base xs:text-lg'>
            Dificulty Level :
          </h3>
          <div className='flex items-center gap-2'>
            <div
              className={`border-[1.5px] rounded-md px-4 py-1 ${
                difficultyLevel === "easy"
                  ? "border-green-500 shadow shadow-green-400 text-green-500"
                  : "border-white hover:border-cyan-500 active:scale-[.85]"
              } duration-200 cursor-pointer`}
              onClick={() => setDifficultyLevel("easy")}
            >
              Easy
            </div>
            <div
              className={`border-[1.5px] rounded-md px-4 py-1 ${
                difficultyLevel === "medium"
                  ? "border-green-500 shadow shadow-green-400 text-green-500"
                  : "border-white hover:border-cyan-500 active:scale-[.85]"
              } duration-200 cursor-pointer`}
              onClick={() => setDifficultyLevel("medium")}
            >
              Medium
            </div>
            <div
              className={`border-[1.5px] rounded-md px-4 py-1 ${
                difficultyLevel === "hard"
                  ? "border-green-500 shadow shadow-green-400 text-green-500"
                  : "border-white hover:border-cyan-500 active:scale-[.85]"
              } duration-200 cursor-pointer`}
              onClick={() => setDifficultyLevel("hard")}
            >
              Hard
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center xs:flex-row flex-col gap-2 xs:gap-4'>
          <h3 className='font-semibold text-base xs:text-lg'>
            Number of Questions :
          </h3>
          <div className='flex items-center'>
            <input
              type='range'
              min='5'
              max='50'
              value={questionNumbers}
              onChange={(e) => setQuestionNumbers(e.target.value)}
              className='accent-emerald-500 mr-3'
            />
            <p className='text-lg'>({questionNumbers})</p>
          </div>
        </div>

        <button
          className='bg-emerald-600 px-8 py-2 text-lg tracking-wider rounded-md mt-8 xs:mt-5 font-semibold border border-transparent hover:shadow-md hover:shadow-green-500 hover:border hover:border-green-500 hover:text-green-500 hover:bg-transparent hover:-translate-y-1 duration-300'
          onClick={() => setOpenQuizPage(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
