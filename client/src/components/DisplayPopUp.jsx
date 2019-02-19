import React from "react";
import styles from "../css modules/DisplayPopUp.css";

const DisplayPopUp = props => {
  return (
    <div className={styles.neon}>
      <div>Suggestions</div>
      <ul>
        {props.responseArr.map(dataObj => {
          return <li>{dataObj.item_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayPopUp;
{
  /* <div><div>Suggestions</div>
  {props.responseArr.map(dataObj => (
    <div className={styles.neon}>
      
      <br />
      <div>{dataObj.item_name}</div>
    </div></div> */
}
