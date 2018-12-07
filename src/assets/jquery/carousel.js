jQuery(document).ready(function ($) {

  $('#controlR').on('click', function() {
    console.log('click r');
    event.preventDefault();
    $('#content').animate({
      marginLeft: "-=400px"
    }, "fast");
  });

  $('#controlL').click(function() {
    console.log('click L');
    event.preventDefault();
    $('#content').animate({
      marginLeft: "+=400px"
    }, "fast");
  });
});








