import React from "react";
import styles from "../css modules/Middle.css";
import Search from "./Search.jsx";

export default class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderThree = this.renderThree.bind(this);
  }

  renderThree(arr) {
    return arr.map(word => {
      return (
        <div
          key={word}
          className={styles.perlabel}
          onMouseEnter={() => this.props.toggleHover(`${word}`)}
        >
          <a href="#">{word}</a>
        </div>
      );
    });
  }

  render() {
    const renderThree = this.renderThree(["Men", "Women", "Kids"]);
    const renderTwo = this.renderThree(["Sports", "Brands"]);
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.parentLogo}>
            <img
              src="https://s3-us-west-1.amazonaws.com/abibas-shoes/abibas.jpg"
              className={
                this.props.clicked ? styles.logotrue : styles.logofalse
              }
            />
          </div>
          <div className={styles.labels}>
            {renderThree}
            <div className={styles.spacer} />
            {renderTwo}
          </div>
          <Search handleGet={this.props.handleGet} />

          <img
            src="https://s3-us-west-1.amazonaws.com/abibasnavbar/shoppingbag.png"
            className={styles.shoppingbag}
          />
        </div>
      </div>
    );
  }
}
