import React from "react";
import { useLocation } from "react-router-dom";
import { copImage0, copImage1, copImage2, Yapkashnagar, Lihaspur,Narmis,Shekharvati ,Nuravgram,evbike,evcar,evsuv} from '../utils/CopImage1'


function Result() {
  const { state } = useLocation();


  const result = state.result;
  const cityMap = state.cityMap;
  const vehicleMap = state.vehicleMap;


  
  const images = [copImage0, copImage1, copImage2];
  const city = [Yapkashnagar,Lihaspur,Narmis,Shekharvati ,Nuravgram];
  const vehicle = [evbike,evbike,evcar,evsuv]

  console.log("thre", result);
  let ImageToShow = "";
  let cityToShow = "";
  let carToshow = ""


  const imageMap = {
    Cop1: 0,
    Cop2: 1,
    Cop3: 2
  };
  let i = 0
  for(let x in cityMap){
    cityMap[x] = i++;
  }
  i =0 ;
  for(let x in vehicleMap){
    vehicleMap[x] = i++;
  }

  const index = imageMap[result[2]];
  ImageToShow = images[index];

  const cityindex = cityMap[result[0]];
  cityToShow = city[cityindex]

  const carindex = vehicleMap[result[1]];
  carToshow = vehicle[carindex]



  return (
    <div className="container p-8">
      <h2 className="text-2xl font-bold mb-4">Result</h2>
      {result && result.length > 0 ? (
        <div className="bg-white shadow-md rounded px-8 py-6 flex gap-[5vh] justify-between">
          <div className="flex flex-col  gap-6 items-center">
            <p className="text-lg mb-4">Criminal caught by: {result[2]}</p>
            <div>
              {<img className="cop-picture-holder" src={ImageToShow} alt="Cop" />}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <p className="text-lg mb-4">Criminal caught in: {result[0]}</p>
            <div>
              {<img className="cop-picture-holder" src={cityToShow} alt="City" />}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <p className="text-lg mb-4">Vehicle used: {result[1]}</p>
            <div>
              {<img className="cop-picture-holder" src={carToshow} alt="Vehicle" />}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg">No cop successfully caught the criminal.</p>
      )}
    </div>
  );
}

export default Result;
