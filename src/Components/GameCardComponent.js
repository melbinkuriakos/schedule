import React from 'react';
import '../Common/index.css';
import 'tachyons';
import Game from './Game';

const GameCardComponent = ({ games }) => {
    return games.map(g => {
        return <Game game={g} key={g.matchID} />;
    });
};

export default GameCardComponent;

