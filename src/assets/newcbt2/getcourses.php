<?php
require 'database.php';
// $id = $_GET['id'];
$query = "SELECT DISTINCT course_id, countdown, course, topic, quest_id FROM courses GROUP BY course";
$allquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));