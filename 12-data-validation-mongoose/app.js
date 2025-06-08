//In this we have the Schema type options, and this file is after index.js

const mongoose = require('mongoose');              
mongoose.connect('mongodb://localhost/exercise')      

const courseSchema = new mongoose.Schema({      
    course: {               
        type: String, 
        required: true,
        minlength: 2,  
        maxlength: 150,
    },  
    category: {         
        type: String,
        required: true,
        enum: [ 'web','mobile', 'network' ],
        // lowercase: true ,
        // uppercase: true
        // trim: true
    },
    author: {String},
    Date: { type: Date, default:Date.now},
    tags: {
       type: Array,
       validate: {           
                validator: function(v){
                  return new Promise((resolve) => {
                    setTimeout(() => {
                        const result = v && v.length > 0; 
                        resolve(result); 
                    }, 4000);
                  });
                },
                message: 'A Course length should be at least one tag.'
              }
      },

    isPublished: Boolean,
    price: {
        type : Number, 
        required : function(){ return this.isPublished; }, 
        min: 10,
        max: 200,
        get: v => Math.round(v),    //it will be called when in our database we have the decimal value and this will show the round off value and when we read the value of property
        set: v => Math.round(v)     //it will be called when we set the decimal value on our code and it will round off with the value and set is called when we set the value of property
    }
})

const Course = mongoose.model('Course',courseSchema)

async function createCourse() {
  const course = new Course({
    course :"Express.js Course",  
    category: 'web',  
    author: "Harsh",
    tags:['frontend'],        
    isPublished: true,
    price: 10.8
  });
  try{
      const result = await course.save();   
      console.log(result);
  }catch(err){
    for(field in err.errors)
      console.log(err.errors[field].message);
  }
}
// createCourse();

async function getCourses() {
    const courses  = await Course .find({ _id: '676954af293745d6ddd48a22'})
    console.log(courses[0].price);
}
getCourses();


 