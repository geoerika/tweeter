//implementing opacity on tweets container when mouse is moved away

$(document).ready(function() {
  $('.tweet').hover(
    function() {
      $('.tweet').css('opacity',1);
      $(".icons").show();
    },
    function() {
      $('.tweet').css('opacity', 0.8);
      $(".icons").hide();
    }
  )
});