<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);
$newid = $_POST['id'];
// echo  json_encode($newid);
// $query = "SELECT * from questionss join courses on questionss.course_id = courses.id";
// $query = "SELECT * FROM questionss join users on questionss.admin_id = users.admin_id ";

// $allquery = mysqli_query($mysqli, $query);

// $newquery = mysqli_fetch_all($allquery, MYSQLI_ASSOC);

// echo json_encode($newquery);
