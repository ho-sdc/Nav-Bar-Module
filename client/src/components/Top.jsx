import styles from "../css modules/Top.css";
import React from "react";
import loginMan from "../assets/login-man.png";
import NewsLetter from "./NewsLetter.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
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
          <a href="#" onClick={this.props.clicked}>
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
