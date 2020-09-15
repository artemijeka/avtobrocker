$(function() {
  $('#jsBtnNextStage').on('click, mousedown', function() {

    switch ( $(this).attr('data-position') ) {
      case '1':
        $(this).attr('data-position', '2');
        $('#jsSliderWhite').attr('data-position', '2');
        $('.cars__car_2').removeClass('o-10');
        $('.cars__descr.2').removeClass('o-10');
        break;
      case '2':
        $(this).attr('data-position', '3');
        $('#jsSliderWhite').attr('data-position', '3');
        $('.cars__car_3').removeClass('o-10');
        $('.cars__descr.3').removeClass('o-10');
        break;
      case '3':
        $(this).attr('data-position', '4');
        $('#jsSliderWhite').attr('data-position', '4');
        $('.cars__car_4').removeClass('o-10');
        $('.cars__descr.4').removeClass('o-10');
        break;
      case '4':
        $(this).attr('data-position', '1');
        $('#jsSliderWhite').attr('data-position', '1');
        $('.cars__car_2').addClass('o-10');
        $('.cars__car_3').addClass('o-10');
        $('.cars__car_4').addClass('o-10');
        $('.cars__descr.2').addClass('o-10');
        $('.cars__descr.3').addClass('o-10');
        $('.cars__descr.4').addClass('o-10');
        break;  
    }

  });
});