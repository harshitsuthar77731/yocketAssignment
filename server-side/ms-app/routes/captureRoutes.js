const express = require('express');
const router = express.Router();

const catchThiefAlgo = (formData,cityMap,vehicleMap) =>{
    console.log(cityMap,vehicleMap,"inside catch thief")
    let arr = [];
    for(let x in cityMap){
      arr.push(x);
    }
    let criminalCity = arr[Math.floor(Math.random()*5)]
    for(let x in formData){
      if(x.includes("City")){
        let copCityDistance = cityMap[formData[x]];
        let splittedArray = x.split("City");
        let copBikeRange = vehicleMap[formData[`${splittedArray[0]}Bike`]];
        if(formData[x] === criminalCity){
          if(copBikeRange/copCityDistance>=2){
            let arr = [];
            arr.push(formData[x],formData[`${splittedArray[0]}Bike`],`${splittedArray[0]}`);
            return arr;
          }
        }
      }
    }
    return [];
  }
router.post('/', (req, res) => {
    let {formData , cityMap , vehicleMap} = req.body
    console.log(req.body)
    const result = catchThiefAlgo(formData, cityMap, vehicleMap); 
    console.log(result,"sent to frontend")
    res.json(result); 
  });

module.exports = router;
