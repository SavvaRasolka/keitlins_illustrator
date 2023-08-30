import style from "./Calendar.module.css";
import Card from "./Card";
import monthSize from "../utils/monthSize";

function Calendar({year, month, day}) {
  const numbers = [];
  const firstDayOfMonth = new Date(year, month, 1)
  const fillPrevMonth = firstDayOfMonth.getDay() ? firstDayOfMonth.getDay() - 1: 6
  const daysMonth = monthSize(year, month)
  let daysPrevMonth = monthSize(year, month - 1)
  for(let prevDay = 0; prevDay < fillPrevMonth; prevDay++ )
  {
    numbers.unshift({day:daysPrevMonth, style: "Card-out"})
    daysPrevMonth--
  }
  for(let currDay = 1; currDay <= daysMonth; currDay++ )
  {
    numbers.push({day: currDay, style: "Card-normal"})
  }
  for(let position = numbers.length, count = 1; position < 42; position++, count++)
  {
    numbers.push({day:count, style: "Card-out"})
  }

  function makeCalendar(numbers) {
    let cards = [];
    for (let num in numbers) {
      cards.push(<Card day={numbers[num].day} style = {numbers[num].style} key={num}/>);
    }
    return cards;
  }

  return (
    
    <div className={style.Calendar}>
      {makeCalendar(numbers)}
    </div>
  );
}

export default Calendar;
