const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/exercise')

const courseschema = mongoose.Schema({
    course: String,
    author: String,
    Date: { type: Date, default:Date.now},
    tags: [String],
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseschema)


async function getCourse() {
    return await Course
        .find({isPublished:true})  //{ tags: $in:{ ['fronted' , 'backend']}     
        // .find({price : {$gte:15}})
        //or({ tags: 'backend'}, {tags:'frontend' })                    //also use it when there is more options in tags 
        .or([
            { price: {$gte: 15} },
            { course: /.*by.*/i }
        ])
        .sort({price:-1})   //.sort('-price')
        .select({course:1, author:1, price:1})  //.select('course author')
}

async function run() {
    const viewCourse = await getCourse()
    console.log(viewCourse);
}
run();


