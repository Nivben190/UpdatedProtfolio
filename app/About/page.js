"use client";
import React from "react";
import styles from "./page.module.css";
import Skill from "../../components/Skill";
import { Grid } from "@mui/material";
import {softSkills} from "../../exportsArrays/index";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutPage = () => {

  return (
    <div className={styles.aboutDiv}>
      <h1 className={styles.header}>About</h1>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" >
       <div className={styles.border}></div>
       </AnimationOnScroll>
      <Grid container justifyContent="center">
        {softSkills.map((skill, index) => (
          <Grid item xs={6} sm={6} md={6} key={index} align="center">
           <AnimationOnScroll animateIn="animate__fadeInLeftBig">
           <Skill
              key={index}
              title={skill.title}
              desc={skill.description}
            ></Skill>
           </AnimationOnScroll>
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutPage;
