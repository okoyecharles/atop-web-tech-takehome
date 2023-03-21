import React from "react";
import { BsDot } from "react-icons/bs";
import { AiTwotoneUnlock, AiTwotoneLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <article className="bg-gray-secondary ring-1 ring-gray-700 p-3 rounded-md flex flex-col gap-1">
      <div className="flex justify-end text-xsm uppercase text-gray-400">
        {event.date}
      </div>
      <h2 className="text-base font-semibold text-gray-200 my-2">
        {event.title}
      </h2>
      <ul className="my-2">
        <li className="flex text-ssm items-center text-gray-300">
          <BsDot className="text-2xl -ml-2 text-purple-500" />
          Entries Submitted: {event.submittedEntries}
        </li>
        <li className="flex text-ssm items-center text-gray-300">
          <BsDot className="text-2xl -ml-2 text-gray-500" />
          Music Submitted: {event.submittedEntries}
        </li>
      </ul>
      <div className="badge flex justify-end items-center gap-2">
        {event.locked ? (
          <AiTwotoneLock className="text-gray-400" />
        ) : (
          <AiTwotoneUnlock className="text-gray-400" />
        )}
        <button
          className="py-2 px-3 rounded-full bg-purple-500 text-white text-sm font-medium disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none"
          disabled={event.locked}
          onClick={() => navigate(`/events/${event.id}`)}
        >
          {event.locked ? "Locked" : "Select Event"}
        </button>
      </div>
    </article>
  );
};

export default EventCard;
