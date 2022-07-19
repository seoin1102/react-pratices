import React from "react";
import EmailItem from "./EmailItem";

import styles from "../assets/scss/EmailList.scss";

const EmailList = (props) => {
  const { emailsData } = props;

  return (
    <ul className={styles.Emaillist}>
      {emailsData.map((emailItem, index) => (
        <EmailItem key={index} emailItem={emailItem} />
      ))}
    </ul>
  );
};

export default EmailList;
