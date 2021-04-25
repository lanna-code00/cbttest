<?php
require 'database.php';
$query = "SELECT * FROM mainadminsignup";

$allquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));