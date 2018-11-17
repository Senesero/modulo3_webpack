import { getAvg } from './averageService';
import { getScore } from './averageService';

// Let's use some ES6 features
const scores : number[] = [90, 95, 100];
const averageScore : number = getAvg(scores);
const finalScore : string = getScore(averageScore)
const messageToDisplay = `La media de la clase es de ${finalScore}`;

document.write(messageToDisplay);