const request = require('request');
// const fs = require('fs');



const fetchBreedDescription = (breedName, callback) => {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(domain, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback("Site error", null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      const catDescription = data[0].description;
      callback(null, catDescription)
    } else {
      callback("Breed not found", null);
    }
  })
}



    // const data = JSON.parse(body); 

    // if (data[0]) {
    //   const catDescription = data[0].description;
    //   console.log(catDescription);
    // } else {
    //   console.log("Error: breed not found");
    // }

    // callback(error, desc);



module.exports = {fetchBreedDescription};