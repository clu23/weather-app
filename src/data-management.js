//This function takes a JSON file as input and output only some weather data: temperature, felt temperature, location, humidity, wind velocity 
function convertData(data){
    const {
        location: { name: cityName},
        current:{humidity, feelslike_c: feelsLike, temp_c: temperature, wind_kph: windSpeed,last_updated: lastUpdated},
      } = data;
      const date=lastUpdated.split(" ")[0];
      const time=lastUpdated.split(" ")[1];
      return{ cityName, humidity, feelsLike,temperature, windSpeed, date, time };
}


//This function takes a location as input and fetch the data from weatherAPI, it returns a promise with a JSON file 
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


export {getData as getData}



