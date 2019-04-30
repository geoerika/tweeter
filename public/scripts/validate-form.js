// checking if new tweet is empty or too long and sends errors

$(function() {

  $(".tweet-form").on('submit', function (event) {      //submits the new tweet to the database
    event.preventDefault();       //prevents default "submit" event

    tweetText = $('#text-area').val();    //gets the value of tweet text
    $('#errorMessage').empty();         //we clear the errorMessage

    if (tweetText === '' || tweetText === null ) {  //handles errors for empty tweets
        $('#errorMessage').html('Error! Empty Message!');
        $('#errorMessage').slideDown(); //toggle of error message

    } else {

        if (tweetText.length > 140) { //handles errors for too long tweets
          $('#errorMessage').html('Tweet too long!');
          $('#errorMessage').slideDown(); //toggle of error message

        } else {
          $.ajax('/tweets', { method: 'POST' , data: $(this).serialize()})    //records the tweet in the datatbase
            .then(() => {
              $('#text-area').val('');    //resets new tweet textarea and the character counter
              $('#counter').text('140');
              location.reload();      //refreshes the tweet pages to display the new tweet in the list of tweets
            });
        }
      }
  });

  $('#text-area').on('click',   //current errorMessage hidden once clik occurs in the textarea
    function (event) {
      event.preventDefault();
      $('#errorMessage').slideUp();
      $('#errorMessage').empty(); //clear error message
  });
})
