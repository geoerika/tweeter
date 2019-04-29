
const daysAgoCalc = (created_at) => {   //calculates days since tweet was sent

  return Math.floor(Math.floor((Date.now() - created_at) / 1000 / 60 / 60 / 24 ));
};


const createTweetElement = (tweet) => {             //creates an html tweet element from tweet object

  let $tweet = $("<article>").addClass("tweet");

  let avatar = $(`<img src="${tweet.user.avatars.small}"></img>`);   //selects avatar image
  let h2Header = $(`<h2 class='userName' >${tweet.user.name}</h2>`);  //selects user name
  let spanHeader = $(`<span>${tweet.user.handle}</span>`);  //selects user handle

  let header = $("<header>").append(avatar, h2Header, spanHeader); //creates the header

  let tweetContent = tweet.content.text;        //retrieves tweet text
  let tweetDiv = $("<p>").text(tweetContent);   //fixes Cross-Site Scripting using text()

  let divTweet = $("<div>").append(tweetDiv);  //adds elements to div for displaying tweet text

  let timeFooter = $(`<span id='time'>${daysAgoCalc(tweet.created_at)} days ago</span>`);  //retrieves time since tweet was created
  // adds icons to the tweet footer
  // let iconFooter = $("<span class='icons'><ion-icon name='flag'></ion-icon> <ion-icon name='repeat'></ion-icon> <ion-icon name='heart'></ion-icon></span>");

  let iconFooter = $(`<span class='icons'> <ion-icon name='heart' size='small'></ion-icon><span id='likes'>&nbsp${tweet.likes}</span></span>`);

  // let likeFooter = $("<span id='likes'>0</span>");

  let divFooter = $("<div>").append(timeFooter, iconFooter); //creates the footer

  let footer = $("<footer>").append(divFooter); //adds elements to footer

  return $tweet.append(header, divTweet, footer);
};


const renderTweets = (data) => {      // creates tweets from a list of tweets

  data.forEach(tweetData => {
    let $tweet = createTweetElement(tweetData);  //creates tweet element for each tweet in the list retrieved from the database
    $('#tweets-container').prepend($tweet); //the last tweet added in the database will be shown first in the tweet list
  });
};


const loadTweets = () => {    //loads all the tweets from the database into a list and displays them on the page

  $.ajax('/tweets', {method: 'GET'})
    .then(function(tweets) {
      renderTweets(tweets);
  })
};


$(document).ready(function() {

  $('#compose').click(    //checks if the compose button was clicked and executes slide for new tweet container
      function() {
        $('.new-tweet').slideToggle();
        $('#text-area').focus(); //focuses cursor in the text area
      }
  )

  loadTweets(); //loads tweets from the database on the page
});