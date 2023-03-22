import React from "react";
import { BsDot } from "react-icons/bs";
import { AiTwotoneUnlock, AiTwotoneLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <article className="bg-gray-secondary ring-1 ring-gray-700 p-3 rounded-md flex flex-col gap-1">
      <div className="flex justify-end text-xl font-semibold text-gray-200">{event.date}</div>
      <h2 className="text-base font-semibold text-gray-200 py-2 mb-auto">
        {event.titles.map((title) => (
          <p>{title}</p>
        ))}
      </h2>
      <ul className="my-2 h-[65px] flex flex-col justify-between">
        {event.locked ? null : (
          <>
            <li className="flex text-ssm items-center text-gray-300">
              <BsDot className="text-2xl -ml-2 text-purple-500" />
              Entries Submitted: {event.submittedEntries}
            </li>
            <li className="flex text-ssm items-center text-gray-300">
              <BsDot className="text-2xl -ml-2 text-gray-300" />
              Music Submitted: {event.submittedMusic}
            </li>
          </>
        )}
      </ul>
      <div className="badge flex justify-end items-center gap-2">
        <button
          className="py-2 px-3 rounded-full bg-[#95a4fc] text-black text-sm font-medium disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none"
          disabled={event.locked}
          onClick={() => navigate(`/events/${event.id}`)}
        >
          {event.locked ? "Locked" : "Select Event"}
        </button>
        {event.locked ? (
          <AiTwotoneLock className="text-red-400 text-3xl" />
        ) : (
          <AiTwotoneUnlock className="text-[#197e1d] text-3xl" />
        )}
      </div>
    </article>
  );
};

export default EventCard;
