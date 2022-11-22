import React from 'react'
import { BsKeyFill } from "react-icons/bs";
import { TbMountain } from "react-icons/tb";
import { FaFireAlt } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import Filter from './Filter';


const Filters = () => {
  const sorting = [
    {title: "New" , icon: <BsKeyFill />},
    {title: "Top of the World" , icon: <TbMountain />},
    {title: "Trending" , icon: <FaFireAlt />},
    {title: "Adapted" , icon: <FaWheelchair />},
    {title: "Play" , icon: <MdSportsCricket />},
    {title: "Hanoks" , icon: <BsHouseFill />},
  ]
  return (
    <div>
      <div className="filters">
        {sorting.map((item) => (
          <Filter title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Filters;