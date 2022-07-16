import React from "react";
import styles from "../assets/css/styles.css";

const EmailItem = (props) => {
  const { firstName, lastName, email } = props.emailItem;
  const closeHandler = () => {
    console.log("클릭쿠!!!");
  };

  return (
    <>
      <li>
        <a onClick={closeHandler}></a>
        <h4>{`${firstName}${lastName}`}</h4>
        <span>{email}</span>
      </li>
    </>
  );
};

export default EmailItem;
