import React, { useState, useCallback } from 'react';
import Desc from './Desc.jsx';
import ShortDesc from './ShortDesc.jsx';
import Switch from './Switch.jsx';
import { JackInTheBox , Fade } from 'react-awesome-reveal';
import Icon from './Icon.jsx';

const Intro = function() {
    const [TLDR, setTLDR] = useState(false);
    const handleSwitchClick = useCallback(() => {
        console.log('Switch clicked');
        setTLDR((prev) => !prev);
    }, []);
    return (
        <div className="intro">
            <JackInTheBox>
                <h1>Hello, I'm Ethan!</h1>
                <h2>Welcome to my website...</h2>
                <br></br>
            </JackInTheBox>

            <Fade>
                <Icon></Icon>
                <div className='TLDR'>
                <h2>TLDR </h2>
                <Switch onClick={handleSwitchClick} />
                </div>
            </Fade>
            
            { TLDR == true ? (
            <>
                
                <Fade>
                    <ShortDesc />
                </Fade>
                
            </>
            )
              : (
            <>
                <Fade>
                    <Desc /> 
                </Fade>
            </>
            )}

            <h2>But What Else is There?</h2>
            

            
        </div>
    );
};

export default Intro;