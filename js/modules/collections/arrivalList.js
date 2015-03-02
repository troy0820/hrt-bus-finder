'use strict';

var ArrivalList = Backbone.Collection.extend({
  model: Arrival,

  comparator: function(arrival) {
    return arrival.minutesFromNow();
  },

  url: function() {
    return API_URL + 'stop_times/' + this.stopId + '/';
  }
});

module.exports = ArrivalList;
