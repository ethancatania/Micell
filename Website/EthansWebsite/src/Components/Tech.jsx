import React, {useState} from 'react';

const Tech = function (){
    const [activeCard, setActiveCard] = useState(null); // Track which card is active

    const handleClick = (cardNum) => {
      setActiveCard(cardNum); // Set the active card number
    };
  
    return (
      <div className="tech">
        <h2>Languages I know: </h2>
        <div className="container">
          <div
            className={activeCard === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            C#
          </div>
          <div
            className={activeCard === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            Java
          </div>
          <div
            className={activeCard === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            JavaScript
          </div>
          <div
            className={activeCard === 4 ? "active" : ""}
            onClick={() => handleClick(4)}
          >
            SQL
          </div>
          <div
            className={activeCard === 5 ? "active" : ""}
            onClick={() => handleClick(5)}
          >
            Python
          </div>
          <div
            className={activeCard === 6 ? "active" : ""}
            onClick={() => handleClick(6)}
          >
            C
          </div>
          <div
            className={activeCard === 7 ? "active" : ""}
            onClick={() => handleClick(7)}
          >
            HOVER ME
          </div>
        </div>
      </div>
    );
};

export default Tech;