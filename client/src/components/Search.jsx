import React from "react";
import styles from "../css modules/Middle.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      searchInput: undefined
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    let { value } = e.target;
    this.setState(
      {
        searchInput: value
      },
      () => {
        if (this.state.searchInput) {
          this.props.handleGet(this.state.searchInput);
        }
      }
    );
  }

  render() {
    return (
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
      </div>
    );
  }
}

export default Search;

// {this.state.responseArr ? (
//     <div className={stylesMen.neon}>
//       {" "}
//       <DisplayPopUp responseArr={this.state.responseArr} />{" "}
//     </div>
//   ) : null}
