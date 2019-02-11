import React from "react";
import styles from "../css modules/Middle.css";
import searchlogo from "../assets/searchlogo.png";

export default class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="#" />
          </div>
          <span className={styles.labels}>
            <div>
              <a href="#">MEN</a>
            </div>
            <div>
              <a href="#">WOMEN</a>
            </div>
            <div>
              <a href="#">KIDS</a>
            </div>
            <div className={styles.spacer} />
            <div>
              <a href="#">SPORTS</a>
            </div>
            <div>
              <a href="#">BRANDS</a>
            </div>
          </span>
          <div className={styles.search}>
            <div>
              <img src={searchlogo} />
            </div>
            <input type="text" value="Search" />
            <div />
          </div>
        </div>
      </div>
    );
  }
}
