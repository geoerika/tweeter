$(function() {            //submits the new tweets to the database
  $(".tweet-form").on('submit', function (event) {
    event.preventDefault();     //prevents default "submit" event
    $.ajax('/tweets', { method: 'POST' , data: $(this).serialize()})
    .then(function () {
      console.log("New Tweet!!");
    });
  });
});