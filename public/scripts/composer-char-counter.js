//counts characters in the new tweet and changes color of counter when length is > 140

$(document).ready(function() {

  $('#text-area' ).keyup(function(event) {

    let countChar = $(this);
    countChar.closest('.new-tweet').find('#counter').text(140 - this.value.length);
    if (this.value.length > 140) {
      $('#counter').addClass('redColour');
    }
    else {
      $('#counter').removeClass('redColour');
    }
  });
});
