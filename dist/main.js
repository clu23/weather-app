(()=>{"use strict";document.getElementById("content"),async function(e){e=e.toLowerCase();try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=c7103df777a44f889d2184454240105&q=${e}`,{mode:"cors"});return await t.json()}catch(e){return{cod:e.name,message:e.message}}}("paris").then((e=>{console.log(e)}))})();