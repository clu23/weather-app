

//This function takes a JSON file as input and output only some weather data: temperature, felt temperature, location, humidity, wind velocity 
function formatData(data){
    return({location: data.location.name,
        date: data.current.last_updated.split(" ")[0],
        time: data.current.last_updated.split(" ")[1], 
        temperature_c: data.current.temp_c, 
        humidity: data.current.humidity, 
        windVelocity: data.current.wind_kph, 
        feltTemperature: data.current.feelslike_c});
}


function convertData(data){
    const {
        location: { name: cityName},
        current:{humidity, feelslike_c: feelsLike, temp_c: temperature, wind_kph: windSpeed,last_updated: lastUpdated},
      } = data;
      const date=lastUpdated.split(" ")[0];
      const time=lastUpdated.split(" ")[1];
      return{ cityName, humidity, feelsLike,temperature, windSpeed, date, time };
}

function convertData_2(data){
    const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
}

//This function takes a location as input and fetch the data from weatherAPI, it returns a JSON file 
async function getData(location){
    location=location.toLowerCase();
    const endpoint=`https://api.weatherapi.com/v1/current.json?key=c7103df777a44f889d2184454240105&q=${location}`;
    try{
        const response=await fetch(endpoint, { mode: 'cors' });
        if(!response.ok) throw new Error (`City ${location} not found`);
        const weatherData= convertData(await response.json());
        return(weatherData)
    } catch(error){
        alert(error)
        return null;
    }   
}

async function fetchData(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData_2(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }





export {getData as getData}
export {formatData as formatData}
export{fetchData as fetchData}

