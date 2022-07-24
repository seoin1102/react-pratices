import React, { useEffect, useState } from "react";
import data from "./assets/json/data.json";
import RegisterForm from "./components/RegisterForm";

import EmailList from "./components/EmailList";
import "./assets/scss/App.scss";

import SearchBar from "./components/SearchBar";

const App = () => {
  const [emails, setEmails] = useState(data);

  const notifyEmailDelete = function (no) {
    let newEmailArray = [...emails];
    const selectedIndex = newEmailArray.findIndex((el) => el.no === no);
    newEmailArray.splice(selectedIndex, 1);
    setEmails(newEmailArray);
  };

  const notifyEmailAdd = function (e) {
    e.preventDefault();

    if (e.target.firstName.value.trim() === "") {
      alert("성을 입력하세요");
      return;
    }

    if (e.target.lastName.value.trim() === "") {
      alert("이름을 입력하세요");
      return;
    }

    if (e.target.email.value.trim() === "") {
      alert("이메일을 입력하세요");
      return;
    }

    
    const newEmailArray = [...emails];
    console.log(newEmailArray)
    const enteredInfo = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      no: emails.length + 1,
    };

    newEmailArray.reverse().push(enteredInfo);
    setEmails(newEmailArray);
  };

  const notifyKeywordChanged = function (keyword) {
    const result = data.filter(
      (e) =>
        e.firstName.indexOf(keyword) !== -1 ||
        e.lastName.indexOf(keyword) !== -1 ||
        e.email.indexOf(keyword) !== -1
    );
    setEmails(result);
  };
  return (
    <div id={"App"}>
      <RegisterForm onAddEmail={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <EmailList emailsData={emails} onDeleteEmail={notifyEmailDelete} />
    </div>
  );
};

export default App;
