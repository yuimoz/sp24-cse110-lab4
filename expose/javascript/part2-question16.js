let statistics = {
   redCars: 21,
   blueCars: 45, 
   greenCars: 12,
   raceCars: 5, 
   blackCars: 40,
   rareCars: 2
};

for (const property in statistics) {
   // print out the value of the property if:
   // property starts with r
   // or if the value is an odd num

   if (property.startsWith('r') || statistics[property] % 2 != 0) {
      console.log(statistics[property]);
   }
   
}
