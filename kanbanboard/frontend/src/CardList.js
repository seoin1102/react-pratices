import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styles from "./assets/css/CardList.css";
import Button from "./components/UI/Button";

export default function CardList({
  title,
  cards,
  onAddCard,
  onToggle,
  onAddTask,
  onRemoveTask,
}) {

  return (
    <div className={styles.CardList}>
      <div className={styles["header-box"]}>
        <h1>{title}</h1>
        <Button onClick={onAddCard}>추가</Button>
        
      </div>
      {cards.map((card) => (
        <Card
          key={card.no}
          no={card.no}
          title={card.title}
          description={card.description}
          status={card.status}
          tasks={card.tasks}
          onToggle={onToggle}
          onAddTask={onAddTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
};
