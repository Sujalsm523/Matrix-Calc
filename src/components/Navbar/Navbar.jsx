import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div id={styles.navbar} className="w-full ">
      <div className=" ">
        <div id={styles.navbarTitle}>Matrix calculator</div>
      </div>
    </div>
  );
}
