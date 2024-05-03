

//This function takes a location as input and fetch the data from weatherAPI, it returns a JSON file 
async function getData(location){
    location=location.toLowerCase();
    try{
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=c7103df777a44f889d2184454240105&q=${location}`);
        const weatherData= await response.json();
        return(weatherData)
    } catch(error){
        alert(error);
    }   
}

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


export {getData as getData}
export {formatData as formatData}