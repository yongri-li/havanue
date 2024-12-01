var curWinWidth = $(window).width();
var adapt = 768;
var adaptResize = 768;
var resizing = false;
var mobileHeightHeader = 105;
var adaptMobileHeader = 991;
var defaultDataSlider = {
  "navText": [$('#prevSliderBtn').html(), $('#nextSliderBtn').html()],
  "margin": 0,
  "rtl": theme.rtl,
  "autoHeight": false,
  "loop": false,
  "lazyLoad": true
};
var dealCountdownReg = '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})';
var dealCountdownTpl = $('#countdown_html').html();

function changeAdapt(){
  resizing = true;
  setTimeout(function(){
    resizing = false;
    if( curWinWidth >= adaptResize ){
      $(window).trigger('cdz_pc');        
    } else {
      $(window).trigger('cdz_mobile');
    }
  }, 200);


  $(window).resize(function(){
    if (resizing) {
      return false;
    }
    resizing = true;
    setTimeout(function(){
      resizing = false;
      var winWidth = $(window).prop('innerWidth');
      if( (curWinWidth < adaptResize) && (winWidth >= adaptResize) ){
        $(window).trigger('cdz_pc');        
      }else if( (curWinWidth >= adaptResize) && (winWidth < adaptResize)){
        $(window).trigger('cdz_mobile');
      }
      curWinWidth = winWidth;
    },200);
  });
}

function getCookie(name) {
  try {
    return $.cookie(name);
  } catch(e) {
  }
}

function setCookie(name, value, expire) {
  try {
    var params = {path: '/'};
    if(expire) {
      params.expires = expire;
    }
    $.cookie(name, value, params);
  } catch(e) {
  }
}

function pcConfig(){
  function pcTabs(){
    $('.mobile-nav-tabs').removeClass('mobile-nav-tabs'); 
  }
  function pcFooter(){
    $('.cdz-toggle-title').each(function(){
      var $title = $(this);
      if( $title.data('cdz-toggle') != ''){
        var $content = $($title.data('cdz-toggle'));
        $content.show();
        $title.unbind('click');
        $title.removeClass('active');
      }
    });
  }
  //hideMobileSidebar();
  pcTabs();
  pcFooter();
}

function mobileConfig(){
  function mobileTabs(){
    $('.mobile-nav-tab-dropdown').each(function(){
      var target = $(this).data('target');
      $(target).addClass('mobile-nav-tabs');
    }); 
  }
  function mobileFooter(){
    $('.cdz-toggle-title').each(function(){
      var $title = $(this);
      if( $title.data('cdz-toggle') != ''){
        var $content = $($title.data('cdz-toggle'));
        if(!$title.hasClass('active')) {
          $content.hide();
        }
        $title.click(function(){
          if( !$title.hasClass('active') ){
            var dataGroup = $title.data('group');
            if(dataGroup != '' && dataGroup != undefined) {
              $('.cdz-toggle-title.active[data-group="' + dataGroup +'"]').click();  
            }

          }
          $title.toggleClass('active');
          $content.slideToggle();
        });
      }
    });
  }
  mobileTabs();
  mobileFooter();
}

function loadMoreItems() {
  $(document).on('click', '.load_more_btn', function(e){
    e.preventDefault();
    var i = 0;
    var items = $($(this).attr('data-more-li'));
    var limit = parseInt($(this).attr('data-more-items'));
    var hiddenClass = $(this).attr('data-hidden-class');
    if(hiddenClass == undefined || hiddenClass == '') {
      hiddenClass = 'hide';
    }
    $.each(items, function(index, item){
      if(i < limit) {
        var item = $(item);
        if(item.hasClass('wow')) {
          item.removeClass('hide').addClass('animated');
          displayElements(item.find('.wait-animated'));
          item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if(item.hasClass('animated')) {
              item.removeClass('animated fadeIn');
            }
          });
        } else {
          var effect = item.attr('data-animated');
          if(effect == '' || effect == undefined){
            effect = 'fadeIn';
          }
          item.removeClass(hiddenClass);
          item.addClass('animated ' + effect);  
        }
        i++;
      }
    });
    var viewport = $(this).attr('data-more-li').split(' ',1)[0];
    setTimeout(function() {
      var viewort = items.parents('.product-list-wrapper').parent();
      matchHeightEle(viewport + ' .product-list-wrapper', '.product-details', true);
    },300);

    if(i >= items.length) {
      $(this).toggle('100');
    }
  });
}

function initDropdownMenu(wrap, options){
  var defaultConfig = {
    trigger: '.cdz-trigger',
    dropdown: '.cdz-dropdown-content',
    cont: '.cdz-dropdown',
    exceptClass: null,
    hideAffterClick: false
  };
  var conf = $.extend(defaultConfig,options || { });
  if(conf.exceptClass != null){
    var selectorCont = wrap + ' ' + conf.cont + ':not(' + conf.exceptClass + ')';
  } else {
    var selectorCont = wrap + ' ' + conf.cont;
  }

  var selectorTrigger = selectorCont + ' ' + conf.trigger;

  $(selectorTrigger).each(function() {
    $(this).addClass('dd-trigger');
    $(this).parents(conf.cont).find(conf.dropdown).addClass('dd-content');
  });

  $(document).on('touchend click', selectorTrigger, function(e) {
    e.stopPropagation();
    e.preventDefault();
    var $cont = $(this).parents(conf.cont);
    var $trigger = $cont.find(conf.trigger);
    var $dropdown = $cont.find(conf.dropdown);
    if(!$cont.hasClass('dd-open')){
      if($('.dd-open').length > 0){
        var $ddopen = $('.dd-open');
        $ddopen.find('.dd-trigger').removeClass('active');
        $ddopen.find('.dd-content').slideUp();
        $ddopen.removeClass('dd-open');
      }
    }
    $cont.toggleClass('dd-open');
    $trigger.toggleClass('active');
    $dropdown.slideToggle();
  });

  $(document).on('click', 'html,body', function (e) {
    var $target = $(e.target);
    if( ($target.parents('.dd-open').first().length == 0) || conf.hideAffterClick){
      $(selectorCont + '.dd-open').each(function() {
        $(this).find(conf.dropdown).slideUp();
        $(this).find(conf.trigger).removeClass('active');
        $(this).removeClass('dd-open');
      });
    }
  });
}

function initSliderEle(ele) {
  var dataSlider = defaultDataSlider;
  if(ele.attr('data-slider-ele')) {
    var dataSliderEle = $(ele.attr('data-slider-ele')); 
    if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
      try {
        dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
      } catch(e) {
        dataSlider = defaultDataSlider;
      }
    }
  }
  ele.owlCarousel(dataSlider);
}

var initSliderCustomStatus = false;
function initSliderCustom(wrap) {
  /*if(initSliderCustomStatus) {
    return;
  }*/
  //initSliderCustomStatus = true;
  var winWidth = $(window).width();
  if(winWidth > 1024) {
    $(wrap + ' .use-slider-custom').each(function() {
      if(!$(this).hasClass('owl-loaded')) {
        initSliderEle($(this));
      }
    });
  } else {
    $(wrap + ' .use-slider-custom').each(function() {
      if($(this).hasClass('owl-loaded')) {
        $(this).owlCarousel('destroy'); 
      }
    });
  }
  //initSliderCustomStatus = false;
}

function initSlider(wrap) {
  $(wrap + ' .hide-os-mobile,' + wrap + ' .hide-os-desktop').removeClass('hide-os-mobile hide-os-desktop');

  if($(wrap + ' .use-slider').length > 0) {
    $(wrap + ' .use-slider').each(function(){
      initSliderEle($(this));
    });
  }

  if($(wrap + ' .use-slider-custom').length > 0) {
    initSliderCustom(wrap);
    $(window).resize(function () {
      setTimeout(function() {
        initSliderCustom(wrap);
      }, 300);
    });

  }
}

function changeQty(input, isIncrease) {
  var val = parseInt(input.val()), changed = true;
  if(isNaN(val) == true) {
    val = 1;
  }
  if(val < 1) {
    val = 1;
  }

  if(isIncrease) {
    val = val + 1;
  } else {
    if(val > 1) {
      val = val - 1;
    } else {
      changed = false;
    }
  }
  input.val(val);
  return changed;
}

function initChangeQtyEvent() {
  $(document).on('click', '.change-qty:not(.not-bind)', function(e){
    e.preventDefault();
    var input;
    if($(this).attr('data-input') != undefined) {
      input = $($(this).attr('data-input'));
    } else {
      input = $(this).parent('.qty-ctl').siblings('input');
    }
    changeQty(input, $(this).hasClass('increase'));
  });
}

function initSearchModal() {
  $(document).on('click', '.cdz-search-trigger', function(e){
    e.preventDefault();
    $('#searchModal').modal('show');
  });
}

/*Label form effect*/
window.fieldLabelEffect = function(){
  var list = '.form-list input[type=text].input-text,.form-list input[type=tel].input-text,.form-list input[type=email].input-text,.form-list input[type=password].input-text,.form-list textarea.input-text';
  $('.form-list select').each(function(){
    var $select = $(this);
    $select.parents('.field,.wide,.label-effect').addClass('field-select-box');
  });
  
  $(list).each(function(){
    var $input = $(this);
    var $parent = $input.parents('.label-effect').first();
    if($parent) {
      //$parent.addClass('active');
      var eventId = Math.round(Math.random()*100000);
      $('body').on('click.input_'+eventId,function(e){
        if( !$(e.target).is($input) ){
          if($input.val() != ''){
            $parent.addClass('active'); 
          }else{
            $parent.removeClass('active');
          }
          $('body').off('click.input_'+eventId);
        }
      });

      if($input.val() != '') {
        $parent.addClass('active');
      }

      $input.focus(function () {
        $parent.addClass('active');
      }).blur(function() {
        if($input.val() == ''){
          $parent.removeClass('active');  
        }
      });
      var checkBrowserFilled = function(){
        if($input.val() != ''){
          $parent.addClass('active');
          $input.off('change.checkbrowserfilled',checkBrowserFilled);
        }
      };
      $input.on('change.checkbrowserfilled',checkBrowserFilled);
    }
  });
  if(document.location.href.search('checkout/onepage') !== -1){
    window.scrollTo(0, 0);
  }
};

$.fn.switchSliderGrid = function(options){
  var $this = $(this);
  function mobileSlider($this){
    if(!$this.hasClass('owl-carousel')){
      $this.addClass('owl-carousel owl-theme');
      $this.owlCarousel({
        loop: false,
        margin: (options.carousel.margin)?options.carousel.margin:0,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: options.carousel.responsive,
        autoWidth: true
      });
    }
  };
  function pcGrid($this){
    if($this.hasClass('owl-carousel')){
      $this.data('owl.carousel').destroy();
      $this.removeClass('owl-carousel owl-loaded owl-theme owl-hidden');
      $this.find('.owl-stage-outer').children().unwrap();
      $this.removeData('owl.carousel');
    }
  };
  function pcMedia(){
    if(options.media){
      var $media = $this.find('.media-slider');
      $media.addClass('owl-carousel owl-theme');
      $media.owlCarousel({
        dots: false,
        nav: true,
        responsive: options.media.responsive
      });
    } 
  };
  function mobileMedia(){
    if(options.media){
      var $media = $this.find('.media-slider');
      pcGrid($media);
    } 
  };

  var curWinWidth = $(window).width();
  if(curWinWidth < 768){
    mobileSlider($this);
    mobileMedia();
  }else{
    pcGrid($this);
    pcMedia();
  }

  $(window).bind('cdz_mobile', function() {
    mobileSlider($this);
    mobileMedia();
  });
  $(window).bind('cdz_pc', function() {
    pcGrid($this);
    pcMedia();
  });
}

function initMoreViewsSwitchImg() {
  $(document).on('click', '.switch-img', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var targetSelector = $(this).data('target');
    var target = $(targetSelector);
    if(target.length > 0) {
      target.attr('src', href);
      if(!$(this).hasClass('loaded')) {
        var imgEle = $(this);
        target.parent('.product-image').addClass('loading-image');
        target.imagesLoaded( function() {
          // images have loaded
          imgEle.addClass('loaded');
          target.parent('.product-image').removeClass('loading-image');
        });
      }/* else {
        $(targetSelector).attr('src', href);
      }*/
    }
  });
}

function initSwitchSliderGrid() {
  if($('.use-switch-slider-grid').length > 0) {
    $('.use-switch-slider-grid').each(function(){
      var dataSlider = {
        carousel: {
          margin: 20,
          responsive:{
            0:{items:   1},
            320:{items: 1},
            360:{items: 2},
            480:{items: 2},
            600:{items: 3}
          },
          rtl: theme.rtl,
          autoHeight: false,
          loop: false   
        }
      };
      if($(this).attr('data-switch-slider-ele')) {
        var dataSliderEle = $($(this).attr('data-switch-slider-ele')); 
        if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
          try {
            dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
          } catch(e) {
            //dataSlider = defaultDataSlider;
          }
        }
      }
      $(this).switchSliderGrid(dataSlider);
    });
  }
}

function initReverseCountdown(ele, reverse, productId) {
  var cookieName = 'countdown_reverse_' + productId;
  var cookieCountdown = getCookie(cookieName), times;
  if(cookieCountdown == undefined || cookieCountdown == NaN) {
    var timesText = reverse.split(':');
    if(timesText.length == 4) {
      var days = parseInt(timesText[0]);
      var hours = parseInt(timesText[1]);
      var minutes = parseInt(timesText[2]);
      var seconds = parseInt(timesText[3]);
      if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
        var date = new Date();
        times = date.getTime() + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
      }
    }
  } else {
    times = parseInt(cookieCountdown);
  }
  if(times != undefined) {
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    if(times <= currentTime - 30*60) {
      times = null;
      var timesText = reverse.split(':');
      if(timesText.length == 4) {
        var days = parseInt(timesText[0]);
        var hours = parseInt(timesText[1]);
        var minutes = parseInt(timesText[2]);
        var seconds = parseInt(timesText[3]);
        if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
          times = currentTime + (days*86400 + hours*3600 + minutes*60 + seconds)*1000;
        }
      }
    }
    if(times) {
      currentDate.setTime(times);
      $(ele).countdowntimer({
        "dateAndTime": currentDate,
        "size": "lg",
        "regexpMatchFormat" : dealCountdownReg,
        "regexpReplaceWith" : dealCountdownTpl
      });
      setInterval(function(){
        times -= 1;
        setCookie(cookieName, times, null);
      }, 1000);
    }
  }
}

function initDealCountdown(wrap) {
  if($(wrap + ' .product-deal').length > 0) {
    $(wrap + ' .product-deal').each(function() {
      var dataDeal = $(this).data('deal');
      var pattern1 = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
      var pattern2 = /^\d{1,2}:\d{2}:\d{2}:\d{2}$/;

      if(dataDeal != undefined && dataDeal != '') {
        if(pattern1.test(dataDeal) == true) {
          $(this).countdowntimer({
            "dateAndTime": dataDeal,
            "size": "lg",
            "regexpMatchFormat" : dealCountdownReg,
            "regexpReplaceWith" : dealCountdownTpl
          });  
        } else if(pattern2.test(dataDeal)) {
          var productId = $(this).data('product-id');
          initReverseCountdown(this, dataDeal, productId);
        }
      } 
    });
  }
}

function initVertialMoreViewSlider(wrap) {
  if($(wrap + ' .more-views-slider .image-list').length > 0) {
    $(wrap + ' .more-views-slider .image-list').each(function(){
      var dataSlider = {
        "vertical" : true, 
        "item": 3, 
        "adaptiveHeight": true, 
        "vThumbWidth" : "40", 
        "verticalHeight": 180, 
        "pager": false,
        "slideMargin": 10,
        "onSliderLoad": function(el) {
          el.siblings('.lSAction').insertBefore(el.parents('.lSSlideWrapper'));
        }
      };
      if($(this).attr('data-slider-ele')) {
        var dataSliderEle = $($(this).attr('data-slider-ele')); 
        if(dataSliderEle.length > 0 && dataSliderEle.html() != '') {
          try {
            dataSlider = $.extend(dataSlider, JSON.parse(dataSliderEle.html()));
          } catch(e) {
            dataSlider = defaultDataSlider;
          }
        }
      }
      $(this).lightSlider(dataSlider);
    });

  }
}

function initInstagramSlider(wrap) {
  if($(wrap + ' .instagram-slider').length > 0) {
    $(wrap + ' .instagram-slider').each(function() {
      var token = $(this).attr('data-token');
      var instagramEle = $(this);
      if(token != undefined && token != '') {
        var numPhotos = $(this).attr('data-num-photos');
        $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent', // or /users/self/media/recent for Sandbox
          dataType: 'jsonp',
          type: 'GET',
          data: {access_token: token, count: numPhotos},
          success: function(data){
            var html = '<div class="image-list owl-carousel use-slider-custom" data-slider-ele="#' + instagramEle.attr('data-section-id') + '_slider_data">';
            var iconHtml = $('#icon-instagram-html').html();
            for( x in data.data ){
              var titleTag = (data.data[x].caption != null && data.data[x].caption.text != undefined) ? data.data[x].caption.text : 'instagram';
              html += '<div class="item item--size-small">';
              html += '<div class="instagram-media">' +
              '<a rel="noreferrer" href="' + data.data[x].link + '" class="image" target="_blank" title="' + titleTag + '">' +
              '<img data-src="' + data.data[x].images.low_resolution.url + '" class="lozad" alt="' + titleTag + '"/>' +
              '</a>' +
              '<div class="action"><a ref="noreferrer" title="' + titleTag + '" href="' + data.data[x].link + '" target="_blank">' + iconHtml + '<span>#View More</span></a></div>' +
              '</div>' +
              '</div>';
            }
            html += '</div>';
            instagramEle.html(html);
            var winWidth = $(window).width();
            var dataSlider = $.extend(defaultDataSlider, JSON.parse($('#' + instagramEle.attr('data-section-id') + '_slider_data').html()));;
            /*if(winWidth > 1024) {
              instagramEle.children('.image-list').owlCarousel(dataSlider);  
            }*/
            lozadObj.observe();
            initSlider('#' + instagramEle.attr('data-section-id'));
          },
          error: function(data){
            console.log(data); // send the error notifications to console
          }
        });
      }
    });

  }
}

function showNav(block, direction, duration) {
  var width = $(block).outerWidth();
  //$('.wrap-all').css({'overflow-x': 'inherit'});
  var dataShow = {}
  if(direction == 'left') {
    dataShow.left = 0;
    //$('.close-btn-canvas').css({'left': 0, 'margin-left': width + 'px', 'opacity': 0, 'display': 'block', 'top': '-100px'});
  } else {
    //$('.close-btn-canvas').css({'right': 0, 'margin-right': width + 'px', 'opacity': 0, 'display': 'block', 'top': '-100px'});
    dataShow.right = 0;
  }
  $('.overlay').attr('data-block', block);

  // Hide and lock sticky menu
  var $stickyMenu = $('.sticky-menu');
  if($stickyMenu.hasClass('active')) {
    hideStickyMenu($stickyMenu);
  }

  $(block).velocity(
    dataShow,
    {
      duration: duration,
      delay: 0,
      complete: function() {
        /*$('.close-btn-canvas')
        .velocity(dataCloseBtn, { duration: duration });*/
        /*if(duration == 'left') {
          $('.close-btn-canvas').css(dataCloseBtn);  
        }*/
        $('.wrap-all').addClass('open-mobile-nav');
        $('.overlay').addClass(direction);
      }
    }
    );

  $('.overlay').velocity("fadeIn", {duration: duration, delay: 0 });
}

function hideNav(duration, block) {
  var direction = $('.overlay').hasClass('left') ? 'left' : 'right';  
  var width = $(block).outerWidth();
  var dataHide = {};//, dataCloseBtn = {opacity: 0, top: '-100px'};
  if(direction == 'left') {
    dataHide.left = '-100%';
  } else {
    dataHide.right = '-100%';
  }
  $('.wrap-all').removeClass('open-mobile-nav');
  $(block).velocity(
    dataHide, 
    { 
      duration: duration,
      delay: 300,
      complete: function() {
        $('.overlay').removeClass(direction);
        $stickyMenu = $('.sticky-menu');
        if($stickyMenu.length > 0) {
          var threshold = $stickyMenu.height();
          isShowStickyMenu($stickyMenu, $(window), threshold);  
        }
      }
    }
    );
  $('.overlay').velocity("fadeOut", {duration: duration, delay: 0 });
}  

function initNavMobile(trigger, block) {
  var duration = 300;
  var eventMobile = 'touchend click';
  var direction = $(block).parent().hasClass('direction-left') ? 'left' : 'right';  

  $(document).on(eventMobile, trigger, function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(!$('.wrap-all').hasClass('open-mobile-nav')) {
      showNav(block, direction, duration);
    }
  });

}

function initHideNavMobile(duration) {
  $('.overlay, .close-btn-canvas, .close-menu-btn').on('touchstart click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if($('.wrap-all').hasClass('open-mobile-nav')) {
      hideNav(duration, $('.overlay').attr('data-block'));
    }
  });
}

function globalFlyImage($pr,options, cb){
  var defaultConfig = {
    img: '.product-image img',
    dest: '.footer-cart .cart-icon',
    fCart: '.footer-cart'
  };
  var conf = $.extend(defaultConfig,options || { });

  var $effImg = $('<div style="display:none; position:absolute; z-index:9999999"><img style="width: 100%; height: 100%"/></div>');
  $('body').append($effImg);

  var $img = false;
  $pr.find(conf.img).each(function(){
    if( !$(this).hasClass('hidden') ){
      $img = $(this);
      return false;
    }
  });
  if(!$img) return false;
  var src = $img.attr('src');
  var width = $img.width(), height = $img.height();
  var step01Css = {
    top: $img.offset().top,
    left: $img.offset().left,
    width: width,
    height: height
  }
  $effImg.find('img').attr('src',src);
  $effImg.css(step01Css);
  $effImg.fadeIn(200);

  var $fCart = $(conf.fCart);
  var $dest = $(conf.dest);
  var itemInCart;
  if(options.itemInCart.length > 0) {
    itemInCart = options.itemInCart.first();
  } else {
    itemInCart = $fCart.find('.cart-item').first();
  }

  var imgCart = itemInCart.find('.product-image img');
  var flyImage = function(cb){
    var step02Css = {
      top: imgCart.offset().top,
      left: imgCart.offset().left,
      width: imgCart.width(),
      height: imgCart.height()
    }
    $effImg.velocity(step02Css, {
      duration: 500,
      complete: function() {
        itemInCart.removeClass('hide-item-image');
        $effImg.fadeOut(200,'linear',function(){
          $effImg.replaceWith('');  
        });
        cb();
      }
    });
  }
  flyImage(cb);
}

function ajaxCartEffect (btn, options, cb){
  var defaultConfig = {
    img: '.product-image img',
    parent: '.item, .product-item',
    effImg: '#effectImg',
    dest: '.footer-cart .cart-icon',
    fCart: '.footer-cart',
    form: '#product_addtocart_form', 
  };

  var conf = $.extend(defaultConfig,options || { });
  var $this = btn;
  var $pr = $this.parents(conf.parent).first();
  if($pr.length == 0){
    return false;
  }
  globalFlyImage($pr,conf, cb);
};

function toggleCartEditor(){
  var $fCart = $('.footer-cart');
  $(document).on('click', '.footer-cart .cart-item .product', function(e){
    e.stopPropagation();
    var $cartItem = $(this).parent('.cart-item');
    if($cartItem.hasClass('active')){
      $cartItem.removeClass('active');  
    }else{
      $fCart.find('.cart-item.active').removeClass('active');
      $cartItem.addClass('active');
    }
  });
}

function initSlideshow() {
  function setHeightForVideoSlide(event){
    var owl = $(event.target);
    $('.item-video',owl).css({height:''});
    $('.owl-video-frame iframe',owl).css({height:''});

    setTimeout(function(){
      var height = (owl.attr('data-height'))*( owl.width() )/owl.attr('data-width');
      $('.item-video',owl).css({height:height});  
      $('.owl-video-frame iframe',owl).css({height:height});
    },200); 
  }

  if($('.main-slideshow').length > 0) {
    //$('.main-slideshow').imagesLoaded(function() {
      $('.main-slideshow').each(function() {
        var owl = $(this);
        owl.addClass('owl-carousel');
        
        var dataSlideshow, dataDefaultSlideshow = {
          "navText": [$('#prevSliderBtn').html(), $('#nextSliderBtn').html()],
          onInitialized: function(event){
            setHeightForVideoSlide(event);
          },
          onResized: function(event){
            setHeightForVideoSlide(event);
          },
          rtl: theme.rtl
        };

        if($(this).attr('data-slideshow-ele')) {
          var dataSlideshowEle = $($(this).attr('data-slideshow-ele')); 
          if(dataSlideshowEle.length > 0 && dataSlideshowEle.html() != '') {
            try {
              dataSlideshow = $.extend(dataDefaultSlideshow, JSON.parse(dataSlideshowEle.html()));
            } catch(e) {
              dataSlideshow = dataDefaultSlideshow;
            }
          }
        }

        /*var parentDiv = owl.parent();           
        owl.on('initialized.owl.carousel', function(e) {                        
          if(parentDiv.hasClass('loading')) 
          {
            parentDiv.removeClass('loading');
            parentDiv.removeAttr('style');
            parentDiv.parent().removeClass('wait-loading');
            var loader = parentDiv.siblings('.slideshow-loader');
            loader.velocity("fadeOut", {
              duration: 500, 
              delay: 0,
              complete: function() {
                loader.remove();
              } 
            });
          }        
        });*/

        owl.owlCarousel(dataSlideshow);  
        owl.find('.slider-item').removeClass('hide');
      });
    //});
  }
}

function changeGridList(format) {
  if(format == 'grid') {
    $('.collection-items').removeClass('full_width');
    $('.collection-items').addClass('no_full_width');
    $('.collection-items .row-left').removeClass('col-md-2');
    $('.collection-items .row-right').removeClass('col-md-4');
  } else {
    $('.collection-items').addClass('full_width');
    $('.collection-items').removeClass('no_full_width');
    $('.collection-items .row-left').addClass('col-md-2');
    $('.collection-items .row-right').addClass('col-md-4');
    $('.collection-items').removeClass('animated ');
  }
}

function updateGridList(){
  $(document).on('click', '#goList', function(e){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    changeGridList('list');
  });

  $(document).on('click', '#goGrid', function(e){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    changeGridList('grid');
  });

  if($('#goList').hasClass('active')) {
    changeGridList('list');
  }
}

function initVerMenu() {
  $(document).on('click touchstart', '.ver-menu-bar', function(e) {
    e.preventDefault();
    var btn = $(this);
    if(!$(this).hasClass('working')) {
      var duration = 500;
      if(btn.attr('data-duration')) {
        duration = btn.attr('data-duration');
      }
      btn.addClass('working');
      var effect = btn.hasClass('open') ? 'slideUp' : 'slideDown';
      btn.siblings(btn.attr('data-target')).velocity(effect, { 
        duration: duration,
        complete: function() {
          if(effect == 'slideDown') {
            btn.addClass('open');
          } else {
            btn.removeClass('open');
          }
          btn.removeClass('working');
        } 
      });
    }
  });
}

function openStickyMenu($stickyMenu) {
  if(!$('.cdz-mobile-search').hasClass('keep')) {
    var winWidth = $(window).width();
    if(winWidth > adaptMobileHeader) {
      $('.headerApp').css('min-height', getHeaderHeight('pc')); 
    } else {
      $('.headerApp').css('min-height', getHeaderHeight('mobile'));
    }
  }

  $stickyMenu.addClass('active animated fadeInDown');
  /*if(!$('.cdz-mobile-search').hasClass('keep')) {
    $('.cdz-mobile-search').hide().addClass('keep');
  }*/
}

function hideStickyMenu($stickyMenu) {
  $('.headerApp').removeAttr('style');
  $stickyMenu.removeClass('active fadeInDown').addClass('fadeIn');
  //$('.cdz-mobile-search').removeAttr('style').removeClass('keep');
  $stickyMenu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    if($stickyMenu.hasClass('animated')) {
      $stickyMenu.removeClass('animated fadeIn');
    }
  });
}

function isShowStickyMenu($stickyMenu, win, threshold) {
  if($('.wrap-all').hasClass('open-mobile-nav')) {
    return;
  }
  var curWinTop = win.scrollTop();
  if(curWinTop > threshold){
    openStickyMenu($stickyMenu);
  } else {
    hideStickyMenu($stickyMenu);
  }
}

function getHeaderHeight(type) {
  if(type == 'mobile') {
    return mobileHeightHeader;
  }
  return $('#headerApp').height();
}

function initStickyMenu() {
  if($('.sticky-menu').length > 0) {
    $stickyMenu = $('.sticky-menu');
    var threshold = $stickyMenu.height();
    isShowStickyMenu($stickyMenu, $(window), threshold);
    $(window).scroll(function(){
      var $win = $(this);
      isShowStickyMenu($stickyMenu, $win, threshold);
    });

    $(document).on('click', '.icon-search-sticky', function() {
      $('.cdz-mobile-search').slideToggle(function () {
        if ($('.cdz-mobile-search').is(':visible')) {
          $('.cdz-mobile-search').css('display','inline-block');  
        }
      });
    });

    // Set min height for sticky menu
    /*var calculateMinHeight = false;
    $(window).resize(function() {
      if(calculateMinHeight) {
        clearTimeout(calculateMinHeight);
      }
      calculateMinHeight = setTimeout(function() {
        var winWidth = $(window).width();
        if(winWidth > 991) {
          $('.headerApp').css('min-height', getHeaderHeight('pc')); 
        } else {
          $('.headerApp').css('min-height', getHeaderHeight('mobile'));
        }
      }, 300);
    });*/
  }
}

function initNewsletterPopup(){
  if($('#cdz-popup-newsletter').length > 0) {
    if(getCookie('show_news_letter_popup') == undefined) {
      $('#cdz-popup-newsletter').modal('show');
      $('#cdz-popup-newsletter').on('hidden.bs.modal', function (e) {
        if($('.newsletter_popup_hide_btn').is(":checked") == true) {
          setCookie('show_news_letter_popup', 1);
        }
      });
    }
  }
}

function cdzBackTopButton(){
  var $backTop = $('#back-top');
  if($backTop.length){
    $backTop.hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $(document).on('click touchstart', '#back-top a', function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }
}

function showPassHint() {
  $(document).on('click', function(e) {

  });
}

var useTooltip = false;
function initTooltip() {
  var winWidth = $(window).width();
  if(winWidth > 1024) {
    useTooltip = true;
    $("body").tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  } else {
    useTooltip = false;
    $('body').tooltip('destroy');
  }

  $(window).resize(function() {
    setTimeout(function() {
      winWidth = $(window).width();
      if(winWidth > 1024) {
        if(!useTooltip) {
          useTooltip = true;
          $("body").tooltip({
            selector: '[data-toggle="tooltip"]'
          });
        }
      } else {
        if(useTooltip) {
          useTooltip = false;
          $('body').tooltip('destroy');
        }
      }
    }, 100);
  });
}

function initResponsiveTabsEvent(){
  var me = this;
  $(document).on('click', '.nav-tab-item a', function(){
    var $navTab = $(this);
    $navTab.parents('.mobile-nav-tabs').first().removeClass('active');
  });
}

var translate = {};
var translateData = [];
var menuUpdate = {};
var intevalTrans = [];
function getTranslateData(localeCode, cb) {
  try {
    if(translateData[localeCode] == undefined) {
      $.ajax({
        url: '/', // or /users/self/media/recent for Sandbox
        type: 'GET',
        data: {view: 'locale_' + localeCode},
        success: function(data){
          var jsonText = data.replace('<!-- BEGIN template --><!-- index.locale_' + localeCode + ' -->', '').replace('<!-- END template -->', '');
          translate = $.parseJSON(jsonText);
          translateData[localeCode] = translate;
          cb(translateData[localeCode]);
        },
        error: function(data){
          console.log(data); // send the error notifications to console
        }
      });
    } else {
      translate = translateData[localeCode];
      cb(translateData[localeCode]);
    }
    
  } catch (e) {
    $('.skeleton-loading').removeClass('skeleton-loading') // send the error notifications to console
  }
}

function getTransTextByKey(key) {
  try {
    var parts = key.split('.');
    if(typeof(translate[parts[0]]) == 'object' && typeof(translate[parts[0]][parts[1]]) == 'object' && typeof(translate[parts[0]][parts[1]][parts[2]]) != undefined) {
      var html = translate[parts[0]][parts[1]][parts[2]];
      if(typeof(html) == 'object' && parts[3] != undefined) {
        html = html[parts[3]];
      }
      return html;
    }
  } catch (e) {
    return '';
  }
}

function applyTranslateAttribute(attr, wrap) {
  $(wrap + ' [data-' + attr + '-trans]').each( function() {
    var key = $(this).attr('data-' + attr + '-trans');
    if(key) {
      var html = getTransTextByKey(key);
      if(html == undefined || html == '' || html == null) {
        html = $(this).attr('data-' + attr + '-default');
      }
      if(html) {
        $(this).attr(attr, html);
      }
    }
  });
}

function applyTranslateData(wrap, localeCode, firstTrans) {
  if(enableTranslate) {
    // Translate Inner Text
    if(localeCode != defaultLocale || firstTrans == false) {
      $(wrap + ' [data-trans-key]').each(function() {
        var key = $(this).attr('data-trans-key');
        if(key) {
          var html = getTransTextByKey(key);
          if(html && $(this).attr('data-trans-val')) {
            var vals = $.parseJSON($(this).attr('data-trans-val'));
            for (var keyVal in vals) {
              html = html.replace('[[ ' + keyVal + ' ]]', vals[keyVal]);
            }
          }
          if(html) {
            $(this).html(html);
          }
        }
      });
    }

    // Translate attribute
    applyTranslateAttribute('data-label', wrap);
    applyTranslateAttribute('value', wrap);
    applyTranslateAttribute('placeholder', wrap);
    applyTranslateAttribute('title', wrap);
    applyTranslateAttribute('data-confirm-message', wrap);
    applyTranslateAttribute('data-original-title', wrap);
    $(wrap + ' .skeleton-loading').removeClass('skeleton-loading');
  }
}

function applyTranslateContent(wrap, localeCode) {
  if(enableTranslate) {
    $(wrap + ' [data-content-trans]').each(function() {
      var id = $(this).attr('data-content-trans');
      if($(id).length > 0) {
        try {
          var data = $.parseJSON($(id).html());
          if(data && data[localeCode] != undefined) {
            $(this).html(data[localeCode]);
          }
        } catch(e) {

        }
      }
      $(this).removeClass('skeleton-loading');
    });
  } 
}

function initTranslate(cb) {
  if(enableTranslate) {
    var currentLocaleCookie = getCookie('currentLocale');
    if(currentLocaleCookie != null && currentLocaleCookie != '' && currentLocaleCookie != undefined && currentLocaleCookie != 'undefined') {
      currentLocale = currentLocaleCookie;
    }
  }
  
  if(currentLocale == defaultLocale) {
    $('.skeleton-loading').removeClass('skeleton-loading');
  }
  getTranslateData(currentLocale, function(response) {
    translate = response;
    if(enableTranslate) {
      // Translate the parts are not sections, collection page, product page, login page.
      if(!$('body').hasClass('template-index') && !$('body').hasClass('template-product') && !$('body').hasClass('template-customers/login')) {
        applyTranslateData('#PageContainer', currentLocale, true);
      }
      applyTranslateData('.non-section', currentLocale, true);
      setTimeout(function(){
        $(window).trigger('loaded_translate_data');
      }, 300);
      cb();
    } else {
      setTimeout(function(){
        $(window).trigger('loaded_translate_data');
      }, 300);
    }
  });
  if(enableTranslate) {
    applyTranslateContent('.non-section', currentLocale);
  } else {
    $('.skeleton-loading').removeClass('skeleton-loading');
  }
}

// Update menu when change locale
function updateMenuByLocale(localeCode) {
  if(menuUpdate[localeCode] == undefined) {
    $('.menu-' + localeCode).each(function(){
      var $menu = $(this);
      var data = $menu.data('megamenu');
      if(data == undefined || data == '') {
        data = {};
      }
      var overrideData = $menu.data('override-megamenu');
      if(overrideData != undefined && overrideData != '') {
        data = $.extend(data, overrideData);
      }
      $menu.codazonMegaMenu(data);
    });
    menuUpdate[localeCode] = 1;
  }
}

function initPromotionBanner() {
  if($('.promotion_wrap').length > 0) {
    if(getCookie('hide_promo_banner') == undefined) {
      $('.promotion_wrap').velocity("slideDown", { delay: 0, duration: 300 });
    }
    $(document).on('click', '.promotion_wrap .promo-close', function(e) {
      e.preventDefault();
      $('.promotion_wrap').velocity("slideUp", { delay: 0, duration: 300 });
      setCookie('hide_promo_banner', 1, 1);
    });
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var upsellOpenTimeInterval;
function openUpsellInterval(minuteFrom, minuteTo, openTime, closeTime) {
  if($('.upsell_wrap').hasClass('hide')) {
    return;
  }
  var length = $('.upsell_wrap .product-item').length - 1;
  var arrayIndex = Array.from(Array(length + 1).keys());
  if(arrayIndex.length == 0) {
    arrayIndex = Array.from(Array(length + 1).keys());
  }
  index = getRandomInt(0, arrayIndex.length - 1); 
  arrayIndex.splice(index, 1);
  $('.upsell_wrap').hide();
  $('.upsell_wrap .upsell-item').hide();
  $('.upsell_wrap ' + '[data-index="' + index +'"] .minute-number').html(getRandomInt(minuteFrom, minuteTo));
  $('.upsell_wrap ' + '[data-index="' + index +'"]').show();
  $('.upsell_wrap').fadeIn();
  setTimeout(function() {
    hideUpsellInterval(minuteFrom, minuteTo, openTime, closeTime);
  }, openTime);
}

function hideUpsellInterval(minuteFrom, minuteTo, openTime, closeTime) {
  $('.upsell_wrap').fadeOut();
  setTimeout(function() {
    upsellOpenTimeInterval = openUpsellInterval(minuteFrom, minuteTo, openTime, closeTime);
  }, closeTime);
}
function initUpsellProducts() {
  if($('.upsell_wrap').length > 0) {
    var cookie = getCookie('hide_upsell');
    if(cookie != undefined) {
      return;
    }

    var limit = $('.upsell_wrap').data('limit'),
    minuteFrom = $('.upsell_wrap').data('minute-from'),
    minuteTo = $('.upsell_wrap').data('minute-to'),
    openTime = $('.upsell_wrap').data('interval') * 1000,
    closeTime = $('.upsell_wrap').data('closing-interval') * 1000,
    index;
    var length = $('.upsell_wrap .product-item').length - 1;
    var upsell = [], i = 0, show = 0;
    for(i = 0; i < limit; i++){
      upsell.push(i);
    }
    upsell = shuffle(upsell);
    /*$('.upsell_wrap .upsell-item .product-image img').each(function() {
      var dataSrc = $(this).attr('data-src');
      $(this).attr('src', dataSrc);
      $(this).removeAttr('data-src');
    });*/
    if(getCookie('hide_upsell') != 1) {
      setTimeout(function() {
        openUpsellInterval(minuteFrom, minuteTo, openTime, closeTime);
      }, closeTime);
    }

    // Close upsell
    $(document).on('click', '.upsell_wrap .close-btn', function(e) {
      e.preventDefault();
      clearTimeout(upsellOpenTimeInterval);
      $('.upsell_wrap').addClass('hide');
      setCookie('hide_upsell', 1, 1);
    });
  }
}

function showAjaxLoading() {
  $('.loading').show();
  $('.wrap-all').addClass('overlay-layer');
}

function hideAjaxLoading() {
  $('.loading').hide();
  $('.wrap-all').removeClass('overlay-layer');
}

function reInitReview() {
  if(typeof SPR != 'undefined' && typeof SPR.$ != 'undefined' && useShopifyReviewApp) {
    return SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
  }
}

var showSideBar = 1;
function toggleSidebar() {
  $('.toggle-sidebar-control').removeClass('show-sidebar').removeClass('hide-sidebar');
  $('.col-main').removeClass('hide-left');
  $('.main-sidebar').removeClass('hide-sidebar');
  if(showSideBar < 0) {
    $('.toggle-sidebar-control').addClass('show-sidebar');
    $('.col-main').addClass('hide-left');
    $('.main-sidebar').addClass('hide-sidebar');
  } else {
    $('.toggle-sidebar-control').addClass('hide-sidebar');
  }
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Layered for collection page
function initLayerderEvent() {
  var me = this;
  $('.rendering-collection').removeClass('rendering-collection');
  var selector = '.block-layered-nav a.clear-all-btn, #coll-filter-1 ul li a, #coll-filter-2 ul li a, #coll-filter-3 ul li a, #coll-filter-4 ul li a, .block-layered-nav .active_filters a, .collection-toolbar #sortBox a, #collection-filter .list--inline.pagination li a';
  if($('#sortButton').length > 0) {
    var currentSort = getParameterByName('sort_by');
    if(!currentSort) {
      currentSort = $('#sortBox').attr('data-default');
    }
    if(currentSort != '' && currentSort != null) {
      var me = this;
      $(window).on('loaded_translate_data', function() {
        var html = '<span class="brackets">' + getTransTextByKey('collections.sorting.' + currentSort.replace('-', '_')) + '</span>';
        $('#sortButton .name').html(html);
      });
    }
  }

  if($(selector).length > 0) {
    $(document).on('click', selector, function(e){
      e.preventDefault();
      var url = $(this).attr('href');
      var dataSort = $(this).attr('data-sort');
      $.ajax({
        type: 'GET',
        url: url,
        data: {},
        beforeSend: function( xhr ) {
          showAjaxLoading();
        },
        complete: function (data) {
          hideAjaxLoading();
          history.pushState({
            page: url
          }, url, url);

          $('#collection-filter').html($('#collection-filter', data.responseText).html());
          initVertialMoreViewSlider('#collection-filter');
          if($('#goList').hasClass('active')) {
            changeGridList('list');
          }
          CdzCurrency.convertAll(shopCurrency, $('.store-currency ul li a.active').attr('data-code'), '#collection-filter .price');

          $('.block-layered-nav').html($('.block-layered-nav', data.responseText).html());
          reInitReview();
          lozadObj.observe();

          var div = $('.collection-toolbar .sortBy', data.responseText);
          if(div.find('#sortButton .name').length > 0) {
            div.find('#sortButton .name').html(div.find('#sortForm li a[data-sort="' + dataSort +'"]').html());
          }

          $('.collection-toolbar .sortBy').html(div.html());
          applyTranslateData('#shopify-section-collection-template', me.currentLocale, true);

          $('.breadcrumbs').html($('.breadcrumbs', data.responseText).html());
          applyTranslateData('.breadcrumbs', me.currentLocale, true);

          $('body,html')
          .velocity('stop')
          .velocity('scroll', { duration: 750, offset: $('.collection-toolbar').offset().top });

          $('#collection-filter .wow').each(function(index, value) {
            //wow.show(value);
            $(this).removeClass('wow').addClass('animated');
            displayElements($(this).find('.wait-animated'));
          });

          $("#tags-load").hide();
        }
      });
    });
  }
}

function initCollectionTemplate() {
  var sidebarCookie = getCookie('sidebar_showLeft');
  if(sidebarCookie != undefined) {
    showSideBar = parseInt(sidebarCookie);
    toggleSidebar();
  } else if($('.col-main').hasClass('hide-left')) {
    showSideBar = -1;
  }
  $(document).on('click', '.toggle-sidebar-control', function(e) {
    e.preventDefault();
    showSideBar *= -1;
    setCookie('sidebar_showLeft', showSideBar, 1);
    toggleSidebar();
  });

  updateGridList();
  initNavMobile('#cdz-off-canvas-btn', '.main-sidebar .navbar-canvas-inner');
  initLayerderEvent();
}

/**
 *
 *  Show/hide customer address forms
 *
 */
 function customerAddressForm() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  // Initialize observers on address selectors, defined in shopify_common.js
  if (Shopify) {
    // eslint-disable-next-line no-new
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  // Initialize each edit form's country/province selector
  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    // eslint-disable-next-line no-new
    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });

  $(document).on('click', '.address-delete', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.attr('data-confirm-message');

    // eslint-disable-next-line no-alert
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
}

function readSubPattern(html) {
  var subPattern = new RegExp("\\[" + currentLocale + "\\](.*)\\[\\/" + currentLocale + '\\]', 'g'); 
  if(html.match(subPattern)) {
    var sub = '';
    html = html.replace(subPattern, function(subMatch, subContents, subS, subOffset) {
      sub = subContents;
      return subContents;
    });
    html = sub;
  }
  return html;
}

function readTransRegex(html, generateTag) {
  var pattern = /\[t\](.*?)\[\/t\]/g;
  html = html.replace(pattern, function(match, contents, s, offset) {
    contents = readSubPattern(html);
    if(generateTag == 1) {
      return '<span data-trans-link-list="' + match + '">' + contents + '</span>';
    } else {
      return contents;
    }
  });
  return html;
}

function transLinkList(wrap) {
  var pattern = /\[t\](.*?)\[\/t\]/g;
  $(wrap + ' .link-list li a,' + wrap + ' .footer-link li a').each(function() {
     if($(this).find("[data-trans-link-list]").length == 0 && $(this).html().match(pattern)) {
      var html = $(this).html();
      html = readTransRegex(html, 1);
      $(this).html(html);
    } else {
      $(this).find("[data-trans-link-list]").each(function() {
        if($(this).attr('data-trans-link-list').match(pattern)) {
          $(this).html(readTransRegex($(this).attr('data-trans-link-list'), 0));
        }
      });
    }
  });
}

function enableSidebarCanvas() {
  $('.nav-bar-canvas').removeClass('hide');
}

function matchHeightEle(viewport, element, includeReview) {
  var selector = viewport + ' ' + element;
  var length = $(selector).length;
  if(length > 0) {
    var inSlider = $(viewport).find('.owl-carousel').length > 0;
    var collumCount = inSlider ? length : Math.floor($(viewport).innerWidth() / $(viewport + ' ' + element).first().outerWidth()),
      start = 0,
      end,
      height = 0;

    $(selector).removeAttr('style');
    $(selector).each(function (index, value) {
      var indexCompare = index + 1;
      var newHeight = $(this).height();
      if(($(this).hasClass('has-review') || $(this).find('.review-badge').length > 0) && includeReview) {
        newHeight += 20;
      }
      if(newHeight > height) {
        height = newHeight;
      }
      if(indexCompare % collumCount == 0 || indexCompare == length ) {
        end = index + 1;
        $(selector).slice(start, end).height(height);
        height = 0;
        start = index + 1;
      }
    });
  }
}

function initMatchHeight(viewport, element) {
  matchHeightEle(viewport, element, true);
  
  var resize;
  $(window).resize(function() {
    if(resize) {
      clearTimeout(resize);
    }
    resize = setTimeout(function() {
      matchHeightEle(viewport, element, false);
    }, 500);
  });
}

function initMatchHeightInTab(wrap) {
  if($(wrap + ' a[data-toggle="tab"]').length > 0) {
    matchHeightEle('#' + $(wrap + ' .tab-pane.active').attr('id') + ' .product-list-wrapper', '.product-details', true);
    $(wrap + ' a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var activeTabId = $(e.target).attr("href") // activated tab
      setTimeout(function(){
        matchHeightEle(activeTabId + ' .product-list-wrapper', '.product-details', false);
      }, 500);
    });

    var resize;
    $(window).resize(function() {
      if(resize) {
        clearTimeout(resize);
      }
      resize = setTimeout(function() {
        var activeTabId = $(wrap + ' .tab-pane.active').attr('id');
        matchHeightEle('#' + activeTabId + ' .product-list-wrapper', '.product-details', false);
      }, 300);
    });
  }
}

function initHoverMenu() {
  $(document).on('mouseover', '.nav-header-inner .cdz-horizontal-menu .level0:not(hover)', function(e) {
    e.preventDefault();
    $(this).siblings('.hover').removeClass('hover');
    $(this).addClass('hover');
  });

  $(document).on('mouseout', '.nav-header-inner .cdz-horizontal-menu .level0.hover', function(e) {
    e.preventDefault();
    //$(this).siblings('.hover').removeClass('hover');
    $(this).removeClass('hover');
  });
  
  $(document).on('click', 'body', function(e) {
    if($(e.target).parents('.cdz-menu .item.parent.hover').length == 0) {
      $('.cdz-menu .item.parent.hover').removeClass('hover');
      $('.cdz-menu .item.parent.clicked').removeClass('clicked');
    }
  });

  // Show dropdown in tablet
  $(document).on('click', '.cdz-menu .item.parent:not(clicked) > a', function(e) {
    if(curWinWidth >= 992 && curWinWidth <= 1024) {
      if(!$(this).parent().hasClass('clicked')) {
        e.preventDefault();
        $(this).parent('.level0').siblings('.clicked').removeClass('hover clicked');
        $(this).parent().addClass('clicked hover').trigger("mouseover");
      }
    }
  })
}

function initSearchSuggestion() {
  if(!enableSearchSuggest) {
    return;
  }
  // Current Ajax request.
  var currentAjaxRequest = null;
  // Grabbing all search forms on the page, and adding a .search-results list to each.
  var searchForms = $('form[action="/search"]').css('position','relative').each(function() {
    // Grabbing text input.
    var input = $(this).find('input[name="q"]');
    input.attr('autocomplete', 'off');
    // Adding a list for showing search results.
    //var offSet = input.position().top + input.innerHeight();
    $('<ul class="search-results"></ul>').appendTo($(this)).hide();
  });     
    // Listening to keyup and change on the text field within these search forms.
  $(document).on('keyup change', 'form[action="/search"] input.search__input', function() {
      // What's the search term?
      var term = $(this).val();
      // What's the search form?
      var form = $(this).closest('form');
      // What's the search URL?
      var searchURL = '/search?type=product&q=' + term;
      // What's the search results list?
      var resultsList = form.find('.search-results');
      // If that's a new term and it contains at least 3 characters.
      if (term.length >= 3 && term != $(this).attr('data-old-term')) {
        // Saving old query.
        $(this).attr('data-old-term', term);
        // Killing any Ajax request that's currently being processed.
        if (currentAjaxRequest != null) currentAjaxRequest.abort();
        // Pulling results.
        currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
          // Reset results.
          resultsList.empty();
          // If we have no results.
          if(data.results_count == 0) {
            // resultsList.html('<li><span class="title">No results.</span></li>');
            // resultsList.fadeIn(200);
            resultsList.hide();
          } else {
            // If we have results.
            $.each(data.results, function(index, item) {
              var link = $('<a></a>').attr('href', item.url);
              link.append('<div class="thumbnail"><img src="' + item.thumbnail + '" /></div>');
              link.append('<span class="title">' + item.title + '</span>');
              link.wrap('<li></li>');
              resultsList.append(link.parent());
            });
            // The Ajax request will return at the most 10 results.
            // If there are more than 10, let's link to the search results page.
            if(data.results_count > 10) {
              resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
            }
            resultsList.fadeIn(200);
          }        
        });
      }
    });
  
  // Clicking outside makes the results disappear.
  $('body').bind('click', function(){
    $('.search-results').hide();
  });
}

function hidePreloader() {
  setTimeout(function() {
    initNewsletterPopup();
  }, 5000);
}

/* Trigger click event for expand light gallery button*/
function triggerExpanLightGallery() {
  $(document).on('click', '.rsUni', function(e) {
    e.preventDefault();
    $(this).siblings('.viewmore-main').find('.slick-current a').trigger('click');
  });
}
$('.load-site').removeClass('load-site');
function initGlobalAction() {
  setTimeout(function() {
    lozadObj.observe();  
  }, 300);
  hidePreloader();
  initHoverMenu();
  initNavMobile('.main-navbar-btn', '#cdz-mobile-nav');
  initHideNavMobile(300);
  initUpsellProducts();
  window.fieldLabelEffect();
  initResponsiveTabsEvent();
  changeAdapt();
  $(window).bind('cdz_mobile',mobileConfig);
  $(window).bind('cdz_pc',pcConfig);
  initDropdownMenu('body', {trigger:'.cdz-trigger',dropdown:'.cdz-dropdown-content'});  
  loadMoreItems();
  initChangeQtyEvent();
  initSearchModal();
  
  initTooltip();
  initMoreViewsSwitchImg();
  toggleCartEditor();
  initVerMenu();
  cdzBackTopButton();
  initStickyMenu();
  customerAddressForm();
  initSearchSuggestion();
  triggerExpanLightGallery();
}

$(window).load(function() {
  initPromotionBanner();
  setTimeout(function() {
    enableSidebarCanvas();
  }, 500);
});