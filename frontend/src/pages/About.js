import React from 'react';
import styles from './AboutUs.module.css';
import aboutImg from '../assets/about.jpg'; // Place the image in src/assets
// import {assets} from '../assets/assets';

const AboutUs = () => {
  return (
    <div className={styles.aboutSection}>
      <h2 className={styles.heading}>ABOUT <span>US</span></h2>

      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img src={aboutImg} alt="Doctors" />
        </div>

        <div className={styles.textContainer}>
          <p>
            Welcome to DOC.AI, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At DOC.AI, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>

          <p>
            Doc.AI is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, DOC.AI is here to support you every step of the way.
          </p>

          <h4>Our Vision</h4>
          <p>
            Our vision at DOC.AI is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div className={styles.chooseUsSection}>
  <h2 className={styles.chooseHeading}>WHY CHOOSE <span>US</span></h2>

  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <h4>EFFICIENCY:</h4>
      <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>
    <div className={styles.card}>
      <h4>CONVENIENCE:</h4>
      <p>Access to a network of trusted healthcare professionals in your area.</p>
    </div>
    <div className={`${styles.card} ${styles.highlighted}`}>
      <h4>PERSONALIZATION:</h4>
      <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
    </div>
  </div>
</div>

    </div>




  );
};

export default AboutUs;

