
//Course  document and this Course have an Author (But the Author is more than just a name and is more than just a simple string) now we have collections of Author where we store the author documents and each author document we have name, webisite , image and so on. 

//Trade off between query performance vs consistency

//Normalization and Denormalization are used to alter the structure of a database. The main difference between normalization and denormalization is that normalization is used to remove the redundancy in the table, while denormalization is used to add the redundancy which means combining multiple tables so that execute query quickly.

//Basically we have two approaches one we have 
//1) Using References(Normalization) -> CONSISTENCY         //Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency

{                       //In this we have the seperate collection for storing our author 
let author = {          //So we have an author object like this 
    name: 'Harsh'       //we have all kinds of properties
} 

let course = {          //And then we have seperate collection of course object and set the author to id to the author document in the author collection
    author:'id',        //In relational databases we have a concept of relationship we enforces the data integrity but in MongoDb or NoSql database we not have relationship 
    
    // authors: [       //So lets imagine if the course might have multiple authors then and we set array of references
    //     'id1',       //So here we store multiple Id's
    //     'id2'
    // ]
}
}
//2) Using Embedded Documents( Denormalization)  -> PERFORMANCE                 //Combines data into a single table to make data retrieval faster. This process involves adding redundant copies of data or grouping data. Denormalization can be particularly advantageous for read-heavy operations

//in this instead of having seperate document of author we can embedd author document inside the course document  
{
let course = {                      //so here we havean course object or course document
    author: {
        name: 'harsh'
    }
}
}

//3) Hybrid approach 
{
let author = {
    name : 'Harsh'
    //we have also 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Harsh'
    }
}

}