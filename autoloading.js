/**
 * Copyright (c) 2009 Maiha (maiha@wota.jp)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 * Version: 2009/06/28
 **/

(function() {

Autoloading = function(base, options){
  this.base    = $(base);       /* jQuery object */
  this.options = $.extend({}, Autoloading.defaults, options);
  this.buildPopup(); /* DOM is created, but not displayed yet in this time */
};

Autoloading.defaults = {
  title: 'Loading',
  state: ''
};

Autoloading.prototype.buildPopup = function() {
  this.title = $('<div></div>').addClass('title').text(this.options.title);
  this.state = $('<div></div>').addClass('state').text(this.options.state);
  this.popup = $('<div></div>').addClass('autoloading').hide().append(this.title).append(this.state);
  this.base.append(this.popup)
}

Autoloading.prototype.render = function(title, state) {
  this.title.text(title || this.options.title);
  this.state.text(state || this.options.state);
  this.popup
    .css('width', this.base.width())
    .css('top'  , parseInt(this.base.height()/2) - 20 + 'px');
}

Autoloading.prototype.start = function(title, state) {
  this.render(title, state)
  this.popup.show();
};

Autoloading.prototype.stop = function() {
  this.popup.hide();
};

  jQuery.fn.autoloading = function(base, options){
    this.data.autoloading = this.data.autoloading || new Autoloading(base, options);
    return this.data.autoloading;
  };
})(jQuery);
