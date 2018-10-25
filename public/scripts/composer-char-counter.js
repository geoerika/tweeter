//counts characters in the new tweet and changes color of counter when length is > 140

$(document).ready(function() {

  $('#text-area' ).keyup(function(event) {

    let countChar = $(this);
    countChar.closest('.new-tweet').find('#counter').text(140 - this.value.length); //looks for the character count in the new-tweet class
    if (this.value.length > 140) {
      $('#counter').addClass('redColour'); //colours character count in red if tweet text > 140 characters
    }
    else {
      $('#counter').removeClass('redColour');  //removes ed colour from character count
    }
  });
});
