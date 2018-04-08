# REACT SOCKET CHAT APPLICATION

### Main page:
![Main page](https://i.imgur.com/7hL0r2B.png)

### Technical skills:
* Javascript: ReactJS, React Socket-IO, NodeJS(Express)
* Unit test: Jest
* CSS: SASS, CSS Module

### Skeleton project:
- mainApp
  -- client
     --- config
     --- script
     -- src
        --- __tests__
        --- components
        --- scenes
        --- App.js
        --- index.js
        --- registerServiceWorker.js
        --- ...
  -- server.js
  -- README.md
  -- ...

![Skeleton project](https://i.imgur.com/lakCZUa.png)

### Some Features:
* Chat feature base on Express server by using socket-io library.
* Implement splitMessage (include unit test) when user sends a message.
* Designed mockup is same Twitter Messenger.
![Chat](https://i.imgur.com/GZLwTUS.png)

* Handle error when user inputs invalid message.
![Error](https://i.imgur.com/ZmTtgGB.png)

### Installation:
* Go to mainApp: "yarn install"
* Go to mainApp/client: "yarn install"

### Run server:
* Go to mainApp: "yarn start"
* Start port 4001: localhost:4001

### Run client:
* Go to mainApp/client: "yarn start"
* Start port 3000: localhost:3000

### Run unit test:
* Go to mainApp/client:
  - All tests: "yarn test". Type "a".
  - splitMessage function: "yarn test src/scenes/__tests__/services.test.js"

![Error](https://i.imgur.com/PZi10s4.png)

### Referral link:
- [Real Time Web App | React.js + Express + Socket.io](https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3)
- [CSS Modules & Sass in Create React App](https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9)
- [Node Server with Babel](https://github.com/babel/example-node-server)