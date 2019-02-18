import React from "react";
import styles from "../css modules/PopUpInfo.css";

const PopUpInfo = props => {
  return (
    <div className={styles.container}>
      <a className={styles.close} onClick={props.close}>
        <div className={styles.icon}>
          <div>X</div>
        </div>
      </a>
      <div className={styles.header}>free shipping and free returns</div>
      <br />
      <div className={styles.text}>
        FREE SHIPPING, FREE RETURNS <br />
        <br />
        This limited time free shipping offer is good for free shipping,
        discount applied at checkout. See delivery method in checkout for
        estimated delivery date. Offer does not apply to adidas gift cards and
        mi adidas customizations. Valid on domestic U.S. orders only. adidas
        reserves the right to change or end promotions at any time. <br />
        <br /> If you are not completely satisfied with your adidas.com
        purchase, for any reason, we will offer you a free return within 30 days
        of purchase. *Some restrictions apply. <br />
        <br />
        *Because personalized products are made just for you, they are not
        returnable. <br /> <br />
        *Hype products such as Yeezy should be returned via the{" "}
        <a href="#">online returns portal </a>within 7 days of the delivery
        date. In the process of ordering these hype products the 7 day returns
        window will be communicated on the product page. <br />
        <br /> Please note to utilize free returns on adidas.com, the package
        must be sent from physically within the United States. Please note that
        the return label is not valid through USPS for APO/FPO returns. <br />
        <br />
        Check out our <a href="#">Return Policy</a> for more details. <br />
        <br />
      </div>
    </div>
  );
};

export default PopUpInfo;
