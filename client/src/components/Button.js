// import { useState } from "react";
import  { ReactComponent as Logo} from './img/3.svg';
import style from './Button.module.css'
//<Logo className='logo' />
function Button({onClick, rotate}) {
  return <button onClick={onClick} className={style.Button} ><Logo className={style.Logo} viewBox="235 350 145 145" transform={rotate}/></button>;
}

export default Button;
