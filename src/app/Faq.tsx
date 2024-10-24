"use client";
import React, { useState } from "react";

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4">Gyakori kérdések</h2>
      <div className="">
        {[
          {
            question: "Miért Assisi Szent Ferenc az állatok védőszentje?",
            answer:
              "Assisi Szent Ferenc különleges kapcsolatot ápolt az állatokkal. Sok történet szól arról, hogy beszélt az állatokhoz, és ők békésen viselkedtek a jelenlétében.",
          },
          {
            question: "Hogyan hatott Ferenc az egyházra?",
            answer:
              "Ferenc az egyházat a szegénység és egyszerűség útjára ösztönözte. Az egyházra gyakorolt hatása révén a ferences rend alapvető része lett a keresztény közösségnek.",
          },
          {
            question: "Mi volt Ferenc legnagyobb csodája?",
            answer:
              "Szent Ferenc legnagyobb csodája, hogy még életében is sokakat inspirált arra, hogy szegénységet és egyszerűséget válasszanak, és békében éljenek.",
          },
        ].map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left font-semibold p-2 border border-black/10 hover:border-black/100 shadow-md rounded-lg mb-2"
            >
              {faq.question}
            </button>
            {faqOpen === index && (
              <p className="text-gray-700 p-2 bg-gray-100">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
