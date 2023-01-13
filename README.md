# redux-saga-ducks-pattern-example
React redux saga with ducks pattern boilerplate example

## What is ducks pattern?
Well, usually when working with redux, the actions, types and reducers are separated into folders `/actions`, `/types` and so on. But it gets hard to find the needed entity when all of them are in one folder. The ducks pattern saves this problem. It says to store  the constants, action creators, reducers, middleware, utilities etc.  in one file or directory. So you create a module (a duck) which contains everything to work with redux in one folder.

## For what is this repository?
Well, I tried to find an example file structure when learning this new approach and it was hard to find one full example that contain **sagas** too and **api calls**, so I decided to create this simple boilerplate to understand ducks with redux saga better.

## Installation & Run
```
npm install
npm start
```
