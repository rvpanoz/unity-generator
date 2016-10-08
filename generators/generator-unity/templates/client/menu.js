define(function() {

  var data = [{
    text: 'Home',
    href: {
      cls: 'home'
    }
  }];

  return {
    xtype: 'treemenu',
    follow: true,
    items: data
  };

});
