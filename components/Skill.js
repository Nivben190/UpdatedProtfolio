import React from "react";
import styles from "./Skill.module.css";
import Hexagon from "react-hexagon";
const Skill = (props) => {
  return (
    <div className={styles.skillDiv}>
      <Hexagon
        style={{ fill: "#04c2c9", stroke: "none" }}
        className={styles.Hexagon}
      ></Hexagon>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Skill;
