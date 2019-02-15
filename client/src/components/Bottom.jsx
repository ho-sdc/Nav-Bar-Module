import React from "react";
import styles from "../css modules/Bottom.css";

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headers}>
          <div className={styles.deliveryImg} />
          <div className={styles.itemReturn}>
            <a href="#">Free Shipping and free returns</a>
          </div>
        </div>
        <div className={styles.headers}>
          <div className={styles.rewardImg} />
          <div className={styles.itemReturn}>
            <a href="#">
              Creators get rewarded - join the new adidas creators club
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Bottom;
