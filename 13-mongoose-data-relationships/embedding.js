//Embedding Documents                 //Overloading
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/embedded')
  .then(() => console.log('Connected to MongoDb'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({                 //So in this we can embedd the author schema directly in course schema
  name: String,                                     
  author: {                               //So here we are directly embedd author in course
     type: authorSchema,
     required: true           //So here we can also validate this and also add validation in subDocuments like authorSchema
  }
}));

async function createCourse(name, author) {
  const course = new Course({                             //So now we can see the output in which we have name of course, course Id and author Id, name of the author
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// async function updateAuthor(courseId) {
//     const course = await Course.findById(courseId);      //Now with this we can update the course author and then check in db it updated
//     course.author.name = 'Harsh Kanoujia'
//     course.save();
//     // course.author.save()     // we do not use this command because with this it can't save the documents
// }

async function updateAuthor(courseId) {
    const course = await Course.updateOne({_id: courseId},{
        $set: {                         //like if we want to update the sub Documents directly then we use this  
            'author.name': 'Arun'
        }
        // $unset: {                    //If we want to remove the documents we use unset operator
        //     'author': ''              //By passing the empty string we can remove the author from database
        // }
    });
}

// createCourse('Node Course', new Author({ name: 'Harsh' }));

updateAuthor('677265e4b5334afe4f9a642f');