"use client";
import { useState } from "react";

const quizQuestions = [
  {
    question: "Egy szegény ember segítséget kér tőled. Mit tennél?",
    options: [
      "Figyelmen kívül hagyod.",
      "Pénzt adsz neki.",
      "Megosztod vele, amid van.",
    ],
    correctAnswer: 2,
    explanation:
      "Szent Ferenc mindig segített a szegényeknek, és megosztotta velük mindenét.",
  },
  {
    question: "Hogyan viszonyulnál a természethez és az állatokhoz?",
    options: [
      "Nem érdekelnek, csak használd őket.",
      "Tiszteld és védd őket.",
      "Csak akkor törődsz velük, ha szükséges.",
    ],
    correctAnswer: 1,
    explanation:
      "Szent Ferenc különösen tisztelte az állatokat és a természetet, és arra tanította követőit, hogy minden élőlényt védelmezzenek.",
  },
  {
    question: "Mi a legfontosabb érték az életedben?",
    options: ["Gazdagság", "Hírnév", "Szerénység és alázatosság"],
    correctAnswer: 2,
    explanation:
      "Szent Ferenc számára az alázatosság és a szerénység volt a legfontosabb erény.",
  },
  // Add more questions as needed
];

export function WhatToDo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const isAnswerCorrect =
      optionIndex === quizQuestions[currentQuestion].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div className="p-4 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        {quizQuestions[currentQuestion].question}
      </h3>

      <div className="space-y-2">
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`block w-full p-2 rounded-lg shadow-md border ${
              selectedOption === index
                ? selectedOption ===
                  quizQuestions[currentQuestion].correctAnswer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "border-black/10 hover:border-black/100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-4">
          <p
            className={`${
              isCorrect ? "text-green-700" : "text-red-700"
            } font-semibold`}
          >
            {isCorrect ? "Helyes válasz!" : "Helytelen válasz!"}
          </p>
          <p>{quizQuestions[currentQuestion].explanation}</p>

          {currentQuestion < quizQuestions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Következő kérdés
            </button>
          ) : (
            <p className="mt-4 text-green-600 font-semibold">
              Gratulálunk, befejezted a kvízt!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
