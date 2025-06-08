const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

const { json } = require("stream/consumers");


function doStep1(init){
    return new Promise((resolve,reject)=>{
        const result = init + 1;
        resolve(result);
    })
}

  function doStep2(init) {
    return new Promise((resolve,reject)=>{
        const result = init + 2;
        resolve(result)
    })
  }
  
  function doStep3(init) {
    return new Promise((resolve,reject)=>{
    const result = init + 3;
    resolve(result);
  })
}

//This is callback hell

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

//this is the promises

// function doOperation(){
//     doStep1(0)
//         .then(result1 => doStep2(result1)) 
//         .then(result2 => doStep3(result2))
//         .then(result3 =>{
//             console.log(`result: ${result3}`);
//         })      
//         .catch(error => console.log(error))      
// }


//this is the async and await
// async function doOperation(){
//     try{
//     const step1 = await doStep1(0)
//     const Step2 = await doStep2(step1)
//     const Step3 = await doStep3(Step2)
//     console.log(`result: ${Step3}`)
//     }
//     catch(error){ 
//         console.log(error.message)
//     }
// }

doOperation();