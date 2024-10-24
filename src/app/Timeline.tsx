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
  // Add more events if needed
];

export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>(initialTimelineEvents);
  const [isCorrectOrder, setIsCorrectOrder] = useState<boolean | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData("dragIndex", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    const dragIndex = parseInt(event.dataTransfer.getData("dragIndex"));
    const reorderedEvents = [...events];
    const [movedEvent] = reorderedEvents.splice(dragIndex, 1);
    reorderedEvents.splice(dropIndex, 0, movedEvent);
    setEvents(reorderedEvents);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Verify if the events are in the correct chronological order
  const verifyOrder = () => {
    const isCorrect = events.every((event, index) => {
      return event.year === initialTimelineEvents[index].year;
    });
    setIsCorrectOrder(isCorrect);
  };

  return (
    <section className="mb-12">
      <div className="space-y-2">
        {events.map((event, index) => (
          <div
            key={event.year}
            className="shadow-md p-4 rounded-lg text-black/70 border border-black border-opacity-10  cursor-pointer hover:border-black/100"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            <h3 className="text-xl font-semibold">{event.event}</h3>
            <p className="mt-2">{event.details}</p>
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
