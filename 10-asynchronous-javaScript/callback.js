//In this file we have callback function , arrow function, callback hell, Named function rescue

//Callback function :    In JavaScript, a callback is a function passed as an argument to another function that is then executed later,
//                       typically after some task or event is completed. Callbacks are fundamental in JavaScript, especially for handling asynchronous operations like API calls, event listeners, or timers.

// console.log('Before');
// getUser(1, function (user){
//     console.log('User', user)
// });
// console.log('After');

// function getUser(id, callback){
//     setTimeout(() => {      
//         console.log('Reading a User from a database...');
//         callback({ id: id, gitHubUsername: 'Harsh'});
//     }, 2000);           //Wait for 2sec
// }


//-----------------------------------------------------------------------------------------------------
// // Arrow function
// console.log('Before');
// getUser(1,  (user) => {
//     // console.log('User', user)

//     //get the respositories       //first argument we pass an username and second argument we pass an callback function
//     getRepositories(user.gitHubUsername, (repos)=>{ 
//         console.log('Repos', repos);
//     })

//     // Now test if we change the name of callback function for getRepositoriess
//     // getRepositories(user.gitHubUsername, (privacy)=>{
//     //     console.log('Repos', privacy);
//     // }) // it works same as before
// });
// console.log('After');

// function getUser(id, callback){
//     setTimeout(() => {      
//         console.log('Reading a User from a database...');
//         callback({ id: id, gitHubUsername: 'Harsh'});
//     }, 2000);           //Wait for 2sec
// }

// //Create own callback function and call it in getUser
// function getRepositories(username, callback){  //Aync function
//     setTimeout(() => {      
//         console.log('Calling Github API...');
//         callback(['repo1','repo2','repo3']);
//     }, 2000);
// }




//--------Callback Hell--------------------------------------------------------------------------------------
//Callback Hell:  Callback Hell(also called the "Pyramid of Doom") is a situation that occurs when you have nested callbacks in JavaScript, making the code difficult to read,
//                maintain, and debug. This typically happens when multiple asynchronous tasks need to be executed in sequence, where the output of one operation is the input for the next.

// //Synchronous Way
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');


// //ASynchronous Way 
// console.log('Before');
// getUser(1,  (user) => {
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repos[0],(commits) => {
//              console.log(commits);
//             //CALLBACK HELL  //it can also be solved as promise.then 
//             //this made code messy and more confusing
//         })
//     })
// });
// console.log('After');

// function getUser(id, callback){
//     setTimeout(() => {      
//         console.log('Reading a User from a database...');
//         callback({ id: id, gitHubUsername: 'Harsh'});
//     }, 2000);           //Wait for 2sec
// }
// function getRepositories(username, callback){  
//     setTimeout(() => {      
//         console.log('Calling Github API...');
//         callback(['repo1','repo2','repo3']);
//     }, 2000);
// }
// function getCommits(repo, callback){  
//     setTimeout(() => {      
//         console.log('Calling Github API...');
//         callback(['commit']);
//     }, 2000);
// }


//----------Named Functions to Rescue------------------------------------------------------------------------------------------------------------------------
//Named Functions to Rescue:  The phrase "named function rescue" typically means assigning a name to a callback function, especially when using it inside nested callbacks or for error handling, to make the code more readable, debuggable, and maintainable.

// getUser(1,  (user) => {
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repo[0],(commits) => {
//           console.log(commits);
//         });
//     });
// });  //Callback Hell problem

//Now in named function we give name to anonymous function like in upper case 


//                              (commits) => {      //this function is anonymous
//               });
// ------------------------------------------------
//                      (repos)=>{                  //this function is anonymous and 
//         getCommits(repo,(commits) => {
//         });
//  ------------------------------------------------------                  
//              (user) => {                         //this function is also anonymous
//          getRepositories(user.gitHubUsername, (repos)=>{
//                      getCommits(repo,(commits) => {
//                      });
//          });
//  });

//now we give the name and the clarity is more
console.log('Before');
getUser(1, getRepositories);          //this is the reference of getRepositories
console.log('After');


function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits); //this is the reference of getCommits 
}
function getCommits(repos){
    getCommits(repos,displayCommits); //this is the reference of commit 
}
function displayCommits(commits){   //now with this it takes an array of commits
    console.log(commits);           //and pass the reference of this function to another function
}


function getUser(id, callback){
    setTimeout(() => {      
        console.log('Reading a User from a database...');
        callback({ id: id, gitHubUsername: 'Harsh'});
    }, 2000);           //Wait for 2sec
}
function getRepositories(username, callback){  
    setTimeout(() => {      
        console.log('Calling Github API...');
        callback(['repo1','repo2','repo3']);
    }, 2000);
}
function getCommits(repos, callback){  
    setTimeout(() => {      
        console.log('Calling Github API...');
        callback(['commit']);
    }, 2000);
}


