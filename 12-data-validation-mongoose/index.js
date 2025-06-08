//In this Validation , built in validator, Custom validator , Async validator or Promise Validator, Validation Errors
// Validators only run on the create or save methods.


const mongoose = require('mongoose');              
mongoose.connect('mongodb://localhost/exercise')      

//the validation logic is only in mongoose mongodb doesn't care about it can be null 
//we validate so that we can store the null property in it so it can check the validation logic if it not valid it give us error 
//we use Joi for validation 
//but the que is we have two validation mongoose or Joi and ans is both we use Joi in restful api so it can idetify the status is valid and in mongoose we use the validation logic which is required

const courseSchema = new mongoose.Schema({      
    
//Validation---------------------------------------------------------------------------------------------------------------------------------
  // course: {            //this is when we use only validation
    //     type:String, required:true
    // },  //now its required  //this property is only valid in mongoose ,mongodb doesn't care about it  //this is built in validator
    
    course: {               //this is when we use the built in validators
        type: String, 
        required: true,
        minlength: 3,  //here we add the validators 
        maxlength: 150,
        // match: /pattern/
    },  
    category: {         //here also add only validate
        type: String,
        required: true,
        enum: [ 'web','mobile', 'network' ] //here we use the enum validator and set this to an array to valid strings and so lets we have pre-defined category
    },
    author: {String},
    Date: { type: Date, default:Date.now},
    
//Custom validator------------------------------------------------------------------------------------
    //now we create a logic on tag what should if tag is empty,null or cannot define in model then it should be an error
    // tags: {
    //    type: Array,
    //    validate:{           // this is how we implement the custom validator so now if someone would give the null, empty or not give any tag then its validate 
    //    validator: function(v){
    //       return  v && v.length > 0;
    //     },
    //     message: 'A Course length should be at least one tag.'
    //    }
    // },

// Async validator Or Promise validator------------------------------------------------------------------------------------------------
// In recent versions the Async validator is no longer suported so we use the Promise validator
    tags: {
       type: Array,
       validate: {           
                validator: function(v){
                  return new Promise((resolve) => {
                    setTimeout(() => {
                        const result = v && v.length > 0; // Check if array is not empty
                        resolve(result); // Resolve with true (valid) or false (invalid)
                    }, 4000);
                  });
                },
                message: 'A Course length should be at least one tag.'
              }
      },

//Built in validator------------------------------------------------------------------------------------------------------
    isPublished: Boolean,
    price: {
        type : Number, //now here we add a logic that price is only required when the course ispublished true otherwise not 
        required : function(){ return this.isPublished; },  //now in this if we provide the arrow function then it will not work beacuse arrow function doen't have their own (this) method  in function we return a boolean 
        min: 10,
        max: 200
    }
})

const Course = mongoose.model('Course',courseSchema)

async function createCourse() {
  const course = new Course({
    course :"Express.js Course",  //now we commenting this lines and run the code so course is null mongodb is allowing this    //req.body.course
    category: '-',  //and we provide the worng category to recognised an error
    author: "Harsh",
    tags:null,        //So it would give an error when the provide an empty,null, or not define
    isPublished: true,
    price: 10
  });
     //   const result = await course.save();  //now if we want to save it this it will give an exception error
    //   console.log(result);       //now with this it can only give the success error


    //now this is validation in which mongoose can't allow you to store because of its required field
  try{
      const result = await course.save();   //now with this we can handle a error
      console.log(result);
      
      // await course.validate() //it can return the promise of void  
    // now the both logic should handle a error and log it.

    // course.validate((error)=>{   //this returns the boolean
    //     if(error){}
    // })
  // }catch(error){     //this use is for only before the apply the validation error 
  //   console.log(error.message)
  // }

//Validation Errors----------------------------------------------------------------------------------------------

  }catch(err){
    for(field in err.errors)
      console.log(err.errors[field].message);
  }
}
createCourse();

