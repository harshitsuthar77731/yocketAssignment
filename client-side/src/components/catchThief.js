export const fun = (formData,cityMap,vehicleMap) =>{
    console.log(cityMap,vehicleMap,"inside catch thief")
    let arr = [];
    for(let x in cityMap){
      arr.push(x);
    }
    let criminalCity = arr[Math.floor(Math.random()*5)]
    // let criminalCitDistance = cityMap[criminalCity];
    // let criminalCatched = false;
    for(let x in formData){
      if(x.includes("City")){
        let copCityDistance = cityMap[formData[x]];
        let splittedArray = x.split("City");
        let copBikeRange = vehicleMap[formData[`${splittedArray[0]}Bike`]];
        console.log(`${splittedArray[0]}`,"3rd paramater")
        // console.log(formData[x] , criminalCity, formData[x] === criminalCity,copBikeRange,copCityDistance)
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