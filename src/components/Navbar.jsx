import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import styles from "../Styles/Navbar.module.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {islight,ToggleTheme,theme}=useContext(ThemeContext);
  const navigate=useNavigate();
  
  return (
    <div className={styles.Navbar}>
      <h1 onClick={()=>{
        navigate("/")
      }}>BlogPost</h1>
      <button onClick={ToggleTheme} className={styles.togglebutton}>{`Make ${theme==="light" ? "light" :"dark"}`} </button>
    </div>
  )
}

export default Navbar