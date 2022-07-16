import React, { useState } from "react";
import emails from "./assets/json/data.json";

import EmailList from "./components/EmailList";

import styles from "./assets/css/styles.css";

function App() {
  return (
    <div id={styles.App}>
      <h1>User's E-mail Lists</h1>
      <EmailList emailsData={emails} />
    </div>
  );
}

export default App;
