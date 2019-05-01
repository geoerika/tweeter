"use strict";

$(document).ready(function() {

  $(".tweet").on("click", ".tweet", function (event) {

    event.preventDefault();  //prevents default "click" event;

    let tweet = $(this).closest('.tweet');  //finds the tweet that got a like
    let user = tweet.find(".userName").text();
    let text = tweet.find("p").text();
    let likes = tweet.find('#likes').text();

    if (tweet.find('.heart').css('color') === 'rgb(255, 0, 0)') {
      likes--;
      tweet.find('.heart').css({'color':'#00a087'});
    } else {
      likes++;
      tweet.find('.heart').css({'color':'red'});
    }
    tweet.find('#likes').text(likes);
    likes = tweet.find('#likes').text();

    $.ajax('/tweets', { method: 'PUT', data: {user:user, text:text, likes:likes}});   //updates the tweet likes in the datatbase
  })
});
