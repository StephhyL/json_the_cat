const request = require('request');
// const fs = require('fs');



const fetchBreedDescription = (breedName, callback) => {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;












  callback(error, value);
};





request(domain, (error, response, body) => {
  if (error) {
    console.log('error is: ', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log('error is: ', error);
    console.log('statusCode is: ', response.statusCode);
    return;
  }

  const data = JSON.parse(body); //data is now body but as an 
  if (data[0]) {
    const catDescription = data[0].description;
    console.log(catDescription);
  } else {
    console.log("Error: breed not found");
  }
  // console.log("body is: ", body);
  // console.log(typeof body); // body is a string
});

module.exports = fetchBreedDescription;