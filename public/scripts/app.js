/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {             //creates a html tweet element from tweet object

  let $tweet = $("<article>").addClass("tweet");

  let avatar = $(`<img src="${tweet.user.avatars.small}"></img>`);
  let h2Header = $(`<h2>"${tweet.user.name}"</h2>`);
  let spanHeader = $(`<span>"${tweet.user.handle}"</span>`);

  let header = $("<header>").append(avatar, h2Header, spanHeader);

  let tweetContent = tweet.content.text;
  let tweetDiv = $("<p>").text(tweetContent);   //fixes Cross-Site Scripting using text()

  let divTweet = $("<div>").append(tweetDiv);

  let timeFooter = $(`<p>"${tweet.created_at}"</p>`);
  let spanFooter = $("<span id='icons'>Icons</span>");

  let divFooter = $("<div>").append(timeFooter, spanFooter);

  let footer = $("<footer>").append(divFooter);

  return $tweet.append(header, divTweet, footer);
}

const renderTweets = (data) => {      //collects all the tweets in the database

  data.forEach(tweetData => {
    let $tweet = createTweetElement(tweetData);
    $('#tweets-container').prepend($tweet);
  });
  return $('#tweets-container');
}

const loadTweets = () => {

  $.ajax('/tweets', {method: 'GET'})
  .then(function(tweets) {
    return renderTweets(tweets);
  })
};

let clickVar = true;

const tweetSlide = () => {

  loadTweets();

  $('#compose').click(
      function() {
        $('.new-tweet').slideToggle();
        $('#text-area').focus();
      }
  )
};

// Test / driver code (temporary)
$(document).ready(function() {


  tweetSlide();

});


// <article>
//           <header>
//               <img>avatar</img>
//               <h2>Name</h2>
//               <span>@Name</span>
//           </header>
//           <div>
//             <p>Tweet</p>
//           </div>
//           <footer>
//             <div>
//               <p>10 days ago</p>
//               <span id= "icons" class="ui-icon ui-icon-flag ui-icon-refresh ui-icon-heart "></span>
//             </div>
//           </footer>
// </article>

// }