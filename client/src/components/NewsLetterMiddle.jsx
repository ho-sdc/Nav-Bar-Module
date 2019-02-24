import React from "react";
import styles from "../css modules/NewsLetterMiddle.css";
import questionmark from "../assets/questionmark.png";
import circle from "../assets/circle.png";
import checkbox from "../assets/checkbox.png";

class NewsLetterMiddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form className={styles.container}>
          <div className={styles.emailInputSection}>
            <div className={styles.actualform}>
              <div className={styles.emaillabel}>
                Email
                <div className={styles.formitemhint}>*</div>
              </div>
              <input type="email" className={styles.formitem} />
              <div className={styles.formhint}>
                For first time subscribers only
              </div>
            </div>
          </div>
          <div className={styles.aligncheckbox}>
            <div className={styles.row}>
              <div className={styles.agecheck}>
                <div className={styles.label}>
                  <img src={checkbox} className={styles.pictures} />
                  <div className={styles.thirteen}>
                    Yes, I am over 13 years old{" "}
                    <div className={styles.formitemhint}>*</div>
                  </div>
                </div>
              </div>
              <div className={styles.questionicon}>
                <input
                  type="image"
                  className={styles.button}
                  src={questionmark}
                  onClick={e => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          <div className={styles.gender}>
            <div className={styles.genderword}>Gender</div>
            <div className={styles.malefemale}>
              <img src={circle} className={styles.pictures} />

              <div className={styles.gendername}>Male</div>
              <div className={styles.separateMaleAndFemale} />
              <img src={circle} className={styles.pictures} />

              <div className={styles.gendername}>Female</div>
            </div>
          </div>
          <div>
            <button type="button" className={styles.signupbutton}>
              Sign Up
              <svg className={styles.signupIcon} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewsLetterMiddle;
