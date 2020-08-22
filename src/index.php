<?php require_once "api/main.php"; ?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>RPi</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          rpi.patrickwthomas.net
        </h1>
        <h2 class="subtitle">
          Raspberry Pi Statuses
        </h2>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">

      <?php for ($i = 0; $i < sizeof($devices); $i++) {
        $device_name = $devices[$i]['name'];
        $device_global_ip = $devices[$i]['global_ip'];
        $device_local_ip = $devices[$i]['local_ip'];
        $device_date = $devices[$i]['last_check_in'];
        $status =
          time() - (60 * 60 + 1) < strtotime($device_date) ? "ALIVE" : "DEAD";
        $message_color =
          time() - (60 * 60 + 1) < strtotime($device_date)
          ? "is-light"
          : "is-dark";
        $tag_color =
          time() - (60 * 60 + 1) < strtotime($device_date)
          ? "is-success"
          : "is-danger";

        echo "
        <article class='message $message_color'>
          <div class='message-header'>
            <p>$device_name <span class='tag $tag_color is-medium ml-3'>$status</span></p>
          </div>
          <div class='message-body'>
            <p> <span class='icon'> <i class='fa fa-clock-o'></i> </span> $device_date </p>
            <p> <span class='icon'> <i class='fa fa-globe'></i> </span> $device_global_ip </p>
            <p> <span class='icon'> <i class='fa fa-sitemap'></i> </span> $device_local_ip </p>
          </div>
        </article>
        ";
      } ?>
    </div>
  </section>
</body>

</html>