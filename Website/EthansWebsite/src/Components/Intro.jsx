import React, { useState, useCallback } from 'react';
import Desc from './Desc.jsx';
import ShortDesc from './ShortDesc.jsx';
import Switch from './Switch.jsx';
import { JackInTheBox , Fade } from 'react-awesome-reveal';
import Icon from './Icon.jsx';

const Intro = function() {
    const [TLDR, setTLDR] = useState(false);
    const [coolPic, setCoolPic] = useState(false);
    const handleSwitchTLDR = useCallback(() => {
        setTLDR((prev) => !prev);
    }, []);

    return (
        <div className="intro">
            <JackInTheBox>
                <h1 className='subtitle'>Hello, I'm Ethan!</h1>
                <h2 className='subtitle'>Welcome to my website...</h2>
                <br></br>
            </JackInTheBox>

            <Fade>
                <Icon></Icon>
                <div className='TLDR'>
                <h2 className='subtitle'>TLDR </h2>
                <Switch onClick={handleSwitchTLDR} />
                </div>
            </Fade>

                { TLDR ? (
                    <Fade>
                        <ShortDesc />
                    </Fade>

                )
                : (
                <>
                    <Fade>
                        <Desc />
                    </Fade>
                </>
            )}
            <h1 className='subtitle' >🚧 Under Construction 🚧</h1>
            <br></br>
        </div>
    );
};

export default Intro;