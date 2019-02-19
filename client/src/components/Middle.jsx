import React from "react";
import styles from "../css modules/Middle.css";
import axios from "axios";
import DisplayPopUp from "./DisplayPopUp.jsx";

export default class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      searchInput: undefined,
      responseArr: undefined
    };
    this.renderThree = this.renderThree.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleGet = this.handleGet.bind(this);
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

  handleGet(searchInput) {
    axios
      .get(`/search/${searchInput}`)
      .then(res => {
        if (res.data.length > 0) {
          this.setState(
            {
              responseArr: res.data
            },
            () => console.log(this.state.responseArr)
          );
        }
      })
      .catch(() => {
        this.setState({ responseArr: undefined });
      });
  }

  handleSearchInput(e) {
    let { value } = e.target;
    this.setState(
      {
        searchInput: value
      },
      () => {
        if (this.state.searchInput) {
          this.handleGet(this.state.searchInput);
        }
      }
    );
  }

  render() {
    const renderThree = this.renderThree(["Men", "Women", "Kids"]);
    const renderTwo = this.renderThree(["Sports", "Brands"]);
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.parentLogo}>
            <div className={styles.logo} />
          </div>
          <div className={styles.labels}>
            {renderThree}
            <div className={styles.spacer} />
            {renderTwo}
          </div>
          <div className={styles.search}>
            <div className={styles.formOpen}>
              <div className={styles.searchlogo} />
              <input
                type="text"
                name="q"
                placeholder="search"
                className={styles.input}
                onChange={this.handleSearchInput.bind(this)}
              />
            </div>
            {this.state.responseArr ? (
              <DisplayPopUp responseArr={this.state.responseArr} />
            ) : null}

            <div className={styles.shoppingbag} />
          </div>
        </div>
      </div>
    );
  }
}
