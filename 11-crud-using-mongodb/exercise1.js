const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/exercise')
    .then(()=>console.log('mongoDb connected...'))
    .catch((err=> console.error('Error in connecting to the database',err)))

const courseSchema = new mongoose.Schema({
    course : String,
    author: String,
    tags:[String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
}) 

const Course = mongoose.model('Course',courseSchema)      //this is Collection name which is we provide the database


//-------Skip this process if the data is already in database ----------------------------------------------------------------
// async function createCourse() {
//  const course = new Course({
//     course :"Express.js Course",
//     author: "Harsh",
//     tags:["express","backend"],
//     isPublished: true,
//     price: 10
//  });
//   const result = await course.save();
//   console.log(result);
// }

// async function createCourse() {
//  const course = new Course({
//     course :"Node.js Course by Harsh",
//     author: "Harsh",
//     tags:["node","backend"],
//     isPublished: true,
//     price: 20
//  });
//   const result = await course.save();
//   console.log(result);
// }


// async function createCourse() {
//  const course = new Course({
//     course :"ASP.NET MVC Course",
//     author: "Harsh",
//     tags:["aspnet","backend"],
//     isPublished: true,
//     price: 15
//  });
//   const result = await course.save();
//   console.log(result);
// }

// async function createCourse() {
//  const course = new Course({
//     course :"React Course",
//     author: "Harsh",
//     tags:["react","frontend"],
//     isPublished: false,
//     price: 0
//  });
//   const result = await course.save();
//   console.log(result);
// }

// async function createCourse() {
//  const course = new Course({
//     course :"Node.js Course by Arun",
//     author: "Arun",
//     tags:["node","backend"],
//     isPublished: true,
//     price: 12
//  });
//   const result = await course.save();
//   console.log(result);
// }

// async function createCourse() {
//  const course = new Course({
//     course :"Node.js Course by kashish",
//     author: "kashish",
//     tags:["node","backend"],
//     isPublished: false,
//     price: 12
//  });
//   const result = await course.save();
//   console.log(result);
// }

// async function createCourse() {
//  const course = new Course({
//     course :"Angular Course",
//     author: "kashish",
//     tags:["angular","frontend"],
//     isPublished: true,
//     price: 15
//  });
//   const result = await course.save();
//   console.log(result);
// }
// // createCourse();


//--end point of skiping the if we have data which is already in database-----------------------------------------------------------------------------------------

async function getCourse() {
  return await Course                         //we direct return the course ,so in below we add async function 
  .find({isPublished:true , tags:"backend"})
  .sort({course:1})                             //we also pass string for ascending ('name') and for descending ('-name')
  .select({course:1,author:1})                  //Here also we use string ('name author')
  // console.log(courses)                     //its not better to use we simply return the await function
}
async function run() {
  const courses = await getCourse();          //now it responds the promise because we directly return the the await so use await and store it in courses and 
  console.log(courses);
}
run();


//in this Get all the published backend courses, sort them by their name, pick only their name and author, and display them.

// async function getCourse() {
//   const courses = await Course
//           .find({tags:["node","backend "]} )  //this to find all the courses 
//           .or({isPublished:true})
//           .select({course:1,author:1})      //.select("name")
//           // .sort({course:1})
//   console.log(courses)
// }
// getCourse();
 