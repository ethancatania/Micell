import React, { useState, useCallback } from 'react';
import Desc from './Desc.jsx';
import ShortDesc from './ShortDesc.jsx';
import Switch from './Switch.jsx';

const Intro = function() {
    const [TLDR, setTLDR] = useState(false);
    const handleSwitchClick = useCallback(() => {
        console.log('Switch clicked');
        setTLDR((prev) => !prev);
    }, []);

    return (
        <div className="intro">
            <h1>Hello, I'm Ethan!</h1>
            <p>Welcome to my website...</p>
            { TLDR == true ? (
            <>
                <h2>Want to Know More? <Switch onClick={handleSwitchClick} /></h2>
                
                <ShortDesc />
            </>
            )
              : (
            <>
                <h2>Too Long? <Switch onClick={handleSwitchClick} /> </h2>
                
                <Desc /> 
            </>
            )}
            
        </div>
    );
};

export default Intro;