/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const daysAgoCalc = (created_at) => {   //calculates days since tweet was sent

  return Math.floor(Math.floor((Date.now() - created_at) / 1000 / 60 / 60 / 24 ));
};


const createTweetElement = (tweet) => {             //creates an html tweet element from tweet object

  let $tweet = $("<article>").addClass("tweet");

  let avatar = $(`<img src="${tweet.user.avatars.small}"></img>`);
  let h2Header = $(`<h2 class='userName' >${tweet.user.name}</h2>`);
  let spanHeader = $(`<span>${tweet.user.handle}</span>`);

  let header = $("<header>").append(avatar, h2Header, spanHeader);

  let tweetContent = tweet.content.text;
  let tweetDiv = $("<p>").text(tweetContent);   //fixes Cross-Site Scripting using text()

  let divTweet = $("<div>").append(tweetDiv);

  let timeFooter = $(`<span id='time'>${daysAgoCalc(tweet.created_at)} days ago</span>`);
  let iconFooter = $("<span class='icons'><ion-icon name='flag'></ion-icon><ion-icon name='repeat'></ion-icon><ion-icon name='heart'></ion-icon></span>");

  let divFooter = $("<div>").append(timeFooter, iconFooter);

  let footer = $("<footer>").append(divFooter);

  return $tweet.append(header, divTweet, footer);
};


const renderTweets = (data) => {      //loads the tweets in the html tweets-container and adds the last tweet as newest

  data.forEach(tweetData => {
    let $tweet = createTweetElement(tweetData);
    $('#tweets-container').prepend($tweet);
  });

  return $('#tweets-container');
};


const loadTweets = () => {    //gets all the tweets from the database

  $.ajax('/tweets', {method: 'GET'})
    .then(function(tweets) {
      return renderTweets(tweets);
  })
};


$(document).ready(function() {

  $('#compose').click(    //checks if the compose button was clicked and executes slide
      function() {
        $('.new-tweet').slideToggle();
        $('#text-area').focus();
      }
  )

  loadTweets();
});