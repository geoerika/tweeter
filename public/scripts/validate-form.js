$(function() {
       //submits the new tweets to the database
  $(".tweet-form").on('submit', function (event) {

    event.preventDefault();
          //prevents default "submit" event
    tweetText = $('#text-area').val();


    if (tweetText === '' || tweetText === null ) {
        $('#errorMessage').html('Error! Empty Message!');
        $('#errorMessage').slideToggle();
        $('#text-area').on('click',
          function (event) {
            $('#errorMessage').slideToggle();
          });

    } else {

        if (tweetText.length > 140) {
          $('#errorMessage').html('Tweet too long!');
          $('#errorMessage').slideToggle();
          $('#text-area').on('click',
            function (event) {
              $('#errorMessage').slideToggle();
            });

        } else {
          $.ajax('/tweets', { method: 'POST' , data: $(this).serialize()})
          .then(loadTweets);
        }
      }
  });
})
