(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{y:()=>t,W:()=>n});const t=document.getElementById("content");function n(e,t,n,a){const c=document.createElement(e);return t&&(c.id=t),n&&n.forEach((e=>c.classList.add(e))),a&&(c.innerText=a),c}t.innerHTML="",function(){const e=document.createElement("main"),a=n("h1",null,["white"],"Weather App"),c=document.createElement("hr"),o=n("p",null,["text-center","white"],"The App to get Weather forecast easily"),r=n("button",null,null,"Select a location");e.appendChild(a),e.appendChild(c),e.appendChild(o),e.appendChild(r),e.classList.add("main"),t.appendChild(e)}(),async function(e){e=e.toLowerCase();try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=c7103df777a44f889d2184454240105&q=${e}`);return await t.json()}catch(e){alert(e)}}("paris").then((e=>{console.log(e)}))})();