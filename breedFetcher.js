const request = require('request');
// const fs = require('fs');

// grab the value from the command line
const input = process.argv.slice(2);
const inputString = input[0];
const query = inputString.slice(0, 4);

const domain = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;


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

  const data = JSON.parse(body); //data is now body but as an object


  // console.log("body is: ", body, "and it's type is:", typeof body);
  // console.log("data is: ", data, "and its type is: ", typeof data)




  // console.log(data);
  // console.log(typeof data);
  // console.log(data);
  // console.log(data == true); ???? why --> an empty arr is still something
  if (data[0]) {
    const catDescription = data[0].description;
    console.log(catDescription);
  } else {
    console.log("Error: breed not found");
  }
  // console.log("body is: ", body);
  // console.log(typeof body); // body is a string
});

