<?

class MYCONFIG extends CONFIG{

  function __construct($runtime='',$login=FALSE) {
    parent::__construct($runtime,$login);
    $this->hosts['master']=array(
      'type'=>'mysql',
      'host'=>'<%= db_host %>',
      'user'=>'<%= db_user %>',
      'pass'=>'<%= db_pass %>',
      'dsn'=>'mysql:host={$values[\'host\']};dbname=<%= db_name %>',
      'options'=>array(
        PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8'
      )
    );

    $this->dbTrace = false;
    $this->debug = false;
    $this->proxy = false;

    $this->incPaths[] = dirname(__FILE__) . '/server';
  }
}
