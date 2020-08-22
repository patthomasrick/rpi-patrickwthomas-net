<?php

require "includes/config.php";

$dbh = GetDatabaseHandler();
if (isset($_GET)) {
  $api_key = $_GET["api_key"];
  $local_ip = $_GET["local_ip"];

  if (!$api_key || !$local_ip) {
    http_response_code(400);
    die("bad");
  }

  $global_ip = $_SERVER['REMOTE_ADDR'];

  $sql = '
  SET time_zone = "-04:00";
  UPDATE
    `devices`
  SET
    `global_ip` = :global_ip,
    `local_ip` = :local_ip,
    `last_check_in` = CURRENT_TIMESTAMP
  WHERE
    `api_key`=:api_key;';
  $sth = $dbh->prepare($sql);
  $sth->execute([
    ':global_ip' => $global_ip,
    ':local_ip' => $local_ip,
    ':api_key' => $api_key,
  ]);
  http_response_code(200);
  exit("good");
}