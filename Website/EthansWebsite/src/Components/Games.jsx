import React from 'react';
import BlackHole from './BlackHole';
import Twenty from './DebtTracker';
import Switch from './Switch';
const Games = function() {
    return (
        <div className="games">
            <BlackHole></BlackHole>
            <Twenty></Twenty>
        </div>
    );
};

export default Games; 