import React, {useState, useEffect} from 'react'
import useSound from 'use-sound';
import './board.css'
import Square from '../square/Square'
import calculateWinner from '../../winnerLogic'
import GameOver from '../gameOver/GameOver'
import Button from '../button/Button'
import ModalWindow from '../modal/ModalWindow'
import soundSquare from '../music/Chord_3.mp3';

const Board = () => {
    let storedSquares  = JSON.parse(localStorage.getItem('squaresLocalStorage'));
    const [squares, setSquares] = useState( storedSquares || Array(9).fill(null) )
    const [isXNext, setIsXNext] = useState(true)
    let winner = calculateWinner(squares)
    const [play] = useSound(soundSquare);

    const [prevSquareIndex, setPrevSquareIndex] = useState(null)

    function handleClick(i){
        const newSquares = [...squares]
        setPrevSquareIndex(i)

        if(newSquares[i] || winner) return
         
        newSquares[i] = isXNext ? 'X' : 'O'
        setSquares(newSquares)
        setIsXNext(!isXNext)
        play()
    }

    useEffect(() => {
        localStorage.setItem('squaresLocalStorage', JSON.stringify(squares));
    }, [squares]);

    useEffect(() => {
        const onKeypress = event  => {
                  
            switch(event.code) {
                case "Digit1":
                case "Numpad7":
                    handleClick(0)                   
                  break;

                case "Digit2":
                case "Numpad8":
                   handleClick(1)                
                  break;

                case "Digit3":
                case "Numpad9":
                    handleClick(2)            
                  break;


                case "Digit4":
                case "Numpad4":
                    handleClick(3)                       
                      break;

                case "Digit5":
                case "Numpad5":
                    handleClick(4)                    
                      break;

                case "Digit6":
                case "Numpad6":
                    handleClick(5)                     
                      break;


                case "Digit7":
                case "Numpad1":
                    handleClick(6)                       
                        break;

                case "Digit8":
                case "Numpad2":
                    handleClick(7)                    
                        break;

                case "Digit9":
                case "Numpad3":
                    handleClick(8)                     
                        break;

                case "Space":
                case "Enter":
                    handleStart()                     
                        break;

                case "Digit0":
                case "Numpad0":
                    handlePrevMove()                     
                        break;

                  default:
              } 
          };
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
      }, [squares,isXNext, prevSquareIndex]);

    function handleStart() {
        setSquares(Array(9).fill(null));
        setIsXNext(!isXNext)
        winner = null 
    }

    function handlePrevMove() {
        if(winner || prevSquareIndex === null ) return
        const newSquares = [...squares]
        newSquares[prevSquareIndex] = isXNext ? 'O' : 'X'
        setIsXNext(!isXNext)
        newSquares[prevSquareIndex] = null
        setSquares(newSquares)
    }
  

    const gameStatus = winner ? <GameOver 
                                    winner = {winner}
                                    onClick = {() => handleStart()}
                                /> 
                                : `Next move: ${isXNext ? 'X' : 'O'}`

    return(
       <div >
            <h2>
                {gameStatus}
            </h2>
               
            <div className = 'board'>
                {squares.map((square, index) => (
                    <Square 
                        key = {index} 
                        value = {square} 
                        onClick = {() => handleClick(index)} />
                ))}
            </div> 
            <div className = 'button_section'>
                <Button 
                    class = 'bttn bttn_middle'
                    name = 'New game' 
                    onClick = {() => handleStart()} />

                    <Button 
                    class = 'bttn bttn_small'
                    name = {<i className="fas fa-undo-alt"/>}
                    title = 'Click to return to the previous move'
                    onClick = {() => handlePrevMove()} />
               
                <ModalWindow />
            </div> 
        </div>
    )

    

}

export default Board