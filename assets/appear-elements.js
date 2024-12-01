function displayElements(elements) {
  var timeout = 0;
  elements.each(function(index, value) {
    var element = $(value);
    displayElement(element);
  });
}

function runAnimatedElement(element) {
  element.removeClass('wait-animated');
  element.addClass('animated fadeIn');
}

function displayElement(element) {
  var timeout = element.data('delay');
  if(timeout != '' && timeout != undefined) {
    timeout = 0;
  }
  if(element.hasClass('wait-animated')) {
    setTimeout(function() {
      if(element.find('img[data-src]').length > 0) {
        element.find('img[data-src]').each(function() {
          $(this).attr('src', $(this).data('src'));
          $(this).removeAttr('data-src');
          $(this).removeAttr('style');
        });
        element.imagesLoaded( function() {
          runAnimatedElement(element);
        });

      } else {
        runAnimatedElement(element);
      }
    }, timeout);
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      if(element.hasClass('animated')) {
        element.removeClass('animated fadeIn');
      }
    });
  }

}

var timeoutElements, viewportHeight = $(window).height();

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + viewportHeight;

  //return elementBottom > viewportTop && elementTop < viewportBottom;
  return (elementBottom - $(this).outerHeight()/2) > viewportTop && elementTop < viewportBottom;
};

function checkElementsInViewport(wrap) {
  $(wrap + ' .wait-animated').each(function() {
    if ($(this).isInViewport()) {
      displayElement($(this));
    } 
  });
}

var wow;
var intervals = {};
function initAppearElement(wrap) { 
  $(wrap + ' .wow:not(.animated)').each(function(index, value) {
    var ele = $(this);
    var isInViewport;
    intervals[wrap + index] = setInterval(function() {
      isInViewport = ele.isInViewport();
      if(isInViewport) {
        clearInterval(intervals[wrap + index]);
        delete intervals[wrap + index];
        ele.removeClass('wow').addClass('animated');
        displayElements(ele.find('.wait-animated'));
      }
    }, 100);
    ele.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      if(ele.hasClass('animated')) {
        ele.removeClass('animated fadeIn');
      }
    });
  });
}