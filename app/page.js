"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import "./globals.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import AboutPage from "./About/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import Project from "./Projects/page";
const HomePage = () => {
  return (
    <div>
      <div className={styles.bgGifImg}>
        <div className={styles.centerDiv}>
          <h1 className={styles.nameH1}>
            Hello, I Am <span className={styles.redName}>Niv Ben Aviv.</span>
          </h1>
          <h1 className={styles.fullstackH1}>
            I Am A Full-Stack Web Developer
          </h1>
          <a href="#about">View My Work</a>
        </div>
      </div>
      <div id="about">
        <AboutPage />
        <Skills/>
        <Project />
        <Contact/>
      </div>
    </div>
  );
};
export default HomePage;
