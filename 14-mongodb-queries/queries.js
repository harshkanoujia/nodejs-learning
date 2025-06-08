
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsonData')


const todoSchema = new mongoose.Schema({
    taskno: { type: Number },
    task: { type: String },
    Date: { type: Date, default : Date.now},
    taskId: { type : Number }
});
const Data = mongoose.model('data', todoSchema)


async function getUser() {  
    const user = await Data
    //.replaceOne( {"taskno": 2}, { task: "this is use by replaceone"})
    //.deleteMany({"taskno": 10})
    //.findByIdAndDelete( {_id: "677d050cd8f83266e9035810"} )         
    //.findByIdAndUpdate({ _id: '677cef436d1d641d0ef87efd'}, {$set: { task: "this is last time updation"}})
    //.findById('677ce4d1745ebbe4169625e6')                                 
    //.findOne({_id: '677ce4d1745ebbe4169625e6'})
    //.find().or([ {taskno: 10}, {task: 9}])                                //Returns true if one of true
    //.find().and([ {taskno: 10}, {task: "Git"} ])                          //returns false if one this returns false
    //.find({ taskId: { $lte :5 , $gt: 2}} ).sort({taskId: 1}).limit(2).skip(1)
    //.find({_id: "677d050cd8f83266e903580e"})
    //.find({taskId : { $lt: 5}})
    //.find().sort({taskno : 1})
    //.insertMany({ taskno : 10})
    //.updateMany({task:"Git"} , {taskno : 10} )
    //.updateOne( {taskno: 8}, { $set: {task: "Git"} } )
    //.updateOne({taskno : 10 }, { task: "Git"})        //It works without $set
    //.deleteOne({taskId: 9})
    //.deleteOne({_id: "677ce4d1745ebbe4169625e6"})
    //.create( { taskno:11, task: "Java", taskId: 11 } )
    //.countDocuments()
    
    console.log(user)
}

getUser();