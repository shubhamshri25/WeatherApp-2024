import React from "react";

export default function Forecast() {
  const data = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">3 Hour ago</p>
      </div>

      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((data, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-light text-sm"> Wed </p>
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather-icon"
              className="w-12 my-1"
            />
            <p className="font-medium">12°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
