import React from "react";
import Top from "./Top.jsx";
import styles from "../css modules/Main.css";
import Middle from "./Middle.jsx";
import Bottom from "./Bottom.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <Top />
          <div />
          <Middle />
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    );
  }
}

export default Main;
