import React from "react";
import styles from "../css modules/MenTab.css";
import { categories } from "/Users/badwolf/HR_files/Nav-Bar-Module/database/data.js";

const BrandsTab = props => {
  let brandsItems = categories.brands.map((titles, index) => {
    for (var key in titles) {
      return (
        <div key={index}>
          <div className={styles.headline}>{key}</div>
          <ul>
            {titles[key].map(items => {
              return (
                <li key={items} className={styles.listtrial}>
                  {items}
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
      <div className={styles.mainLine}>{brandsItems}</div>
    </div>
  );
};

export default BrandsTab;
