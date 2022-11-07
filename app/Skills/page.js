import React from "react";
import Hexagon from "react-hexagon";
import styles from "./index.module.css";
import nivPhoto from "../../images/niv.jpeg";
import Image from "next/image";
import SkillBarComponent from "../../components/SkillBar";
const Page = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <div className={styles.flexDiv}>
          <Image
            className={styles.image}
            src={nivPhoto}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.aboutMeDiv}>
          <h1>Who&lsquo;s this guy?</h1>
          <p>
            I&lsquo;m a software engineer with a passion for building
            applications that solve real-world problems. I&lsquo;m currently
            Looking for a full-time position as a full-stack developer.
          </p>
          <a href="/Contact">Let&lsquo;s make something special.</a>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <SkillBarComponent />
      </div>
    </div>
  );
};

export default Page;
