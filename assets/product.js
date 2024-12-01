function cdzResizeImage(e,t){try{if("original"==t)return e;var n=e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return n[1]+"_"+t+"."+n[2]}catch(r){return e}}
$.fn.builTabs = function(options){
	var defaultConfig = {
		tabItem: '.box-collateral',
		wrapCSS: 'product-detail-tab',
		tabTitle: 'h2',
		responsive: true
	};
	conf = $.extend(defaultConfig,options || { });
	var tabItem = conf.tabItem;
	$(this).each(function(){
		var $this = $(this);
		var tabHtml = 	'<div class="'+conf.wrapCSS+'">';
		var navTabId = 'cdz-nav-tab'+ Math.round(1000*Math.random());
		if(conf.responsive){
			tabHtml +=	'<div class="mobile-nav-tab-dropdown visible-xs" data-target="#'+navTabId+'"></div>';
		}
		tabHtml +=		'<ul class="nav nav-tabs" id="'+navTabId+'"></ul>';
		tabHtml +=		'<div class="nav-tab-content tab-content"></div>';
		tabHtml +=	'</div>';
		var $container = $(tabHtml);
		$this.find('> '+tabItem).each(function(id,el){
			var $tabItem = $(this);
			var tabID = $tabItem.attr('id');
			var tabLink = '', tabContent = '';
			if(id == 0){
				var activeClass = 'active';
				$tabItem.addClass('tab-pane fade active in');
				$('.mobile-nav-tab-dropdown',$container).html($tabItem.find(conf.tabTitle).first().text());
			}else{
				var activeClass = '';
				$tabItem.addClass('tab-pane fade');
			}
			tabLink +=	'<li class="nav-tab-item '+activeClass+'">';
			tabLink +=		'<a href="#'+tabID+'" id="link-'+tabID+'" data-toggle="tab" class="data switch"></a>';
			tabLink +=	'</li>'
			var $tabLink = $(tabLink);
			$container.find('.nav-tabs').append($tabLink);
			$tabItem.find(conf.tabTitle).first().appendTo($tabLink.find('#link-'+tabID));
			$tabItem.appendTo($container.find('.tab-content'));
		});
		$container.appendTo($this);
	});
}

var waitSPR;
function initReviewForm() {
	if(useShopifyReviewApp) {
		var url = $('.box-reviews[data-url]').data('url');
		$.ajax({
			type: 'GET',
			url: url,
			data: {view : 'review'},
			success: function(response){
				$('.box-reviews[data-url]').html(response);
				waitSPR = setInterval(function() {
					if(typeof SPR != 'undefined' && typeof SPR.$ != 'undefined') {
						clearInterval(waitSPR);	
						SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
					}
				}, 100);
			}
		});
	}
}

function initStickyCart() {
	if($('.cdz-sticky-cart').length > 0) {
		$('.cdz-sticky-cart').removeClass('hide');
		$(window).scroll( $.throttle( 250, function(e) {
			var btn = $('#AddToCart-product-template');
			var headerHeight = $('.sticky-menu.active').length > 0 ? $('.sticky-menu').height() : 0;
			if($(window).scrollTop() + headerHeight > btn.offset().top) {
				$('.cdz-sticky-cart').addClass('open-sticky');
				$('.cdz-sticky-cart').css({'top': (headerHeight) + 'px'});
			} else {
				$('.cdz-sticky-cart').removeClass('open-sticky');
				$('.cdz-sticky-cart').removeAttr('style');
			}
		}));
	}
}

// For product detail page
function initDetailJs() {
	if($('#ProductJson-product-template').length > 0) {
		
		$(document).on('click', '.product-shop-wrap .rating-star, .product-info-top .rating-star', function(){
			$('#link-box-reviews').trigger('click');
			$('html, body').animate({
				scrollTop: $(".product-detail-tab").offset().top
			}, 500);
		});
		$(document).on('click', '.product-essential .magnify', function() {
			$('.rsUni').trigger('click');
		});
		initSizeChart();
		activeCurrentSwatch('#product-options-wrapper');
		initReviewForm();
		$('#product-detail-tabs .nav-tab-item').first().addClass('active');
		$('.product-detail-tab .tab-pane').first().addClass('active');
		$('.product-detail-tab .mobile-nav-tab-dropdown .tab-title').first().removeClass('hide');
		initStickyCart();
	}
}

function initSizeChart() {
	$(document).on('click', '.size-chart-btn', function(e) {
		e.preventDefault();
		var value = $(this).attr('data-value');
		$('#size-chart-modal .modal-content').html('<img class="img-responsive" src="' + value + '" />');
		$('#size-chart-modal').modal('show');
	});
}

function activeCurrentSwatch(wrap) {
	$(wrap + ' .single-option-selector').each(function () {
		var index = parseInt($(this).attr('data-index').replace('option', '')) - 1;
		var value = $(this).val();
		$(wrap + ' .swatch[data-option-index="' + index + '"] .swatch-element[data-value="' + value.replace(/\//g,'-').replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1') + '"]').addClass('active');
	});
}

function enableOptionList(wrap, product, currentOptions, indexOption) {
	$(product.variants).each(function(indexVariant, variant) {
		var isActiveOption = true;
		$(currentOptions).each(function(indexCurrentOption, currentOptionName) {
			if(variant['option' + (indexCurrentOption+1)] != currentOptionName) {
				isActiveOption = false;
			}
		});
    if(isActiveOption) {
    	var checkingOptionValue = variant['option' + (indexOption+1)];
    	$(wrap + ' .single-option-selector[data-index="option' + (indexOption+1) + '"] option[value="' + checkingOptionValue.replace(/\//g,'-').replace(/\"/g,'\\"') + '"]').removeAttr('disabled');
    	if($(wrap + ' .swatch[data-option-index="' + indexOption + '"]').length > 0) {
    		$(wrap + ' .swatch[data-option-index="' + indexOption + '"] .swatch-element[data-value="' + checkingOptionValue.replace(/\//g,'-').replace(/\"/g,'\\"') + '"]').removeClass('soldout');
    	}
    }
  });
}

function updateOptionStock(wrap, product) {
	var currentOptions = [$(wrap + ' .single-option-selector[data-index="option1"]').val()];
	$(product.options).each(function(indexOption, optionName) {
		if(indexOption > 0) {
			$(wrap + ' .single-option-selector[data-index="option' + (indexOption+1) + '"] option').attr('disabled', 'disabled');
			if($(wrap + ' .swatch[data-option-index="' + indexOption + '"]').length > 0) {
				$(wrap + ' .swatch[data-option-index="' + indexOption + '"] .swatch-element').addClass('soldout');
			}
			enableOptionList(wrap, product, currentOptions, indexOption);
			currentOptions.push($(wrap + ' .single-option-selector[data-index="option' + (indexOption+1) +'"]').val());
		}
	});
}

function updateSwatchByVariant(wrap, variant) {
	$(variant.options).each(function(index, option) {
		$(wrap + ' .single-option-selector[data-index="option' + (index+1) + '"]').val(option);
		if($(wrap + ' .swatch[data-option-index="' + index + '"]').length > 0) {
			$(wrap + ' .swatch[data-option-index="' + index + '"] .swatch-element.active').removeClass('active');
			$(wrap + ' .swatch[data-option-index="' + index + '"] .swatch-element.active input').removeAttr('checked');
			$(wrap + ' .swatch[data-option-index="' + index + '"] .swatch-element[data-value="' + option.replace(/\//g,'-').replace(/\"/g,'\\"') + '"]').addClass('active');
			$(wrap + ' .swatch[data-option-index="' + index + '"] .swatch-element[data-value="' + option.replace(/\//g,'-').replace(/\"/g,'\\"') + '"] input').attr('checked', 'checked');
		}
	});
}

function findVarianWhenOptionChange(variants, optionSelectorClass, wrap, exactly) {
	var selector = wrap + ' ' + optionSelectorClass;
	var currentSelect = [];
	var finalVariants = variants;
	
	$(selector).each(function(){
		var value = $(this).val();
		currentSelect.push(value);
	});

	var optionSize = currentSelect.length,
    newVariant,
    newVariant1,
    newVariant2,
    newVariant3,
    availableOption2 = [],
    availableOption3 = [];
  $.each(variants, function(variantId, variant) {
  	if(variant.options[0] == currentSelect[0]) {
      newVariant1 = variant;
      if(optionSize > 1 && availableOption2.indexOf(variant.options[1]) == -1) {
        availableOption2.push(variant.options[1]);
      }
    }
    if(optionSize > 1
        && variant.options[0] == currentSelect[0] 
        && variant.options[1] == currentSelect[1]) {
      if(newVariant2 == undefined) {
        newVariant2 = variant;
      }
      if(optionSize > 2 && availableOption3.indexOf(variant.options[2]) == -1) {
        availableOption3.push(variant.options[2]);
      }
    }
    if(optionSize > 2 && newVariant3 == undefined
        && variant.options[0] == currentSelect[0] 
        && variant.options[1] == currentSelect[1]
        && variant.options[2] == currentSelect[2]) {
      newVariant3 = variant;
    }
  });
  if(exactly) {
  	if(optionSize == 3) {
  		return newVariant3;
  	} else if(optionSize == 2) {
  		return newVariant2;
  	} else {
  		return newVariant1; 
  	}
  } else {
  	if(newVariant3 != undefined) {
	    newVariant = newVariant3;
	  } else if (newVariant2 != undefined) {
	    newVariant = newVariant2;
	  } else {
	    newVariant = newVariant1;
	  }
	  return newVariant;	
  }
}
var youtubePlayers = {};
var vimeoPlayers = {};
// For product detail page
function ProductTemplateApp(options) {
	this.currentVariant = {};
	this.product = {};
	this.forceUpdateVariant = true;
	this.zoomIns;
	this.zoomImageId;
	this.zoomOpts = {zoomSizeMode: 'image',autoInside:true, tintOpacity: 0, zoomPosition: 'inside'};
	this.waitingUpdate = true;
	this.vimeoPlayers = {};
	this.currentYoutubeVideo;
	this.currentVimeoVideo;
	this.currentVideoType;
	var defaultOpts = {
		history: 1, 
		useStickyCart: false, 
		isProductPage: false,
		thumbsSliderOpts : {
			slidesToShow: 4,
			slidesToScroll: 1,
			//asNavFor: wrap + ' .viewmore-main',
			dots: false,
		  //centerMode: true,
		  focusOnSelect: true,
		  infinite: false,
		  swipeToSlide: true,
		  responsive: [
	    	{
		      breakpoint: 991,
		      settings: {
		      	slidesToShow: 4,
		      	slidesToScroll: 1,
		      	rtl : false,
		        vertical: false,
		    		verticalSwiping: false
		      }
		    }
	  	]
		}
	}
	
	this.options = $.extend(defaultOpts, options);

	if(this.options.isProductPage) {
		this.options.useStickyCart = $('.cdz-sticky-cart').length > 0;	
	}
	
	this.updateProductVariant = function(wrap, product, variant) {
		updateOptionStock(wrap, product);
		if(variant != undefined) {
			this.currentVariant = variant;
			updateSwatchByVariant(wrap, variant);
			this._updatePrice(variant);
			this._updateHistoryState(variant);
			$('#ProductSelect' + this.options.suffix).val(variant.id);
			if(variant.featured_image != null) {
				// Update sticky cart
				if(this.options.useStickyCart) {
					$('.sc__image').attr('src', cdzResizeImage(variant.featured_image.src, '100x100'));
					$('.sc__close__image').attr('src', cdzResizeImage(variant.featured_image.src, '30x'));

					if($('.sc__variant-title').length > 0) {
						$('.sc__variant-title').html(variant.title);
					}
				}
			}
		}

		if(variant == undefined || variant.available == false) {
			$(wrap + ' .product-shop-sku').hide();
			$(wrap + ' .out-stock-text').show();
			$(wrap + ' .in-stock-text').hide();
			$(wrap + ' .product-form__cart-submit').attr('disabled', 'disabled');
			if(this.options.useStickyCart) {
				$('.sc__cart-button').attr('disabled', 'disabled');
			}
			var useSkuClass = $(wrap + ' .sku-rating').data('sku-class');  
			var noSkuClass = $(wrap + ' .sku-rating').data('no-sku-class');
			$(wrap + ' .sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(noSkuClass);
			$(wrap + ' .sku-wrap').hide();
			$(wrap + ' .add-to-links').hide();
		} else {
			if(variant.sku != '') {
				$(wrap + ' .product-shop-sku strong').html(variant.sku);
				if($(wrap + ' .sku-rating').length > 0) {
					var useSkuClass = $(wrap + ' .sku-rating').data('sku-class');  
					var noSkuClass = $(wrap + ' .sku-rating').data('no-sku-class');
					$(wrap + ' .sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(useSkuClass);
				}
				$(wrap + ' .product-shop-sku').show();
				$(wrap + ' .sku-wrap').show();
			} else {
				$(wrap + ' .sku-wrap').hide();
				$(wrap + ' .product-shop-sku').hide();
				if($(wrap + ' .sku-rating').length > 0) {
					var useSkuClass = $(wrap + ' .sku-rating').data('sku-class');  
					var noSkuClass = $(wrap + ' .sku-rating').data('no-sku-class');
					$(wrap + ' .sku-rating').removeClass(useSkuClass).removeClass(noSkuClass).addClass(noSkuClass);
				}
			}
			$(wrap + ' .add-to-links').show();
			$(wrap + ' .out-stock-text').hide();
			$(wrap + ' .in-stock-text').show();
			$(wrap + ' .product-form__cart-submit').removeAttr('disabled');
			if(this.options.useStickyCart) {
				$('.sc__cart-button').removeAttr('disabled');
			}
		}
	};

	this.updateMainImage = function(wrap, variant) {
		if(variant.featured_image != null) {
			var slideIndex = $(wrap + ' .viewmore-main [data-image-id=' + variant.featured_image.id + ']').parents('.slick-slide').attr('data-slick-index');
			$(wrap + ' .viewmore-main').slick('slickGoTo', slideIndex);
		}
	};

	this.changeVariantByImage = function(wrap, product)	 {
		var ins = this;
		$(wrap + ' .viewmore-main').on('afterChange', function(event, slick, currentSlide){
			if(ins.forceUpdateVariant) {
				var variantIds = slick.$slider.find('.slick-current').attr('data-variant-id');
				if(variantIds != undefined) {
					variantIds = variantIds.split(',').map( Number );
					var newCurrentVariant;
					$(product.variants).each(function(index, variant) {
						if(variantIds.indexOf(variant.id) > -1 && ((ins.groupOptionIndex != '' && variant[ins.groupOptionIndex] == ins.currentVariant[ins.groupOptionIndex]) || ins.groupOptionIndex == '')) {
							newCurrentVariant = variant;
							return;
						}
					});
					if(newCurrentVariant) {
						ins.updateProductVariant(wrap, product, newCurrentVariant);
					}
				}
			}
			ins.forceUpdateVariant = true;
		});
	};

	this.refresh = function() {
		this.groupOptionIndex = '';
		if($(this.options.wrap + ' .is_group_option').length > 0) {
			this.groupOptionIndex = $(this.options.wrap + ' .is_group_option').attr('data-index');
		}
		this.product = JSON.parse($('#ProductJson' + this.options.suffix).html());
		this.currentVariant = JSON.parse($('#ProductJson' + this.options.suffix + '-current-variant').html());
		if(this.zoomIns != undefined) {
			this.zoomIns.closeZoom();
			this.zoomIns.destroy();
			this.zoomIns = undefined;
			this.zoomImageId = undefined;
  	}
		this.coverImage();
		this.changeVariantByImage(this.options.wrap, this.product);
		updateOptionStock(this.options.wrap, this.product);
	};

	this.reInitZoom = function($slider) {
		if(this.zoomImageId != $slider.find('.slick-current .cloudzoom').attr('data-image-id')) {
	  	if(this.zoomIns != undefined) {
	  		this.zoomIns.closeZoom();
	  		this.zoomIns.destroy();
	  	}
	  	if($slider.find('.slick-current .cloudzoom').length > 0) {
	  		this.zoomIns = new CloudZoom($slider.find('.slick-current .cloudzoom'), this.zoomOpts);
	  		this.zoomImageId = $slider.find('.slick-current .cloudzoom').attr('data-image-id');
	  	}
	  }
	};

	this.initZoom = function(wrap) {
		var ins = this;
	  if($(window).width() > 767 && ins.zoomIns == undefined) {
	  	if($(wrap + ' .viewmore-main .cloudzoom.first').length > 0) {
	  		ins.zoomIns = new CloudZoom($(wrap + ' .viewmore-main .cloudzoom.first'), ins.zoomOpts);
	  		ins.zoomImageId = $(wrap + ' .viewmore-main .cloudzoom.first').attr('data-image-id');
	  	} 
	  }
	  $(window).resize( $.throttle( 500, function() {
	  	if($(window).width() > 767) {
	  		if(ins.zoomIns == undefined && $(wrap + ' .viewmore-main .slick-current .cloudzoom').length > 0) {
	  			ins.zoomIns = new CloudZoom($(wrap + ' .viewmore-main .slick-current .cloudzoom'), ins.zoomOpts);
	  			ins.zoomImageId = $(wrap + ' .viewmore-main .slick-current .cloudzoom').attr('data-image-id');
	  		}
	  	} else if(ins.zoomIns != undefined) {
				ins.zoomIns.closeZoom();
				ins.zoomIns.destroy();
				ins.zoomIns = undefined;
				ins.zoomImageId = undefined;
	  	}
	  }));
	};

	this.pauseCurrentCustomVideo = function() {
		if(this.videoPlay != undefined && this.videoId) {
			this.videoPlay.pause();
			this.videoId = 0;
		}
	}

	this.pauseCurrentYoutubeVideo = function() {
		if(youtubePlayers[this.currentYoutubeVideo] != undefined) {
			var player = YT.get(this.currentYoutubeVideo);
			player.pauseVideo();
			$('#' + this.currentYoutubeVideo).addClass('hide');
		}
		this.currentYoutubeVideo = 0;
	}

	this.pauseCurrentVimeoVideo = function() {
		if(vimeoPlayers[this.currentVimeoVideo] != undefined) {
			vimeoPlayers[this.currentVimeoVideo].pause();
			$('#' + this.currentVimeoVideo).addClass('hide');
		}
		this.currentVimeoVideo = 0;
	}

	this.pauseCurrentVideo = function() {
		if(this.currentVideoType == 'youtube') {
			this.pauseCurrentYoutubeVideo();
		}	else if (this.currentVideoType = 'vimeo') {
			this.pauseCurrentVimeoVideo();
		} else {
			this.pauseCurrentCustomVideo();
		}
	}

	this.reInitVideo = function($slider) {
		if ($slider.find('.slick-current .product__video').length > 0) {
			var videoTag = $slider.find('.slick-current .product__video');
			$slider.addClass('playing-video');
			if(videoTag.hasClass('youtube-player')) {
				this.pauseCurrentCustomVideo();
				this.pauseCurrentVimeoVideo();
				this.currentVideoType = 'youtube';
				var videoId = videoTag.attr('data-video-id');
				var imageId = videoTag.attr('data-image-id');
				if(imageId != undefined && imageId != this.currentYoutubeVideo) {
					this.pauseCurrentYoutubeVideo();
					if(youtubePlayers['youtube-player-' + imageId] != undefined) {
						this.currentYoutubeVideo = 'youtube-player-' + imageId;
						$('#' + this.currentYoutubeVideo).removeClass('hide');
						YT.get(this.currentYoutubeVideo).playVideo();
					} else {
						this.initYoutubePlayer(videoTag);
					}
				}
			} else if (videoTag.hasClass('vimeo-player')) {
				this.pauseCurrentCustomVideo();
				this.pauseCurrentYoutubeVideo();
				this.currentVideoType = 'vimeo';
				var playerId = videoTag.attr('data-player-id');
				if(playerId != undefined && playerId != this.currentVimeoVideo) {
					this.pauseCurrentVimeoVideo();
					if(vimeoPlayers[playerId] != undefined) {
						this.currentVimeoVideo = playerId;
						$('#' + playerId).removeClass('hide');
						vimeoPlayers[playerId].play();
					} else {
						this.initVimeoPlayer(videoTag);
					}
				}
			} else {
				var videoId = videoTag.attr('data-image-id');
				this.pauseCurrentYoutubeVideo();
				this.pauseCurrentVimeoVideo();
				if(videoId != undefined && videoId != this.videoId) {
					this.pauseCurrentCustomVideo();
					this.videoPlay = videoTag.get(0);
	  			this.videoPlay.play();
	  			this.videoId = videoId;
	  			this.currentVideoType = 'custom';
				}
			}
  	} else {
  		this.pauseCurrentVideo();
  		$slider.removeClass('playing-video');
  	}
	}

	this.initYoutubePlayer = function(video) {
		var imageId = video.attr('data-image-id');
		if(youtubePlayers[imageId] == undefined) {
			var playerId = 'youtube-player-' + imageId;
			var videoId = video.attr('data-video-id');
			this.currentYoutubeVideo = playerId;
			youtubePlayers[this.currentYoutubeVideo] = 1;
			$('#' + playerId).removeClass('hide');
			video.hide();
			try {
				new YT.Player(playerId, {
	        height: '480',
	        width: '100%',
		      playerVars :{
		        autohide: 0,
		        autoplay: 0,
		        branding: 0,
		        cc_load_policy: 0,
		        controls: 0,
		        fs: 0,
		        iv_load_policy: 3,
		        modestbranding: 1,
		        playsinline: 1,
		        quality: 'hd720',
		        rel: 0,
		        showinfo: 0,
		        wmode: 'opaque'
		      },
	        videoId: videoId,
	        events: {
	          'onReady': function(event) {
	          	event.target.mute();
	          	event.target.playVideo();
	          }
	        }
	      });
			} catch (e) {

			}
		}
	}

	this.initVimeoPlayer = function(video) {
		var iframe = $('#' + video.attr('data-player-id'));
		var id = iframe.attr('id');
		if(vimeoPlayers[id] == undefined) {
			// vimeoPlayers[id] = new Vimeo.Player(iframe);
			this.currentVimeoVideo = id;
			this.currentVideoType = 'vimeo';
			iframe.removeClass('hide');
			vimeoPlayers[id] = new Vimeo.Player(iframe.get(0), {width: 800});
			vimeoPlayers[id].setVolume(0);
			vimeoPlayers[id].play();
		}
	}

	this.initVideo = function(wrap) {
		if($(wrap + ' .viewmore-main .slick-current .product__video').length > 0) {
			var video = $(wrap + ' .viewmore-main .slick-current .product__video');
			video.parents('.viewmore-main').addClass('playing-video');
			if(video.hasClass('youtube-player')) {
				this.initYoutubePlayer(video);
				this.currentVideoType = 'youtube';
			} 
			else if (video.hasClass('vimeo-player')) {
				this.initVimeoPlayer(video);
			} else {
				this.videoId = video.attr('data-image-id');
	  		this.videoPlay = video.get(0);
	  		this.videoPlay.play();
	  		this.currentVideoType = 'custom';
			}
  	}
	}

	this.getLightGalleryIns = function() {
		return $(this.options.wrap + ' .viewmore-main').data('lightGallery');
	};

	this.initLightGallery = function() {
		if(this.getLightGalleryIns() != undefined) {
			this.getLightGalleryIns().destroy(true);
		}
		$(this.options.wrap + ' .viewmore-main').lightGallery({selector: '.light-gallery-item', download: false});
	};

	this.initProductMedia = function(wrap, suffixEvent, thumbsOptions) {
		$(wrap + ' .viewmore-main > div').removeAttr('style');
		var waitingUpdate = true, thumbSlider, mainSlider, ins = this;
		$(wrap).on('filter_thumbs_slider' + suffixEvent, function(e, val) {
			var handle = val.toLowerCase().replace(/\//g,'-').replace(/ - /g,'-').replace(/[\(,\*,\)]/g,'').replace(/  /g,' ').replace(/ /g,'-').replace(/--/g,'-').replace(/[']/g,'');
			var selector = wrap + ' .viewmore-main, ' + wrap + ' .viewmore-thumbs';
			var $slider = $(selector);
			$slider.slick('slickUnfilter').slick('slickFilter', $slider.find('.group-' + handle + ', .group-all'));

			var i = 0;
			$(wrap + ' .viewmore-main .slick-slide').each(function() {
				$(this).attr('data-slick-index', i);
				i++;
			});
			i = 0;
			$(wrap + ' .viewmore-thumbs .slick-slide').each(function() {
				$(this).attr('data-slick-index', i);
				i++;
			});

			ins.initLightGallery();
		});

		$(wrap + ' .more-views').imagesLoaded(function() {
			$(wrap + ' .viewmore-main .item.hide').removeClass('hide');
			mainSlider = $(wrap + ' .viewmore-main').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				//asNavFor: wrap + ' .viewmore-thumbs',
				arrows: false,
			  fade: true,
			  infinite: false,
			  swipeToSlide: true,
			  arrows: true,
			  adaptiveHeight: true
			});
			var isVertical = $(wrap + ' .viewmore-main').hasClass('is_vertical');
			thumbsOptions.vertical = isVertical;
			if(isVertical) {
				thumbsOptions.slidesToShow = 6;
				thumbsOptions.verticalSwiping = true;
			}
			$(wrap + ' .viewmore-thumbs .item').removeClass('hide-os-mobile hide-os-desktop');
			thumbSlider = $(wrap + ' .viewmore-thumbs').slick(thumbsOptions);

			$(wrap + ' .viewmore-main').on('afterChange', function(event, slick, currentSlide){
				if(ins.waitingUpdate) {
					thumbSlider.slick('slickGoTo', currentSlide);
		  		thumbSlider.find('.slick-current').removeClass('slick-current');
					thumbSlider.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('slick-current');
				}
				setTimeout(function () {
					ins.reInitZoom(slick.$slider);
				}, 300);
				ins.reInitVideo(slick.$slider);
				ins.waitingUpdate = true;
			});

			$(wrap + ' .viewmore-thumbs .thumb-link').on('click', function(e) {
				if(e.originalEvent != undefined) {
					ins.waitingUpdate = false;
					var slideIndex = $(this).parent().attr('data-slick-index');
					mainSlider.slick('slickGoTo', slideIndex);
					thumbSlider.find('.slick-current').removeClass('slick-current');
					thumbSlider.find('.slick-slide[data-slick-index="' + slideIndex + '"]').addClass('slick-current');
				}
			});
			
			if($(wrap + ' .is_group_option').length > 0) {
				$(wrap).trigger('filter_thumbs_slider' + suffixEvent, [$(wrap + ' .is_group_option').val()]);
			} else {
				ins.initLightGallery();
			}
			ins.initZoom(wrap);
			ins.initVideo(wrap);
		});
	};

	this.coverImage = function(){
		this.initProductMedia(this.options.wrap, this.options.suffix, this.options.thumbsSliderOpts);
	};

	this.initColorSwatchDetailEvent = function() {
		if($('#ProductJson' + this.options.suffix).length > 0) {
			var me = this, wrap = this.options.wrap;
			setTimeout(function() {
				me.refresh();
			}, 500)
			//this.changeVariantByImage(this.options.wrap, this.product);
			//this.coverImage(wrap);
			var me = this;
			$(document).on('click', wrap + " .swatch-element", function () {
				if($(this).hasClass('soldout')) {
					return;
				}
				if(!$(this).hasClass('active'))
				{
					var temp = $(this).parent();
					temp.children('.swatch-element').each(function() {
						$(this).removeClass("active");
					});            
					$(this).addClass("active");

          // Trigger to change image and price
          var selectId = wrap + ' .single-option-selector[data-index="option' + (parseInt($(this).parent().attr('data-option-index')) + 1) + '"]';
          $(selectId).val($(this).attr('data-real-value'));
          $(selectId).trigger('change');
        }
      });

      $(document).on('change', wrap + ' .single-option-selector' + this.options.suffix, function() {
				CdzCurrency.convertAll(shopCurrency, CdzCurrency.cookie.read(), wrap + ' .product-shop-stock-price span.money', CdzCurrency.format);
				var variant = findVarianWhenOptionChange(me.product.variants, '.single-option-selector', wrap + ' .product-options', false);
				if($(this).hasClass('is_group_option')) {
					$(wrap).trigger('filter_thumbs_slider' + me.options.suffix, [$(this).val()]);
				}
				me.updateProductVariant(wrap, me.product, variant);
				me.forceUpdateVariant = false;
				me.updateMainImage(wrap, variant);
				me.reInitZoom($(wrap + ' .viewmore-main'));
				me.reInitVideo($(wrap + ' .viewmore-main'));
			});

			// Trigger add-to-cart button in product form when click add-to-cart button in sticky
			if(this.options.useStickyCart) {
				$(document).on('click', '.sc__cart-button', function(e) {
					e.preventDefault();
					$('#AddToCart-product-template').trigger('click');
				});
				var scSliding = false;
				$(document).on('click', '.sc__close', function(e) {
					e.preventDefault();
					if(scSliding) {
						return;
					}
					var btn = $(this);
					scSliding = true;
					$('.sc__inner').toggle('slow', function() {
						btn.toggleClass('sc__close--closing');
						scSliding = false;
					});
					
				});
			}
		}
	};

	this._updateFormatPrice = function(selector, currency, price) {
		$(selector).attr('data-currency', shopCurrency);
		$(selector).removeAttr('data-currency-' + currency);
		CdzCurrency.convertAll(shopCurrency, currency, selector);
	};

	this._updatePrice = function(variant) {
		this.selectors = {
			comparePrice: '#ComparePrice' + this.options.suffix,
			originalPrice: '#ProductPrice' + this.options.suffix,
			originalPriceWrapper: '.product-price__price' + this.options.suffix,
			productPrices: '.product-single__price' + this.options.suffix
		}
    // Update the product price
    $(this.selectors.originalPrice).html(theme.Currency.formatMoney(variant.price, theme.moneyFormat));
    this._updateFormatPrice(this.selectors.originalPrice, CdzCurrency.currentCurrency, variant.price);
    
    // Update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
    	$(this.selectors.comparePrice)
    	.html(theme.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat))
    	.removeClass('hide');
    	this._updateFormatPrice(this.selectors.comparePrice, CdzCurrency.currentCurrency, variant.compare_at_price);

    	$(this.selectors.originalPriceWrapper).addClass(this.selectors.saleClasses);
    } else {
    	$(this.selectors.comparePrice).addClass('hide');
    	$(this.selectors.originalPriceWrapper).removeClass(this.selectors.saleClasses);
    }
  };

  /**
   * Update history state for product deeplinking
   *
   * @param  {variant} variant - Currently selected variant
   * @return {k}         [description]
   */
	this._updateHistoryState = function(variant) {
	 	if (!history.replaceState || !variant || !this.options.history) {
	 		return;
	 	}

	 	var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
	 	window.history.replaceState({path: newurl}, '', newurl);
	};

	this.loadUpsellProduct = function() {
	 	if(upsell.showProductPage) {
	 		if($('.upsell-product-page').length > 0) {
	 			var tagsStr = $('.upsell-product-page').attr('data-upsell-tags');
	 			var me = this;
	 			if(tagsStr) {
	 				var tags = tagsStr.split(',');
	 				var upsellIds = [];
	 				var length = tags.length;
	 				var productList = $('.upsell-product-page .block-content .product-list');
	 				var totalLoad = 0;
	 				var productId = $('.upsell-product-page .product-list').attr('data-product-id');
	 				$(tags).each(function(index, tag) {
	 					callRequest('/collections/all/' + tag, 'GET', {view: "upsell_html"}, null, function(responseHtml) {
	 						totalLoad++;
	 						var div = $('<div></div>');
	 						div.html(responseHtml);
	 						div.find('.item').each(function() {
	 							var id = $(this).attr('data-id');
	 							if(upsellIds.indexOf(id) == -1 && id != productId) {
	 								productList.append($(this));
	 							}
	 						});
	 						if(totalLoad == length) {
	 							if($('.upsell-product-page .block-content .item').length == 0) {
	 								$('.upsell-product-page').hide();
	 							} else {
	 								$('.upsell-product-page').show();
	 								productList.addClass('owl-carousel use-slider-custom');
	 								initSlider('.upsell-product-page .block-content');
	 								setTimeout(function() {
	 									initMatchHeight('.upsell-product-page .product-list-wrapper', '.product-details');
	 								}, 500);
	 								applyTranslateData(".upsell-product-page", currentLocale, true);
	 							}
	 							lozadObj.observe();
	 						}
	 					});
	 				});
	 			}
	 		}
	 	}
	};

	this.loadCrosssell = function() {
		if(crosssell.enable) {
			var crosssellEle = $('.crosssell-product-page');
			var productId = crosssellEle.attr('data-product-id');
			if(crosssellEle.length > 0) {
				callRequest('/recommendations/products.json', 'GET', {product_id: productId, limit: crosssell.limit}, 'JSON', function(response) {
					if(response.products.length > 0) {
	          var handles = [], urls = {};
	          $.each(response.products, function(index, product) {
	            handles.push(product.handle);
	            urls[product.id] = product.url;
	          });
	          var handleQuery = handles.join(',');
	          callRequest('/search', 'GET', {q: handleQuery, view: 'crosssell'}, null, function(html) {
	            var productList = crosssellEle.find('.product-list');
	            productList.html(html);
	            productList.find('.product-item').each(function() {
	            	var pId = $(this).attr('data-product-id');
	            	if(urls[pId]) {
	            		$(this).find('.product-image,.product-name a, .qs-button').attr('href', urls[pId]);
	            	}
	            });
	            productList.addClass('owl-carousel use-slider-custom');
	            initSlider('.crosssell-product-page .block-content');
							setTimeout(function() {
								initMatchHeight('.crosssell-product-page .product-list-wrapper', '.product-details');
							}, 500);
							applyTranslateData(".crosssell-product-page", currentLocale, true);
							lozadObj.observe();
	          });
	        } else {
	          crosssellEle.hide();
	        }
				});
			}
		}
	};

	this.init = function() {
		if(this.options.useUpsell) {
	 		this.loadUpsellProduct();	
	 	}
	 	if(this.options.useCrosssell) {
	 		this.loadCrosssell();
	 	}
	 	this.initColorSwatchDetailEvent();
	};

  this.init();
}
