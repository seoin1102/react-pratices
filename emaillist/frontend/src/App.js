import React, { useState } from "react";
import emails from "./assets/json/data.json";
import RegisterForm from "./components/RegisterForm";

import EmailList from "./components/EmailList";
import "./assets/scss/App.scss";

import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div id={'App'}>
      <RegisterForm/>
      <SearchBar/>
      <EmailList emailsData={emails} />
    </div>
  );
}

export default App;
