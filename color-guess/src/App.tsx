import React from 'react';
import { useEffect , useState } from 'react';
import './App.css';

function App() {
  let [color,setColor] = useState("");
  let [correctColor , setCorrectColor] = useState<boolean>()
  let [answers,setAnswers] = useState<string[]>([])
  const randomRGBValue = () => {
    return Math.floor(Math.random() * (255 + 1) );
  }
  const getRandomColor = () => {

  let redValue = randomRGBValue();
  let greenValue = randomRGBValue();
  let blueValue = randomRGBValue();
  return `rgb(${redValue},${greenValue},${blueValue})`
  }
  
  const checkColor = (answer : string) => {
    if (color === answer) {
      setCorrectColor(true);
      generateColors()
    } else {
      setCorrectColor(false);
    }
  }
  const generateColors = () => {
    let actualColor = getRandomColor(); 
   setColor(actualColor);
   setAnswers([actualColor,getRandomColor(),getRandomColor()].sort(()=>
    0.5 - Math.random()
   )
   );
  }
  useEffect(() => {
   generateColors()
  },[])
  
  return (
    <div className="App">
      <div className="colorbox" style={{background:color}}></div>
      <div 
      className="buttonDiv"
      >
      {answers.map((answer) => (
         <button 
         className="button"
         key={answer}
         onClick={() => checkColor(answer)}>{answer}</button>
      ))}
      {(correctColor != undefined && (correctColor === true ? <span>Correct</span> : <span>Nah</span>))}
      </div>
    </div>
  );
}

export default App;
