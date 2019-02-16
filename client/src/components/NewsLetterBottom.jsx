import React from "react";
import styles from "../css modules/NewsLetterBottom.css";

const NewsLetterBottom = () => (
  <div className={styles.footercontainer}>
    <div>
      <div>
        <span>
          <span>
            Sign me up for the adidas emails, featuring exclusive offers, latest
            product info, news about upcoming events and more. Please see our{" "}
          </span>
          <span>
            <a className={styles.a} href="#">
              Terms and Conditions
            </a>
          </span>
          <span> and </span>
          <span>
            <a className={styles.a} href="#">
              Privacy Policy
            </a>
          </span>
          <span>
            {" "}
            for more details. Selected products may be excluded from the 15%
            promotion
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default NewsLetterBottom;
