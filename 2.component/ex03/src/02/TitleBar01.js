import React, {Component} from "react";
export default class TitleBar01 extends Component{
    constructor(props){
        super(props);
        this.no = 10;

    }
    onClickHandler(){
        console.log('TitleBar01 clicked!'+ this.no);
    }
    render(){
        return(
            <h1
                onClick={this.onClickHandler.bind(this)}
                style={{
                    cursor: 'pointer'
            }}>
            Function Handler(Functional Component)</h1>
    )}
}