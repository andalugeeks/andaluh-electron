const fs = require('fs');
const path = require('path');

const folders = [
  path.resolve(__dirname, '..', 'build'),
  path.resolve(__dirname, '..', 'dist'),
];

folders.forEach(folder => fs.rmdir(folder, { recursive: true }, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Removing ${folder}`)
}));
