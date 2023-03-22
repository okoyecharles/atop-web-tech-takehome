import React from "react";
import Avatar from "../../assets/avatar.png";
import Logo from "../../assets/logo.svg";
import Dropdown from "../../components/dropdown";
import { Link } from "react-router-dom";

import { BsDot } from "react-icons/bs";

import Icon1 from "../../assets/sidebar/Buildings.svg";
import Icon2 from "../../assets/sidebar/PokerChip.svg";
import Icon3 from "../../assets/sidebar/IdentificationCard.svg";
import Icon4 from "../../assets/sidebar/BookOpen.svg";
import Icon5 from "../../assets/sidebar/Notebook.svg";
import Icon6 from "../../assets/sidebar/MusicNote.svg";
import Icon7 from "../../assets/sidebar/IdentificationBadge.svg";

const SideBar = ({ navOpen }) => {
  return (
    <section className={`z-40 w-[75vw] md:w-48 bg-gray-primary border-r border-gray-700 fixed top-0 h-screen md:static transition ${navOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
      <div className="side-bar-container py-5 relative h-full">
        {/* User profile */}
        <header className="user-profile flex items-center gap-[1ch] px-3 pb-2">
          <div className="user-profile-avatar h-8 w-8 min-w-8 rounded-full flex overflow-hidden">
            <img src={Avatar} alt="Avatar" className="object-cover" />
          </div>
          <span className="text-gray-200 truncate">John Clement</span>
        </header>

        {/* Menu sections */}
        <section className="flex flex-col h-[calc(100vh-112px)] overflow-y-scroll px-3 py-4">
          <div className="sidebar-section">
            <h2 className="text-ssm text-gray-400">Favorites</h2>
            <ul className="pt-2 flex flex-col gap-1">
              <li className="flex items-center text-gray-300">
                <BsDot className="text-2xl -ml-2 text-gray-600" /> Add Dancers
              </li>
              <li className="flex items-center text-gray-300">
                <BsDot className="text-2xl -ml-2 text-gray-600" /> Accounting
              </li>
            </ul>
          </div>

          <div className="sidebar-section pt-6">
            <h2 className="text-ssm text-gray-400">Dashboards</h2>
            <ul className="pt-2 flex flex-col gap-1">
              <li className="text-gray-300 hover:bg-gray-secondary rounded cursor-pointer transition">
                <Link
                  className="py-1 px-2 flex items-center gap-[0.5ch]"
                  to={"/"}
                >
                  <img src={Icon1} alt="" className="h-[17.5px] w-[17.5px] " />{" "}
                  Event Selection
                </Link>
              </li>
              <li className="flex items-center text-gray-300 gap-[0.5ch] py-1 px-2 hover:bg-gray-secondary rounded cursor-pointer transition">
                <img src={Icon2} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Studio Owner
              </li>
            </ul>
          </div>

          <div className="sidebar-section pt-6">
            <h2 className="text-ssm text-gray-400">Competition</h2>
            <ul className="pt-2 flex flex-col gap-2">
              <Dropdown items={["Manage", "Add"]}>
                <img src={Icon3} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Entries
              </Dropdown>
              <Dropdown items={["View", "Print"]}>
                <img src={Icon4} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Schedule
              </Dropdown>
              <Dropdown
                items={[
                  "Session Awards",
                  "Overall Awards",
                  "Grand Awards",
                  "Print",
                ]}
              >
                <img src={Icon5} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Scores
              </Dropdown>
              <Dropdown items={["Upload"]}>
                <img src={Icon6} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Music
              </Dropdown>
            </ul>
          </div>

          <div className="sidebar-section pt-6">
            <h2 className="text-ssm text-gray-400">Studio</h2>
            <ul className="pt-2 flex flex-col gap-2">
              <Dropdown items={["Manage", "Add"]}>
                <img src={Icon7} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Dancers
              </Dropdown>
            </ul>
          </div>

          <div className="sidebar-section pt-6">
            <h2 className="text-ssm text-gray-400">Accounting</h2>
            <ul className="pt-2 flex flex-col gap-2">
              <li className="flex items-center text-gray-300 gap-[0.5ch] ml-2">
                <img src={Icon5} alt="" className="h-[17.5px] w-[17.5px]" />{" "}
                Overview
              </li>
            </ul>
          </div>
        </section>

        {/* Logo */}
        <div className="absolute bg-gray-primary bottom-0 left-0 w-full p-4 pt-2 flex justify-center">
          <img src={Logo} alt="" className="h-7" />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
