## Class Component Lifecycle
1.  LifeCycle I: Mount 
   - 01.constructor
   - 02.getDrivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [react v16.3]
   - 03.***render
   - 04.**componentDidMount: 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후

2.  LifeCycle II: Update 
   - 01.getDrivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [react v16.3]
   - 02.*shouldComponentUpdate: props state을 변경 했을 때, 리렌더링 여부를 결정한다. (성능튜닝)
   - 03.***render
   - 04.getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
   - 05.**componentDidUpdate: DOM 업데이트가 끝난 직후 호출된다. DOM 작업이 가능하다.

3.  LifeCycle III: Unmount
   - **componentWillUnmount: 컴포넌트를 DOM에서 제거할 때
   
## Alternative(대용) of Functional Component LifeCycle: useEffect Hook
1. src/02:
    - Alternative of getDrivedStateFromProps
    - After Rendering(Combination componentDidUpdate and componentDidMount)
    - Calling Depend on State Changed: Seperation of Concern
    - Alternative of componentWillUnmount and componentWillUnmount

## Practices
1. src/03: Clock Component(Class Component LifeCycle 이용)
2. src/04: Clock Component(Functional Component, useEffect Hook 이용)

## Run Examples
```bash
$ npm run dev src=[no]
```