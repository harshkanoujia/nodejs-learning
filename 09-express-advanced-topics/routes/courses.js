//This will work with the structuring.js
const express = require('express');       
const Joi = require('joi');   
const router = express.Router();         


router.use(express.json()); 

router.get('/', (req,res) => {  
  res.send(courses);
});

router.get('/:id',(req,res) => {                                        
  const course = courses.find(c => c.id === parseInt(req.params.id))           
  if(!course) return res.status(404).send('The course with the given ID was not found ') 
    res.send(course);                                                            
});

router.post('/',(req,res) =>{        
  const {error} = validateCourse(req.body)            
    if (error) {                                  
     res.status(400).send(error.details[0].message);
     return;
   }
    const course = {                      
    id : courses.length + 1,            
    name: req.body.name                 
    };                                    
    courses.push(course);                     
    res.send(course);                    
});

router.put('/:id',(req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id))             
     if(!course) return res.status(404).send('The course with the given ID was not found ')
   const {error} = validateCourse(req.body);  
    if (error) {   
     res.status(400).send(error.details[0].message);
     return;
   }
     course.name = req.body.name;
     res.send(course);
})

function validateCourse(course){
  const schema = Joi.object({               
    name: Joi.string().min(3).required()  
  });
  return schema.validate(course);
}

router.delete('/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found ');

    //Delete 
    const index = courses.indexOf(course);
    courses.splice(index, 1); 
    res.send(course);
});

module.exports = router;



