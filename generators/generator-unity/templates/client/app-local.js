define([
  'lib','app',
  'unity/app-behaviors',
  'unity/app-listhandler',
  'unity/app-formhandler',
  'unity/app-state',
  'libc/jquery.mask/jquery.mask'],function() {

    lib.dateType = 'string';
    lib.number.ds='.';
    lib.number.dp=',';
    lib.number.decimalClass.axia={decimals:3,format:'%.3N'};
    lib.autoMask = true;
    app.homeUrl = {cls:'home'};

  });
