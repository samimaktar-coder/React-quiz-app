import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { useQuizInfo } from "../context";

function Question({ serialNum, questionData }) {
  const { question, correct_answer, incorrect_answers } = questionData;
  const { allowCheckAnswers, setCorrectAnwerNumbers } = useQuizInfo();

  const [options, setOptions] = useState([]);

  const [isHold, setIsHold] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    setOptions(
      [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random())
    );
  }, []);

  useEffect(() => {
    chekcAnswer();
  }, [allowCheckAnswers]);

  function chekcAnswer() {
    if (allowCheckAnswers && options[isHold] === correct_answer) {
      setCorrectAnswer(true);
      setCorrectAnwerNumbers((prev) => prev + 1);
    } else if (allowCheckAnswers && options[isHold] !== correct_answer) {
      setCorrectAnswer(false);
    } else if (!allowCheckAnswers) {
      setIsHold(null);
      setCorrectAnswer("");
    }
  }

  return (
    <div className='my-3 py-4 border-b border-gray-400'>
      <div className='flex gap-4 mb-3'>
        <h3 className='text-lg font-semibold'>{serialNum}.</h3>
        <h3 className='text-lg font-semibold'>{decode(question)}</h3>
      </div>
      <div className='flex flex-wrap xs:flex-row flex-col gap-4 ml-8'>
        {options.length > 0 &&
          options.map((option, index) => (
            <div
              key={option}
              className={`border rounded-md px-4 py-1 text-base font-semibold cursor-pointer duration-300 ${
                allowCheckAnswers ? "pointer-events-none" : ""
              } ${
                isHold === index
                  ? "bg-gray-500 border-gray-500"
                  : "hover:bg-white hover:text-indigo-700 border-white"
              } ${
                correctAnswer && isHold === index
                  ? "bg-green-500 border-green-500"
                  : ""
              } ${
                correctAnswer === false && isHold === index
                  ? "bg-red-500 border-red-500"
                  : ""
              } ${
                allowCheckAnswers &&
                correctAnswer === false &&
                option === correct_answer
                  ? "bg-yellow-500 border-yellow-500"
                  : ""
              }`}
              onClick={() => {
                setIsHold(index);
              }}
            >
              {decode(option)}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Question;
