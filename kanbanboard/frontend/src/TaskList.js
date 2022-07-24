import React, { useState } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import styles from "./assets/css/TaskList.css";

export default function TaskList({
  cardNo,
  tasks,
  onToggle,
  onAddTask,
  onRemoveTask,
}) {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.no}
            cardNo={cardNo}
            no={task.no}
            name={task.name}
            done={task.done}
            onToggle={onToggle}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </ul>
      <input
        type="text"
        className={styles.TaskList__add_task}
        placeholder="태스크 추가"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value.trim() === "") {
              alert("입력해주세여!!!!!!!!!!!!!!!!!");
              return;
            }
            onAddTask(cardNo, e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
};
