<?php

require "includes/config.php";

function GetDeviceSummary()
{
  $dbh = GetDatabaseHandler();
  if (isset($_GET)) {
    $sql =
      'SELECT name, global_ip, local_ip, last_check_in FROM `devices` ORDER BY last_check_in';
    $cursor = $dbh->query($sql);

    $all_tasks = [];
    foreach ($cursor as $row) {
      $device = [
        'name' => $row['name'],
        'global_ip' => $row['global_ip'],
        'local_ip' => $row['local_ip'],
        'last_check_in' => $row['last_check_in'],
      ];
      array_push($all_tasks, $device);
    }

    return $all_tasks;
  }
  return [];
}
