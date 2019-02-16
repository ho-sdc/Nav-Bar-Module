import React from "react";
import Top from "./Top.jsx";
import styles from "../css modules/Main.css";
import Middle from "./Middle.jsx";
import Bottom from "./Bottom.jsx";
import NewsLetter from "./NewsLetter.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(
      {
        clicked: !this.state.clicked
      },
      () => console.log(this.state.clicked)
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <Top clicked={this.handleClick} />
          <div>{this.state.clicked ? <NewsLetter /> : null}</div>
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
