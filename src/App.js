
import './App.css';
import { Container } from 'reactstrap';
import { useState } from 'react';



function App() {

    const [eded, seteded] = useState(0)
 
const increase=()=>{
   seteded(eded +1)
 }
 
 const decrease=()=>{
    seteded(eded -1)
  }
  const reset=()=>{
    seteded(0)
  }
 const deletee=()=>{
  alert('Are you sure for deleting all buttons?')
  
 }

 
 
  
  return (
    <div className="App">  
      

      <p>{eded}</p>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
     <button onClick={reset}>Reset</button>
     <button onClick={deletee}>Delete all buttons</button>
  
    </div>
  );

    }
export default App;
