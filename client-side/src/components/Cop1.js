import React, { useState, useEffect } from "react";

function Cop1({ formData, setFormData , vehicleMap , cityMap}) {
  const [selectedCity, setSelectedCity] = useState(formData.Cop1City);
  const [selectedBike, setSelectedBike] = useState(formData.Cop1Bike);


  useEffect(() => {
    setSelectedCity(formData.Cop1City);
    setSelectedBike(formData.Cop1Bike);
  }, [formData]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFormData({ ...formData, Cop1City: city,Cop1Bike: "" });
  };

  const handleBikeChange = (event) => {
    const bike = event.target.value;
    setSelectedBike(bike);
    setFormData({ ...formData, Cop1Bike: bike });
  };

  return (
    <div className="sign-up-container">
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Select City...
        </option>
        {Object.keys(cityMap).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        value={selectedBike}
        onChange={handleBikeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Select Vehicle...
        </option>
        {Object.keys(vehicleMap).map((vehicle) => {
          const requiredCount = cityMap[selectedCity] * 2;
          if (vehicleMap[vehicle] >= requiredCount) {
            return (
              <option key={vehicle} value={vehicle}>
                {vehicle}
              </option>
            );
          }
          return null;
        })}
      </select>
    </div>
  );
}

export default Cop1;
