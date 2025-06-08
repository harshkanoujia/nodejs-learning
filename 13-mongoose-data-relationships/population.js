//References Documents                // Overriding
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseModeling')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({                     //This will createAuthor
  name: String,
  bio: String,
  website: String
}));

// const Course = mongoose.model('Course', new mongoose.Schema({                   //first we create auhtor and after creating the author we will create the course and put the authorId in it
//   name: String,                                                                 //So with this we will get only name and Id but not the author so now we change the model
// }));

const Course = mongoose.model('Course', new mongoose.Schema({                  //We commenting upper one because there is only one thing provided and we can't get the auhtor so we add new properties
  name: String,
  author: {                                                    //So we should determine the type of object should be in mongoose.schema.Types.objectId
    type: mongoose.Schema.Types.ObjectId,                      //so in author property we store the objectId and references the author
    ref: 'Author'                                              //There is not proper relation because we can store a course with invalid author and mongo does not care
  }                                                            //So now we can see the output in which we have the author Id 

}));                                                          
async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {           //After creating the author we will create a course with the provided in it the auhtorId
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

// async function listCourses() {          //So we are commenting this because in Real-world are not using only Id we have to populate it 
//   const courses = await Course
//     .find()
//     .select('name author');
//   console.log(courses);
// }

async function listCourses() {              //So here we can populate the author Id
  const courses = await Course
    .find()
    // .populate('author')                    //So this is we use populate and the first argument we difene the specified path  //So we passed the author and then it will shows the all the details releated to the author
    // .populate('author' , 'name ')          //Also it will shows the id    //In this we provide two arguments in populate then it can shows the only wo properties authorId and name 
    // .populate('author' , 'name -_id')      //with using this(-_id) now we can exclude the id and now we can only see the name of the author
    // .populate('category', 'name')          //So here we can also populate more fields like we have the category and each category has a name so that it can shows
    .select('name author');
  console.log(courses);
}

// createAuthor('Harsh', 'My bio', 'My Website');

// createCourse('Node Course', '//authorId')  //Now when we create a course we will pass the authorId
// createCourse('Node Course', '67725c0deb9f4cda39d5af8f')

listCourses();