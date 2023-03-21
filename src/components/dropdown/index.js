import { a, useSpring, useTrail } from "@react-spring/web";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Dropdown = ({ children, items }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const count = items.length;
  const dropSpring = useSpring({
    height: dropOpen ? count * 21.59 + (count - 1) * 8 : 0,
    config: {
      tension: 2000,
      friction: 200
    }
  });
  const dropItemTrail = useTrail(count, {
    opacity: dropOpen ? 1 : 0,
    y: dropOpen ? 0 : -20,
    config: {
      tension: 3000,
      friction: 200
    }
  });

  return (
    <li className="flex flex-col gap-2 text-gray-300 select-none">
      <div
        className="flex items-center gap-[0.5ch] cursor-pointer"
        onClick={() => setDropOpen((prev) => !prev)}
      >
        <SlArrowDown
          className={`text-xsm mr-1 text-gray-500 transition ${
            dropOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
        {/* <img src={Icon3} alt="" className="h-[17.5px] w-[17.5px]" /> Entries */}
        {children}
      </div>
      <a.ul
        className="sidebar-item-drop flex flex-col gap-2 ml-8 overflow-hidden"
        style={dropSpring}
      >
        {dropItemTrail.map((trail, index) => (
          <a.li style={trail} key={index}>{items[index]}</a.li>
        ))}
      </a.ul>
    </li>
  );
};

export default Dropdown;
