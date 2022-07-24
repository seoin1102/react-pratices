import React from 'react'
import styles from "../../assets/css/Button.css"

function Button(props) {
  return (
    <div className={styles['add-button']} onClick={props.onClick}>
        {props.children}
    </div>
  )
}

export default Button