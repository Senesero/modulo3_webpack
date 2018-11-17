import './mystyles.scss';
const logoImg = require('./content/logo_1.png');

let sampleNumber: number = null;
sampleNumber = 6;

const name = 'Lemon';
console.log(`Hello parcel!!! by ${name}. Sample ${sampleNumber}`);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);