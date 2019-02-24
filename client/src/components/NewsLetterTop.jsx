import React from "react";
import styles from "../css modules/NewsLetterTop.css";
import emaillogo from "../assets/email.png";
import star from "../assets/promotions.png";
import save from "../assets/save.png";

const NewsLetterTop = () => (
  <div className={styles.container}>
    <div className={styles.calloutbarContainer}>
      <div className={styles.calloutsbars}>
        <div className={styles.calloutbar}>
          <div className={styles.calloutbarIn}>
            <div className={styles.emaillogo}>
              <img
                src={emaillogo}
                width="88"
                height="98"
                className={styles.images}
              />
            </div>
            <div className={styles.calloutbarCopy}>
              <div className={styles.learnmoreContainer}>
                <div className={styles.learnmore}>
                  Subscribe for email to stay up to date
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calloutsbars}>
        <div className={styles.calloutbar}>
          <div className={styles.calloutbarIn}>
            <div className={styles.emaillogo}>
              <img
                src={save}
                width="88"
                height="98"
                className={styles.images}
              />
            </div>
            <div className={styles.calloutbarCopy}>
              <div className={styles.learnmoreContainer}>
                <div className={styles.learnmore}>
                  Save 15% on your next order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calloutsbars}>
        <div className={styles.calloutbar}>
          <div className={styles.calloutbarIn}>
            <div className={styles.emaillogo}>
              <img
                src={star}
                width="88"
                height="98"
                className={styles.images}
              />
            </div>
            <div className={styles.calloutbarCopy}>
              <div className={styles.learnmoreContainer}>
                <div className={styles.learnmore}>
                  Exclusive offers & promotions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div />
    <div />
  </div>
);

export default NewsLetterTop;
