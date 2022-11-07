import React from "react";
import { skills } from "../exportsArrays/index";
import SkillBar from "react-skillbars";
import { colors } from "../exportsArrays/index";
const SkillBarComponent = () => {
  return (
    <SkillBar
      colors={colors}
      barBackground="lightgrey"
      skills={skills}
      height={"4vh"}
    />
  );
};
export default SkillBarComponent;
