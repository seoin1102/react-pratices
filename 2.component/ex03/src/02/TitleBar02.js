import React, {Component} from "react";
export default function TitleBar02(){
    const onClickHandler = e=>{
        console.log('TitleBar02 Clicked');
    }
    return(

        <h1
            onClick={onClickHandler}
            style={{
                cursor: 'pointer'
            }}>
            Function Handler(Functional Component)</h1>
        )  
}