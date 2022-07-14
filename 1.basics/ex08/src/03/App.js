import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

function App(props) {
    return (
        <Fragment>
            <Header/>
            <Content/>
        </Fragment>    
    );
}

export default App;