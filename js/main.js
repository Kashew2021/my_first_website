$(function() {

  // 定数
  const NAME_MSG = "20文字以内で入力してください";
  const TEXTAREA_MSG = "100文字以内で入力してください";
  const EMPTY_MSG = "入力必須です";
  const EMAIL_MSG = "e-mailの形式ではありません";

  // function
  // ページャボタンの表示/非表示の分岐
  function toggleChangeBtn() {

    $('.pager').show();

    if ($('.slide').index($('.js-isActive')) === 0) {
      $('.js-showPrevSlide').hide();
    } else if ($('.slide').index($('.js-isActive')) === $('.slide').length - 1) {
      $('.js-showNextSlide').hide();
    }
  }

  // スクロール to ヘッドポジション
  $('.js-scrollTop').click(function() {

    var id = $(this).find('a').attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
      'scrollTop': position
    }, 500);
    return false;
  });

  // ログイン・新規登録モーダルの表示
  $('.js-showLoginModal').click(function() {
    $('.js-login-modal').fadeIn();
  });
  $('.js-showSignupModal').click(function() {
    $('.js-signup-modal').fadeIn();
  });
  $('.js-closeModal').click(function() {

    $(this).closest('.modal').find('.js-reset-value').val('');
    $('.js-login-modal').fadeOut();
    $('.js-signup-modal').fadeOut();
  });

  // パネルのホバー表示
  $('.panel img').hover(function() {
    $(this).closest('.panel').find('p,span').fadeIn();
  }, function() {
    $(this).closest('.panel').find('p,span').fadeOut();
  });

  // スライドのnext, prevボタンの実装
  $('.pager').click(function() {
    // 画像の切り替え処理
    var $currentSlide = $('.js-isActive');

    $currentSlide.removeClass('js-isActive');

    if ($(this).hasClass('js-showNextSlide')) {
      $currentSlide.next().addClass('js-isActive');
    } else {
      $currentSlide.prev().addClass('js-isActive');
    }

    toggleChangeBtn();
  });
  // スライドのインデックスボタンの実装
  $('.indexBtn').click(function() {

    var index = $('.indexBtn').index(this);

    $('.js-isActive').removeClass('js-isActive');
    $('.slide').eq(index).addClass('js-isActive');

    toggleChangeBtn();
  });
  
  // FAQのアコーディオンの実装
  $('.qa-list-item').click(function() {

    var $answer = $(this).find('.answer');

    if ($answer.hasClass('js-isOpen')) {
      $answer.slideUp().removeClass('js-isOpen');
      $(this).find('i').text('+');
    } else {
      $answer.slideDown().addClass('js-isOpen');
      $(this).find('i').text('-');
    }
  });

  // コンタクトフォームのバリデーション
  // name validation
  $('.js-valid-name').keyup(function() {

    var value = $(this).find('input').val();

    if (value.length === 0) {
      $(this).removeClass('js-isValid');
      $(this).addClass('js-isInvalid');
      $(this).find('.js-alert-message').text(EMPTY_MSG);
    } else if (value.length > 20) {
      $(this).removeClass('js-isValid');
      $(this).addClass('js-isInvalid');
      $(this).find('.js-alert-message').text(NAME_MSG);
    } else {
      $(this).removeClass('js-isInvalid');
      $(this).addClass('js-isValid');
      $(this).find('.js-alert-message').text('');
    }
  });

  // email validation
  $('.js-valid-email').keyup(function() {

    var value = $(this).find('input').val();

    if (value.length === 0) {
      $(this).removeClass('js-isValid');
      $(this).addClass('js-isInvalid');
      $(this).find('.js-alert-message').text(EMPTY_MSG);
    } else if (!value.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
      $(this).removeClass('js-isValid');
      $(this).addClass('js-isInvalid');
      $(this).find('.js-alert-message').text(EMAIL_MSG);
    } else {
      $(this).removeClass('js-isInvalid');
      $(this).addClass('js-isValid');
      $(this).find('.js-alert-message').text('');
    }
  });

  // textarea validation
  $('.js-valid-textarea').keyup(function() {

    var value = $(this).find('textarea').val();

    $('.js-text-count').text(value.length);

    if (value.length > 100) {
      $(this).removeClass('js-isValid');
      $(this).addClass('js-isInvalid');
      $(this).find('.js-alert-message').text(TEXTAREA_MSG);
    } else {
      $(this).removeClass('js-isInvalid');
      $(this).addClass('js-isValid');
      $(this).find('.js-alert-message').text('');
      if (value.length === 0) {
        $(this).removeClass('js-isValid');
      }
    }
  });



});
