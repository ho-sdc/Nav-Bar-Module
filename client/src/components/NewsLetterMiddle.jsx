import React from "react";
import styles from "../css modules/NewsLetterMiddle.css";
import questionmark from "../assets/questionmark.png";

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
                <div>
                  <label className={styles.label}>
                    <input type="checkbox" className={styles.inputcheckbox} />
                    <div />
                    <div className={styles.thirteen}>
                      Yes, I am over 13 years old{" "}
                      <div className={styles.formitemhint}>*</div>
                    </div>
                  </label>
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
          <div className={[styles.agecheck, styles.gender]}>
            <div className={styles.genderword}>Gender</div>
            <div className={styles.malefemale}>
              <label className={styles.options}>
                <input
                  type="radio"
                  name="gendergroup"
                  className={styles.inputmale}
                />
                <div className={styles.gendername}>Male</div>
              </label>
              <label className={styles.options}>
                <input
                  type="radio"
                  name="gendergroup"
                  className={styles.inputmale}
                />
                <div className={styles.gendername}>Female</div>
              </label>
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
