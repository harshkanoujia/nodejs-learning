const express = require("express"); 
const app = express();

const Joi = require("joi")              //we can use this for validate the movie string (required, min(3), string) 
app.use(express.json());
const port = process.env.PORT || 8080;

const genre = [ 
    { id: 1 , movie: "Action"  },
    { id: 2 , movie: "Thriller"},
    { id: 3 , movie: "Horror"  }
]
app.get("/", (req,res) =>{
    res.send("Welcome On Genre");
});

app.get("/api/genre",(req,res)=>{
    res.send(genre);
});

app.get("/api/genre/:id", (req , res) => {
    const genres = genre.find(c => c.id === parseInt(req.params.id));                                          
    if(!genres) return res.status(404).send('The Genre with the given ID is Not Found at the Moment'); 
    res.send(genres);
});


app.post("/api/genre", (req , res) => {     
    // const name = {                          //this code is basically for add a new value now we can add the validation logic
    //     id : genre.length +1,               // We can genrally use this code for POST but it can not validate the movie string,reqiured or null 
    //     movie : req.body.movie              //we can use Joi for validation 
    // };                                      
    // genre.push(name);                       
    // res.send(genre);                        //the end of the post the movie and create the movie 

    const {error} = validateGenre(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return ;
    }
     const name = {                         
        id : genre.length +1,               
        movie : req.body.movie                  
    };                                      
    genre.push(name);                       
    res.send(genre);
})

app.put("/api/genre/:id", (req,res) => {
    //look up the course 
    const genres = genre.find(c => c.id === parseInt(req.params.id));
    if(!genres) return res.status(404).send('The Genre with the given ID is Not Found at the Moment'); 

    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genres.movie = req.body.movie;
    res.send(genres);
})

app.delete("/api/genre/:id", (req,res) =>{
    //look up the genre 
    // if not available give 404 error
   const genres = genre.find(c => c.id === parseInt(req.params.id))    //req.params.id is important beacuse otherwise it can not get the paramater
    if(!genres) return res.status(404).send("The Genre is not found with the given ID at the moment")
    
    //Delete
    const index = genre.indexOf(genres);
    genre.splice(index, 1);
    //Return the remaining genre
    res.send(genres); 
}) 

function validateGenre(genre){                       //we create a function So that we can use this function in POST request and also in PUT request 
    const schema = Joi.object({                         
        movie : Joi.string().min(3).required()      
    })                                                  
    return schema.validate(genre);                  
}

app.listen(port,() => console.log(`Server is listen on ${port}`));  //this is where the port is running 




 