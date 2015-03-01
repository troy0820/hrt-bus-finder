module.exports = (function() {
  return Backbone.collection.extend({
    url: API_URL + 'routes/active'
  });
});
