import React from "react";
import styles from "../assets/scss/emailItem.scss";

const EmailItem = (props) => {
  const { no, firstName, lastName, email, onDeleteEmail } = props.emailItem;

  const closeHandler = () => {
    console.log("클릭쿠!!!");
  };

  return (
    <>
      <li className={styles.Emailitem}>
        <h4>{`${firstName}${lastName}`}</h4>
        <span>{email}</span>
        <a onClick={() => props.onDeleteEmail(no)}></a>
      </li>
    </>
  );
};

export default EmailItem;
