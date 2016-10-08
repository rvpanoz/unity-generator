// Imports
var path = require('path');
var fs = require('fs');
var generators = require('yeoman-generator');
var config = require('./config');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = generators.Base.extend({

  constructor: function() {

    generators.Base.apply(this, arguments);

    this.params = {};

    this.argument('appPath', {
      desc: 'The path where to save the project',
      type: String,
      required: true
    });

    // set destination path
    this.destinationRoot(this.appPath);

  },
  initializing: function() {

    _.bindAll(this, '_copyMainFiles', '_scaffoldFolders');
    this.log("\nWelcome to unity app generator\n");
  },
  writing: {

    config: function() {

      // copy the configuration files
      this._copyMainFiles();
    },
    app: function() {

      //create main folders
      this._scaffoldFolders();

      // create app skeleton
      if (this.params.app_skeleton) {
        this._create_skeleton();
      }
    }

  },
  prompting: function() {

    var done = this.async();

    return this.prompt([{
      type: 'input',
      name: 'app_name',
      message: 'Your unity application name',
      default: 'Unity app'
    }, {
      type: 'input',
      name: 'lib_path',
      message: 'Path location of the UNity library (lib_path):',
      store: true,
      validate: function(path_string) {
        try {
          return fs.lstatSync(path_string).isDirectory();
        } catch (e) {
          this.log("\nlib_path is not a valid path\n");
        }
      }.bind(this)
    }, {
      type: 'list',
      name: 'app_runtime',
      message: 'What runtime do you prefer to use?',
      choices: [{
        name: 'jQuery mobile',
        value: 'jqm'
      }, {
        name: 'Bootstrap',
        value: 'bs'
      }]
    }, {
      type: 'input',
      name: 'db_name',
      message: 'Database name:'
    }, {
      type: 'input',
      name: 'db_host',
      message: 'Database host:',
      default: config.db_host
    }, {
      type: 'input',
      name: 'db_user',
      message: 'Database user:',
      default: config.db_user
    }, {
      type: 'input',
      name: 'db_pass',
      message: 'Database pass:'
    }, {
      type: 'confirm',
      name: 'app_skeleton',
      message: 'Would you like to create an application skeleton?'
    }]).then(function(props) {

      _.extend(this.params, {
        app_name: props.app_name,
        lib_path: props.lib_path,
        db_name: props.db_name,
        db_host: props.db_host,
        db_user: props.db_user,
        db_pass: props.db_pass,
        app_runtime: props.app_runtime,
        app_skeleton: props.app_skeleton
      })

      done();
    }.bind(this));

  },
  configuring: function() {
    //todo
  },
  end: function() {
    var app_address = this.appPath.replace(/^.*[\\\/]/, '');
    this.log("\n\nWoohoo! all set!\nVisit http://localhost/" + app_address + "/client \n\nGoodbye :)");
  },
  _copyMainFiles: function() {

    var mainFiles = config.getMainFiles(this.params);

    _.each(mainFiles, _.bind(function(file, idx) {
      //copy files
      this.fs.copyTpl(this.templatePath(file.path), this.destinationPath(file.path), (file.params) ? file.params : null);
    }, this));
  },
  _scaffoldFolders: function() {

    //create main folders
    mkdirp(this.appPath + '/' + this.params.app_name);
    mkdirp(this.appPath + '/client');
    mkdirp(this.appPath + '/server');
    mkdirp(this.appPath + '/i18n');
    mkdirp(this.appPath + '/files');
    mkdirp(this.appPath + '/images');

  },
  _create_skeleton: function() {

    //schema
    this.fs.copyTpl(this.templatePath('client/schemas/schema.js'), this.destinationPath('client/schemas/schema.js'));

    //views
    this.fs.copyTpl(this.templatePath('client/views/list-handler.js'), this.destinationPath('client/views/list-handler.js'));
    this.fs.copyTpl(this.templatePath('client/views/form-handler.js'), this.destinationPath('client/views/form-handler.js'));

    //cfg
    this.fs.copyTpl(this.templatePath('client/views/list-handler-cfg.js'), this.destinationPath('client/views/list-handler-cfg.js'));
    this.fs.copyTpl(this.templatePath('client/views/form-handler-cfg.js'), this.destinationPath('client/views/form-handler-cfg.js'));

  }
});
