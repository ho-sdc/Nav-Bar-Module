import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "/Users/badwolf/HR_files/Nav-Bar-Module/database/data.js";

const SetItems = props =>
  props.arr.map((items, index) => {
    return (
      <li key={index} className={styles.listtrial}>
        <a className={styles.a}>{items}</a>
      </li>
    );
  });

const GetFeatured = props => {
  var featuredCat = categories.men[0];
  console.log(featuredCat.featured);
  var firstThree = featuredCat.featured.slice(0, 3);
  var lastThree = featuredCat.featured.slice(3);
  return (
    <div>
      <div className={styles.headline}>Featured</div>
      <ul>
        <SetItems arr={firstThree} />
        <div className={styles.horizontalseparater} />
        <SetItems arr={lastThree} />
        <div className={styles.horizontalseparater} />
        <a className={styles.a}>
          <strong>Sale</strong>
        </a>
      </ul>
    </div>
  );
};

const GetMen = props => {
  var noFeatured = categories.men.slice(1);
  return noFeatured.map((titles, index) => {
    for (var key in titles) {
      return (
        <div key={index}>
          <div className={styles.headline}>{key}</div>
          <ul>
            <SetItems arr={titles[key]} />
          </ul>
        </div>
      );
    }
  });
};

class MenTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyhover: false
    };
  }

  render() {
    return (
      <div
        className={styles.mainLine}
        onMouseLeave={() => this.props.toggleHover()}
      >
        <div className={styles.mainLine}>
          <GetFeatured />
          <GetMen />
        </div>
      </div>
    );
  }
}

export default MenTab;
