import React from "react";
import styles from "../css modules/Middle.css";

export default class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.parentLogo}>
            <div className={styles.logo} />
          </div>
          <div className={styles.labels}>
            <div className={styles.perlabel}>
              <a href="#">Men</a>
            </div>
            <div className={styles.perlabel}>
              <a href="#">Women</a>
            </div>
            <div className={styles.perlabel}>
              <a href="#">Kids</a>
            </div>
            <div className={styles.spacer} />
            <div className={styles.perlabel}>
              <a href="#">Sports</a>
            </div>
            <div className={styles.perlabel}>
              <a href="#">Brands</a>
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.searchlogo} />
            <div className={styles.searchwrapper}>
              <form className={styles.form}>
                <input
                  type="text"
                  name="q"
                  placeholder="search"
                  className={styles.input}
                />
              </form>
            </div>
            <div>
              <div className={styles.shoppingbag} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
