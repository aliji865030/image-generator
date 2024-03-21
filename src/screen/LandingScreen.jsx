import React from 'react'
import axios from "axios"

const LandingScreen = () => {

    
//    window.onload=async function get(){
//         // const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://img4me.p.rapidapi.com/',
//   params: {
//     text: 'Home',
//     font: 'trebuchet',
//     size: '12',
//     fcolor: '000000',
//     bcolor: 'FFFFFF',
//     type: 'png'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'd3ca8691b5mshdf20109d6f12293p1f90b5jsnc64cef66f8f5',
//     'X-RapidAPI-Host': 'img4me.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
//     }


// window.onload=function(){
//     const API_TOKEN="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"
//     async function query(data) {
//         const response = await fetch(
//             "https://api-inference.huggingface.co/models/gpt2",
//             {
//                 headers: { Authorization: `Bearer ${API_TOKEN}` },
//                 method: "POST",
//                 body: JSON.stringify(data),
//             }
//         );
//         const result = await response.json();
//         return result;
//     }
//     query("home").then((response) => {
//         console.log(response);
//     });
// }




window.onload=function(){
    const prompt="home"
    fetch(`https://craiyon.AjaySinghUsesGi.repl.co/api?prompt=${prompt}`)
    .then(response => response.json())
    .then((parsedResponse)=>{console.log(parsedResponse)})
}

    

   




  return (
    <div>

      
    </div>
  )
}

export default LandingScreen
