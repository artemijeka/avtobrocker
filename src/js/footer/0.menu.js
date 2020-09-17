$(function() {
  $('#jsBtnOpenMenu').on('click', function(){
    $('#jsMenu').addClass('open');
  });

  $('#jsCloseMenu').on('click', function(){
    $('#jsMenu').removeClass('open');
  });
});