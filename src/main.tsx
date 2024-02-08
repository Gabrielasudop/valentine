import React, { useState } from "react";
import "./index.css";

const:phrases = [
  "Sí
  "Estás seguro?
  "De verdad seguro"
  "Amor porfa
  "❤️"
  "TE AMO"
  "TE AMO DESDE LA LUNA HASTA SATURNO"
] ;
function App() { 
const [noCount, setNoCount] = useState(0);
const [yesPressed, setYesPressed] = useState(false);
const yesButtonSize = noCount * 20 + 16

function handleNoClick() { 
  setNoCount(noCount + 1);
}

function getNoButtonText() { 
return phrases [Math.min(noCount, phrases.length - 1)];
}

return (
  <div className="valentine-container">
    {yesPressed ? (
      <>
      <img
      alt="bears kissing"
      src="https://media.tenor.com/gUiu1zyxfzYAAAAC/bear-kissing.gUiu1zyxfzYAAAAC.gif"
      />
      <div className="text">Yei!!!!</div>
      </>
    ) : (
      <>
      <img
      alt="bear with hearts"
      src="https://gifdb.com/images/high/cute-love-bear-with-hearts-3q7b0v0vq6i.gif"
      />
      
      <div>¿Serias mi valentín?💗</div>
      <div>
        <button
          className="yesButton"
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
          >
            Sí
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
              </button>
            </div>
           </>
          )}
        </div>
       );
    }   
             