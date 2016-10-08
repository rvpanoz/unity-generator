//config file

var config = module.exports = {}

config.appPortal = "http://dev-mygalaxy.singularlogic.eu";
config.proxy = false; // "slg.proxy.slg.gr:8080";
config.db_host = 'localhost';
config.db_user = 'root';

config.getMainFiles = function(params) {

  return [{
    path: '.htaccess-dev',
    params: {
      lib_path: params.lib_path
    }
  }, {
    path: 'startup.php',
    params: {
      lib_path: params.lib_path
    }
  }, {
    path: 'config.php',
    params: {
      db_host: params.db_host || this.db_host,
      db_user: params.db_user || this.db_user,
      db_pass: params.db_pass,
      db_name: params.db_name
    }
  }, {
    path: 'config.js'
  }, {
    path: 'client/index.php',
    params: {
      app_runtime: params.app_runtime
    }
  }, {
    path: 'client/menu.js'
  }, {
    path: 'i18n/i18n-el.json'
  }, {
    path: 'client/dispatch.php'
  }, {
    path: 'client/app-local.js'
  }, {
    path: 'client/app.css'
  }, {
    path: 'client/home.js',
    params: {
      app_name: params.app_name
    }
  }, {
    path: 'server/APP.class.php'
  }];

}
