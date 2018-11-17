import { getAvg } from './averageService';
import { getScore } from './averageService';

var logoImg = require('./content/logo_1.png');

// Let's use some ES6 features
const scores : number[] = [90, 95, 100];
const averageScore : number = getAvg(scores);
const finalScore : string = getScore(averageScore)
const messageToDisplay = `La media de la clase es de ${finalScore}`;

document.write(messageToDisplay);

// Img
const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);