window.theme = window.theme || {};

/********* --- Header --- *********/
theme.headerApp = null; 
theme.HeaderSection = (function() {

  function HeaderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    
    theme.headerAppMobile = new HeaderApp({
      el: "#headerAppWrap",
      data: dataApp
    });
    theme.headerAppMobile.init();

    $(window).on('loaded_translate_data', function() {
      applyTranslateData("#headerApp", currentLocale, true);
    });
    transLinkList('#footer_' + sectionId + '_section');
    $(window).on('change_cdz_locale', function() {
      transLinkList('#footer_' + sectionId + '_section');
    });
  }

  return HeaderSection;
})();
theme.HeaderSection.prototype = _.assignIn({}, theme.HeaderSection.prototype, {
  onSelect: function() {
    applyTranslateData("#headerApp", currentLocale, false);
    enableSidebarCanvas();
  },
  onUnload: function() {
    delete theme.headerApp;
    delete theme.headerAppMobile;
  }
});

/********* --- Footer --- *********/
theme.footerApp = null;  
theme.FooterSection = (function() {

  function Footer(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    theme.footerApp = new FooterApp({
      el: "#footer_" + sectionId + "_section",
      data: dataApp
    });
    theme.footerApp.init();
    $(window).on('loaded_translate_data', function() {
      applyTranslateData(".footerApp", currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {
    onSelect: function() {
      applyTranslateData(".footerApp", currentLocale, false);
    },
    onUnload: function() {
      delete theme.footerApp;
    }
  });

  return Footer;
})();

/********* --- Slideshow --- *********/ 
theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#Slideshow-' + sectionId;

    theme.slideshows[slideshow] = initSlideshow();
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
  onUnload: function() {
    delete theme.slideshows[this.slideshow];
  }
});

/********* --- Product Block Style 1 --- *********/
theme.productBlock1 = {};
theme.ProductBlock1Section = (function() {
  function ProductBlock1Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initVertialMoreViewSlider('#' + $container.attr('id'));
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    setTimeout(function() {
      initMatchHeight('#' + $container.attr('id') + ' .product-list-wrapper', '.product-details');
    }, 5000);
    initSlider('#' + $container.attr('id'));
    theme.productBlock1[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock1Section;
})();

theme.ProductBlock1Section.prototype = _.assignIn({}, theme.ProductBlock1Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock1[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock1[this.productBlock];
  }
});

/********* --- Product Block Style 2 --- *********/
theme.productBlock2 = {};
theme.ProductBlock2Section = (function() {
  function ProductBlock2Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;

    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock2[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock2Section;
})();

theme.ProductBlock2Section.prototype = _.assignIn({}, theme.ProductBlock2Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock2[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock2[this.productBlock];
  }
});

/********* --- Product Block Style 3 --- *********/
theme.productBlock3 = {};
theme.ProductBlock3Section = (function() {
  function ProductBlock3Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    initVertialMoreViewSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    setTimeout(function() {
      initMatchHeightInTab('#' + $container.attr('id'));
    }, 5000);
    theme.productBlock3[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock3Section;
})();

theme.ProductBlock3Section.prototype = _.assignIn({}, theme.ProductBlock3Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock3[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock3[this.productBlock];
  }
});

/********* --- Product Block Style 4 --- *********/
theme.productBlock4 = {};
theme.ProductBlock4Section = (function() {
  function ProductBlock4Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    setTimeout(function() {
      initMatchHeightInTab('#' + $container.attr('id'));
    }, 5000);
    theme.productBlock4[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock4Section;
})();

theme.ProductBlock4Section.prototype = _.assignIn({}, theme.ProductBlock4Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock4[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock4[this.productBlock];
  }
});

/********* --- Product Block Style 5 --- *********/
theme.productBlock5 = {};
theme.ProductBlock5Section = (function() {
  function ProductBlock5Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    setTimeout(function() {
      initMatchHeight('#' + $container.attr('id') + ' .col-block2 .product-list-wrapper', '.product-details');
    }, 5000);
    theme.productBlock5[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock5Section;
})();

theme.ProductBlock5Section.prototype = _.assignIn({}, theme.ProductBlock5Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock5[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock5[this.productBlock];
  }
});

/********* --- Product Block Style 6 --- *********/
theme.productBlock6 = {};
theme.ProductBlock6Section = (function() {
  function ProductBlock6Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock6[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock6Section;
})();

theme.ProductBlock6Section.prototype = _.assignIn({}, theme.ProductBlock6Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock6[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock6[this.productBlock];
  }
});

/********* --- Product Block Style 7 --- *********/
theme.productBlock7 = {};
theme.ProductBlock7Section = (function() {
  function ProductBlock7Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock7[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock7Section;
})();

theme.ProductBlock7Section.prototype = _.assignIn({}, theme.ProductBlock7Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock7[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock7[this.productBlock];
  }
});

/********* --- Product Block Style 8 --- *********/
theme.productBlock8 = {};
theme.ProductBlock8Section = (function() {
  function ProductBlock8Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock8[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock8Section;
})();

theme.ProductBlock8Section.prototype = _.assignIn({}, theme.ProductBlock8Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock8[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock8[this.productBlock];
  }
});

/********* --- Product Block Style 9 --- *********/
theme.productBlock9 = {};
theme.ProductBlock9Section = (function() {
  function ProductBlock9Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    initDealCountdown('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock9[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock9Section;
})();

theme.ProductBlock9Section.prototype = _.assignIn({}, theme.ProductBlock9Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock9[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock9[this.productBlock];
  }
});

/********* --- Product Block Style 10 --- *********/
theme.productBlock10 = {};
theme.ProductBlock10Section = (function() {
  function ProductBlock10Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock10[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock10Section;
})();

theme.ProductBlock10Section.prototype = _.assignIn({}, theme.ProductBlock10Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock10[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock10[this.productBlock];
  }
});

/********* --- Instagram Slider --- *********/
theme.instagramSlider = {};
theme.InstagramSliderSection = (function() {
  function InstagramSliderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#instagramSlider-' + sectionId;

    setTimeout(function() {
      initInstagramSlider('#' + $container.attr('id'));
    }, 3000);
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.instagramSlider[block] = '#' + $container.attr('id');
  }

  return InstagramSliderSection;
})();

theme.InstagramSliderSection.prototype = _.assignIn({}, theme.InstagramSliderSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.instagramSlider[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.instagramSlider[this.obj];
  }
});

/********* --- Brands Slider --- *********/
theme.brandsSlider = {};
theme.BrandsSliderSection = (function() {
  function BrandsSliderSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#brandsSlider-' + sectionId;

    initSlider('#' + $container.attr('id'));
    theme.brandsSlider[block] = '#' + $container.attr('id');
  }

  return BrandsSliderSection;
})();

theme.BrandsSliderSection.prototype = _.assignIn({}, theme.BrandsSliderSection.prototype, {
  onUnload: function() {
    delete theme.brandsSlider[this.obj];
  }
});

/********* --- Featured Blog --- *********/
theme.featuredBlog = {};
theme.FeaturedBlogSection = (function() {
  function FeaturedBlogSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#featuredBlog-' + sectionId;

    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    
    initSlider('#' + $container.attr('id'));
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.featuredBlog[block] = '#' + $container.attr('id');
  }

  return FeaturedBlogSection;
})();

theme.FeaturedBlogSection.prototype = _.assignIn({}, theme.FeaturedBlogSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.featuredBlog[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.featuredBlog[this.obj];
  }
});

/********* --- Collection Template --- *********/
theme.collectionTemplate = {};
theme.CollectionTemplateSection = (function() {
  function CollectionTemplateSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#collectionTemplate-' + sectionId;
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    initCollectionTemplate();
    /*theme.collectionTemplate = new CollectionTemplateApp({
      el: '#' + $container.attr('id'),
      data: dataApp
    });*/
    //theme.collectionTemplate.init();
    initVertialMoreViewSlider('#' + $container.attr('id'));
    theme.collectionTemplate[block] = '#' + $container.attr('id');
  }

  return CollectionTemplateSection;
})();

theme.CollectionTemplateSection.prototype = _.assignIn({}, theme.CollectionTemplateSection.prototype, {
  onSelect: function() {
    lozadObj.observe();
    applyTranslateData(theme.collectionTemplate[this.obj], currentLocale, false);
    enableSidebarCanvas();
  },
  onUnload: function() {
    delete theme.collectionTemplate[this.obj];
  }
});

/********* --- Product Template --- *********/
theme.Product = (function() {
  function Product(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#ProductSection-' + sectionId;
    // init Product Template App
    var productApp = new ProductTemplateApp({wrap: '#shopify-section-product-template', suffix: '-product-template', useUpsell: 1, useCrosssell: 1, isProductPage: true});
    //productApp.init();
    $(window).on('loaded_translate_data', function() {
      setTimeout(function() {
        applyTranslateData('#ProductSection-' + sectionId, currentLocale, true);
      }, 300);
    });
    applyTranslateContent('#ProductSection-' + sectionId, currentLocale);
    
    initDetailJs();
    initDealCountdown('#' + $container.attr('id'));
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    onSelect: function() {
      applyTranslateData(this.obj, currentLocale, false);
      applyTranslateData('.non-section', currentLocale, false);
    }
  });
  return Product;
})();

/********* --- Login and Reset Template --- *********/
theme.loginPage = {};
theme.LoginPageSection = (function() {
  function displayLoginForm() {
    $('#login-form').show();
    $('#form-validate').hide();
    $('.login-page-inner').removeClass('customer-account-forgotpassword').addClass('customer-account-login');
  }
  function displayResetForm() {
    $('#login-form').hide();
    $('#form-validate').show();
    $('.login-page-inner').removeClass('customer-account-login').addClass('customer-account-forgotpassword');
  }
  function LoginPageSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#loginPage-' + sectionId;
    if (window.location.hash == '#recover' && window.self === window.top) { 
      displayResetForm();
    }

    $(document).on('click', '#login-form .forgot-password-link a', function(e) {
      e.preventDefault();
      displayResetForm();
    });

    $(document).on('click', '#form-validate .back-link a', function(e) {
      e.preventDefault();
      displayLoginForm();
    });
    
    theme.loginPage[block] = '#' + $container.attr('id');
  }

  return LoginPageSection;
})();

theme.LoginPageSection.prototype = _.assignIn({}, theme.LoginPageSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.loginPage[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.loginPage[this.obj];
  }
});

/********* --- Cart Template --- *********/
theme.Cart = (function() {
  var config = {
    cartNoCookies: 'cart--no-cookies'
  };

  function Cart(container) {
    this.$container = $(container);

    if (!this.cookiesEnabled()) {
      this.$container.addClass(config.cartNoCookies);
    }
    this.obj = '#' + this.$container.attr('id');
    if($('#shopping-cart-table-app').length > 0) {
      theme.cartApp = new CartTemplateApp({
        el: '#shopping-cart-table-app',
        data: dataApp
      });
      theme.cartApp.init();
    }
  }

  Cart.prototype = _.assignIn({}, Cart.prototype, {
    onSelect: function() {
      applyTranslateData(this.obj, currentLocale, false);
    },
    cookiesEnabled: function() {
      var cookieEnabled = navigator.cookieEnabled;

      if (!cookieEnabled){
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
      }
      return cookieEnabled;
    }
  });

  return Cart;
})();

/********* --- Search Page --- *********/
theme.searchSection = {};
theme.SearchSection = (function() {
  function SearchSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var block = this.obj = '#searchPage-' + sectionId;
    initVertialMoreViewSlider('#' + $container.attr('id'));
    theme.searchSection[block] = '#' + $container.attr('id');
  }

  return SearchSection;
})();

theme.SearchSection.prototype = _.assignIn({}, theme.SearchSection.prototype, {
  onSelect: function() {
    applyTranslateData(theme.searchSection[this.obj], currentLocale, false);
  },
  onUnload: function() {
    delete theme.searchSection[this.obj];
  }
});

/********* --- Contacts Section --- *********/
var mapApiLoadStatus = null;
var config = {
  zoom: 14
};

theme.Contacts = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];
  var key = theme.mapKey ? theme.mapKey : '';
  
  function Contacts(container) {
    this.$container = $(container);
    var wrapId = '#' + this.$container.attr('id');
    this.wrapId = wrapId;
    $(window).on('loaded_translate_data', function() {
      applyTranslateData(wrapId, currentLocale, true);
    });
    if($('.cdz-google-map').length > 0) {
      if (apiStatus === 'loaded') {
        this.createMap();
      } else {
        mapsToLoad.push(this);

        if (apiStatus !== 'loading') {
          apiStatus = 'loading';
          if (typeof window.google === 'undefined') {
            $.getScript('https://maps.googleapis.com/maps/api/js?key=' + key)
            .then(function() {
              apiStatus = 'loaded';
              initAllMaps();
            });
          }
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({address: address}, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Contacts.prototype = _.assignIn({}, Contacts.prototype, {
    createMap: function() {
      var $map = this.$container.find('.cdz-google-map');

      return geolocate($map)
      .then(function(results) {
        var mapOptions = {
          zoom: config.zoom,
          center: results[0].geometry.location,
          disableDefaultUI: true
        };

        var map = this.map = new google.maps.Map($map[0], mapOptions);
        var center = this.center = map.getCenter();
          //eslint-disable-next-line no-unused-vars
          var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter(),
            title: $map.data('address-setting')
          });

          google.maps.event.addDomListener(window, 'resize', $.debounce(250, function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
          }));
        }.bind(this))
      .fail(function() {
        var errorMessage;

        switch (status) {
          case 'ZERO_RESULTS':
          errorMessage = theme.strings.addressNoResults;
          break;
          case 'OVER_QUERY_LIMIT':
          errorMessage = theme.strings.addressQueryLimit;
          break;
          default:
          errorMessage = theme.strings.addressError;
          break;
        }

        $map
        .parent()
        .addClass('page-width map-section--load-error')
        .html('<div class="errors text-center">' + errorMessage + '</div>');
      });
    },

    onUnload: function() {
      google.maps.event.clearListeners(this.map, 'resize');
    },

    onSelect: function() {
      applyTranslateData(this.wrapId, currentLocale, false);
    }
  });

  return Contacts;
})();

/********* --- Collection List --- *********/
theme.collectionList = {};
theme.CollectionListSection = (function() {
  function CollectionListSection(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    this.obj = '#collection_list_' + sectionId;
    
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.collectionList[this.obj] = '#' + $container.attr('id');
  }

  return CollectionListSection;
})();

theme.CollectionListSection.prototype = _.assignIn({}, theme.CollectionListSection.prototype, {
  onSelect: function() {
    applyTranslateData(this.obj, currentLocale, false);
  },
  onUnload: function() {
    delete theme.collectionList[this.obj];
  }
});