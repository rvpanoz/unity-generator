define([

], function() {

  var HomeHandler = app.define(null, {
    extend: app.classes.ContentHandler,
    initialize: function() {
      this.root = {
        items: [{
          html: "<h3><%= app_name %></h3>"
        }]
      };
      this.ready();
    }
  });

  return HomeHandler;

});
