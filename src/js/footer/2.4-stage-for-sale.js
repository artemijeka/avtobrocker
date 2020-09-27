$(function () {
  $('#jsBtnNextStage').on('click, mousedown', function () {

    switch ($('#jsBtnNextStage').attr('data-position')) {
      case '1':
        $('.cars__line').attr('data-translate', '1');
        $('.cars__slider').attr('data-translate', '1');
        $('.cars__descr-box').attr('data-translate', '1');

        $('#jsBtnNextStage').attr('data-position', '2');
        $('#jsSliderWhite').attr('data-position', '2');
        $('.cars__car_2').removeClass('o-10');
        $('.cars__descr.2').removeClass('o-10');        
        break;
      case '2':
        $('.cars__line').attr('data-translate', '2');
        $('.cars__slider').attr('data-translate', '2');
        $('.cars__descr-box').attr('data-translate', '2');

        $('#jsBtnNextStage').attr('data-position', '3');
        $('#jsSliderWhite').attr('data-position', '3');
        $('.cars__car_3').removeClass('o-10');
        $('.cars__descr.3').removeClass('o-10');
        break;
      case '3':
        $('.cars__line').attr('data-translate', '3');
        $('.cars__slider').attr('data-translate', '3');
        $('.cars__descr-box').attr('data-translate', '3');

        $('#jsBtnNextStage').attr('data-position', '4');
        $('#jsSliderWhite').attr('data-position', '4');
        $('.cars__car_4').removeClass('o-10');
        $('.cars__descr.4').removeClass('o-10');
        break;
      case '4':
        $('.cars__line').attr('data-translate', '4');
        $('.cars__slider').attr('data-translate', '4');
        $('.cars__descr-box').attr('data-translate', '4');

        $('#jsBtnNextStage').attr('data-position', '1');
        $('#jsSliderWhite').attr('data-position', '1');
        $('.cars__car_1').removeClass('o-10');
        $('.cars__descr.1').removeClass('o-10');
        $('.cars__car_2').addClass('o-10');
        $('.cars__car_3').addClass('o-10');
        $('.cars__car_4').addClass('o-10');
        $('.cars__descr.2').addClass('o-10');
        $('.cars__descr.3').addClass('o-10');
        $('.cars__descr.4').addClass('o-10');
        break;
    }

  });


  $('.cars__car, .cars__descr').on('click', function () {

    console.log( String($(this).data('to')) );

    switch ( String($(this).data('to')) ) {
      case '2':
        $('.cars__line').attr('data-translate', '2');
        $('.cars__slider').attr('data-translate', '2');
        $('.cars__descr-box').attr('data-translate', '2');

        $('#jsBtnNextStage').attr('data-position', '2');
        $('#jsSliderWhite').attr('data-position', '2');
        $('.cars__car_2').removeClass('o-10');
        $('.cars__descr.2').removeClass('o-10');

        $('.cars__car_1').addClass('o-10');
        $('.cars__car_3').addClass('o-10');
        $('.cars__car_4').addClass('o-10');
        $('.cars__descr.1').addClass('o-10');
        $('.cars__descr.3').addClass('o-10');
        $('.cars__descr.4').addClass('o-10');
        break;
      case '3':
        $('.cars__line').attr('data-translate', '3');
        $('.cars__slider').attr('data-translate', '3');
        $('.cars__descr-box').attr('data-translate', '3');

        $('#jsBtnNextStage').attr('data-position', '3');
        $('#jsSliderWhite').attr('data-position', '3');

        $('.cars__car_1').addClass('o-10');
        $('.cars__car_2').addClass('o-10');
        $('.cars__car_4').addClass('o-10');
        $('.cars__descr.1').addClass('o-10');
        $('.cars__descr.2').addClass('o-10');
        $('.cars__descr.4').addClass('o-10');
        $('.cars__car_3').removeClass('o-10');
        $('.cars__descr.3').removeClass('o-10');        
        break;
      case '4':
        $('.cars__line').attr('data-translate', '4');
        $('.cars__slider').attr('data-translate', '4');
        $('.cars__descr-box').attr('data-translate', '4');

        $('#jsBtnNextStage').attr('data-position', '4');
        $('#jsSliderWhite').attr('data-position', '4');

        $('.cars__car_1').addClass('o-10');
        $('.cars__car_2').addClass('o-10');
        $('.cars__car_3').addClass('o-10');
        $('.cars__descr.1').addClass('o-10');
        $('.cars__descr.2').addClass('o-10');
        $('.cars__descr.3').addClass('o-10');
        $('.cars__car_4').removeClass('o-10');
        $('.cars__descr.4').removeClass('o-10');
        break;
      case '1':
        $('.cars__line').attr('data-translate', '1');
        $('.cars__slider').attr('data-translate', '1');
        $('.cars__descr-box').attr('data-translate', '1');

        $('#jsBtnNextStage').attr('data-position', '1');
        $('#jsSliderWhite').attr('data-position', '1');

        $('.cars__car_1').removeClass('o-10');
        $('.cars__descr.1').removeClass('o-10');
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