import { useState } from 'react';
import { useEffect } from 'react';

import "./Card.css";

function Card({ day, style }) {
  const palette = {
    red: "#FF3838",
    green: "#6CFF38",
    yellow: "#FFE455",
    blue: "#687BE3"
  }
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8080/card')
      .then((response) => response.json()).catch(console.log("Katya"))
      .then((json) => {
        setTasks(json);
      });
  }, []);

  function drawTasks(){
    let section = []
    for (let rect in tasks)
    {
      if(section.length === 3)
        break
      section.push(<div className="Rectangle" style={{backgroundColor: palette[tasks[rect].color]}}></div>)
    
    }
    return section
  }

  return (
    <div
      className={style}
      onClick={() => {
        console.log(day);
      }}
    >
      <h5>{day}</h5>
      {drawTasks()} 
    </div>
  );
}

export default Card;
