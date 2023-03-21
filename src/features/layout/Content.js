import React, { useEffect } from "react";

import { FiSearch } from "react-icons/fi";

import Icon1 from "../../assets/header/sidebar.svg";
import Icon2 from "../../assets/header/star.svg";
import Icon3 from "../../assets/header/sun.svg";
import Icon4 from "../../assets/header/clock.svg";
import Icon5 from "../../assets/header/bell.svg";
import { getEventById } from "../data/events";
import { Link, useParams } from "react-router-dom";

const Content = (props) => {
  const [crumbs, setCrumbs] = React.useState(["Event Selection"]);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setCrumbs(["Event Selection", getEventById(+params.id).subtitle]);
    } else {
      setCrumbs(["Event Selection"]);
    }
  }, [params]);

  return (
    <section className="flex-1 relative">
      <header className="p-6 border-b border-gray-700 flex">
        {/* Crumb section */}
        <div className="flex items-center gap-[1.5ch] text-gray-200 mr-auto">
          <button aria-label="sidebar">
            <img src={Icon1} alt="" />
          </button>
          <button aria-label="bookmark">
            <img src={Icon2} alt="" />
          </button>
          <ul className="bread-crumb flex gap-1 truncate">
            {crumbs.map((crumb, i) => (
              <div className="crumb truncate flex gap-1" key={crumb}>
                <li className={!i && "truncate hover:underline"}>
                  {i === 0 ? <Link to="/">{crumb}</Link> : <>{crumb}</>}
                </li>
                <span className="text-gray-600">/</span>
              </div>
            ))}
          </ul>
        </div>

        {/* Search bar */}
        <div className="search-bar relative flex-shrink-0">
          <FiSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="mr-[1.5ch] bg-gray-secondary rounded-md focus:outline-none p-1 px-2 pl-7 text-gray-300 focus:ring-1 ring-gray-700 transition text-sm"
            placeholder="Search"
          />
        </div>

        {/* Other Icons */}
        <div className="flex items-center gap-[1.5ch] text-gray-200 flex-shrink-0">
          <button aria-label="toggle dark mode">
            <img src={Icon3} alt="" />
          </button>
          <button aria-label="clock">
            <img src={Icon4} alt="" />
          </button>
          <button aria-label="notifications">
            <img src={Icon5} alt="" />
          </button>
          <button aria-label="sidebar">
            <img src={Icon1} alt="" />
          </button>
        </div>
      </header>
      <section className="h-[calc(100vh-129.6px)] overflow-y-scroll">
        {props.children}
      </section>
      <footer className="absolute border-t border-gray-700 left-0 bottom-0 w-full z-30 flex  justify-between text-gray-400 text-ssm p-6 py-4 bg-gray-primary">
        <span>@ 2023 ScoreBox</span>
        <ul className="flex gap-[1ch]">
          <li className="hover:underline">
            <a href="">About</a>
          </li>
          <li className="hover:underline">
            <a href="">Support</a>
          </li>
          <li className="hover:underline">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Content;
