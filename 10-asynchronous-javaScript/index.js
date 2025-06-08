//ASynchronous : in Asynchronous the tasks does not wait any one it 
// console.log('Before');
// setTimeout(() => {      //ASynchronous program          //Actually this task does not wait it perform in future
//     console.log('Reading a User from a database...');
// }, 2000);//Wait for 2sec
// console.log('After');
// //Asynchronous does not mean concurrent and multithreaded it is single threaded 

//Synchronous : in Synchronous we can run one task at a time 
// console.log('Before'); //it is a synchronous nature and block the execution until it print
// console.log('After');

//-------Patterns for dealing with Async operations-------------------------------------------------------------------------------------------------------------------

// console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

//Callbacks
//Promises
//Async/await

function getUser(id){
    setTimeout(() => {      
        console.log('Reading a User from a database...');
        return{ id: id, gitHubUsername: 'Harsh'};
    }, 2000);           //Wait for 2sec
    return 2;
}
