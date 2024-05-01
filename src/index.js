import { renderHome } from "./main-home";
import { getData } from "./data-management";


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




home();
//const { foo, bar }=getData('paris').then(result => result);
getData('paris').then((data) => {
    console.log(data);
  });

export { createHtmlElement, $content };