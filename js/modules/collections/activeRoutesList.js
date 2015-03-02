'use strict';

var Backbone = require('backbone');

var ActiveRouteList = function() {
  return Backbone.collection.extend({
    url: API_URL + 'routes/active'
  });
};

module.exports = ActiveRouteList;
