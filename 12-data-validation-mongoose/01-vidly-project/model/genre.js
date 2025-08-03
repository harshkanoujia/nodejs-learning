const Joi = require('joi');
const mongoose = require('mongoose')

const Genre = mongoose.model('Genre', new mongoose.Schema({         // now in thid we direct add the whole schema in it
    movie: {
        type: String,                                               // and this is now the whole schema with inside the model
        required: true,
        minlength: 3,
        maxlength: 10
    }
}));


function validateGenre(genres) {                       // we create a function  to validate , So that we can use this function in POST request and also in PUT request 
    const schema = Joi.object({
        movie: Joi.string().min(3).required()
    })
    return schema.validate(genres);
}


exports.Genre = Genre;
exports.validate = validateGenre;

