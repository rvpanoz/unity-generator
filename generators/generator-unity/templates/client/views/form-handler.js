define([
  'schemas/schema',
  'views/form-handler-cfg'
], function(schema, cfg) {

  var FormHandler = app.define(null, {
    extend: app.classes.FormHandler,
    view: cfg,
    initialize: function() {
      this.model = new schema.model();
      this.uber('initialize', arguments);
    }
  });

  return FormHandler;

});
