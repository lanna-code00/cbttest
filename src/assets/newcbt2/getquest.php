<?php
require 'database.php';

// $query = "SELECT * from questionss join courses on questionss.course_id = courses.id";
$query = "SELECT * FROM questionss join users on questionss.admin_id = users.admin_id";

$allquery = mysqli_query($mysqli, $query);

$newquery = mysqli_fetch_all($allquery, MYSQLI_ASSOC);

echo json_encode($newquery);
