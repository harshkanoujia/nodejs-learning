
// async function Hello(name) {

//   let names = await `hello ${name}`;
//     return names;
// }
// // console.log(Hello("Harsh"));
// Hello("Harsh").then( names => console.log(names));

// ---------------------------------------------

// async function harsh(){
//     return 5 // return promises
// }
// harsh().then((x)=> {
//     alert(x);
// })

async function harsh() {
  return 5;         // if we add async then it give the promise 
}
console.log(harsh()) // So it is basically give the Promise{5} 

//Or we can also write as like this

function harsh(){
  return Promise.resolve(5);
}
console.log(harsh())

//Now it can resolve the promises
async function harsh(){
  return (5);
}
harsh().then(console.log)//(val=>console.log(val))

async function example() {
  return "Hello!";
}
example().then(console.log); // Logs: Hello!
