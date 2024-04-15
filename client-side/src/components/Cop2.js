import React, { useState, useEffect } from "react";

function Cop2({ formData, setFormData, filteredBike, filteredCity , vehicleMap, cityMap}) {

  const [selectedCity, setSelectedCity] = useState(formData.Cop2City);
  const [selectedBike, setSelectedBike] = useState(formData.Cop2Bike);
  const [displayedBikes, setDisplayedBikes] = useState(filteredBike);

  useEffect(() => {
    setSelectedCity(formData.Cop2City);
    setSelectedBike(formData.Cop2Bike);
    setDisplayedBikes(
      filteredBike.filter((bike) => vehicleMap[bike] >= 2 * cityMap[selectedCity])
    );
  }, [formData, selectedCity, filteredBike]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFormData({ ...formData, Cop2City: city ,Cop2Bike: ""});
    setDisplayedBikes(
      filteredBike.filter((bike) => vehicleMap[bike] >= 2 * cityMap[city])
    );
  };

  const handleBikeChange = (event) => {
    const bike = event.target.value;
    setSelectedBike(bike);
    setFormData({ ...formData, Cop2Bike: bike });
  };

  return (
    <div className="sign-up-container">
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select City...</option>
        {filteredCity.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={selectedBike}
        onChange={handleBikeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select Bike...</option>
        {displayedBikes.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Cop2;
