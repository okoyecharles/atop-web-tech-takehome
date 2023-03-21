import React from "react";
import { SlArrowDown } from "react-icons/sl";
import EventCard from "./EventCard";
import events from "../data/events";

const Events = () => {
  return (
    <div className="p-4">
      <h2 className="text-gray-200 flex items-center gap-[1ch] font-medium">
        All Events <SlArrowDown className={`text-xsm mr-1 text-gray-500`} />
      </h2>
      <ul className={`pt-4 grid grid-cols-1 md:grid-cols-2 gap-4`}>
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </ul>
    </div>
  );
};

export default Events;
