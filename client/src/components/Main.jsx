import React, { useState } from "react";
import Top from "./Top.jsx";
import styles from "../css modules/Main.css";
import Middle from "./Middle.jsx";
import NewsLetter from "./NewsLetter.jsx";
import Bottom from "./Bottom.jsx";
import MenTab from "./MenTab.jsx";
import WomenTab from "./WomenTab.jsx";
import KidsTab from "./KidsTab.jsx";
import SportsTab from "./SportsTab.jsx";
import BrandsTab from "./BrandsTab.jsx";
import axios from "axios";
import DisplayPopUp from "./DisplayPopUp.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      type: "",
      responseArr: undefined
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
  }

  handleSearchClicked() {
    this.setState({
      responseArr: undefined
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    });
  }

  toggleHover(type) {
    this.setState({
      type: type || undefined
    });
  }

  handleGet(searchInput) {
    axios
      .get(`http://localhost:3001/search/${searchInput}`)
      .then(res => {
        if (res.data.length > 0) {
          console.log(res.data);
          this.setState({
            responseArr: res.data
          });
        }
      })
      .catch(() => {
        this.setState({ responseArr: undefined });
      });
  }

  render() {
    return (
      <div
        id="mainDiv"
        className={styles.container}
        ref={node => (this.node = node)}
      >
        <div>
          <Top clicked={this.handleClick} />
          <div>{this.state.clicked ? <NewsLetter /> : null}</div>
          <Middle
            toggleHover={this.toggleHover}
            handleGet={this.handleGet}
            responseArr={this.state.responseArr}
            handleSearchClicked={this.handleSearchClicked}
          />
        </div>
        <div>{!this.state.type && <Bottom />}</div>
        <div>
          {this.state.type === "Men" && (
            <MenTab toggleHover={this.toggleHover} />
          )}
        </div>
        <div>
          {this.state.type === "Women" && (
            <WomenTab toggleHover={this.toggleHover} />
          )}
        </div>
        <div>
          {this.state.type === "Kids" && (
            <KidsTab toggleHover={this.toggleHover} />
          )}
        </div>
        <div>
          {this.state.type === "Sports" && (
            <SportsTab toggleHover={this.toggleHover} />
          )}
        </div>
        <div>
          {this.state.type === "Brands" && (
            <BrandsTab toggleHover={this.toggleHover} />
          )}
        </div>
        <div
          className={styles.DisplayPopUp}
          style={this.state.responseArr ? { display: "block" } : {}}
        >
          {" "}
          {this.state.responseArr ? (
            <DisplayPopUp
              handleSearchClicked={this.handleSearchClicked}
              responseArr={this.state.responseArr}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Main;

// this.state.searchClicked &&
// handleSearchClick() {
//   this.setState({
//     searchClicked: true
//   });
// }
