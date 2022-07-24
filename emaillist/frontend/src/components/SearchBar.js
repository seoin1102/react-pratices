import React from 'react'
import styles from "../assets/scss/Searchbar.scss";


export default function SearchBar({callback}){
  return (
    <div className={styles.Searchbar}>
        <input 
          type='text' 
          placeholder='찾기'
          onChange={e=>{
            callback(e.target.value);
          }}/>
    </div>
  )
}