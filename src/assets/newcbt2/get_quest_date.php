<?php
require 'database.php';
// $id = $_GET['id'];
$query = "SELECT DISTINCT date_id, dates, admin_id FROM quest_date GROUP BY date_id";
$allquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));