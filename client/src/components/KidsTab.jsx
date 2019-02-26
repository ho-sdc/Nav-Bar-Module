import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "../../../database/data.js";

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

const KidsTab = props => {
  let kidsItems = categories.kids.map((titles, index) => {
    for (var key in titles) {
      return (
        <div key={index} className={styles.eachCol}>
          <div className={styles.headline}>{key}</div>
          <ul>
            {titles[key].map(items => {
              return (
                <li key={items} className={styles.listtrial}>
                  <a className={styles.a}>{items}</a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  });

  return (
    <div className={styles.mainLine} onMouseLeave={() => props.toggleHover()}>
      <div className={styles.mainLine}>{kidsItems}</div>
    </div>
  );
};

export default KidsTab;
