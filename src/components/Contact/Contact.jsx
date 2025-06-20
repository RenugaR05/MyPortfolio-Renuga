import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <center><p>Feel free to reach out!</p></center>
      </div>
      <ul className={styles.links} style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:renuga.enhance@gmail.com">renuga.enhance@gmail.com</a>
        </li>
         <li className={styles.link} style={{ flexWrap:'wrap'}}>
          <img
            src={getImageUrl("contact/call.png")}
            alt="LinkedIn icon"
          />
          <a href="#">8015865605</a>
        </li>
        <li className={styles.link} style={{ flexWrap:'wrap'}}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/RenugaR05</a>
        </li>
       
        <li className={styles.link} style={{ flexWrap:'wrap'}}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/RenugaR05">github.com/RenugaR05</a>
        </li>
      </ul>
    </footer>
  );
};
