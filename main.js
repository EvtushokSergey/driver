let carInfo = {
  manufacturer: "Renault",
  model: "MeganeIII",
  gradYear: 2012,
  avgSpeed: 100,
  volumeFuelTank: 60,
  avgFuelConsumption: 5.0,
  drivers: "Jaan",
  showCarInfo() {
    console.log(`Виробник: ${this.manufacturer};\n модель: ${this.model};\n рік випуску: ${this.gradYear};\n середня швидкість, км/год: ${this.avgSpeed};\n об'єм баку, л: ${this.volumeFuelTank};\n середня витрати палива, л/100км: ${this.avgFuelConsumption};`);
    if (carInfo.drivers != undefined) {
      console.log(`водії: ${this.drivers};`);
    }
  }
};
carInfo.drivers = "Jaan";
// carInfo.drivers = "Floren";
carInfo.showCarInfo();

let travelCalc = {
    distance: 2335,

    fuelToTravel() {
    
      let hours = Math.floor(travelCalc.distance/carInfo.avgSpeed);
      let minutes = ((((travelCalc.distance/carInfo.avgSpeed) % 1)*100)/100);
      let timeToTravel = (hours + ':' + minutes.toFixed(1) * 60);  

      console.log(`Дистанція: ${travelCalc.distance} км;\n Необхідний об'єм палива: ${Math.ceil(travelCalc.distance*carInfo.avgFuelConsumption/100)} л;\n Дистанція на одній заправці: ${Math.round((carInfo.volumeFuelTank/carInfo.avgFuelConsumption)*100)} км;`);
      if (travelCalc.distance > (carInfo.volumeFuelTank/carInfo.avgFuelConsumption*100)) {
        console.log(`Необхідна дозаправка: ${Math.ceil((travelCalc.distance*carInfo.avgFuelConsumption/100)-carInfo.volumeFuelTank)} л`);
      } 
      for (let i = 0; i >= 4; i++ ) {
      }
      if ((travelCalc.distance/carInfo.avgSpeed) >= 4 || (travelCalc.distance/carInfo.avgSpeed) <= 4) {
        console.log("Час на поїздку: " + timeToTravel);
      } else { 
        console.log("Час на поїздку: " + timeToTravel);
      }
  },
};
travelCalc.fuelToTravel();


