import React from "react";
import EmailItem from "./EmailItem";

import styles from "../assets/scss/EmailList.scss";

const EmailList = (props) => {
  const { emailsData, onDeleteEmail } = props;

  console.log(emailsData)

  return (
    <ul className={styles.Emaillist}>
      {emailsData.reverse().map((emailItem, index) => (
        <EmailItem key={index} emailItem={emailItem} onDeleteEmail={onDeleteEmail} />
      ))}
    </ul>
  );
};

export default EmailList;
