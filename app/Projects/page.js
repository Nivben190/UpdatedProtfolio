'use client'
import { Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./index.module.css";
import { projects } from "../../exportsArrays/index";
const Page = () => {
 const [projectsToMap, setProjectsToMap] =useState(projects);
  function filterProjects(technology) {
    const filteredProjects = projects.filter((project) => project.technology.includes(technology));
    setProjectsToMap(filteredProjects);
  }
  return (
    <div className={styles.mainDiv}>
      <h1>Projects</h1>
      <div className={styles.languagesRow}>
      <button onClick={()=>filterProjects("")} data-animation="fade-in" className={styles.languageButton}>
          All
        </button>
        <button onClick={()=>filterProjects("React")} data-animation="fade-in" className={styles.languageButton}>
          React
        </button>
        <button onClick={()=>filterProjects("Node")} data-animation="fade-in" className={styles.languageButton}>
          Node
        </button>
        <button onClick={()=>filterProjects("Sql light")} data-animation="fade-in" className={styles.languageButton}>
          Sql 
        </button>
        <button onClick={()=>filterProjects("C#")} data-animation="fade-in" className={styles.languageButton}>
          C#
        </button>
      </div>
      <div className={styles.projectDiv}>
        <Grid container>
          {projectsToMap.map((project, index) => (
            <Grid item xs={6} sm={6} md={6} lg={4} key={index} align="center">
              <div
                style={{ backgroundImage: `url(${project.imgUrl})` }}
                className={styles.projectCard}
              >
                <div className={styles.projectDetailes}>
                  <h2>{project.title}</h2>
                  <h3>{project.technology}</h3>
                  <div className={styles.flex}>
                    <a href={project.githubUrl} className={styles.projectButton}  >
                      View Project 
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Page;
