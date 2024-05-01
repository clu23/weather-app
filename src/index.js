import { renderHome } from "./main-home";


const $content=document.getElementById("content");


function createHtmlElement(type, id, arrayClasses, content){
    const element=document.createElement(type);
    if (id) {
        element.id=id;
    }
    if (arrayClasses){
        arrayClasses.forEach((Myclass) => element.classList.add(Myclass));
    }

    if (content){
        element.innerText=content;
    }

    return element;
}

function home() {
    $content.innerHTML = "";
//    renderNav();
    renderHome();
//   renderFooter();
  }

//This function takes a location as input and fetch the data from weatherAPI, it returns a JSON file 
async function getData(location){
    location=location.toLowerCase();
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=c7103df777a44f889d2184454240105&q=${location}`);
    const weatherData= await response.json();
    console.log(weatherData);
}


home();
getData('paris');

export { createHtmlElement, $content };