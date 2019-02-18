import React from "react";
import styles from "../css modules/Middle.css";

export default class Middle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      searchInput: ""
    };
    this.renderThree = this.renderThree.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
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

  handleSearchInput(e) {
    let { value } = e.target;
    this.setState(
      {
        searchInput: value
      },
      () => console.log(this.state.searchInput)
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
            <div className={styles.shoppingbag} />
          </div>
        </div>
      </div>
    );
  }
}
