import React from 'react';
const Game = ({ game }) => {
    return (
        <section>
            <div className="pb2 mb2">
                <div className="bg-near-white f6 h2 pa3 flex items-center justify-between gray-gradient">
                    <span>{game.seriesName}</span>
                    <span> > </span>
                </div>
                <div>
                    <div className="pa3 pb1">
                            <span className='f6'>
                                <span>Match 10</span><span>.</span><span>Al Amarat</span>
                            </span>
                    </div>
                    <div className="pl3 mt2 flex items-center flex-row">
                        <div><img src="https://via.placeholder.com/50x25" alt=""/></div>
                        <div className='f5 ml2'>Oman</div>
                    </div>
                    <div className="pl3 flex items-center flex-row">
                        <div><img src="https://via.placeholder.com/50x25" alt=""/></div>
                        <div className='f5 ml2'>Nepal</div>
                    </div>

                    <div className="items-center justify-center flex ml5 time-remaining-box-container mt2">
                        <div>15 Minutes to toss</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Game;
