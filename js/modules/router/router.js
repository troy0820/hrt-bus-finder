module.exports = (function() {

  return Backbone.Router.extend({
     routes: {
      "": SNOW_ROUTES ? "snowRoute" : "homeView",
      "stops/*stopIds": SNOW_ROUTES ? "snowRoute" : "stopView",
      "routes(/*routeIds)": SNOW_ROUTES ? "snowRoute" : "routeView",
      "findStops(/:lat/:lng)(/)": SNOW_ROUTES ? "snowRoute" : "findStopsView",
      "feedback(/)" : SNOW_ROUTES ? "snowRoute" : "feedbackView"
     },

    homeView: function() {
        this.clearIntervals();
      App.ContentView.setSubView(new HomeView);
      App.MapView.setDraggable(false);
    },

    stopView: function(stopIds) {
        this.clearIntervals();
        App.ContentView.setSubView(new StopsByIdView({stopIds: stopIds}));
        App.MapView.setDraggable(false);
    },

    routeView: function(routeIds) {
        this.clearIntervals();
        App.ContentView.setSubView(new RouteView({routeIds: routeIds}));
        App.MapView.setDraggable(true);
        $('#loading').remove();
    },

    findStopsView: function(lat, lng) {
        this.clearIntervals();
        var location = lat && lng && new google.maps.LatLng(lat, lng);
        App.ContentView.setSubView(new FindStopsView({location: location}));
        App.MapView.setDraggable(true);
        $('#loading').remove();
    },

    feedbackView: function() {
      this.clearIntervals();
      App.ContentView.setSubView(new FeedbackView);
      console.log("were you trying to go to feedback?");
    },

    clearIntervals: function() {
        $(window).off('resize');
        while(App.Intervals.length) {
            clearInterval(App.Intervals.pop());
        }
    },

    snowRoute: function() {
      App.ContentView.setSubView(new SnowRoute);
    }

  });
  var Router = Backbone.Router.extend({
     routes: {
      "": SNOW_ROUTES ? "snowRoute" : "homeView",
      "stops/*stopIds": SNOW_ROUTES ? "snowRoute" : "stopView",
      "routes(/*routeIds)": SNOW_ROUTES ? "snowRoute" : "routeView",
      "findStops(/:lat/:lng)(/)": SNOW_ROUTES ? "snowRoute" : "findStopsView",
      "feedback(/)" : SNOW_ROUTES ? "snowRoute" : "feedbackView"
     },

    homeView: function() {
        this.clearIntervals();
      App.ContentView.setSubView(new HomeView);
      App.MapView.setDraggable(false);
    },

    stopView: function(stopIds) {
        this.clearIntervals();
        App.ContentView.setSubView(new StopsByIdView({stopIds: stopIds}));
        App.MapView.setDraggable(false);
    },

    routeView: function(routeIds) {
        this.clearIntervals();
        App.ContentView.setSubView(new RouteView({routeIds: routeIds}));
        App.MapView.setDraggable(true);
        $('#loading').remove();
    },

    findStopsView: function(lat, lng) {
        this.clearIntervals();
        var location = lat && lng && new google.maps.LatLng(lat, lng);
        App.ContentView.setSubView(new FindStopsView({location: location}));
        App.MapView.setDraggable(true);
        $('#loading').remove();
    },

    feedbackView: function() {
      this.clearIntervals();
      App.ContentView.setSubView(new FeedbackView);
      console.log("were you trying to go to feedback?");
    },

    clearIntervals: function() {
        $(window).off('resize');
        while(App.Intervals.length) {
            clearInterval(App.Intervals.pop());
        }
    },

    snowRoute: function() {
      App.ContentView.setSubView(new SnowRoute);
    }

  });

}());
