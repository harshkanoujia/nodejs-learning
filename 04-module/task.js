let a = [{
    name: "test1",
    rollno: 15,

}, {
    name: "test2",
    rollno: 16
}]

function myFunction() {
    a.push({ name: 'test3', rollno: 17 });
    console.log("firstOutput", a)

    let thirdOutput = a.find(item => item.name === "test3");                // .find is in built in array method and item is a parameter you defined in callback fuction 
    console.log("secondOutput", thirdOutput);                               // item = { name: "test3", rollno: 17 } or item.name === "test3"

    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        console.log((element.rollno).toString());
    }
}

myFunction();
