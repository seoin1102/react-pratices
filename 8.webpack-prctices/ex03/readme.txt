ex03:    webpack 개발 서버 설정

1. 설치 패키지
$ npm i -D webpack webpack-cli express

2. webpack 개발 서버 설정(webpack.config.js)
- devServer

3. 스크립팅
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack serve --progress"
  }

4. 빌드
[ex02]$ npm run build

5. 애플리케이션 실행(테스트 서버 실행)
[ex02]$ npm start
