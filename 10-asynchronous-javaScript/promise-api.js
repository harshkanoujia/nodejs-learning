// In this file we have creating settled promises, Parallel Promises,

// sometimes we create a promises which is already resolve
// const p = Promise.resolve({ id: 1})          // promise class in Js and has a static method resolve and this will return the promises that is already resolve
// p.then(result => console.log(result)); 


// simlarly sometimes we create an promise which will already rejected
// const p = Promise.reject(new Error('reason for rejection...'))       // promise class in Js and has a static method resolve and this will return the promises that is already resolve
// const p = Promise.reject('reason for rejection...')                  // promise class in Js and has a static method resolve and this will return the promises that is already resolve
// p.catch(error => console.log(error)); 


//-----------Parallel Promises-----------------------------------------------------------------------------

//both Promises call for at same time  
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('ASync operation 1...');
        resolve(1);
    }, 2000)
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('ASync operation 2...');
        resolve(2);
    }, 2000)
});

// Promise.all([p1, p2]) //another method in promise class 
//     .then(result => console.log(result))

Promise.race([p1, p2]) //another method in promise class 
    .then(result => console.log(result)) //in this the result of the value is not an array 


// we not work on multithread it still single threaded
// that single thread kicking off multiple async operations all most at same time 

// ---------Now change the value and check it how it works we add reject-----------------------------------------------------------------------------------------------------------------------------------------------------

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('ASync operation 1...');
//         reject(new Error('Something is wrong...'));
//     }, 2000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('ASync operation 2...');
//         resolve(2);
//     }, 2000);
// });

// Promise.all([p1, p2]) //if any promise is rejected then promise.all is rejected
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err.message));
//     .finally(() => { console.log("Operation work with finally") })

