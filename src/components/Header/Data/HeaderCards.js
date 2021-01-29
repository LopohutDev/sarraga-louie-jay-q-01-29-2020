import React from "react";
import "../Header.css";

function HeaderCards({ bgcolor, title, para1, para2, para3, icon }) {
  return (
    <div style={{ backgroundColor: `${bgcolor}` }} className="cards">
      <h1 style={{ textAlign: "center", margin: "1rem" }}>{title}</h1>
      <div
        style={{
          width: "100%",
          height: "5rem",
          backgroundImage: `url(${icon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
      ></div>
      <ul>
        <li>{para1}</li>
        <li>{para2}</li>
        <li>{para3}</li>
      </ul>
    </div>
  );
}

export default HeaderCards;
