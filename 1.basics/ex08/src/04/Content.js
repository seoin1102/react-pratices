import React from 'react';

function Content(props) {
    // return (
    //     <p>JSX Tutorial - 특징3: 함수 컴포넌트 만들기</p>
    // );
    return React.createElement('p', null, 'Pure React(React API)로 컴포넌트 만들기')
}

export default Content;