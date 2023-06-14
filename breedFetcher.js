const request = require('request');

// Accept CLI argument
const breedName = process.argv[2];

const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;

// Make an HTTP request and wait for the response
request(`${URL}${breedName}`, (error, response, body) => {
  // console.log(body);
  // console.log(typeof body);

  // If error occurs, print it to the console
  if (error) {
    console.log("Error! 😾", error);
    return;
  }

  // If the response is not successful (200), print the error code to the console
  if (response.statusCode !== 200) {
    console.log("Error! 😾 Server returned HTTP Error Code:", response.statusCode);
    return;
  }

  const data = JSON.parse(body);
  // console.log(data);

  // Access breed details via first entry in data array
  const breed = data[0];

  // Handle error if breed not found
  if (!breed) {
    console.log("Unable to find the requested breed. 😾");
    return;
  }

  // Print the breed description for the user
  console.log(breed.description);

});


// Send:
// node breedFetcher.js Chartreux
// Expected output:
// The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day.
// Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly,
// sleep on your bed and snuggle with you if you’re not feeling well.