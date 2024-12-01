function cdzConvertCurrency(c, b, html, d) {
  var e = 0;
  var f = CdzCurrency.moneyFormats[c][d || CdzCurrency.format] || "{{amount}}";
  var g = CdzCurrency.moneyFormats[b][d || CdzCurrency.format] || "{{amount}}";
  if (f.indexOf("amount_no_decimals") !== -1) {
    e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) * 100, c, b)
  } else {
    if (c === "JOD" || c == "KWD" || c == "BHD") {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) / 10, c, b)
    } else {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10), c, b)
    }
  }
  var h = CdzCurrency.formatMoney(e, g);
  var span = $(document.createElement("span"));
  span.addClass('cdz-money money');
  span.attr('data-currency-' + b, h);
  if(b != shopCurrency) {
    span.attr('data-currency-' + shopCurrency, html);
  }
  span.attr('data-currency', b);
  span.html(h);
  var wrap = $(document.createElement("div"));
  wrap.append(span);
  return wrap.html();
}

function renderPriceHtml(c, b, html, d) {
  var e = 0;
  var f = CdzCurrency.moneyFormats[c][d || CdzCurrency.format] || "{{amount}}";
  var g = CdzCurrency.moneyFormats[b][d || CdzCurrency.format] || "{{amount}}";
  if (f.indexOf("amount_no_decimals") !== -1) {
    e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) * 100, c, b)
  } else {
    if (c === "JOD" || c == "KWD" || c == "BHD") {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10) / 10, c, b)
    } else {
      e = CdzCurrency.convert(parseInt(html.replace(/[^0-9]/g, ""), 10), c, b)
    }
  }
  var h = CdzCurrency.formatMoney(e, g);
  var span = $(document.createElement("span"));
  span.addClass('price');
  span.attr('data-currency-' + b, h);
  if(b != shopCurrency) {
    span.attr('data-currency-' + shopCurrency, html);
  }
  span.attr('data-currency', b);
  span.html(h);
  var wrap = $(document.createElement("div"));
  wrap.append(span);
  return wrap.html();
}

function displayMediaImg(imgSrc, isMain) {
  var div = $('<div class="image-item"></div>');

  if(isMain) {
    div.addClass('js-cover-wrap');
  }

  var img = $('<img class="img-responsive cloudzoom"/>');
  img.attr('src', cdzResizeImage(imgSrc, '637x'));
  img.attr('data-src', imgSrc);
  img.attr('data-cloudzoom', "zoomImage: '" + imgSrc + "'");

  div.append(img);

  var wrapDiv = $('<div></div>');
  wrapDiv.append(div);
  return wrapDiv.html();
}

function displayThumbImg(imgObj, isMain, size) {
  var a = $('<a class="thumb-link cloudzoom-gallery"></a>');

  if(isMain) {
    a.addClass('select').addClass('js-cover-wrap');
  }

  a.attr('href', imgObj);
  a.attr('data-image-id', imgObj);
  //a.attr('data-cloudzoom-image="{{ image.src | img_url: '637x' }}"', imgObj);

  var img = $('<img class="img-responsive"/>');
  img.attr('src', cdzResizeImage(imgObj, size));

  a.append(img);

  var wrapDiv = $('<div></div>');
  wrapDiv.append(a);
  return wrapDiv.html();
}

function cut(n) {
  return function textCutter(i, text) {
    var short = text.substr(0, n);
    if (/^\S/.test(text.substr(n)))
      return short.replace(/\s+\S*$/, "");
    return short;
  };
}

function escapeHtml(text) {
  var regex = /(<([^>]+)>)/ig;
  return result = text.replace(regex, "");
}

function decodeHtml(encodedStr) {
  var parser = new DOMParser;
  var dom = parser.parseFromString(
    '<!doctype html><body>' + encodedStr,
    'text/html');
  return dom.body.textContent;
}

function showNotifyMsg(msg, type) {
  $('#notify-button').attr('data-message', msg);
  if(type == 'success') {
    $('#notify-button').attr('data-type', type);
  } else {
    $('#notify-button').removeAttr('data-type');
  }
  $('#notify-button').trigger('click');
}

/*function findVarianWhenOptionChange(variants, optionSelectorClass, wrap) {
  var selector = wrap + ' ' + optionSelectorClass;
  var currentSelect = {};
  var result;
  $(selector).each(function(){
    var index = $(this).attr('data-index');
    var value = $(this).val();
    currentSelect[index] = value;
  });

  $.each(variants, function (index, variant) {
    var valid = true;
    $.each(currentSelect, function (indexOption, value) {
      if(variant[indexOption] != value) {
        valid = false;
      }
    });

    if(valid == true) {
      result = variant;
      return;
    }
  });
  return result;
}*/

function callRequest(url, type, data, dataType, cb) {
  return $.ajax({
    type: type,
    url: url,
    data: data,
    dataType: dataType,
    error: function(xhr, textStatus, errorThrown) {
      if(xhr.responseJSON != undefined) {
        if(xhr.responseJSON.description != undefined && xhr.responseJSON.description != null) {
          showNotifyMsg(xhr.responseJSON.description, 'error');
        } else if (xhr.responseJSON.message != undefined) {
          showNotifyMsg(xhr.responseJSON.message, 'error');
        }
      }
    },
    success: function(response){
      cb(response);
    }
  });
}

Vue.component('money', {
  props: ['price'],
  template: '<span class="price" v-html="price"></span>'
});

var CdzApp = Vue.extend({
  methods: {
    checkProductInWishlist: function(handle) {
      var result = false;
      $.each(this.wishlistItems, function(index, item) {
        if(handle == item.handle) {
          result = true;
          return;
        }
      });
      return result;
    },

    decodeHtml: function(str) {
      return decodeHtml(str);
    },

    initEvent: function() {

    },

    init: function() {
      this.initEvent();
    }
  }
});

var ProcessingApp = CdzApp.extend({
  filters: {
    // Default Translate
    dt: function (arg1, arg2) {
      if (!arg1) {
       return arg2;
     }
     return arg1.toString();
   },
    // Render variable in translate
    rvt: function(text, val) {
      if(text == undefined) {
        return '';
      }
      var tmp1 = val.split(',');
      $.each(tmp1, function(index, value) {
        var tmp2 = value.split('=');
        text = text.replace('[[ ' + tmp2[0] + ' ]]', tmp2[1]).replace(new RegExp('`', 'g'), '').replace(';comma', ',');
      });
      return text;
    },
    concact: function(str1, str2) {
      if(str1 == undefined) {
        return '';
      }
      return str1 + str2;
    },

    displayPrice: function(arg1, arg2){
      var html = '' + Shopify.formatMoney(arg1, CdzCurrency.moneyFormats[shopCurrency].money_format);
      return cdzConvertCurrency(shopCurrency, arg2, html);
    },
    displayMediaMain: function(arg1) {
      if(arg1) {
        return displayMediaImg(arg1.src, true);
      }
      return '';
    },
    displayMediaThumb : function(arg1) {
      if(arg1) {
        return displayMediaImg(arg1, false);
      }
      return '';
    }
  },
  watch: {
    'sidebar.showLeft': function (val) {
      setCookie('sidebar_showLeft', val, null);
    },
    'sidebar.showRight': function (val) {
      setCookie('sidebar_showRight', val, null);
    },
    'showFooterCart': function(val) {
      if(val > 0) {
        $('.footer-cart .cart-content').slideDown(function() {
          $('.footer-cart').addClass('active');
        });  
      } else {
        $('.footer-cart .cart-content').slideUp(function() {
          $('.footer-cart').removeClass('active');
        });
      }
    }
  },
  methods: {
    defaultTrans: function(arg1, arg2) {
      if(arg1 == '' || arg1 == undefined) {
        return arg2;
      }
      return arg1;
    },
    lowercase: function(str) {
      return str.toLowerCase().trim();
    },
    strContainsStr: function(str1, str2) {
      return str1.indexOf(str2) > 0;
    },
    resizeImage: function(e, t) {
      return cdzResizeImage(e, t);
    },
    displayOverlay: function(){
      $('.wrap-all').addClass('overlay-layer');
    },
    hideOverlay: function(){
      $('.wrap-all').removeClass('overlay-layer');
    },
    displayLoading: function(){
      showAjaxLoading();
    },
    hideLoading: function(){
      hideAjaxLoading();
    },
    callRequest: function(url, type, data, dataType, cb) {
      return callRequest(url, type, data, dataType, cb);
    },

    requestUpdateCart: function(line, qty){
      var ins = this;
      $(ins.updateCartRequests).each(function(index, xhr) {
        if(xhr && xhr.readyState != 4){
          xhr.abort();
        }
      });
      this.updateCartRequests = [];
      this.cartProcessing = 1;
      this.updateCartRequests.push(ins.callRequest('/cart/change.js', 'POST', {line: line, quantity: qty}, 'json', function(cart) {
        ins.cartProcessing = 0;
        ins.cart = cart;
      }));
    },

    requestEmptyCart: function(){
      var me = this;
      this.cartProcessing = 1;
      this.callRequest('/cart/clear.js', 'POST', {}, 'json', function(cart) {
        me.cartProcessing = 0;
        me.cart = cart; 
      });
    },

    updateMessageText: function() {
      this.cartFooterMsg = this.getTextTransByKey('cart.general.items_count_label').replace('[[ count ]]', this.cart.item_count);
    },

    reInitReview: function() {
      return reInitReview();
    },

    getParameterByName: function(name, url) {
      return getParameterByName(name, url);
    },

    findVarianWhenOptionChange: function(variants, optionSelectorClass, wrap, exactly) {
      return findVarianWhenOptionChange(variants, optionSelectorClass, wrap, exactly);
    },

    getTextTransByKey : function(key) {
     return getTransTextByKey(key);
   }
 }
});

var HeaderApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      this.updateCartHtml();
    },
    currentLocale: function(val) {
      this.updateLocalePicker(val);
    }
  },
  methods: {
    // Locale area
    initLocale: function(){
      if(useLocaleImg != undefined) {
        this.useLocaleImg = useLocaleImg;
      }

      var currentLocaleCookie = getCookie('currentLocale');
      if(currentLocaleCookie != null && currentLocaleCookie != '' && currentLocaleCookie != undefined && currentLocaleCookie != 'undefined') {
        this.currentLocale = currentLocaleCookie;
      }
      //updateMenuByLocale(this.currentLocale);

      this.getAllMenuByLocale(this.currentLocale);
      initNormalMenu('#header_header_section');

      // Call ajax to get translate data
      var me = this;
      if($('.form-language ul li a').length > 0) {
        $('.form-language ul li a').each(function(){
          if($(this).attr('data-code') == me.currentLocale) {
            me.currentLocaleImg = $(this).attr('data-img');
            me.currentLocaleText = $(this).attr('data-text');
          }
        });
        setTimeout(function() {
          $('.form-language ul li a img').each(function() {
            $(this).attr('src', $(this).attr('data-src'));
          });
        }, 3000);
        this.updateLocalePicker(this.currentLocale);
        $(document).on('click touchend', '.form-language ul li a', function(e) {
          e.preventDefault();
          me.changeLocale($(this).data('code'), $(this).data('text'), $(this).data('img'), e);
        });
      }
    },
    updateLocalePicker: function (localeCode){
      if($('.form-language ul li a').length > 0) {
        $('.form-language ul li').show().removeClass('active');
        var currentA = $('.form-language ul li a[data-code="' + localeCode +'"]');
        currentA.parent('li').hide().addClass('active');
        $('.language-list li').show();
        $('.form-language .cdz-trigger .lang-name').html(currentA.data('text'));
        $('.form-language .cdz-trigger .lang-flag').html('<img src="' + currentA.data('img') + '"/>');
      }
    },
    changeLocale: function(code, text, img, event){
      setCookie('currentLocale', code, null);
      setCookie('currentLocaleText', text, null);
      setCookie('currentLocaleImg', img, null);
      var me = this;
      this.displayLoading();
      getTranslateData(code, function(response) {
        me.currentLocale = code;
        currentLocale = code;
        translate = response;
        me.currentLocaleText = text;
        me.currentLocaleImg = img;
        me.updateMessageText();
        applyTranslateData('body', me.currentLocale, false);
        applyTranslateContent('body', me.currentLocale);
        me.getAllMenuByLocale(me.currentLocale);
        me.hideLoading();
        $(event.target).parents('.cdz-dropdown').find('.cdz-trigger').trigger('click');
        $(window).trigger('change_cdz_locale');
      });
    },
    initChangeCurrencyEvent: function(){
      var me = this;
      var cookie = CdzCurrency.cookie.read();
      if(cookie != null && cookie != undefined) {
        this.currentCurrency = cookie;
        CdzCurrency.currentCurrency = cookie;
      }
      if($('.currency-list').length > 0) {
        $('.currency-list li').removeClass('active');
        $('.currency-list li a[data-code="' + this.currentCurrency + '"]').parent('li').addClass('active');
      }
      $(document).on('click', '.store-currency ul li a', function(e) {
        e.preventDefault();
        var newCurrency = $(this).attr('data-code');
        CdzCurrency.convertAll(CdzCurrency.currentCurrency, newCurrency);
        $('.store-currency .cdz-trigger span:not(.icon-cdz)').html(newCurrency);
        $(this).parents('.cdz-dropdown').find('.cdz-trigger').trigger('click');
        CdzCurrency.currentCurrency = newCurrency;
        me.currentCurrency = $(this).attr('data-code');
        if($('.currency-list').length > 0) {
          $('.currency-list li').removeClass('active');
          $('.currency-list li a[data-code="' + me.currentCurrency + '"]').parent('li').addClass('active');
        }
      });
    },

    setMinHeightHeader: function() {
      var winWidth = $(window).width(), height;
      if(winWidth > adapt) {
        height = getHeaderHeight('pc');  
      } else {
        height = getHeaderHeight('mobile'); 
      }
      $('#headerApp').css('min-height', height);
    },

    getMenuByLocale: function(localeCode, handle) {
      var me = this;
      if(theme.useMenuAjax == true) {
        var view = 'menu_' + handle + '_' + localeCode;
        this.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
          if($(response).hasClass('cdz-menu')) {
            $('.menu-' + handle).html(response);
            initMenu('.menu-' + handle);
            lozadObj.observe();  
          }
        });
      } else {
        initMenu('.menu-' + handle);
      }
      /*this.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
        if($(response).hasClass('cdz-menu')) {
          $('.menu-' + handle).html(response);
          initMenu('.menu-' + handle);
        }
      });*/
    },

    getAllMenuByLocale: function(localeCode) {
      var me = this;
      var previewHandle, previewLocale;
      var previewParams = this.getParameterByName('preview_menu');
      if(previewParams) {
        var tmp = previewParams.split(',');
        if(tmp.length == 2) {
          previewHandle = tmp[0];
          previewLocale = tmp[1];
        } 
      }
      
      $(Object.keys(theme.menuHandles)).each(function(index, handle) {
        if($('.menu-' + handle).length > 0) {
          if(previewHandle != undefined && previewLocale != undefined && previewHandle == handle) {
            localeCode = previewLocale + '_preview';
          }
          $('.menu-' + handle + ' .cdz-menu').hide();
          if(previewHandle != undefined) {
            var view = 'menu_' + previewHandle + '_' + localeCode;
            me.callRequest(theme.menuUrl, 'GET', {view: view}, null, function(response) {
              if($(response).hasClass('cdz-menu')) {
                if($('.menu-' + previewHandle + ' .menu-' + previewLocale).length > 0) {
                  $('.menu-' + previewHandle + ' .menu-' + previewLocale).remove();
                }
                $('.menu-' + previewHandle).append(response);
                initMenu('.menu-' + previewHandle);
                lozadObj.observe();
              }
            });
          } else {
            me.getMenuByLocale(localeCode, handle);
          }
        }
      });
    },

    updateCartHtml: function() {
      var ins = this;
      this.callRequest('/', 'GET', {view: 'header_cart'}, null, function(response) {
        $('.header_cart').html(response);
        console.log('cart update');
        $('.block.block-cart').addClass('active');
        $('.block-cart-overlay').addClass('active');
        CdzCurrency.convertAll(shopCurrency, CdzCurrency.cookie.read(), '.header_cart .price', CdzCurrency.format);
        applyTranslateData('.header_cart', ins.currentLocale, false);
        lozadObj.observe();
      });
    },

    initEvent: function() {
      this.initChangeCurrencyEvent();
      this.initLocale();
    }
  }
});

var FooterApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      this.updateMessageText();
      setTimeout(function() {
        applyTranslateData('.footer-cart', this.currentLocale, false);
      }, 300);
    }
  },
  methods: {
    waitGetTransData: function() {
      var me = this;
      $(window).on('loaded_translate_data', function() {
        me.updateMessageText();
      });
    },

    submitCartForm: function(form, btn, cb) {
      var me = this;
      if(form.valid()) {
        this.cartProcessing = 1;
        var progressWrap = btn.siblings('.progress');
        var progressBar = progressWrap.find('.progress-bar');
        if(progressWrap) {
          progressWrap.removeClass('hide');
        }
        this.cartProcessing = 1;
        form.ajaxSubmit({
          url: '/cart/add.js',
          type: 'post',
          dataType: 'json',
          error: function(xhr, textStatus, errorThrown) {
            me.cartProcessing = 0;
            showNotifyMsg(xhr.responseJSON.description, 'error');
            if(progressWrap) {
              progressBar.width('0%').text('0%');
              progressWrap.addClass('hide');
            }
          },
          uploadProgress: function(event, position, total, percentComplete) {
            if(progressWrap) {
              progressBar.width(percentComplete + '%').text(percentComplete + '%');  
            }
          },
          success: function(data, textStatus, jqXHR, $form) {
            if(progressWrap) {
              progressBar.width('0%').text('0%');
              progressWrap.addClass('hide');
            }
            cb(data);
          }
        });
      }
    },

    changeOptionUpsell: function(e) {
      var index = $(e.target).attr('data-item-index');
      var product = this.upsell[index];
      var currentVariant = this.findVarianWhenOptionChange(product.variants, '.single-option-selector', '.upsell-item-' + $(e.target).attr('data-item-index'), true);
      if(currentVariant == undefined) {
        product.availableVariant = false;
      } else {
        product.availableVariant = currentVariant.available;
        product.currentVariant = currentVariant;

        // Change current image
        if(currentVariant.featured_image != null) {
          $.each(product.images, function(indexImage, img){
            if(img == currentVariant.featured_image.src.replace('https:','')) {
              product.featured_image = img;
              return;
            }
          });
        }
      }
      this.upsell[index] = product;
    },

    openUpsellModal: function() {
      if(!$('#upsellModal').hasClass('in') && upsell.showPopup) {
        var timeout = 0;
        if($('.modal.in').length > 0) {
          var modalId = $('.modal.in').attr('id');
          $('#' + modalId).modal('hide');
          timeout = 300;
        }
        setTimeout(function() {
          $('#upsellModal').modal('show');
        }, timeout);
      }
      this.showFooterCart = -1;
    },

    loadUpsellProduct: function(responseCart) {
      this.cartResProduct = responseCart;
      this.cartResProduct.qtyString = this.getTextTransByKey('products.product.upsell_cart_qty').replace('[[ count ]]', responseCart.quantity);
      this.cartResProduct.blockTitle = this.getTextTransByKey('products.product.upsell_block_title').replace('[[ product_title ]]', responseCart.title);
      this.cartResProduct.cartMsg = this.getTextTransByKey('products.product.upsell_cart_msg').replace('[[ product_title ]]', responseCart.title);
      if(upsell.showPopup == false) {
        return;
      }
      var me = this;
      this.callRequest('/products/' + responseCart.handle, 'GET', {view:'upsell'}, null, function(responseTags) {
        try {
          var upsellTags = $.parseJSON(responseTags);
          me.upsell = [];
          me.upsellIds = [];
          $(upsellTags).each(function(indexTag, tag) {
            me.callRequest('/collections/all/' + tag, 'GET', {view:'upsell'}, null, function(responseUpsell) {
              try {
                var list = $.parseJSON(responseUpsell);
                $(list).each(function(indexItem, item) {
                  if(me.upsellIds.indexOf(item.id) == -1 && item.id != responseCart.product_id) {
                    var product = item;
                    product.currentVariant = item.variants[0];
                    product.availableVariant = item.variants[0].available;
                    product.url = item.url;
                    product.qtyInPut = 1;
                    // Build options
                    var options = [];
                    $(item.options).each(function(indexOption, labelOption) {
                      var option = {name: labelOption};
                      var values = [];
                      $(item.variants).each(function(indexVariant, variant) {
                        if(values.indexOf(variant.options[indexOption]) < 0) {
                          values.push(variant.options[indexOption]);
                        }
                      });
                      option.values = values;
                      options.push(option);
                    });
                    product.options = options;
                    me.upsell.push(product);
                    me.upsellIds.push(item.id);
                  }
                });
              } catch(e) {
                console.log(e);
              }
            });  
          });
        } catch(e){
        }
      });
    },

    loadCart: function() {
      var me = this;
      this.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
        me.cart = cart;
      });
    }, 

    initAddToCartEvent: function(){
      var me = this;
      //this.loadCart();
      $(document).on( 'click', '.button.btn-cart, .product-form__cart-submit', function(e) {
        var btn = $(this);
        if(btn.hasClass('select-option')) {
          e.preventDefault();
          me.cartProcessing = 1;
          // Load product option in popup
          var jsonStr = btn.parents('.product-item-info').find('span.product-json.hide').html();
          me.getProductInfo(btn.attr('data-url'), function(product){
            me.selectOption.product = product;
            me.selectOption.currentVariant = product.variants[0];
            me.selectOption.availableVariant = product.variants[0].available;
            me.selectOption.qty = 1;
            btn.addClass('current-select-option');
            me.cartProcessing = 0;
            $('#select-product-option').modal('show');
            //btn.removeClass('loading-icon');
          });
        } else {
          // Add product to cart
          var form = $(this).parents('form');
          e.preventDefault();
          me.submitCartForm(form, btn, function(response) {
            if(typeof(fbq) != 'undefined') {
              fbq('track', 'AddToCart', {
                content_name: response.title,
                content_ids: [response.product_id],
                content_type: 'product_group',
                content_category: response.product_type,
                value: Math.round((CdzCurrency.convert(Shopify.formatMoney(response.price, '{{amount}}'), shopCurrency, CdzCurrency.currentCurrency)) * 100) / 100,
                currency: CdzCurrency.currentCurrency  
              });
            }
            //Shopify.formatMoney(val, CdzCurrency.moneyFormats[shopCurrency].money_format);
            me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
              var itemInCart = me.findVariantIdInCart(response.variant_id);
              if(itemInCart.length > 0) {
                me.cartHolderImg = '';
              } else {
                me.cartHolderImg = response.variant_id;
              }
              me.cart = cart;
              if(!$('#upsellModal').hasClass('in') && upsell.showPopup) {
                me.loadUpsellProduct(response);
              }
              var opts = {
                itemInCart: itemInCart
              };
              var flyBtn = btn;
              if(form.parents('#select-product-option').length > 0) {
                $('#select-product-option').modal('hide');
                flyBtn = $('.current-select-option');
                $('.current-select-option').removeClass('current-select-option');
              }
              else if(btn.hasClass('product-form__cart-submit')) {
                if (e.originalEvent === undefined) { // add cart from sticky button on product page
                  opts.parent = '.sc';
                  opts.img = '.sc__image';
                  flyBtn = $('.sc__cart-button');  
                } else {
                  opts.parent = '.product-essential, #quickViewModal';
                  opts.img = '.viewmore-main img, .product-option-image img';
                }
              }
              var timeout = 300;
              if(me.showFooterCart < 0) {
                me.showFooterCart = 1;
                timeout = 600;
              }

              setTimeout(function() {
                me.cartProcessing = 0;
                ajaxCartEffect(flyBtn, opts, function() {
                  if($('#upsellModal').hasClass('in')) {
                    me.loadUpsellProduct(response);
                  }
                  me.openUpsellModal();
                });
              }, timeout);
            });
          });
        }
      });

      // Destroy select option data after hide modal
      $('#select-product-option').on('hidden.bs.modal', function () {
        this.selectOption = {
          product: {
            options: [],
            variants: []
          },
          currentVariant: {},
          availableVariant: true
        };
      });
    },

    initUpdateCartEvent: function() {
      var ins = this;
      $(document).on('click', '.update-cart-btn', function(e) {
        e.preventDefault();
        var line = $(this).attr('data-update-cart-index');
        var value = $(this).attr('data-update-cart-value');
        if(isNaN(value)) {
          if($(value).length == 0) {
            return;
          }
          // value is selector to an input
          value = $(value).val();
        }
        ins.requestUpdateCart(line, value);
      });
    },

    initFooterCartTriggerEvent: function() {
      var obj = this;
      $(document).on('click', '.footer-cart .cart-trigger', function(e) {
        e.preventDefault();
        obj.showFooterCart *= -1;
      });
    },

    findVariantIdInCart: function(variantId) {
      return $('.footer-cart [data-variant-id=' + variantId + ']');
    },

    getProductInfo: function(href, cb) {
      this.callRequest(href + '.js', 'GET', {}, 'json', function(response) {
        cb(response);
      });
    },

    // Change option in select option modal
    changeOptionSelectOption: function(e) {
      var currentVariant = this.findVarianWhenOptionChange(this.selectOption.product.variants, '.single-option-selector', '#select-product-option', true);
      if(currentVariant == undefined) {
        //this.quickview.product.currentVariant = {};
        this.selectOption.availableVariant = false;
      } else {
        this.selectOption.availableVariant = currentVariant.available;
        this.selectOption.currentVariant = currentVariant;
      }
    },

    displayImageSelectOption: function() {
      var src;
      var me = this;
      if(this.selectOption.currentVariant != undefined && this.selectOption.product.images != undefined) {
        if(this.selectOption.product.images.length > 0) {
          if(this.selectOption.currentVariant.featured_image != null) {
            $.each(this.selectOption.product.images, function(index, image) {
              if(me.selectOption.currentVariant.featured_image.src.replace('https:', '') == image) {
                src = me.resizeImage(image, '495x');
                return;
              }
            }); 
          } else {
            src = this.resizeImage(this.selectOption.product.featured_image, '495x');
          }
        }
      }
      return src;
    },

    destroyQuickView: function() {
      this.quickview = {
        product: {
          image: {},
          images: [],
          options: [],
          variants: [],
          qty : 1
        },
        currentVariant: {},
        availableVariant: true,
        cs: {
          found_option: false,
          is_color: false,
          option_index: 0
        }
      };
    },

    initQuickViewBtnEvent: function() {
      var ins = this;
      var modalId = '#quickViewModal';
      $(document).on('filter_thumbs_slider-quickview', function(e, val) {
        if(ins.quickViewSlider != undefined) {
          var handle = val.toLowerCase().replace(/ /g,'-').replace(/[']/g,'');
          ins.quickViewSlider.slick('slickUnfilter');
          ins.quickViewSlider.slick('slickFilter', '.group-' + handle + ', .group-all');
        }
      });

      $(document).on('click', '.qs-button', function(e) {
        e.preventDefault();
        $(this).addClass('loading-icon');
        var btn = $(this);
        var image = $(this).parents('.product-item').find('.product-image img');
        ins.callRequest($(this).attr('href'), 'GET', {view: 'quickview'}, null, function(response) {
          $(modalId + ' .modal-body .row').html(response);
          applyTranslateData(modalId, currentLocale, true);
          applyTranslateContent(modalId, currentLocale);
          $(modalId + ' span.price,' + modalId + ' s.price').each(function() {
            $(this).attr('data-currency-' + shopCurrency, $(this).html());
          });
          CdzCurrency.convertAll(shopCurrency, ins.currentCurrency, modalId + ' .product-shop-stock-price span.price,'+modalId + ' .product-shop-stock-price s.price', CdzCurrency.format);
          $(modalId + ' .more-views').imagesLoaded(function() {
            $(modalId).modal('show');
            btn.removeClass('loading-icon');
          });

          if(btn.hasClass('has-review')) {
            ins.reInitReview();  
          }
        });
      });

      $(modalId).on('show.bs.modal', function (e) {
        setTimeout(function() {
          if(ins.quickViewApp == undefined) {
            ins.quickViewApp = new ProductTemplateApp({wrap: modalId, suffix: '-quickview', useUpsell: 0, useCrosssell: 0, history: 0});
          } else {
            ins.quickViewApp.refresh();
          }
          activeCurrentSwatch('#product-options-wrapper-quickview');
        }, 500);
      });
      $(modalId).on('hidden.bs.modal', function (e) {
        $(modalId + ' .viewmore-main').slick('unslick');
        $(modalId + ' .viewmore-thumbs').slick('unslick');
      });
    },

    displayShortDesc: function(text) {
      if(text != undefined && text != '') {
        var div = $('<div></div>');
        text = $($.parseHTML(text)).text();
        div.text(text);
        div.text(cut(400));
        result = div.html() + '...';
        return result.replace(/&amp;/g, '&');
      }
      return '';
    },

    changeOptionQv: function(e) {
      updateOptionStock('.cd-quickview-inner', this.quickview.product);
      var currentVariant = this.findVarianWhenOptionChange(this.quickview.product.variants, '.single-option-selector', '.cd-quick-view', false);
      if(currentVariant == undefined) {
        this.quickview.availableVariant = false;
      } else {  
        this.quickview.currentVariant = currentVariant;
        this.quickview.availableVariant = currentVariant.available;
        // Change current image
        if(this.quickview.currentVariant.featured_image != null) {
          var img = this.quickview.currentVariant.featured_image.src;
          img = img.replace('https:','');
          $('#viewmore-slider-quickview .viewmore-thumbs .thumb-link[data-image-id="' + img + '"]').trigger('click');  
        }
      }
    },

    showCompareBox: function() {
      $(this.compareBoxId).modal('show');
    },

    hideCompareBox: function() {
      $(this.compareBoxId).modal('hide');
    },

    removeItemCompare: function(index, isAddCart){
      var item = this.compareItems[index];
      if(isAddCart) {
        this.compareMsg = this.getTextTransByKey('products.product.compare_cart_msg').replace('[[ product_title ]]', item.title);
      } else {
        this.compareMsg = this.getTextTransByKey('products.product.compare_remove_msg').replace('[[ product_title ]]', item.title);  
      }

      this.compareMsgType = 'success';
      this.compareItems.splice(index, 1);
      var cookieData = $.parseJSON(getCookie(this.compareCookie));
      cookieData.splice(index, 1);
      setCookie(this.compareCookie, JSON.stringify(cookieData), null);
    },
    
    addProductHrefToCompareCookie: function(href) {
      var json = getCookie(this.compareCookie), data = [];
      if(json != undefined) {
        data = $.parseJSON(json);
      }
      data.push(href);
      setCookie(this.compareCookie, JSON.stringify(data), null);
    },
    
    prepareCompareItem: function(href, silent){
      var me = this;
      if(silent == false) {
        this.displayLoading();
      }
      $.ajax({
        type: 'GET',
        url: href + '.js',
        dataType: 'json',
        success: function(product){
          var item = {
            availableVariant : product.variants[0].available,
            title: product.title,
            featured_image: product.featured_image,
            options: product.options,
            variants: product.variants,
            images: product.images,
            currentVariant: product.variants[0],
            vendor: product.vendor,
            href: href,
            qtyInPut: 1
          };
          me.compareItems.push(item);

          if(silent == false) {
            me.addProductHrefToCompareCookie(href.replace('/products/', ''));
            me.compareMsg = me.getTextTransByKey('products.product.compare_success_msg').replace('[[ product_title ]]', product.title);
            me.compareMsgType = 'success';
            me.hideLoading();
            me.showCompareBox();  
          }
        },
      });
    },
    
    changeOptionCompare: function(e) {
      var index = $(e.target).attr('data-item-index');
      var product = this.compareItems[index];
      var currentVariant = this.findVarianWhenOptionChange(product.variants, '.single-option-selector', '.compare-option-item-' + $(e.target).attr('data-item-index'), true);
      if(currentVariant == undefined) {
        product.availableVariant = false;
      } else {
        product.availableVariant = currentVariant.available;
        product.currentVariant = currentVariant;

        // Change current image
        if(currentVariant.featured_image != null) {
          $.each(product.images, function(indexImage, img){
            if(img == currentVariant.featured_image.src.replace('https:','')) {
              product.featured_image = img;
              return;
            }
          });  
        }
      }
      this.compareItems[index] = product;
    },

    checkItemExistInCompare: function(href) {
      var result = false;
      $.each(this.compareItems, function(index, value) {
        if(href == value.href) {
          result = true;
          return;
        }
      });
      return result;
    },
    addCartInCompare: function(formId, index) {
      this.cartProcessing = 1;
      var me = this;
      this.callRequest('/cart/add.js', 'POST', $(formId).serialize(), 'json', function(response) {
        me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
          var itemInCart = me.findVariantIdInCart(response.variant_id);
          if(itemInCart.length > 0) {
            me.cartHolderImg = '';
          } else {
            me.cartHolderImg = response.variant_id;
          }
          me.cart = cart;
          var opts = {
            itemInCart: itemInCart
          };
          opts.parent = '#compareBox';
          opts.img = '.compare-item-' + index + ' img';
          var waitFooterCart = me.showFooterCart < 1 ? 300 : 0;
          me.showFooterCart = 1;
          if(!$('#upsellModal').hasClass('in') && upsell.showPopup) {
            me.loadUpsellProduct(response);
          }
          me.cartProcessing = 0;
          setTimeout(function() {
            ajaxCartEffect($(formId).find('.button.btn-cart'), opts, function() {
              if($('#upsellModal').hasClass('in')) {
                me.loadUpsellProduct(response);
              }
              var timeout = 0;
              if(upsell.showPopup) {
                me.hideCompareBox();
                timeout = 500;
              }
              setTimeout(function() {
                me.openUpsellModal();
                me.removeItemCompare(index, true);
              }, timeout);
            });
          }, waitFooterCart);
        });
      });
    },

    initCompareEvent: function() {
      var me = this;
      $(document).on('click', '.cdz-compare-trigger', function(e){
        e.preventDefault();
        $('#compareBox').modal('show');
      });

      $(document).on('click', '.action.link-compare', function(e) {
        e.preventDefault();
        if(me.checkItemExistInCompare($(this).attr('href'))) {
          me.compareMsg = me.getTextTransByKey('products.product.compare_exist_msg').replace('[[ product_title ]]', $(this).attr('data-product-title'));
          me.compareMsgType = 'error';
          me.showCompareBox();
        } else {
          me.prepareCompareItem($(this).attr('href'), false);  
        }
      });

      // Init compare data
      if(getCookie(this.compareCookie) != undefined) {
        var dataHrefs = $.parseJSON(getCookie(this.compareCookie));
        $.each(dataHrefs, function(index, value) {
          me.prepareCompareItem('/products/' + value, true);
        });
      }

      // Clear message after close modal
      $(this.compareBoxId).on('hidden.bs.modal', function (e) {
        me.compareMsg = '';
      });

      // Show compare modal event
      $(document).on('click', '.comparing-box-btn', function() {
        $('#compareBox').modal('show');
      });
    },
    
    changeOptionWishlist: function(e) {
      var index = $(e.target).attr('data-item-index');
      var product = this.wishlistItems[index];
      var currentVariant = this.findVarianWhenOptionChange(product.variants, '.single-option-selector', '.wishlist-option-item-' + $(e.target).attr('data-item-index'), true);
      if(currentVariant == undefined) {
        product.availableVariant = false;
      } else {
        product.availableVariant = currentVariant.available;
        product.currentVariant = currentVariant;

        // Change current image
        if(currentVariant.featured_image != null) {
          $.each(product.images, function(indexImage, img){
            if(img == currentVariant.featured_image.src.replace('https:','')) {
              product.featured_image = img;
              return;
            }
          });  
        }
        
      }
      this.wishlistItems[index] = product;
    },

    addCartInWishlist: function(formId, index) {
      this.cartProcessing = 1;
      var me = this;
      this.callRequest('/cart/add.js', 'POST', $(formId).serialize(), 'json', function(response) {
        me.callRequest('/cart.js', 'GET', {}, 'json', function(cart) {
          var itemInCart = me.findVariantIdInCart(response.variant_id);
          if(itemInCart.length > 0) {
            me.cartHolderImg = '';
          } else {
            me.cartHolderImg = response.variant_id;
          }
          me.cart = cart;
          var opts = {
            itemInCart: itemInCart
          };
          if(!$('#upsellModal').hasClass('in') && upsell.showPopup) {
            me.loadUpsellProduct(response);
          }
          opts.parent = '.wishlist-option-item-' + index;
          opts.img = '.product-image img';
          var waitFooterCart = me.showFooterCart < 1 ? 300 : 0;
          me.showFooterCart = 1;
          setTimeout(function() {
            me.cartProcessing = 0;
            ajaxCartEffect($(formId).find('.button.btn-cart'), opts, function() {
              if($('#upsellModal').hasClass('in')) {
                me.loadUpsellProduct(response);
              }
              var timeout = 0;
              if(upsell.showPopup) {
                me.hideWishlistModal();
                timeout = 500;
              }
              setTimeout(function() {
                me.openUpsellModal();
                me.removeItemWishlist(index, true);
              }, timeout);
            });
          }, waitFooterCart);
        });
      });
    },

    showWishlistModal: function() {
      $(this.wishlistModalId).modal('show');
    },

    hideWishlistModal: function() {
      $(this.wishlistModalId).modal('hide');
    },

    removeItemWishlist: function(index, isAddCart){
      var item = this.wishlistItems[index];
      if(isAddCart) {
        this.wishlistMsg = this.getTextTransByKey('products.product.wishlist_cart_msg').replace('[[ product_title ]]', item.title);
      } else {
        this.wishlistMsg = this.getTextTransByKey('products.product.wishlist_remove_msg').replace('[[ product_title ]]', item.title);
      }

      this.wishlistMsgType = 'success';
      this.wishlistItems.splice(index, 1);
      var cookieData = $.parseJSON(getCookie(this.wishlistCookie));
      cookieData.splice(index, 1);
      setCookie(this.wishlistCookie, JSON.stringify(cookieData), null);
      $('.link-wishlist[data-product-handle="' + item.handle + '"]').removeClass('wl-added');
    },

    addProductHandleToWishlistCookie: function(handle) {
      var json = getCookie(this.wishlistCookie), data = [];
      if(json != undefined) {
        data = $.parseJSON(json);
      }
      data.push(handle);
      setCookie(this.wishlistCookie, JSON.stringify(data), null);
    },

    prepareWishlistItem: function(handle, silent){
      var me = this;
      if(silent == false) {
        this.displayLoading();
      }
      $.ajax({
        type: 'GET',
        url: '/products/' + handle + '.js',
        dataType: 'json',
        success: function(product){
          var item = {
            availableVariant : product.variants[0].available,
            title: product.title,
            featured_image: product.featured_image,
            options: product.options,
            variants: product.variants,
            images: product.images,
            currentVariant: product.variants[0],
            vendor: product.vendor,
            href: '/products/' + handle,
            handle: handle,
            qtyInPut: 1
          };
          me.wishlistItems.push(item);
          $('.link-wishlist[data-product-handle="' + handle + '"]').addClass('wl-added');

          if(silent == false) {
            me.addProductHandleToWishlistCookie(handle);
            me.hideLoading();
            me.wishlistMsgType = 'success';
            me.wishlistMsg = me.getTextTransByKey('products.product.wishlist_success_msg').replace('[[ product_title ]]', product.title);
            me.showWishlistModal();
          }
        },
      });
    },

    initWishlistEvent: function() {
      var me = this;
      $(document).on('click', '.link-wishlist', function(e) {
        e.preventDefault();
        if($(this).hasClass('wl-added')) {
          me.wishlistMsgType = 'warning';
          me.wishlistMsg = me.getTextTransByKey('products.product.wishlist_exist_msg').replace('[[ product_title ]]', $(this).attr('data-product-title'));
          me.showWishlistModal();
        } else {
          me.prepareWishlistItem($(this).attr('data-product-handle'), false);  
        }
      });

      // Init compare data
      if(getCookie(this.wishlistCookie) != undefined) {
        var dataHrefs = $.parseJSON(getCookie(this.wishlistCookie));
        $.each(dataHrefs, function(index, value) {
          me.prepareWishlistItem(value, true);
        });
      }

      $(document).on('click', '.toolbar-customer.my-wishlist, .wish-list-trigger', function(e) {
        e.preventDefault();
        me.showWishlistModal();
      });
      // Clear message after close modal
      $(this.wishlistModalId).on('hidden.bs.modal', function (e) {
        me.wishlistMsg = '';
      });
    },

    getFbProductKey : function(t) {
      return t.product_id || t.variant_id || t.sku;
    },

    getFbOrderContentIds: function(t) {
      for (var e = [], r = t.products || [], n = 0, o = r; n < o.length; n++) {
        var i = o[n],
        a = this.getFbProductKey(i);
        if (a) {
          -1 === e.indexOf(a) && e.push(a)
        }
      }
      return e;
    },

    getFbOrderContentType : function(t) {
      for (var e = t.products || [], r = 0, n = e; r < n.length; r++) {
        if (n[r].product_id) return "product_group";
      }
      return "product";
    },

    formatRevenue : function(t) {
      return Number(t || 0).toFixed(2);
    },

    getFbOrderNumItems : function(t) {
      for (var e = 0, r = t.products || [], n = 0, o = r; n < o.length; n++) {
        var i = o[n];
        this.getFbProductKey(i) && (e += i.quantity || 1);
      }
      return e;
    },

    getFbContentCategory : function(t) {
      for (var e = '', r = t.products || [], n = 0, o = r; n < o.length; n++) {
        var i = o[n];
        if(e == '') {
          e += i.product_type;
        } else {
          e += ' ' + i.product_type;
        }
      }
      return e;
    },

    triggerFbCheckoutEvent: function() {
      if(typeof(fbq) != 'undefined') {
        var e = {products: this.cart.items, total: this.cart.total_price/100};
        var ins = this;
        fbq('track', 'InitiateCheckout', {
          content_ids: ins.getFbOrderContentIds(e),
          content_type: ins.getFbOrderContentType(e),
          currency: ins.currentCurrency,
          value: ins.formatRevenue(e.total),
          num_items: ins.getFbOrderNumItems(e),
          content_category: ins.getFbContentCategory(e)
        });
      }  
    },

    initFbPixelEvent: function () {
      var ins = this;
      $(document).on('click', '.trigger-checkout', function(e) {
        ins.triggerFbCheckoutEvent();
      });
    },

    initEvent: function() {
      this.initFooterCartTriggerEvent();
      this.initAddToCartEvent();
      this.initUpdateCartEvent();
      this.initQuickViewBtnEvent();
      this.initCompareEvent();
      this.initWishlistEvent();
      this.waitGetTransData();
      this.initFbPixelEvent();
    }
  }
});

var CartTemplateApp = ProcessingApp.extend({
  watch: {
    'cart.item_count': function (val) {
      this.loadUpsellProduct();
      this.updateCartHtml();
    }
  },
  methods: {
    cleanOldRequests: function() {
      $(this.cartUpsellRequests).each(function(index, xhr) {
        if(xhr && xhr.readyState != 4){
          xhr.abort();
        }
      });
      this.cartUpsellRequests = [];
    },
    updateCartHtml: function() {
      var ins = this;
      this.callRequest('/cart', 'GET', {view: 'content'}, null, function(response) {
        $('.cart_template_wrapper').html($('.cart_template_wrapper', response).html());
        if (window.Shopify && Shopify.StorefrontExpressButtons) {
          Shopify.StorefrontExpressButtons.initialize();
        }
        if($('#shipping-calculator').length > 0 && "undefined" != typeof Shopify.Cart && "undefined" != typeof Shopify.Cart.ShippingCalculator) {
          Shopify.Cart.ShippingCalculator.show( {
            submitButton: theme.strings.shippingCalcSubmitButton,
            submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
            customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
            moneyFormat: theme.strings.shippingCalcMoneyFormat                                     
          });
        }
        CdzCurrency.convertAll(shopCurrency, CdzCurrency.cookie.read(), '.cart_template_wrapper .price', CdzCurrency.format);
        applyTranslateData('.cart_template_wrapper', ins.currentLocale, false);
        lozadObj.observe();
      });
    },
    loadUpsellProduct: function() {
      if(upsell.showCartPage == false) {
        return;
      }
      var me = this;
      this.cleanOldRequests();
      this.cartUpsellRequests.push(this.callRequest('/cart', 'GET', {view: 'upsell_tags'}, null, function(response) {
        try {
          var tags = $.parseJSON(response);
          var upsellIds = [];
          var productList = $('.upsell-cart .product-list');
          var length = tags.length;
          productList.html('');
          var totalLoad = 0;
          if($(tags).length > 0) {
            $(tags).each(function(indexTag, tag) {
              me.cartUpsellRequests.push(me.callRequest('/collections/all/' + tag, 'GET', {view:'upsell_html'}, null, function(responseHtml) {
                totalLoad++;
                var div = $('<div></div>');
                div.html(responseHtml);
                div.find('.item').each(function() {
                  var id = $(this).attr('data-id');
                  if(upsellIds.indexOf(id) == -1) {
                    productList.append($(this));
                  }
                });
                if(totalLoad == length) {
                  if($('.upsell-cart .block-content .item').length == 0) {
                    $('.upsell-cart').hide();
                  } else {
                    $('.upsell-cart').show();
                    if($('.upsell-cart .block-content .product-list').hasClass('owl-loaded')) {
                      $('.upsell-cart .block-content .product-list').owlCarousel('destroy'); 
                      $('.upsell-cart .block-content .product-list').removeClass('owl-hidden');
                    }
                    initSlider('.upsell-cart .block-content');
                    setTimeout(function() {
                      initMatchHeight('.upsell-cart .product-list-wrapper', '.product-details');
                    }, 300);
                    applyTranslateData(".upsell-cart", currentLocale, true);
                  }
                  lozadObj.observe();
                }
              }));
            });
          } else {
            $('.upsell-cart').hide();
          }
        } catch(e) {console.log(e)}
      }));
    },

    initUpdateQtyCartPageEvent: function() {
      if($('#shopify-section-cart-template').length > 0) {
        var me = this;
        $(document).on('click', '#shopify-section-cart-template .change-qty', function(e) {
          e.preventDefault();
          if(me.cartProcessing != 1) {
            var input = $($(this).attr('data-input'));
            var changed = changeQty(input, $(this).hasClass('increase'));
            if(changed == true) {
              me.requestUpdateCart(input.attr('data-item-id'), input.val());
            }
          }
        });
      }
    },

    renderExternalData: function() {
      var me = this;
      $(document).on('click', '#empty_cart_button', function(e) {
        me.requestEmptyCart();
      })
    },

    initEvent: function() {
      applyTranslateData('#cart-template_section', this.currentLocale, false);
      this.loadUpsellProduct();
      this.initUpdateQtyCartPageEvent();
      this.renderExternalData();
    }
  }
});

var dataApp = {
  // Translate
  translate: {},
  translateData: {},
  currentLocale: currentLocale,
  useLocaleImg: false,
  currentLocaleImg: '',
  currentLocaleText: '',

  isLoginReset: "login", // only used at login page

  showLoading: -1,

  sidebar: {
    showLeft: 1,
    showRight: 1
  },

  cart: cdzCart,
  cartProcessing: 0,
  showFooterCart: -1,
  cartFooterMsg: '',
  cartHolderImg : '',
  currentCurrency:  CdzCurrency.currentCurrency,
  
  // Quickshop
  quickview: {
    product: {
      image: {},
      images: [],
      options: [],
      variants: [],
      qty : 1
    },
    currentVariant: {},
    availableVariant: true,
    cs: {
      found_option: false,
      is_color: false,
      option_index: 0
    },
    showSku : quickViewShowSku
  },
  selectOption: {
    product: {
      options: [],
      variants: []
    },
    currentVariant: {},
    availableVariant: true,
    qty: 1
  },
  compareItems: [],
  compareMsg: '',
  compareMsgType: 'success',
  compareCookie: 'compareItems',
  compareBoxId : '#compareBox',
  wishlistItems: [],
  wishlistMsg: '',
  wishlistMsgType: 'success',
  wishlistCookie: 'wishlistItems',
  wishlistModalId : '#wishlistModal',
  menuUpdate : {},
  collectionToolbarSort: '',
  productTemplate: {
    currentVariant: {}
  },
  upsell: [],
  upsellIds: [],
  cartResProduct: {},
  cartUpsellRequests: [],
  updateCartRequests: []
};