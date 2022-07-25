import React, { useState, useEffect } from "react";
import styles from "./assets/css/KabanBoard.css";
import CardList from "./CardList";
import dummyData from "./assets/json/data.json";

// 태스크 초기 인덱스(초기 데이터 때문에...)
let tasksInitialCount = 7;

function KanbanBoard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(dummyData);
  }, []);

  const addCardHandler = (e) => {
    alert("헤헤");
  };

  const toggleTaskHandler = (cardNo, taskNo) => {
    let newCardsArray = [...cards];
    const selectedCardIndex = newCardsArray.findIndex((el) => el.no === cardNo);
    const toggledTask = newCardsArray[selectedCardIndex].tasks.findIndex(
      (el) => el.no === taskNo
    );
    let taskValue = newCardsArray[selectedCardIndex].tasks[toggledTask].done;
    newCardsArray[selectedCardIndex].tasks[toggledTask].done = !taskValue;

    let cardStatus = newCardsArray[selectedCardIndex].status;
    switch (cardStatus) {
      case "ToDo":
        newCardsArray[selectedCardIndex].status = "Doing";
        break;
      case "Doing":
        if (
          newCardsArray[selectedCardIndex].tasks.every(
            (task) => task.done === true
          )
        ) {
          newCardsArray[selectedCardIndex].status = "Done";
        } else if (
          newCardsArray[selectedCardIndex].tasks.every(
            (task) => task.done === false
          )
        ) {
          newCardsArray[selectedCardIndex].status = "ToDo";
        }
        break;
      case "Done":
        newCardsArray[selectedCardIndex].status = "Doing";
        break;

      default:
        break;
    }
    setCards(newCardsArray);
  };

  const addTaskHandler = (cardNo, enteredTask) => {
    let newCardsArray = [...cards];
    const selectedCardIndex = newCardsArray.findIndex((el) => el.no === cardNo);
    newCardsArray[selectedCardIndex].tasks.push({
      no: ++tasksInitialCount,
      name: enteredTask,
      done: false,
    });

    // 만약 Done이라면 Doing으로 상태변경을 해준다.
    if (newCardsArray[selectedCardIndex].status === "Done") {
      newCardsArray[selectedCardIndex].status = "Doing";
    }

    setCards(newCardsArray);
  };

  const removeTaskhandler = (cardNo, taskNo) => {
    let newCardsArray = [...cards];
    const selectedCardIndex = newCardsArray.findIndex((el) => el.no === cardNo);
    const removingTaskIndex = newCardsArray[selectedCardIndex].tasks.findIndex(
      (el) => el.no === taskNo
    );

    newCardsArray[selectedCardIndex].tasks.splice(removingTaskIndex, 1);
    if (
      newCardsArray[selectedCardIndex].tasks.every(
        (task) => task.done === false
      )
    ) {
      newCardsArray[selectedCardIndex].status = "ToDo";
    } else if (
      newCardsArray[selectedCardIndex].tasks.every((task) => task.done === true)
    ) {
      newCardsArray[selectedCardIndex].status = "Done";
    }

    setCards(newCardsArray);
  };

  return (
    <div className={styles.KanbanBoard}>
      <CardList
        key="ToDo"
        title="ToDo"
        cards={cards.filter((card) => card.status == "ToDo")}
        onAddCard={addCardHandler}
        onToggle={toggleTaskHandler}
        onAddTask={addTaskHandler}
        onRemoveTask={removeTaskhandler}
      />

      <CardList
        key="Doing"
        title="Doing"
        cards={cards.filter((card) => card.status == "Doing")}
        onAddCard={addCardHandler}
        onToggle={toggleTaskHandler}
        onAddTask={addTaskHandler}
        onRemoveTask={removeTaskhandler}
      />

      <CardList
        key="Done"
        title="Done"
        cards={cards.filter((card) => card.status == "Done")}
        onAddCard={addCardHandler}
        onToggle={toggleTaskHandler}
        onAddTask={addTaskHandler}
        onRemoveTask={removeTaskhandler}
      />
    </div>
  );
}

export default KanbanBoard;
