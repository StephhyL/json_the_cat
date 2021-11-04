const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('should return a string description for a vaild breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    })
  })

  it('should return an error object description for an invalid breed, via callback', (done) => {
    fetchBreedDescription('GUUUUUUTA', (err, desc) => {
      const expectedError = "Breed not found"
      assert.equal(err, expectedError);
      assert.equal(desc, null);
      done();
    })
  })

})