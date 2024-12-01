/********* --- Product Block Style 11 --- *********/
theme.productBlock11 = {};
theme.ProductBlock11Section = (function() {
  function ProductBlock11Section(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var productBlock = this.productBlock = '#productBlock-' + sectionId;
    
    initSlider('#' + $container.attr('id'));
    $(window).on('loaded_translate_data', function() {
      applyTranslateData('#' + $container.attr('id'), currentLocale, true);
    });
    applyTranslateContent('#' + $container.attr('id'), currentLocale);
    theme.productBlock11[productBlock] = '#' + $container.attr('id');
  }

  return ProductBlock11Section;
})();

theme.ProductBlock11Section.prototype = _.assignIn({}, theme.ProductBlock11Section.prototype, {
  onSelect: function() {
    applyTranslateData(theme.productBlock1[this.productBlock], currentLocale, false);
    lozadObj.observe();
  },
  onUnload: function() {
    delete theme.productBlock11[this.productBlock];
  }
});