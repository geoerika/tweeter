$(document).ready(function() {                //
  $('.tweet').hover(
    function() {
      $('.tweet').css('opacity',1);
      $("#icons").show();
    },
    function() {
      $('.tweet').css('opacity', 0.5);
      $("#icons").hide();
    }
  )
});