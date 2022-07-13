ex05:    SASS/SCSS Module 번들링 하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. CSS Loader 설정(webpack.config.js)
  module:{
        rules:[{
            test: /\.(sa|sc|c)ss$/i, 
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }


3. 개발 서버 실행
"scripts": {
    "build": "npx webpack",
    "start": "npx webpack serve --progress"
  },