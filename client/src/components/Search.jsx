import React from "react";
import styles from "../css modules/Middle.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      searchInput: undefined,
      clicked: false
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.handleOutsideClicked = this.handleOutsideClicked.bind(this);
    this.handleSearchClicked = this.handleSearchClicked.bind(this);
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
  componentDidMount() {
    document.addEventListener("mousedown", this.handleSearchClicked);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleSearchClicked);
  }

  handleSearchClicked(e) {
    if (!document.getElementById("bar").contains(e.target)) {
      this.handleOutsideClicked();
    }
  }

  handleOutsideClicked() {
    this.setState({
      clicked: false
    });
  }

  handleClicked() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div className={styles.search}>
        <div
          className={this.state.clicked ? styles.formOpen : styles.formClosed}
        >
          <div className={styles.searchlogo} />
          <input
            type="text"
            name="q"
            id="bar"
            placeholder="search"
            className={styles.input}
            onChange={this.handleSearchInput.bind(this)}
            onClick={this.handleClicked}
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
