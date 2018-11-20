export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
}

function getTotalScore(scores) {
    return scores.reduce((score, count) => score + count);
}

export function getScore(score) {
    if (score > 100) {
        return 'Matrícula';
    } else if (score > 90) {
        return 'Sobresaliente';
    } else if (score > 70) {
        return 'Notable';
    } else if (score > 50) {
        return 'Aprobado';
    } else {
        return 'Suspenso';
    }
}