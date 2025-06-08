// -----This is callback function and our task is to convert this into promises----------------------------------------------------------------------------------------------------------

// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

// function getCustomer(id, callback) {
//   setTimeout(() => {
//     callback({ 
//           id: 1, 
//           name: 'Mosh Hamedani', 
//           isGold: true, 
//           email: 'email' 
//         });
//     }, 4000);  
// }
  
// function getTopMovies(callback) {
//     setTimeout(() => {
//       callback(['movie1', 'movie2']);
//     }, 4000);
// }
  
// function sendEmail(email, movies, callback) {
//   setTimeout(() => {
//     callback();
//   }, 4000);
// }

// -------We convert upper code into promises---------------------------------------------------------------------------------------------------------------------------------------------------------

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
            id: 1, 
            name: 'Harsh', 
            isGold: true, 
            email: 'email' 
          });
      }, 4000);  
  })
}

function getTopMovies(){
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['movie1', 'movie2']);
  }, 4000);
})
}

function sendEmail(email,movies){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve();
    },4000)
  })
}

// function customer(){
//   getCustomer(1)
//     .then((customer) => {
//       console.log('Customer: ', customer);
//       if(customer.isGold)
//         return getTopMovies();
//     })
//     .then( movies => {
//       console.log('Top movies: ', movies)
//       return sendEmail(customer.email, movies)
//     })
//     .then(()=>console.log('Email sent...'))
//     .catch(error => console.log(error));
// }
// customer();



//---To this with async and await------------------------------------------------------------------------------------------------------------------------------------------

async function notifycustomer() {
  try {
    const customer = await getCustomer(1)
    console.log('Customer: ', customer)
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log('Top movies: ', movies)
      await sendEmail(customer.email, movies)
      console.log('Email sent...')
    }
   } catch (error) {
      console.log(error.message)
  }
}
notifycustomer();





