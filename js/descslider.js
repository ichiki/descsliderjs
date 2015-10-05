$(function() {
  // 画面横幅に合わせて文言横幅指定
  var $sWidth = $(window).width(),
      $descsliderDtlTxtWidth = $sWidth / 2,
      $descsliderDtlTxtWidthDefault = $sWidth - 750,
      $descsliderDtlTxtWrap = $('.descslider-dtl-txt-wrap');
  $('.descslider-dtl-left-cover').css('width', $descsliderDtlTxtWidth);
  $('.descslider-dtl-right-cover').css('width', $descsliderDtlTxtWidth);
  if ($sWidth < 1500) {
    $('.descslider-dtl-txt-wrap').css('width', $descsliderDtlTxtWidth);
    $('.descslider-dtl-txt-right').css('left', $descsliderDtlTxtWidth);
  } else {
    $('.descslider-dtl-txt-right').css('left', 750);
    $descsliderDtlTxtWrap.eq(0).css('width', $descsliderDtlTxtWidthDefault);
    $descsliderDtlTxtWrap.eq(1).css('width', $descsliderDtlTxtWidthDefault);
    $descsliderDtlTxtWrap.eq(2).css('width', $descsliderDtlTxtWidthDefault);
    $descsliderDtlTxtWrap.eq(3).css('width', $descsliderDtlTxtWidthDefault);
  }

  // 画像移動
  var descsliderNo1 = $('.descslider-img-no1'),
      descsliderNo2 = $('.descslider-img-no2'),
      descsliderNo3 = $('.descslider-img-no3'),
      descsliderNo4 = $('.descslider-img-no4');

  // offset取得
  var descsliderNo1Offset = $('.descslider-dtl-wrap').eq(0).offset(),
      descsliderNo2Offset = $('.descslider-dtl-wrap').eq(1).offset(),
      descsliderNo3Offset = $('.descslider-dtl-wrap').eq(2).offset(),
      descsliderNo4Offset = $('.descslider-dtl-wrap').eq(3).offset();

  var startEnvNo1 = descsliderNo1Offset.top - 600,
      startEnvNo2 = descsliderNo2Offset.top - 600,
      startEnvNo3 = descsliderNo3Offset.top - 600,
      startEnvNo4 = descsliderNo4Offset.top - 600;

  // アニメーション実行の判定フラグ
  var descsliderFlagNo1 = 0,
      descsliderFlagNo2 = 0,
      descsliderFlagNo3 = 0,
      descsliderFlagNo4 = 0,
      descsliderIdcFlag = 0;
  
  $(window).scroll(function () {
    // スクロール位置取得
    var $scrollTop = $(window).scrollTop();
   
    // スクロール下部取得
    var $scrollBottom = $scrollTop + $(window).height();
    var $descsliderDtlWrapNo4Pos = $('.descslider-dtl-wrap').eq(3).offset().top;
    
    // do Env slide animation
    if ($scrollTop > startEnvNo1 && descsliderFlagNo1 == 0) {
      slideRight(descsliderNo1, 0, 0)
      descsliderFlagNo1 = 1;
    }else if ($scrollTop > startEnvNo2 && descsliderFlagNo2 == 0) {
      slideLeft(descsliderNo2, 1, 0)
      descsliderFlagNo2 = 1;
    } else if ($scrollTop > startEnvNo3 && descsliderFlagNo3 == 0) {
      slideRight(descsliderNo3, 2, 0)
      descsliderFlagNo3 = 1;
    } else if ($scrollTop > startEnvNo4 && descsliderFlagNo4 == 0) {
      slideLeft(descsliderNo4, 3, 0)
      descsliderFlagNo4 = 1;
    }
  });
});

// function list
// Environment animation text slide right
function slideRight($targetImg, $targetTxt, $delay) {
  var width = ($(window).width() - 750),
      $delayTxt = $delay - 1500,
      $delayOpacity = $delay + 600;
  $($targetImg).delay($delay).animate({
    left: width,
    opacity: 1
  }, 1000);

  slideDown($targetTxt, $delayTxt, $delayOpacity)
}

// Environment animation text slide left
function slideLeft($targetImg, $targetTxt, $delay) {
  var width = $(window).width() - 750,
      $delayTxt = $delay - 1000,
      $delayOpacity = $delay + 1100;
  $($targetImg).delay($delay).animate({
    right: width,
    opacity: 1
  }, 1000);

  slideDown($targetTxt, $delayTxt, $delayOpacity)
}

// Environment animation text slide down
function slideDown ($targetTxt, $delayTxt, $delayOpacity) {
  if($('.descslider-dtl-txt-wrap').is(':hidden')) {
    $('.descslider-dtl-ttl').eq($targetTxt).delay(300).animate({
      opacity: 1
    }, 1000);
    
    $('.descslider-dtl-txt').eq($targetTxt).delay(300).animate({
      opacity: 1
    }, 1000);

    $('.descslider-dtl-txt-wrap').eq($targetTxt).delay(300).slideDown(1000);

      } else {
    $('.descslider-dtl-txt-wrap').hide();
  }
}

// Environment animation  popup
function slowDisplay($target, $time) {
  $($target).animate ({
    opacity: 1,
  }, $time);
}
