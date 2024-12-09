const fs = require('fs');
const path = require('path');

function getImageAsBase64(imagePath) {
  const image = fs.readFileSync(path.resolve(__dirname, imagePath));
  return image.toString('base64'); // Convert binary data to Base64
}

module.exports = { getImageAsBase64 };