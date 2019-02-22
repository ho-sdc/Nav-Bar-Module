import React from "react";
import styles from "../css modules/DisplayPopUp.css";

const headerStyle = {
  color: "#767677",
  fontSize: "12px",
  lineHeight: "16px",
  textDecoration: "normal"
};
const lineStyle = {
  fontSize: "12px",
  lineHeight: "16px"
};

class DisplayPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: React.createRef()
    };
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleSearchClicked, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleSearchClicked, false);
  }

  handleSearchClicked(e) {
    if (!document.getElementById("searchBar").contains(e.target)) {
      this.props.handleSearchClicked();
    }
  }

  render() {
    return (
      <div id="searchBar" className={styles.neon}>
        <div className={styles.overAll}>
          <div className={styles.suggestionBox}>
            <div className={styles.suggestionHeaders}>Suggestions</div>
            <ul className={styles.listStyle}>
              {this.props.responseArr.map(dataObj => {
                return (
                  <li className={styles.eachList}>
                    <a>{dataObj.item_name}</a>
                  </li>
                );
              })}
            </ul>
            <div className={styles.seeAll}>
              <a>"SEE ALL"</a>
            </div>
          </div>
          <div className={styles.productBox}>
            <div className={styles.productHeaders}>Products</div>
            <ul className={styles.listStyle}>
              {this.props.responseArr.map(dataObj => {
                return (
                  <li className={styles.eachList}>
                    <a className={styles.parentProducts}>
                      <img src={dataObj.picture} className={styles.images} />
                      <div className={styles.productInfo}>
                        <div style={headerStyle}>{dataObj.item_name}</div>
                        <div style={lineStyle}>{dataObj.cuteness_level}</div>
                        <div style={lineStyle}>{dataObj.stars}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayPopUp;
{
  /* <div><div>Suggestions</div>
  {props.responseArr.map(dataObj => (
    <div className={styles.neon}>
      
      <br />
      <div>{dataObj.item_name}</div>
    </div></div> */
}
