import { getData } from "./data-management";
import { formatData } from "./data-management";
import { fetchData } from "./data-management";


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

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await fetchData(searchInput.value);
    view.setSearchResult(weatherData);
});







fetchData('paris').then((data) => {
    console.log(data);
  });

getData('paris').then((data) => {
    console.log(data);
  });

