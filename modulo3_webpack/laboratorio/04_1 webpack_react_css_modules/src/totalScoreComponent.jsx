import * as React from 'react';
import { getTotalScore } from './averageService';
import classNames from './totalScoreComponentStyles';

export class TotalScoreComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            scores: [90, 75, 60, 99, 94, 30],
            totalScore: 0,
        };
    }

    componentDidMount() {
        this.setState({ totalScore: getTotalScore(this.state.scores) });
    }

    render() {
        return (
            <div>
                <span className={classNames.resultBackground}>
                    Students total score: {this.state.totalScore}
                </span>
            </div>
        );
    }
}