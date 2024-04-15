import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Cop1 from "./Cop1";
import Cop2 from "./Cop2";
import Cop3 from "./Cop3";
import rightArrow from '../assests/right-aarow.svg'
import { toast } from 'sonner'
import {copImage0,copImage1,copImage2} from '../utils/CopImage1'
import { fun } from "./catchThief";


function Form() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [cities, setCities] = useState([]);
  const [vehicles, setVehicles] = useState([]);



  let vehicleMap = {
  }
  let cityMap = {
  }
  let cityArr= []
  let vehicleArr= []


  useEffect(() => {
    fetchData();
  }, []);

  const fetchCatchResult = async (formData, cityMap, vehicleMap) => {
    try {
      const postData = {
        formData: formData,
        cityMap: cityMap,
        vehicleMap: vehicleMap,
      };
  
      const catchResult = await fetch(
        "https://yocketassignment.onrender.com/api/capture",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData) // Serialize data to JSON
        }
      );
  
      if (!catchResult.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const catchResultData = await catchResult.json();
     return catchResultData;
    } catch (error) {
      console.log(error);
    }
  }
  


  const fetchData = async () => {
    try {
      const cityData = await fetch(
        "https://yocketassignment.onrender.com/api/cities"
      );
      const convertedCityData = await cityData.json(); // to convert promise data into json
      setCities(
        convertedCityData
      );
      console.log(cities,"vbnm,")
      // generateCityMap(cityMap,cities)
      const vehicleData = await fetch(
        "https://yocketassignment.onrender.com/api/vehicles"
      );
      const convertedVehicleData = await vehicleData.json(); // to convert promise data into json
      setVehicles(
        convertedVehicleData
      );
      // generateVehicleMap(vehicleMap,vehicles)
    } catch (error) {
      console.log(error);
    }
  };


  const generateCityMap = (cityMap,cities) =>{
    cities.forEach((element)=>{
      cityMap[element.name] = element.distance;
      cityArr.push(element.name)
    })
  }

  const generateVehicleMap = (vehicleMap,vehicles) =>{
    vehicles.forEach((element)=>{
      vehicleMap[element.type] = element.range;
      vehicleArr.push(element.type)
    })
  }


  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Cop1City: "",
    Cop1Bike: "",
    Cop2City: "",
    Cop2Bike: "",
    Cop3City: "",
    Cop3Bike: "",
  });
  let alias = {
    Cop1City: "Cop 1 City",
    Cop1Bike: "Cop 1 Bike",
    Cop2City: "Cop 2 City",
    Cop2Bike: "Cop 2 Bike",
    Cop3City: "Cop 3 City",
    Cop3Bike: "Cop 3 Bike",
  }

  const images = [copImage0, copImage1, copImage2];

  const FormTitles = ["Please select city and vehicle for 1st Police Officer", "Please select city and vehicle for 2nd Police Officer", "Please select city and vehicle for 3rd Police Officer"];

  let filteredCity,filteredCity2,filteredBike,filteredBike2;
  let filterFun = () =>{
     filteredCity = formData.Cop1City ? cityArr.filter(bike => bike !== formData.Cop1City) : cityArr;

     filteredCity2 = formData.Cop2City ? filteredCity.filter(city => city !== formData.Cop2City) : cityArr;
  
     filteredBike = formData.Cop1Bike ? vehicleArr.filter(bike => bike !== formData.Cop1Bike) : vehicleArr;
  
     filteredBike2 = formData.Cop2Bike ? filteredBike.filter(bike => bike !== formData.Cop2Bike) : vehicleArr;
  }


  const PageDisplay = () => {
    generateCityMap(cityMap,cities)
    generateVehicleMap(vehicleMap,vehicles)
    console.log(vehicleArr)
    if (page === 0) {
      filterFun()
      return <Cop1 formData={formData} setFormData={setFormData}  vehicleMap = {vehicleMap}  cityMap = {cityMap}/>;
    } else if (page === 1) {
      filterFun()
      return <Cop2 formData={formData} setFormData={setFormData} filteredBike={filteredBike} filteredCity={filteredCity} vehicleMap = {vehicleMap}  cityMap = {cityMap} />;
    } else {
      filterFun()
      return <Cop3 formData={formData} setFormData={setFormData} filteredBike={filteredBike2} filteredCity={filteredCity2} vehicleMap = {vehicleMap}  cityMap = {cityMap}  />;
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await fetchCatchResult(formData, cityMap, vehicleMap);
      let flag = true;
      for (let x in formData) {
        if (formData[x] === "") {
          toast.error('Uh-oh!!', {
            description: `${alias[x]} cannot be empty`,
          });
          flag = false;
          setPage(0);
        }
      }
      if (flag) {
        toast.success('Ta-da!!', {
          description: `Algorithm performed its magic on the input!`,
        });
        console.log(result ," from backend")
        navigate("/result",{ state: { result ,cityMap , vehicleMap }});
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "0" : page === 1 ? "33.3%" : "66%" }}
        ></div>
      </div>



      <div className="form-container">
        <div className="header">
          <h1 className="p-4 text-center">{FormTitles[page]}</h1>
          <div>
          {<img className="cop-picture-holder" src={images[page]} alt="Cop" />}
          </div>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {
            page === 0 ? "" :
            
            <button className="footer-button-prev"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          <img src={rightArrow}  alt="Right Arrow" className="footer-btn-prev"/>

          </button>
         
          }
          <button className="footer-button-next-div"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleSubmit();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          <img src={rightArrow}  alt="Right Arrow" />
        </button>
        </div>

      </div>
    </div>
  );
}

export default Form;
