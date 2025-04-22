import React from 'react';
import styles from './Footer.module.css';
// import { FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.logo}>
            {/* <FaHome className={styles.icon} /> */}
            <span>Doc.AI</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={styles.section}>
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>GET IN TOUCH</h3>
          <p>+0-000-000-000</p>
          <p>DocAi@gmail.com</p>
        </div>
      </div>
      <div className={styles.bottomText}>
        Copyright 2024 © DocAi.dev - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;

