define([
  'schemas/schema',
  'views/list-handler-cfg'
], function(schema, cfg) {

  var ListHandler = app.define(null, {
    extend: app.classes.ListHandler,
    view: cfg,
    autoFetch: false,
    wantsInsert: false,
    wantsEdit: false,
    wantsDelete: false,
    wantsSearch: false,
    formHandler: {
      cls: 'views/form-handler'
    },
    initialize: function() {
      this.collection = new schema.collection();
      this.uber('initialize', arguments);
    }
  });

  return ListHandler;
});
