//In this file we have promise(resolve ,reject),Replacing Callbacks with Promises,Consuming Promises
//Also in Promises we have the 3 methods (.then , .catch, .finally)
//.then (when the operation success)
//.catch (when the operation fails )
//.finally(Runs regardless of whether the promise is resolved or rejected)


//Promise function takes two parameter resolve and reject
// const p = new Promise(function(resolve,reject){
    
// });

//Or We can use Arrow function syntax to make it more simpler
// const p = new Promise((resolve,reject) => {
//     //at this time we kick off some async work
//     //if the async operation completes it work then if the work complete successfully then reslove or fulfilled
//     //or if there is any error then it reject 
//     //so somewhere we can consumed the promise we need to send this result to consumer of this promise 
//     //resolve and reject has basically a function
//     // resolve(1);//we need to send this result to the consumer of this promise 'p'
//     // reject(new Error('message'));//if it not resolve then it rejected we can give the msg with error message
// });

//in somewhere there is our promise is consumed  we have two method
//catch for catching any error, then to getting a result of async operations
// p.then(result => console.log('Result',result));

//---example--------------------------------------------------------------------------------------------------

// const p = new Promise((resolve,reject) => { resolve(2)}).then(result => console.log('result',result))
//it can also work in single line 

// //----example---------------------------------------------------------------------------------
// const p = new Promise((resolve,reject) => { 
//     setTimeout(()=>{
//         resolve(2);  // pending => resolve, fulfilled
//         reject(new Error('Message'))// pending => rejected
//     },2000);
// }); //and upper code this is how we create promise
// p  //this is how we consumed it 
//     .then(result => console.log('result',result)) //to get the result
//     .catch(err => console.log('Error',err.message)) //to get the error



//--Replacing Callbacks with Promises--------------------------------------------------------------------------------------------------------------------------
// console.log('Before');
// getUser(1,  (user) => {
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repos[0],(commits) => {
//             console.log(commits);
//         });
//     });
// });  //Callback Hell problem
// console.log('After');

// //we change callback to promises the below code is change callback to promise
// function getUser(id){ 
//     return new Promise((resolve, reject) =>{
//         //kick off async work in this case setting a timer
//         setTimeout(() => {      
//             console.log('Reading a User from a database...');
//            resolve({ id: id, gitHubUsername: 'Harsh'}); 
//         }, 2000);           //Wait for 2sec
//     });
// }
// function getRepositories(username){  
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {      
//             console.log('Calling Github API...');
//             resolve(['repo1','repo2','repo3']);
//         }, 2000);
//     });
// }
// function getCommits(repos){  
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {      
//             console.log('Calling Github API...');
//             resolve(['commit']);
//         }, 2000);
//     });
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------
//----------Consuming Promises--------------------------------------------------------------------------------------------------------------

//this is the code we change to promises
// console.log('Before');
// getUser(1,  (user) => {
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repos[0],(commits) => {
//             console.log(commits);
//         });   //callback
//     });
// });  //Callback Hell problem
// console.log('After');

//older version to new version

// const p = getUser(1);
// p.then(user => console.log(user));// then we pass result the result is an user object

// console.log('Before');

// getUser(1)  //now we can't console because in upper case we pass getRepositories
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// console.log('After');


// function getUser(id){ 
//     return new Promise((resolve, reject) =>{
//         //kick off async work in this case setting a timer
//         setTimeout(() => {      
//             console.log('Reading a User from a database...');
//            resolve({ id: id, gitHubUsername: 'Harsh'}); 
//         }, 2000);           //Wait for 2sec
//     });
// }
// function getRepositories(username){  
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {      
//             console.log('Calling Github API...');
//             resolve(['repo1','repo2','repo3']);
//         }, 2000);
//     });
// }
// function getCommits(repos){  
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {      
//             console.log('Calling Github API...');
//             resolve(['commit']);
//         }, 2000);
//     });
// }

//--------Async and Await approach----------------------------------------------------------------------------------------------------------------------------------
//Async and await helps us to a write asynchronous code like synchronous code

console.log('Before');

// async function displayCommits(){                            //So we using await inside the function so we decrate that function with async
//     const user = await getUser(1);                            //any time we calling a function that returns promise. we can await that result that function and then get the actual result just by calling the 
//     const repos = await getRepositories(user.gitHubUsername); //we can await and get store in repos 
//     const commits = await getCommits(repos[0]);
//     console.log(commits);
// }

// now Using try and catch

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch(err){
        console.log('Error', err.message);
    }
}

displayCommits();
console.log('After');


function getUser(id){ 
    return new Promise((resolve, reject) =>{
        //kick off async work in this case setting a timer
        setTimeout(() => {      
            console.log('Reading a User from a database...');
           resolve({ id: id, gitHubUsername: 'Harsh'}); 
        }, 2000);           //Wait for 2sec
    });
}
function getRepositories(username){  
    return new Promise((resolve,reject)=>{
        setTimeout(() => {      
            console.log('Calling Github API...');
            resolve(['repo1','repo2','repo3']);
        }, 2000);
    });
}
function getCommits(repos){  
    return new Promise((resolve,reject)=>{
        setTimeout(() => {      
            console.log('Calling Github API...');
            resolve(['commit']);
            // reject(new Error('something is wrong..'))
        }, 2000);
    });
}