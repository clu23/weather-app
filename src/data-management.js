

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

//This function takes a JSON file as input and output only some weather data 
function formatData(data){

}


export {getData as getData}