
//1st thing is to connect mongodb so reload this mongoose module (require('mongoose')) and store it in constant mongoose(const mongoose)

const mongoose = require('mongoose');               //now we store the mongoose package in mongoose , so now this object has msg called connect and use it to connect with a mongoDb

//------------connect--------------------------------------------------------------------------------------------------------------------------------------------
mongoose.connect('mongodb://localhost/playground')      //And  now inside we pass a connection string and when we have deploy our project on a production enviroment we have a different string for production environment 
                                                        //in real we have connection string comes from a configration files
                                                        //so this connect method returns a promise  and "mongodb://localhost/playground" in this 'mongodb://localhost' its is a url or string with the help of we connect to mongodb and '/playground' this we provide the name of database we want
    .then(()=>console.log('Connected to MongoDB...'))                           //here we have use the console.log for simplicity but in a real application better to use debug module because with this we have more controll by the helmet of debugging messages we see in a console window
    .catch(err => console.error('Could not connect to MongoDb...',err));        //we have to catch an error msg

//mongoDb can not create database when we intialize it . It can only be created when we enter the data in it.
 
// -------Schema-------------------------------------------------------------------------------------------------------------------------------------------------
const courseSchema = new mongoose.Schema({
    name: String,       //So each course has name and name is property and the type of this property should be String
    author: String,     //similarly each course we have author property and type of this should be String
    tags: [String],     //And have tags which we have an array of Strings and technically when it been store then there is key value pair and key would be index and the value would be String
    date: {type: Date, default: Date.now , immutable: true}, //for this we not have to specify date so we have value the object 
    isPublished: Boolean
})

// ---Models--------------------------------------------------------------------------------------------------------------------------------------------------------
//the first letter of the Course is uppercase that means this is a class not an object
const Course = mongoose.model('Course',courseSchema) //mongoose have an method called model that takes two argument ( first argument is the singular name of collection that this model is for , Second argument is the schema that defines the shape of document in the collection) with this we have a course class in a application

//-------------------------createcourse--------------------------------------------------------------------------------------------------------------------------------------
// async function createCourse() {
//     const course = new Course({         //now we create an object based on upper class
//         name: 'NodeJs Course',
//         author: 'Harsh',
//         tags: ['node', 'backend'],      //now this tags property is an of strings
//         isPublished: true               //and we already define the date in Class i.e we not define there
//     });
    
//     const result = await course.save(); //This dealing the async operations because it take some time to save in database,so this method returns a promise i.e we using await in this 
//     console.log(result);  //we save this document and also store in variable so that we can see on console
// }

// createCourse(); //finally call //and we also run this file using the node and not nodemon because every time i save this program it makes the new document 

//---------create one more document--------------------------------------------------------------------------------------------------------------------------------
//now we can change some values in it and save in mongoDb and refresh it and now we can see that one more schema there

// const Course = mongoose.model('Course',courseSchema) 

// async function createCourse() {
//     const course = new Course({        
//         name: 'ReactJs Course',
//         author: 'Arun',
//         tags: ['React', 'Frontend'],   
//         isPublished: true            
//     });
    
//     const result = await course.save(); 
//     console.log(result);  
// }


//---------Quering Documents--------------------------------------------------------------------------------------------------------------------------------------

// so this is simple way to find the all documents --------------------------

// const Course = mongoose.model('Course',courseSchema)

// async function getCourse() {
// //  const courses = await Course.find(); //now with this .find method returns a promise so we using await and with using it we can get all the document

// // //now we can pass more filter 
//     const courses = await Course
//         .find() //now we pass the filter here  .find({ author: 'Harsh', isPublished: true })
//         .limit(3) //now with this we can limit it how many document we want to show 
//         .sort({name: 1})  // .sort({name: -1}) we can use 1 or -1 to show database(1 is for ascending order and -1 is for decending order)
//         // .select({name: 1, tags: 1});        // so we also check this {name: 1, isPublished:1,, author:1} and provide query as requirements  
//     console.log(courses);
// } 

// getCourse();

//----Comparison Query operator -------------------------------------------------------------------------------------------------------------------------------

//in MongoDb we have a bunch of operators for comparing values  like:
// eq(equal) , ne(not equal) , gt(greater than), gte(greater than or equal to), lt(less than) , lte(less than or equal to), in(we can use it where we have an array) , nin(not in)
// so this are some operators which we can use and we use short form and we also use $ this sign to indicate that its a Operator

// async function getCourse() {
//     const courses = await Course
        // .find({price: {$gt: 10}})    //like if we use {price: 10} and we only get the courses which are 10(rupees or doller) , {$gt: 10} with this we can only get courses which are greater than 10
        // .find({price: {$gte: 10}})   //with this we add comparision that we can access the code which are greater than 10
        // .find({price: {$gte: 10, $lte:20 } }) //with this we can add a comparision between that we can access only 10 to 20 not less than 10 or not more than 20 
        // .find({price: {$in: [10,15,20] } })       // now we want the courses which are 10 , 15 or 20 .So this is an Array we can use $in and compare it with the array so that we can only find this prices
        // .limit(1) 
        // .sort({name: 1})  
        // .select({name: 1, tags: 1})
    
//---Logical Query----------------------------------------------------------------------------------------------------------------------------------------------------
//(or , and) So in logical operator we have or(which checks the one of the condition is must be true)  , and(which checks the both condition is true)

        // .find()                                             //in or it returns both of them like {author: 'Harsh'} it returns it and {isPublished: true} those are published true it also returns it 
        // .or([ {author: 'Harsh'} , {isPublished: true} ])    //in this we add array and in array we add two objects each object is filter  , So in first filter obeject we have author and in second filter object we have ispublished
        // // .and([ {author: 'Harsh'} , {isPublished: true} ])   //in this we put this condition and find a particular array which are finding


//----Regular expression----------------------------------------------------------------------------------------------------------------------------------------
//if want more control over filtering strings we need to use regular expression
        // //Starts with Harsh
        // .find({author: /^Harsh/})// So this the " /^pattern/ " syntax of representing the regular expression
            
        // //Ends with Hamedani
         // .find({author: /Hamedani$/i}) //so this is case sensitive {author: /Hamedani$/} to make this in sensitive put the i at the end {author: /Hamedani$/i}
            
        // //Contains Harsh
        // .find({ author: /.*Harsh*/i })

//             console.log(courses);
// } 
// getCourse();

//------Pagination-----------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getCourse() {
    const pageNumber = 2;
    const pageSize = 10;
    
    const courses = await Course
        .find({author: 'Harsh'} , {isPublished: true})
        .skip((pageNumber - 1)* pageSize)
        .limit(pageSize)
        .sort({name:1}) 
        .select({name:1, tags:1})   // .select("author") it also works so we can use this

//-------Count-----------------------------------------------------------
        // .countDocuments() //in count we can count the documents how many documents in database

        console.log(courses)
    }

getCourse();


//------------Updating a Document---------------------------------------------------------------------------------------------------------------------------------
// first approach : Query first
//                 findById()
//                 Modify its properties
//                 save()

// Second approach : Update first
//                  update directly
//     Optionally : get the updated document 


// first technique //this approach is when we have a input and we should know this is valid approach
// async function updateCourse(id) {
//         const courses = await Course.findById(id)
//         if(!courses) return;
    
//         courses.isPublished = true;
//         courses.author = 'updated by harsh';
    
//         const result = await courses.save();
//         console.log(result);
// }
    
// updateCourse('67642738740788d963830741');

//--------------------------------------------------------------------
//Second technique  //mongodb update operators
// async function updateCourse(id) {
// 	const course = await Course.updateOne({ _id: id },{
// 		$set: {
// 			author: 'updated by Harsh kanoujia',
// 			isPublished:false
// 		}
// 	});
// 	// const reslut = await course.save();
// 	console.log(course);
// }

// updateCourse('67642738740788d963830741');

// some changes
// async function updateCourse(id) {
// 	const course = await Course.findByIdAndUpdate( id ,{
// 		$set: {
// 			author: 'updated by Harsh',
// 			isPublished:true
// 		}
// 	});
// 	// const reslut = await course.save();
// 	console.log(course);
// }

// updateCourse('67642738740788d963830741');

//----------------------------------------------------------------------------------

// async function removeCourse(id) {
// 	const result = await Course.deleteOne( { _id: id });
// 	console.log(result);
// }

// removeCourse('6763bc55ccfd552b7a1d570a');

//deletemany to collections of schema deleted

// async function removeCourse(id) {
// 	const result = await Course.deleteMany( { _id: id });
// 	console.log(result);
// }
// removeCourse('6763bc55ccfd552b7a1d570a');


