export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
}

function getTotalScore(scores: number[]): number {
    return scores.reduce((score, count) => score + count);
}

export function getScore(score: number): string {
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