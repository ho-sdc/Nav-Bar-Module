import React from "react";
import styles from "../css modules/Bottom.css";
import Popup from "reactjs-popup";
import PopUpInfo from "./PopUpInfo.jsx";

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
            <Popup
              trigger={
                <a href="#" className={styles.a}>
                  Free Shipping and free returns
                </a>
              }
              modal
            >
              {close => <PopUpInfo close={close} />}
            </Popup>
          </div>
        </div>
        <div className={styles.headers}>
          <div className={styles.rewardImg} />
          <div className={styles.itemReturn}>
            <a href="#" className={styles.a}>
              Creators get rewarded - join the new adidas creators club
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Bottom;
