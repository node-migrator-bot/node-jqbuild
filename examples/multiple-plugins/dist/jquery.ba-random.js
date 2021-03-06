// This banner will be used for all plugins in plugin.json!
// jQuery Random - v0.1.0
// Copyright (c) 2011 Ben Alman; Licensed MIT, GPL

(function($) {

  $.fn.random = function(selector) {
    var elems = selector ? this.filter(selector) : this;
    return this.pushStack(elems.eq(Math.floor(Math.random() * elems.length)));
  };

}(jQuery));
