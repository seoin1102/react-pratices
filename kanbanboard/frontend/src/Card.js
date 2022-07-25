import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskList from "./TaskList";
import Task from "./Task";
import styles from "./assets/scss/Card.scss";

export default function Card({
  no,
  title,
  description,
  status,
  tasks,
  onToggle,
  onAddTask,
  onRemoveTask,
}) {
  const [showDetail, setShowDetail] = useState(true);
  const styleSideColor = {
    position:'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    bottom: 0,
    width: 3,
    backgroundColor: status === 'ToDo' ? '#bd8D31' : (status === 'Doing' ? '#3a7e28' : '#222') 
  }

  return (
    <div className={styles.Card}>
      <div style={styleSideColor}/>
      <div
      // showDetail이 true일때 Card__Title__Open의 css스타일이 오버라이딩됨.
        className={[
          `${styles["Card__Title"]} ${
            showDetail && styles["Card__Title__Open"]
          }`,
        ]}
        onClick={() => {
          setShowDetail((prevState) => !prevState);
        }}
      >
        {title}
      </div>
      {showDetail && (
        <div className="Card__Details">
          {description}
          <TaskList
            cardNo={no}
            tasks={tasks}
            onToggle={onToggle}
            onAddTask={onAddTask}
            onRemoveTask={onRemoveTask}
          />
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  // title: PropTypes.string.isRequired,
  title: (props, propName, componentName) =>
    !props[propName] ||
    typeof props[propName] !== "string" ||
    props[propName].length > 50
      ? new Error(
          `${propName} in ${componentName} is longer than 50 characters`
        )
      : null,
  description: PropTypes.string,
  status: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
};
