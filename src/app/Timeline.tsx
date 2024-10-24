"use client";
import { useState } from "react";

// Define a type for the timeline events
interface TimelineEvent {
  year: number;
  event: string;
  details?: string;
}

// Timeline events with optional details
let initialTimelineEvents: TimelineEvent[] = [
  {
    year: 1228,
    event: "Szentté avatása",
    details: "Ferencet két évvel halála után szentté avatták.",
  },
  {
    year: 1181,
    event: "Szent Ferenc születése",
    details: "Assisiben született, gazdag család sarja.",
  },
  {
    year: 1209,
    event: "Ferences Rend alapítása",
    details:
      "Ferenc megalapította a Ferences Rendet, a szegénység és egyszerűség jegyében.",
  },
  {
    year: 1226,
    event: "Halála",
    details: "Ferenc békésen halt meg 1226-ban Assisiben.",
  },
  {
    year: 1205,
    event: "Isten hívása",
    details:
      "Ferenc látomásaiban Isten szólította őt, hogy a béke útját járja.",
  },
  {
    year: 1224,
    event: "Stigmák megjelenése",
    details: "Ferenc teste Krisztus szenvedésének jeleit hordozta.",
  },
];

export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>(initialTimelineEvents);
  const [isCorrectOrder, setIsCorrectOrder] = useState<boolean | null>(null);

  // Move event up or down
  const moveEvent = (index: number, direction: "up" | "down") => {
    const newEvents = [...events];
    const moveIndex = direction === "up" ? index - 1 : index + 1;

    if (moveIndex >= 0 && moveIndex < newEvents.length) {
      const temp = newEvents[index];
      newEvents[index] = newEvents[moveIndex];
      newEvents[moveIndex] = temp;
      setEvents(newEvents);
    }
  };

  // Verify if the events are in the correct chronological order
  const verifyOrder = () => {
    const correctOrder = [...initialTimelineEvents].sort(
      (a, b) => a.year - b.year
    );
    const isCorrect = events.every(
      (event, index) => event.year === correctOrder[index].year
    );
    setIsCorrectOrder(isCorrect);
  };

  return (
    <section className="mb-12">
      <div className="space-y-2">
        {events.map((event, index) => (
          <div
            key={event.year}
            className="shadow-md p-4 rounded-lg text-black/70 border border-black border-opacity-10  cursor-pointer hover:border-black/100 relative flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{event.event}</h3>
              <p className="mt-2">{event.details}</p>
            </div>
            {/* Mobile-only arrows */}
            <div className="space-y-1  flex flex-col ml-4">
              <button
                onClick={() => moveEvent(index, "up")}
                className={`bg-gray-300 rounded p-1 ${
                  index === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-400"
                }`}
                disabled={index === 0}
              >
                ↑
              </button>
              <button
                onClick={() => moveEvent(index, "down")}
                className={`bg-gray-300 rounded p-1 ${
                  index === events.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-400"
                }`}
                disabled={index === events.length - 1}
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={verifyOrder}
        className="mt-4 w-full rounded-lg bg-blue-600 text-white px-4 py-2  hover:bg-blue-700"
      >
        Ellenőrzés
      </button>

      {isCorrectOrder !== null && (
        <div className="mt-4">
          {isCorrectOrder ? (
            <p className="text-green-600 font-semibold">Helyes sorrend! 🎉</p>
          ) : (
            <p className="text-red-600 font-semibold">
              Helytelen sorrend. 😔 Próbáld újra!
            </p>
          )}
        </div>
      )}
    </section>
  );
}
