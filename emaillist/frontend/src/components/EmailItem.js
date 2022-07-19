import React from "react";
import styles from "../assets/scss/emailItem.scss";

const EmailItem = (props) => {
  const { firstName, lastName, email } = props.emailItem;
  
  const closeHandler = () => {
    console.log("클릭쿠!!!");
  };

  return (
    <>
      <li className={styles.Emailitem}>
        <a onClick={closeHandler}></a>
        <h4>{`${firstName}${lastName}`}</h4>
        <span>{email}</span>
      </li>
    </>
  );
};

export default EmailItem;
