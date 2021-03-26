import React from 'react'
import './gameOver.css'
import Button from '../button/Button'
import soundGameOver from '../music/success.mp3';

function GameOver(props) {

  const mainAudio = new Audio(soundGameOver);
  mainAudio.play()
 

    return (
      <div className="game_over">
        <div>
            <h3>Congratulations!</h3>
            <p>Winner is: {props.winner}</p>
        </div>
       
        <Button 
          class = 'bttn bttn_big'
          name = 'Restart' 
          onClick = {props.onClick}
          />
      </div>
    );
  }

  export default GameOver