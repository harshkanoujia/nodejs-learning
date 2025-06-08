const Joi = require('joi')
const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name:  {type: String , required: true},
    phoneno: {type: String, required: true},   //I use phone no. in string because of when we it in number then joi did not verify it properly because of Joi.number is min(3).max(10) and when we give output in form of (124454522) its not validate 
    isGold: {type : Boolean, default: false, required: true}
}))

function validateCustomer(customer){
    const schema = Joi.object({                             // and remember before we used the direct Joi.validate function but now its make changes and now we cannot use the direct Joi.validate function and we make the changes and first make the function(Joi.object) and inside the objects and then we can use the it.
        name: Joi.string().min(3).max(15).required() ,
        phoneno: Joi.string().min(10).max(10).required(), //we use Stirng at the place of number because if give no. in (24545454) its will not check properly it min(2).max(12) works like it think the no. is in singular form like(6)then it validate if it in strings it does not work properly so thats why we use strings it can verify number in ("4577877")
        isGold: Joi.boolean()
    })
    return schema.validate(customer);
}


// module.exports.Customer = Customer
exports.Customer = Customer
exports.validate = validateCustomer