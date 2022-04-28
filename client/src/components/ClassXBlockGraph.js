import React, { PureComponent } from 'react';

const data = [
    {
        name: '04-01',
        Mood: 6.0,
        Energy: 5.6,
        "Amount of Sleep": 5.8,
    },
    {
        name: '04-02',
        Mood: 6.44,
        Energy: 6.55,
        "Amount of Sleep": 7.77,
    },
    {
        name: '04-03',
        Mood: 6.05,
        Energy: 5.61,
        "Amount of Sleep": 7.44,
    },
    {
        name: '04-04',
        Mood: 6.0,
        Energy: 5.07,
        "Amount of Sleep": 7.78,
    },
    {
        name: '04-05',
        Mood: 4.71,
        Energy: 5.28,
        "Amount of Sleep": 7.57,
    },
    {
        name: '04-06',
        Mood: 5.92,
        Energy: 6.0,
        "Amount of Sleep": 7.38,
    },
    {
        name: '04-07',
        Mood: 6.15,
        Energy: 5.53,
        "Amount of Sleep": 6.76,
    },
    {
        name: '04-08',
        Mood: 6.92,
        Energy: 6.38,
        "Amount of Sleep": 6.84,
    },
    {
        name: '04-09',
        Mood: 8.77,
        Energy: 8.11,
        "Amount of Sleep": 6.66,
    },
    {
        name: '04-10',
        Mood: 8.18,
        Energy: 7.125,
        "Amount of Sleep": 7.18,
    },
    {
        name: '04-11',
        Mood: 6.86,
        Energy: 6.4,
        "Amount of Sleep": 7.2,
    },
    {
        name: '04-12',
        Mood: 7.55,
        Energy: 7.11,
        "Amount of Sleep": 7.44,
    },
    {
        name: '04-13',
        Mood: 7.92,
        Energy: 7.61,
        "Amount of Sleep": 7.0,
    },
    {
        name: '04-14',
        Mood: 8.11,
        Energy: 7.55,
        "Amount of Sleep": 7.77,
    },
    {
        name: '04-15',
        Mood: 7.68,
        Energy: 7.36,
        "Amount of Sleep": 7.26,
    },
    {
        name: '04-16',
        Mood: 7.77,
        Energy: 7.88,
        "Amount of Sleep": 7.33,
    },
    {
        name: '04-17',
        Mood: 7.9,
        Energy: 7.2,
        "Amount of Sleep": 6.4,
    },
    {
        name: '04-18',
        Mood: 7.22,
        Energy: 5.77,
        "Amount of Sleep": 7.55,
    },
    {
        name: '04-19',
        Mood: 7.30,
        Energy: 6.76,
        "Amount of Sleep": 7.76,
    },
    {
        name: '04-20',
        Mood: 6.44,
        Energy: 6.11,
        "Amount of Sleep": 7.44,
    },
    {
        name: '04-21',
        Mood: 6.54,
        Energy: 6.72,
        "Amount of Sleep": 7.27,
    },
    {
        name: '04-22',
        Mood: 6.83,
        Energy: 7.0,
        "Amount of Sleep": 7.27,
    },
    {
        name: '04-23',
        Mood: 8.125,
        Energy: 7.5,
        "Amount of Sleep": 6.25,
    },
];

// Mood ranges from 4.71 to 8.77
// Energy ranges from 5.07 to 8.11

let colorFromNumbers = (mood, energy) => {
    var r = 0.0;
    var g = 0.0;
    var b = 0.0;

    if (mood >= 6.74 && energy >= 6.59) {
        // Yellow
        r = 255;
        g = 219;
        b = 120;
    } else if (mood >= 6.74) {
        // Green
        r = 111;
        g = 172;
        b = 123;
    } else if (energy >= 6.59) {
        // Red
        // (174,39,42) (173,67,40)
        // (209,36,41) (218,106,43)
        // Energy R: 214 -> 174
        // Mood G: 38 -> 87
        // B: 42
        r = (energy - 6.59) / 1.52 * (-40) + 214;
        g = (mood - 6.74) / 2.03 * (49) + 38;
        b = 42;
    } else {
        // Blue
        r = 87;
        g = 126;
        b = 220;
    }
    return `${r},${g},${b}`;
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{ 'background-color': "rgb(" + colorFromNumbers(this.props.mood, this.props.energy) + ")" }}>
                {this.props.mood}, {this.props.energy}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i, j) {
        return <Square mood={i} energy={j} />;
    }

    render() {
        const status = 'Current day: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(6.0, 5.6)}
                    {this.renderSquare(6.44, 6.55)}
                    {this.renderSquare(6.05, 5.61)}
                    {this.renderSquare(6.00, 5.07)}
                    {this.renderSquare(4.71, 5.28)}
                    {this.renderSquare(5.92, 6.0)}
                    {this.renderSquare(6.15, 5.53)}

                    {this.renderSquare(6.92, 6.38)}
                    {this.renderSquare(8.77, 8.11)}
                    {this.renderSquare(8.18, 7.125)}
                    {this.renderSquare(6.86, 6.4)}
                    {this.renderSquare(7.55, 7.11)}
                    {this.renderSquare(7.92, 7.61)}
                    {this.renderSquare(8.11, 7.55)}

                    {this.renderSquare(7.68, 7.36)}
                    {this.renderSquare(7.77, 7.88)}
                    {this.renderSquare(7.90, 7.20)}
                    {this.renderSquare(7.22, 5.77)}
                    {this.renderSquare(7.30, 6.76)}
                    {this.renderSquare(6.44, 6.11)}
                    {this.renderSquare(6.54, 6.72)}

                    {this.renderSquare(6.83, 7.00)}
                    {this.renderSquare(8.125, 7.50)}
                </div>
            </div>
        );
    }
}

export default class ClassXBlockGraph extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}