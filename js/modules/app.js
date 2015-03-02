/* global require */
'use strict';

var SNOW_ROUTES = false;
var API_URL = 'http://lit-inlet-3610.herokuapp.com/api/';

var _ = require('underscore');
var Backbone = require('Backbone');

// Models
var Arrival = require('./models/arrival');
var Stop = require('./models/stop');
var Feedback = require('./models/feedback');

// Views
var ArrivalView = require('./views/arrivalView');
var ContentView = require('./views/contentView');
var FeedbackView = require('./views/feedbackView');
var FindStopsView = require('./views/findStopsView');
var HomeView = require('./views/homeView');
var MapView = require('./views/mapView');
var RouteView = require('./views/routeView');
var SnowRoute = require('./views/snowRoute');
var StopListView = require('./views/stopListView');
var StopsByIdView = require('./views/stopsByIdView');
var StopView = require('./views/stopView');

// Collections
var ActiveRoutesList = require('./collections/activeRoutesList');
var ArrivalList = require('./collections/arrivalList');
var BusList = require('./collections/busList');
var StopList = require('./collections/StopList');

// Router
var Router = require('./router/router.js');

// Utilities
var dateNumber = require('./utilities/dateNumber');
var locateUser = require('./utilities/locateUser');

var jPM = $.jPanelMenu({
    direction: 'right',
    excludedPanelContent: 'style, script, #disclaimer'
});
jPM.on();
