import React from "react";
import Top from "./Top.jsx";
import styles from "../css modules/Main.css";
import Middle from "./Middle.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Top />
        <Middle />
      </div>
    );
  }
}

export default Main;
