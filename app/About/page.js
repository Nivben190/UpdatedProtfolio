"use client";
import React from "react";
import styles from "./page.module.css";
import Skill from "../../components/Skill";
import { Grid } from "@mui/material";
const AboutPage = () => {
  const skills = [
    {
      title: "Team Player",
      description:
        "I am always ready to help others and I am always ready to learn from others.",
    },
    {
      title: "Problem Solver",
      description:
        "I love to solve problems and I love to find solutions to problems.",
    },
    {
      title: "Creative Thinker",
      description:
        "I love to think outside the box and I love to come up with new ideas.I Can Blow Your Mind ...",
    },
    {
      title: "Fast Adaptable",
      description:
        "I can adapt to any situation And Learn Any Language You Will Need Me To .",
    },
  ];
  return (
    <div className={styles.aboutDiv}>
      <h1 className={styles.header}>About</h1>
      <Grid container justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={6} md={6} key={index} align="center">
            <Skill
              key={index}
              title={skill.title}
              desc={skill.description}
            ></Skill>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutPage;
