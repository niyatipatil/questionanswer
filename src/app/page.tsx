"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import data from "../data.json";
import { PiCoins } from "react-icons/pi";

const Home = () => {
  const [questionIndex, setQuestionIndex] = useState(0); //track of current question
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); //hold the answers selected
  const [score, setScore] = useState(0); //tracks the score of the user

  //answer selection
  const handleAnswerClick = (answer: string) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((a) => a !== answer);
      } else if (prev.length < 3) {
        return [...prev, answer];
      }
      return prev;
    });
  };

  //calculate the final score
  const handleSubmit = () => {
    const correctAnswers = data.questions[questionIndex].correctAnswers;
    const points =
      selectedAnswers.filter((answer) => correctAnswers.includes(answer))
        .length * 10;
    setScore(score + points);
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswers([]);
  };

  if (questionIndex >= data.questions.length) {
    return (
      <main className="bg-[#dbd9e3] flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#f0bf4c] rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold flex items-center">
            Total <PiCoins className="ml-2 mr-2" /> ed coins earned : {score}
          </h1>
        </div>
      </main>
    );
  }

  const question = data.questions[questionIndex];

  //ui
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dbd9e3]">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-[30rem] relative">
        <div className="bg-[#fe8777] rounded-2xl p-3 mb-4 text-center absolute top-0 -translate-y-1/2 rotate-6">
          <h2 className="text-2xl font-semibold">{question.question}</h2>
        </div>
        <div className="flex items-center justify-center bg-transparent rounded-3xl text-center border border-black mt-4 w-48 mb-8 absolute top-4">
          <p className="text-lg font-normal flex items-center">
            earn <PiCoins className="ml-1 mr-1" /> 30 ed coins
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-20">
          {question.options.map((option) => (
            <Button
              key={option}
              variant="outline"
              onClick={() => handleAnswerClick(option)}
              className={`p-4 font-semibold rounded-lg ${
                selectedAnswers.includes(option) ? "bg-green-300" : ""
              }`}
              style={{
                transition: "none",
              }}
            >
              {option.toLowerCase()}
            </Button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            className="bg-[#f0bf4c] text-base font-semibold border-2 border-[#eab53a]"
            variant="outline"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
