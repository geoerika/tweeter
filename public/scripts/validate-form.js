// checking if new tweet is empty or too long and sends errors

$(function() {

  $('#text-area').on('click',   //current errorMessage hidden once clik occurs in the textarea
    function (event) {
      $('#errorMessage').slideToggle();
  });

  $(".tweet-form").on('submit', function (event) {      //submits the new tweet to the database

    event.preventDefault();       //prevents default "submit" event

    tweetText = $('#text-area').val();    //gets the value of tweet text
    $('#errorMessage').empty();         //we clear the errorMessage

    if (tweetText === '' || tweetText === null ) {
        $('#errorMessage').html('Error! Empty Message!');
        $('#errorMessage').slideToggle();

    } else {

        if (tweetText.length > 140) {
          $('#errorMessage').html('Tweet too long!');
          $('#errorMessage').slideToggle();

        } else {
          $.ajax('/tweets', { method: 'POST' , data: $(this).serialize()})    //records the tweet in the datatbase
            .then(loadTweets).then(() => {$('#text-area').val(''); $('#counter').text('140')});  //loads tweets and resets new tweet
                                                                                               // textarea and the character counter
        }
      }
  });
})
