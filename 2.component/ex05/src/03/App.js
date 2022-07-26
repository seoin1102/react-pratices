import React, { Component, useState } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        const date = new Date()
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        super(props);

        this.state = {
            hours ,
            minutes ,
            seconds ,
            session: hours > 12 ? 'pm' : 'am'
        }
    }
    componentDidMount() {
        setInterval(() =>{
            const date = new Date()
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            this.setState( {
                hours ,
                minutes ,
                seconds ,
                session: hours > 12 ? 'pm' : 'am'
            })
        }, 1000);
      }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={this.state.hours} 
                        minutes={this.state.minutes} 
                        seconds={this.state.seconds} session={this.state.session}/>
            </div>
        );
    }


}