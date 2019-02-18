import React from "react";
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      type: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
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

  render() {
    return (
      <div className={styles.container}>
        <div>
          <Top clicked={this.handleClick} />
          <div>{this.state.clicked ? <NewsLetter /> : null}</div>
          <Middle toggleHover={this.toggleHover} />
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
      </div>
    );
  }
}

export default Main;
