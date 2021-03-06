# Tweeter Project

Tweeter is a client-side Single Page App (SPA).
It communicates with a server via AJAX.
Tweets are stored in MongoDB and survive a server restart.

Also hosted here: https://frozen-journey-42511.herokuapp.com/

## Final Product

### Composing a tweet, showing an error if it is too long
!["Screenshot of Tweeter Compose page"](https://github.com/geoerika/tweeter/blob/master/docs/tweeter-compose-too-long.png)

### Tweets can be liked; number of likes are stored with the tweets in the database
!["Screenshot of Tweeter with Likes mode"](https://github.com/geoerika/tweeter/blob/master/docs/tweeter-likes.png)

## Dependencies


    Node.js
    Express
    Body-parser
    Chance
    Dotenv
    md5
    MongoDB
    Nodemon
    NPM

## Getting Started

- Clone this repository
- Install all dependencies (using the npm install commmand)
- Create a local MongoDB database called tweeter with a tweets collection
- Configure .env variable in order to specify database address to be connected. e.g: "MONGODB_URI=mongodb://127.0.0.1:27017 /tweeter"
- Start the web server using "npm start". The app will be served at http://localhost:8080/.
- Go to http://localhost:8080/ in your browser.
