const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {                                          //WE have a title property
    type: String,
    required: true,
    trim: true,                                     //We also enabling trimming to get the any padding around the title of the movie
    minlength: 5,
    maxlength: 255
  },
  genre: {                                          //here we use the genre schema beacuse we import it 
    type: genreSchema,  
    required: true
  },
  numberInStock: {                                  //here the stock
    type: Number, 
    required: true,
    min: 0,                                         //it zero because we does not want negative number
    max: 255
  },
  dailyRentalRate: {                  
    type: Number, 
    required: true,
    min: 0,
    max: 255
  }
}));

function validateMovie(movie) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required()
  });
  
  return schema.validate(movie);
}


exports.Movie = Movie; 
exports.validate = validateMovie;