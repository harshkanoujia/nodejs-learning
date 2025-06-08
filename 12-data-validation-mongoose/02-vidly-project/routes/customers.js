const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {Customer, validate} = require('../models/customer')  // if we this type then we also have to reload this model like in router.get method and have add customer.Customer


// router.get('/', async(req,res)=>{
//     const customer = await customer.Customer.find() //this is the way when we use the direct the customer and in which the both the model is load then it looks some messy and create confussion
//     res.send(customer)
// })

router.get('/', async(req,res)=>{
    const customer = await Customer.find() //so with now we reload the particular model and use it directly
    res.send(customer)
})

router.get('/:id', async(req,res)=>{
    const customer = await Customer.findById(req.params.id)
    if(!Customer) return res.status(400).send(console.log('The Id is not valid please confirm again'))
    
    res.send(customer);
})

router.post("/",async(req,res) => {
    // const {error} = validateCustomer(req.body);      //This will only when the validate logic in this file unless we use next line
   
    const {error} = validate(req.body);                 //So with the reload this model we can use direct method of validate because of the validation logic is in the customer.js file so with the export we can use it.
    if(error) return res.status(400).send(error.details[0].message)
    
    let customer = new Customer({
        name: req.body.name, 
        phoneno: req.body.phoneno,
        isGold: req.body.isGold
        })
    customer = await customer.save()
    res.send(customer);
})

router.put('/:id',async(req,res)=>{
    const {error} = validate(req.body)                      //Same logic we use validate because of the we export it and in this file we import this file
    if(error) return res.status(400).send(error.details[0].message)

    const customer =   await Customer.findByIdAndUpdate(req.params.id, {  
        name: req.body.name, 
        phoneno: req.body.phoneno,
        isGold: req.body.isGold
    }, {new: true})             //This will return the updated documents
    
    if(!Customer) return res.status(400).send(console.log('The ID you want to update is not valid please confirm again'))
    res.send(customer)
})

router.delete('/:id', async(req,res)=>{
    const customer = await Customer.findByIdAndDelete(req.params.id)
    if(!Customer) return res.status(400).send(console.log('The Id is not valid please confirm again'))

    res.send(customer);
})


module.exports = router;
