import React, { useState } from "react";
import emails from "./assets/json/data.json";

import EmailList from "./components/EmailList";

import styles from "./assets/css/styles.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div id={styles.App}>
      <h1>사용자 이메일</h1>
      <SearchBar/>
      <EmailList emailsData={emails} />
    </div>
  );
}

export default App;
