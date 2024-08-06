import { useState } from 'react';
import './App.css';
import { Form } from "./Components/Form";
import { Clock } from "./Components/Clock";

function App() {
  const [clocks, setClocks] = useState([
    {name: "Рейкьявик", zone: 0, id: null }
  ]);

  const addClocks = (form) => {
    setClocks((prev) => [...prev, {...form, id: Math.random()}]);
  }

  const handleDeleteClock = (id) => {
    setClocks((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div className='appContainer'>
      <div className='appBox'>
      <Form fn={addClocks}/>   
    </div>
    <div className='clocksList'>
      {clocks.map((el) => <Clock clock={el}  key={el.id} delClock={handleDeleteClock} />)}
    </div>
    </div>
    
  )
}

export default App
