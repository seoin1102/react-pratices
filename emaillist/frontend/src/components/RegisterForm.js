import React from 'react'
import styles from "../assets/scss/RegisterForm.scss";


const RegisterForm = () => {
  return (
    <div className={styles.RegisterForm}>
        <input type='text' placeholder='성'/><input type='text' placeholder='이름'/>
    </div>
  )
}

export default RegisterForm