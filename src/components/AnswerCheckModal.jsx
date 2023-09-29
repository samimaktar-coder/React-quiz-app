import React from "react";
import { useQuizInfo } from "../context";

function AnswerCheckModal() {
  const { showAnswerModal, setShowAnswerModal, setAllowCheckAnswers } =
    useQuizInfo();

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-black bg-opacity-60 w-full flex items-center justify-center duration-700 ${
        showAnswerModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`w-[90%] ss:w-[28rem] bg-zinc-700 text-center px-8 py-6 rounded-lg duration-500 ${
          showAnswerModal ? "scale-100" : "scale-0"
        }`}
      >
        <h1 className='text-3xl font-semibold'>Do you want to submit?</h1>
        <div className='flex gap-6 justify-center mt-6'>
          <button
            className='px-6 py-1 text-lg border border-transparent bg-green-500 cursor-pointer rounded-md font-semibold hover:border-green-500 hover:bg-transparent hover:shadow-md hover:shadow-green-500 duration-300'
            onClick={() => {
              setAllowCheckAnswers(true);
              setShowAnswerModal(false);
            }}
          >
            Yes
          </button>
          <button
            className='px-6 py-1 text-lg border border-transparent bg-red-500 cursor-pointer rounded-md font-semibold hover:border-red-500 hover:bg-transparent hover:shadow-md hover:shadow-red-500 duration-300'
            onClick={() => setShowAnswerModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnswerCheckModal;
