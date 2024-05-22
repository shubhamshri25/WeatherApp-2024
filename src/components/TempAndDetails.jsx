import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function TempAndDetails() {
  const veritcalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real feel",
      value: "22°",
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "34%",
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: "11km/hr",
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "5:30 AM",
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: "5:30 AM",
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "37°",
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "5°",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center text-xl text-cyan-300 py-6">
        <p>Rain</p>
      </div>

      <div className="flex items-center justify-between py-3">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="weather-icon"
          className="w-20 "
        />
        <p className="text-5xl">34°C</p>

        <div className=" flex flex-col space-y-3 items-start">
          {veritcalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="m-1" />
              {`${title}:`}
              <span className="font-medium ml-1"> {value} </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex  items-center ">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}:`}
              <span className="font-medium ml-1"> {value} </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
