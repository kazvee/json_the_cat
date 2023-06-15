const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;

  // Make an HTTP request and wait for the response
  request(`${URL}${breedName}`, (error, response, body) => {
    // console.log(body);
    // console.log(typeof body);

    // If error occurs, print it to the console
    if (error) {
      callback("Error! 😾", null);
      return;
    }

    // If the response is not successful (200), print the error code to the console
    if (response.statusCode !== 200) {
      callback(`😾 Server returned HTTP Response Code: ${response.statusCode}`, null);
      return;
    }

    const data = JSON.parse(body);
    // console.log(data);

    // Access breed details via first entry in data array
    const breed = data[0];

    // Handle error if breed not found
    if (!breed) {
      callback("Unable to find the requested breed. 😾", null);
      return;
    }

    // Print the breed description for the user
    callback(null, breed.description);

  });

};

module.exports = { fetchBreedDescription };