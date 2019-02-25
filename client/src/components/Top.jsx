import styles from "../css modules/Top.css";
import React from "react";
import loginMan from "../assets/login-man.png";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.help}>
          <a href="#">HELP</a>
        </div>
        <div className={styles.spacer} />
        <div className={styles.help}>
          <a href="#">ORDER TRACKER AND RETURNS</a>
        </div>
        <div className={styles.spacer} />
        <div className={styles.newsletter}>
          <a href="#" onClick={this.props.newsLetterClick}>
            NEWSLETTER SIGNUP
          </a>
        </div>
        <div />
        <div className={styles.help}>
          <a href="#">LOG IN</a>{" "}
          <a href="#">
            <img src={loginMan} className={styles.img1} />
          </a>
        </div>
      </div>
    );
  }
}
