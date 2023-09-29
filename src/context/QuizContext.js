import { createContext, useContext } from "react";

export const QuizContext = createContext({});

export const useQuizInfo = () => { return useContext(QuizContext); };

export const QuizProvider = QuizContext.Provider;