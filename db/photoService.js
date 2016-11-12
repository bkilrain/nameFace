const path = require('path');
const fs = require('fs');

const fetchPhotos = (deckFolder) => {
  const deckPath = path.resolve(__dirname, 'Decks', deckFolder);
  return new Promise( (resolve, reject) => {
    fs.readdir(deckPath, (err, files) => {
      if (err) {
        console.log('error in fetchPhotos:', err)
      }
      const allPaths = files.map( file => `${deckPath}/${file}`);
      resolve(allPaths);
    });
  });
};

const stashPhotos = () => {

};

module.exports = {fetchPhotos};