define(['lib','app'],function () {

  app.config = {
    layout:{
      panel:true,
      panelAutoOpen:true,
      footer:true
    },
    lang:'el'
  };

  lib.i18n.debug = true;

  return app.config;
});
