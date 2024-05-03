import { $content, createHtmlElement } from "./index";


function render(){
    const $main = document.createElement("main");

    
    const $title = createHtmlElement("h1", null, ["white"], "Weather App");
    const $hr = document.createElement("hr");

    const $subtitle = createHtmlElement(
        "p",
        null,
        ["text-center", "white"],
        "The App to get Weather forecast easily"
      );
    
    const $button = createHtmlElement("button", null, null, "Search");

    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);

    $main.classList.add("main");

    $content.appendChild($main);
}


export {render as renderHome}