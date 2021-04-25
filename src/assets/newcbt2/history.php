<?php
require 'database.php';
$query = "SELECT * FROM history join users on history.admin_id = users.admin_id";
$allquery = mysqli_query($mysqli, $query);
$newquery = mysqli_fetch_all($allquery, MYSQLI_ASSOC);
echo json_encode($newquery);
