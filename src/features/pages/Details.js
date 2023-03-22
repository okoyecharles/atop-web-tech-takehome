import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../data/events";
import { SlArrowDown } from "react-icons/sl";
import DetailsStatsList from "./DetailsStatsList";

import Chart from "../../assets/chart.svg";

const Details = () => {
  const { id } = useParams();
  const event = useMemo(() => {
    return getEventById(+id);
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-gray-200 flex items-center gap-[1ch] font-medium">
        {event?.titles[0]}{" "}
        <SlArrowDown className={`text-xsm mr-1 text-gray-500`} />
      </h2>

      <div className="stats-grid grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        <div className="bg-[#e3f5ff] rounded-lg p-4 flex flex-col gap-2 text-gray-800">
          <h3 className="text-base font-medium">Entries Submitted</h3>{" "}
          <span className="font-bold text-2xl">{event.submittedEntries}</span>
        </div>
        <div className="bg-[#f8f9fb] rounded-lg p-4 flex flex-col gap-2 text-gray-800">
          <h3 className="text-base font-medium">Music Submitted</h3>{" "}
          <span className="font-bold text-2xl">
            {event.submittedMusic}/{event.submittedEntries}
          </span>
        </div>
        <div className="xl:col-span-2 bg-gray-secondary p-4 rounded-lg text-gray-300">
          <h3 className="text-base mb-2 text-gray-200 font-medium">Progress</h3>
          <div className="flex gap-2">
            <div>Registration: </div>
            <span className="text-gray-200 font-medium">Open</span>
          </div>
          <div className="flex gap-2">
            <div>Schedule: </div>
            <span className="text-gray-200 font-medium">Unpublished</span>
          </div>
          <div className="flex gap-2">
            <div>Music: </div>
            <span className="text-gray-200 font-medium">Not Complete</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-gray-secondary rounded-md p-4 flex flex-col gap-4">
          <h3 className="font-semibold text-gray-200">By Entry Type</h3>
          <div className="chart flex justify-center">
            <img src={Chart} alt="chart" />
          </div>
          <ul>
            <DetailsStatsList
              stats={[
                {
                  name: "Solo",
                  value: 40,
                  percent: "45%",
                  type: 1,
                },
                {
                  name: "Duet/Trio",
                  value: 15,
                  percent: "25%",
                  type: 2,
                },
                {
                  name: "Small Group",
                  value: 15,
                  percent: "25%",
                  type: 3,
                },
                {
                  name: "Large Group",
                  value: 2,
                  percent: "5%",
                  type: 1,
                },
                {
                  name: "Lines",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Productions",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Impulse",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
              ]}
            />
          </ul>
        </div>
        <div className="bg-gray-secondary rounded-md p-4 flex flex-col gap-4">
          <h3 className="font-semibold text-gray-200">By Age</h3>
          <div className="chart flex justify-center">
            <img src={Chart} alt="chart" />
          </div>
          <ul>
            <DetailsStatsList
              stats={[
                {
                  name: "Intermediate",
                  value: 41,
                  percent: "80%",
                  type: 1,
                },
                {
                  name: "Senior",
                  value: 16,
                  percent: "17%",
                  type: 2,
                },
                {
                  name: "Junior",
                  value: 0,
                  percent: "0%",
                  type: 3,
                },
                {
                  name: "Mini",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Advanced",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
              ]}
            />
          </ul>
        </div>
        <div className="bg-gray-secondary rounded-md p-4 flex flex-col gap-4">
          <h3 className="font-semibold text-gray-200">By Level</h3>
          <div className="chart flex justify-center">
            <img src={Chart} alt="chart" />
          </div>
          <ul>
            <DetailsStatsList
              stats={[
                {
                  name: "Elite",
                  value: 23,
                  percent: "80%",
                  type: 1,
                },
                {
                  name: "Competitive",
                  value: 42,
                  percent: "17%",
                  type: 2,
                },
                {
                  name: "Novice",
                  value: 0,
                  percent: "0%",
                  type: 3,
                },
                {
                  name: "Pre-Comp",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Adult",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Professional",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "First Solo",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
              ]}
            />
          </ul>
        </div>
        <div className="bg-gray-secondary rounded-md p-4 flex flex-col gap-4">
          <h3 className="font-semibold text-gray-200">By Genre</h3>
          <div className="chart flex justify-center">
            <img src={Chart} alt="chart" />
          </div>
          <ul>
            <DetailsStatsList
              stats={[
                {
                  name: "Jazz",
                  value: 25,
                  percent: "80%",
                  type: 1,
                },
                {
                  name: "Lyrical",
                  value: 15,
                  percent: "17%",
                  type: 2,
                },
                {
                  name: "Ballet",
                  value: 0,
                  percent: "0%",
                  type: 3,
                },
                {
                  name: "Hip Hop",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Acro",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Contemp.",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "M. Theatre",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Modern",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Open",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "Tap",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
                {
                  name: "S. Dance",
                  value: 0,
                  percent: "0%",
                  type: 1,
                },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
