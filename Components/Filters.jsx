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
    { title: "New", icon: <BsKeyFill size={30} /> },
    { title: "Top of the World", icon: <TbMountain size={30} /> },
    { title: "Trending", icon: <FaFireAlt size={30} /> },
    { title: "Adapted", icon: <FaWheelchair size={30} /> },
    { title: "Play", icon: <MdSportsCricket size={30} /> },
    { title: "Hanoks", icon: <BsHouseFill size={30} /> },
    { title: "New", icon: <BsKeyFill size={30} /> },
    { title: "Top of the World", icon: <TbMountain size={30} /> },
    { title: "Trending", icon: <FaFireAlt size={30} /> },
    { title: "Adapted", icon: <FaWheelchair size={30} /> },
    { title: "Play", icon: <MdSportsCricket size={30} /> },
    { title: "Hanoks", icon: <BsHouseFill size={30} /> },
  ];
  return (
    <div className="filters">
      <div className="filter-box" >
        {sorting.map((item) => (
          <Filter title={item.title} 
          icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Filters;