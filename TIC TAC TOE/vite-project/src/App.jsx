import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [mark, setMark] = useState([null,null,null,null,null,null,null,null,null]);
  const [flag, setFlag] = useState( true);
  function markChangeHandler(idx){
      //setMark("X");
      let newMark=[...mark];
      if(mark[idx]==null){
      newMark[idx]= flag ?'X' : '0';
      setMark(newMark);
      setFlag(prevFlag => !prevFlag);
      }
  }
 

  return (
    <>
      <h1> Tic-Tac-Toe </h1>
      <div className="board">
        
<div>
      <button onClick={()=>markChangeHandler(0)} style={{width:"50px",height:"50px"}}>{mark[0]}</button>
      <button onClick={()=>markChangeHandler(1)} style={{width:"50px",height:"50px"}}>{mark[1]}</button>
      <button onClick={()=>markChangeHandler(2)} style={{width:"50px",height:"50px"}}>{mark[2]}</button></div>
<div>   
      <button onClick={()=>markChangeHandler(3)} style={{width:"50px",height:"50px"}}>{mark[3]}</button>
      <button onClick={()=>markChangeHandler(4)} style={{width:"50px",height:"50px"}}>{mark[4]}</button>
      <button onClick={()=>markChangeHandler(5)} style={{width:"50px",height:"50px"}}>{mark[5]}</button></div>   
<div> 
      <button onClick={()=>markChangeHandler(6)} style={{width:"50px",height:"50px"}}>{mark[6]}</button>
      <button onClick={()=>markChangeHandler(7)} style={{width:"50px",height:"50px"}}>{mark[7]}</button>
      <button onClick={()=>markChangeHandler(8)} style={{width:"50px",height:"50px"}}>{mark[8]}</button></div>   

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
