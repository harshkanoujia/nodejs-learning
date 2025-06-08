const mongoose = require('mongoose');
const { filter } = require('underscore');

mongoose.connect('mongodb://localhost/embedded')
  .then(() => console.log('Connected to MongoDb...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// async function addAuthor() {
//     const course = await Course.find(authors);
//     course.authors.push(author);              //So is an array we use push method to push the the new author
//     course.save();                            //We use this to save the changes in database
// }

async function getCourse() {
  const course = await Course.find();
  let authors = course[0].authors.find()
    console.log(authors)
}
getCourse()


// async function deleteAuthor(courseId, authorId) {     //So now we can remove the author
//     const course = await Course.findById(courseId)
//     const author = course.authors.id(authorId);
//     author.deleteOne();  //So at the place of remove() we use deleteone() function
//     course.save()
// }

// // So first we pass the courseId and name of new author     //So first there is only two author after running this we have three authors
// // addAuthor('677275ac7f209fe8d37f7d87', new Author({ name: 'Himanshu'}))

// deleteAuthor('677275ac7f209fe8d37f7d87', '677279030b42b9c3df508e8a')        //So here we provide the courseId and authorId (which author we want to delete) 

// createCourse('Node Course', [                 //Now with this we can pass the array of subdocuments to create and every array have it own object inside _id and name 
//     new Author({ name: 'Harsh'}),
//     new Author({ name: 'Arun'})
// ]);
