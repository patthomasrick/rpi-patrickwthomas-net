<?php require_once "api/main.php"; ?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>RPi</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>

<body>
  <section class="section">
    <div class="container">

      <?php
      for ($i = 0; $i < sizeof($devices); $i++) {
        $device_name = $devices[$i]['name'];
        $device_global_ip = $devices[$i]['global_ip'];
        $device_local_ip = $devices[$i]['local_ip'];
        $device_date = $devices[$i]['last_check_in'];
        $status = ((time() - (60*60+1)) < strtotime($device_date)) ? "ALIVE" : "DEAD";

        echo 
      "<div class='card'>
        <div class='card-content'>
          <div class='media'>
            <div class='media-content'>
              <p class='title is-4'>$device_name</p>
              <p class='subtitle is-6'>$status</p>
            </div>
          </div>

          <div class='content'>
            Global IP: $device_global_ip <br>
            Local IP: $device_local_ip <br>
            <time datetime='2020-1-1'>$device_date</time>
          </div>
        </div>
      </div>";
      }
      ?>

    </div>
  </section>
</body>

</html>