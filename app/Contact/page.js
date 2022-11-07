import React from "react";
import styles from "./index.module.css";
const Page = () => {
  return (
    <div style={{ height: "700px", background: "#252934" }}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white"></path>
      </svg>
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "50px",
            fontSize: "60px",
          }}
        >
          Contact
        </h1>
        <p style={{ color: "#04c2c9", textAlign: "center" }}>
          Have a question or want to work together?
        </p>
        <div>
          <form className={styles.form}>
            <div>
              <input type="text" required id="name" placeholder="Name" />
              <br />
              <input
                type="email"
                required
                id="email"
                placeholder="Enter Email"
              />
              <br />
              <textarea
                id="message"
                required
                placeholder="Your Message"
                rows="3"
              />
              <br />
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
