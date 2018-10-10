$(function() {            //submits the new tweets to the database
  $(".tweet-form").on('submit', function (event) {
    event.preventDefault();        //prevents default "submit" event
    tweetText = $(this).children('#text-area').val();  //can use also just simple $(#text-area) instead of working with this
    console.log("tweetText: ", tweetText);
    if (tweetText === '' || tweetText === null ) {
      alert('Write something!!!');
    } else {
      if (tweetText.length > 140) {
        alert('Tweet too looooong!!')
      } else {
          $.ajax('/tweets', { method: 'POST' , data: $(this).serialize()})
          .then(loadTweets);
      }
    }
  });
});