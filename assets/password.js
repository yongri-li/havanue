$(function() {
  $(document).on('click', '.js-modal-open-login-modal', function (e) {
    $('body').addClass('open-login-modal');
  });
  $(document).on('click', '.js-modal-close', function (e) {
    e.preventDefault();
    $('body').removeClass('open-login-modal');
  });
  if (window.location.hash == '#LoginModal' && window.self === window.top) { 
    $('body').addClass('open-login-modal');
  }
});
