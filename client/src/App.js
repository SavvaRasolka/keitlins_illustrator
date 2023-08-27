import { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Button from './components/Button';

function App() {
  const [date, setDate] = useState(new Date())

  return (

    <div className="App">
      <Button text="back" onClick={()=>setDate(new Date(date.getFullYear(), (date.getMonth()-1), date.getDate()))}/>
      <Button text="next" onClick={()=>setDate(new Date(date.getFullYear(), (date.getMonth()+1), date.getDate()))}/>
      <Calendar year = {date.getFullYear()} month = {date.getMonth()} day = {date.getDate()}/>
    </div>
  );
}

export default App;
