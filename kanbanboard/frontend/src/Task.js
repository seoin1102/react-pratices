import React from "react";
import PropTypes from "prop-types";
import styles from "./assets/css/Task.css";

export default function Task({
  cardNo,
  no,
  name,
  done,
  onToggle,
  onRemoveTask,
}) {
  return (
    <li className={styles.Task}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(cardNo, no)}
      />

      {name}
      <a
        href="#"
        className={styles["Task--remove"]}
        onClick={() => onRemoveTask(cardNo, no)}
      />
    </li>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
};
