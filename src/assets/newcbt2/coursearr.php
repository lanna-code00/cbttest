<?php
require 'database.php';

$query = "SELECT course FROM courses";
$myquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($myquery, MYSQLI_ASSOC));
