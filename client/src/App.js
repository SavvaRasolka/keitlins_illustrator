import { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Button from './components/Button';

function App() {
  const [date, setDate] = useState(new Date())
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return (

    <div className="App">
      <>
        <Button onClick={()=>setDate(new Date(date.getFullYear(),
           (date.getMonth()-1), date.getDate()))} key={'buttonBack'} rotate={"rotate(270, 0, 0)"}/>
        <label key={'currentPage'}>{month[date.getMonth()]} {date.getFullYear()}</label>
        <Button onClick={()=>setDate(new Date(date.getFullYear(),
           (date.getMonth()+1), date.getDate()))} key={'buttonForward'} rotate={"rotate(90, 0, 0)"}/>
      </>
      <Calendar year = {date.getFullYear()} month = {date.getMonth()} day = {date.getDate()}/>
    </div>
  );
}

export default App;
