import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSquareBinary, faBriefcase, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'

const ClickableIcon = ({ id, icon, link }) => {
    const handleClick = () => {
      window.location.href = link;
    };
  
    return (
      <div id={id} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
    );
  };
  
  const Icon = () => {
    return (
      <div className = "icons">
        <h2 className='hidden-text'> GitHub </h2>
        <ClickableIcon id="github" icon={faGithub} link="https://github.com/ethancatania" />
        <h2 className='hidden-text'> LinkedIn </h2>
        <ClickableIcon id="linked" icon={faLinkedin} link="https://www.linkedin.com/in/ethan-catania-702327238/" />
        <h2 className='hidden-text'> Resume </h2>
        <ClickableIcon id="res" icon={faFile} link="https://docs.google.com/document/d/1EnZUHgEteiM9JDIiuOGsVVHTOuAMbJwQB6RA9Czprb0/edit?usp=sharing" />
        <h2 className='hidden-text'> Portfolio </h2>
        <ClickableIcon id="rev" icon={faBook} link="https://app.revature.com/profile/ethancat28/2f302d2869420e66a7547f25c47d9ff3" />
        <h2 className='hidden-text'> HackerOne </h2>
        <ClickableIcon id="hackerone" icon={faSquareBinary} link="https://hackerone.com/catgot______?type=user" />
        <h2 className='hidden-text'> HackAjob </h2>
        <ClickableIcon id="hackajob" icon={faBriefcase} link="https://user.hackajob.com/profile/personal-info" />
        <h2 className='hidden-text'> </h2>
      </div>
    );
  };
  
  export default Icon;