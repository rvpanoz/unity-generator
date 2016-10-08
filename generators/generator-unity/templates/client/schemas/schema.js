define([

], function() {

  var Model = app.define(null, {
    extend: app.classes.model,
    idAttribute: '',
    mk_serverClass: '',
    mk_fields: {},
    initialize: function() {
      //todo
    }
  });

  var Collection = app.define(null, {
    extend: app.classes.collection,
    model: Model
  });

  return {
    model: Model,
    collection: Collection
  };

})
