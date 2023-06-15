const { fetchBreedDescription } = require('./breedFetcher');

// Accept CLI argument
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// Send:
// node index.js Chartreux
// Expected output:
// The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day.
// Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly,
// sleep on your bed and snuggle with you if you’re not feeling well.