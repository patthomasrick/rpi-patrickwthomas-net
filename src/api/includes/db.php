<?php

require "secret.php";

$options = [
  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
];

function GetDatabaseHandler()
{
  try {
    $dbh = new PDO(dsn, username, password, $options);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
  }

  return $dbh;
}
