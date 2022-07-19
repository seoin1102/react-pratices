import React, { Fragment } from 'react';
import styles from './assets/css/App.css'

export default function App() {
    const onChargeMessageInput = function(event){
        console.log(event.target.name, ';', event.target.value);
    }

    const onAddFormSubmit = function(event){
        event.preventDefault();
        console.log(event.target.name, ':', 'Ajax로 등록할 겁니다.');
    }

    return (
        <Fragment>
            <h2>SyntheticEvent</h2>
            <p>Native DOM Eevent 객체의 Wrapper다.<br/>
            Native 이벤트 객체와 사용하는 방식이 같다.(함수, 프로퍼티 다 동일)
            </p>
            <form
                name={'addForm'}
                method={'post'}
                action={'/do/not/go'}>
                onSubmit={'onAddFormSubmit'}    
                <input 
                    type={'text'}
                    name={'message'}
                    placeholder={'메시지를 입력 하세요'}/>
                <br/>
                <input  type={'submit'}
                        value={'등록'}/>
                        </form>
                </Fragment>


    );
}

