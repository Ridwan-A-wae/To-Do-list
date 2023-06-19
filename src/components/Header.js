import React from "react";
import "./Header.css";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Header(props) {
  const { theme, setTheme } = props;

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header>
      <div style={{ paddingLeft: "5rem" }} className="logo">
        <span style={{fontSize:"30px"}}>TO DO LIST</span>
      </div>
        <div className="toggleWrapper">
          <input type="checkbox"  className="dn" id="dn" onChange={toggleTheme} />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
              <span>{theme === "light" ? "" : ""}</span> { theme === "light" ? <BsSunFill /> : <BsMoonStarsFill /> }   
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </div>
    </header>
  );
}




