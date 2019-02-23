import React from "react";
import NewsLetterTop from "./NewsLetterTop.jsx";
import NewsLetterMiddle from "./NewsLetterMiddle.jsx";
import NewsLetterBottom from "./NewsLetterBottom.jsx";
import styles from "../css modules/NewsLetter.css";

export default class NewsLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <NewsLetterTop />
        <NewsLetterMiddle />
        <NewsLetterBottom />
      </div>
    );
  }
}
