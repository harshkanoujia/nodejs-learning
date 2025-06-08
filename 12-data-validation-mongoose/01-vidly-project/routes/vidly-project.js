//Our main app is appvidly and here is our all routes and validation logic
const mongoose = require('mongoose')                            //reload the mongoose
const express = require("express"); 
const router = express.Router();
const { Genre , validate}= require('../model/genre')


router.get("/",async(req,res)=>{                            
    const genre = await Genre.find().sort({movie:1});           //Genre.find send an promise so i.e we use await and inside the async function 
    res.send(genre);
});

router.get("/:id", async(req , res) => {
    const genre = await Genre.findById(req.params.id)                                                         //req.params.id is use to find the particular so that why we use
    if(!genre) return res.status(404).send('The Genre with the given ID is Not Found at the Moment'); 
    res.send(genre);
});

router.post("/", async(req , res) => {     
    // const {error} =  validateGenre(req.body);                                              //first check the movie is valid characters or not if not it gives an error
    
    const {error} =  validate(req.body);                          //so this will use when shift the logic of validateGenre to genre.js file 
    if(error) return res.status(400).send(error.details[0].message)
    
    let  genre = new Genre({ movie : req.body.movie  });                                    //So this how we can create an new movie in genre and now don't need to put id because the mongodb genrate the id itself                              
    genre = await genre.save();                  
    res.send(genre);
})

router.put("/:id", async(req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);                           //now again check the movie is valid characters or not if not it gives an error 

    const genre = await Genre.findByIdAndUpdate(req.params.id, { movie: req.body.movie},{       //now its check the id which is provided is valid or not if not valid its gives an error 
        new: true                                                                                //and if valid update it 
    });

    if(!genre) return res.status(404).send('The Genre with the given ID is Not Found at the Moment');  //here if provided id is incorrect 

    res.send(genre);
})

router.delete("/:id", async(req,res) =>{
    const genre = await Genre.findByIdAndDelete(req.params.id)                              //findByIdAndDelete is used in latest version and old version we use findByIdAndRemove but now its deprecated
    
    if(!genre) return res.status(404).send("The Genre is not found with the given ID at the moment")        //if it not found gives an error
    
    //Return the remaining genre
    res.send(genre); 
}) 

module.exports = router;                            //here we export this file and use it in main app