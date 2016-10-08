define([

], function() {

  return function() {

    this.root = {
      items: [
       {
         xtype: 'slickgrid',
         collection: this.collection,
         columns:[]
       }
      ]
    }
  };

});
