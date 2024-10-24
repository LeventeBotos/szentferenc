"use client";
import { useState } from "react";

export function Quiz() {
  const questions = [
    {
      question: "Melyik évben született Assisi Szent Ferenc?",
      options: ["1181", "1205", "1150"],
      answer: "1181",
      explanation: "Assisi Szent Ferenc 1181-ben született, Assisiben.",
    },
    {
      question: "Melyik városban született?",
      options: ["Róma", "Assisi", "Firenze"],
      answer: "Assisi",
      explanation:
        "Szent Ferenc Assisiben, egy kis olasz városban született, amely ma híres zarándokhely.",
    },
    {
      question: "Miért vált híressé?",
      options: [
        "Az állatok iránti szeretetéért",
        "Katona volt",
        "Gazdag életet élt",
      ],
      answer: "Az állatok iránti szeretetéért",
      explanation:
        "Szent Ferenc különleges kapcsolatot ápolt az állatokkal, és a természet védőszentjeként ismert.",
    },
    {
      question: "Milyen rendet alapított Szent Ferenc?",
      options: ["Bencés rend", "Ferences rend", "Domonkos rend"],
      answer: "Ferences rend",
      explanation:
        "Szent Ferenc alapította a ferences rendet, amely a szegénységet, egyszerűséget és békét hirdeti.",
    },
    {
      question: "Mikor avatták szentté Assisi Szent Ferencet?",
      options: ["1228", "1181", "1234"],
      answer: "1228",
      explanation:
        "Szent Ferencet 1228-ban avatták szentté, két évvel halála után.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("Helyes válasz! 🎉");
    } else {
      setFeedback(
        `Helytelen válasz. 😔 Az helyes válasz: ${questions[currentQuestion].answer}`
      );
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback(null);
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {showScore ? (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Eredmény: {score}/{questions.length}
          </h3>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Újra próbálkozás
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`block w-full text-left px-4 py-2 rounded-lg border shadow-md ${
                  selectedOption === option
                    ? selectedOption === questions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "border-black/10 hover:border-black/100 "
                }`}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <div className="mt-4">
              <p>{feedback}</p>
              <p>{questions[currentQuestion].explanation}</p>
              <button
                onClick={nextQuestion}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Következő kérdés
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
