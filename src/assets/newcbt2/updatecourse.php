<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_POST['course_id'];
$name = $_POST['name'];
$course = $_POST['course'];
$date = $_POST['date'];
$time = $_POST['time'];
$questNo = $_POST['questNo'];


$insert = "UPDATE courses SET name = '$name', course = '$course', questNo = '$questNo',
 time = '$time', date = '$date' WHERE `course_id` = $id LIMIT 1";

$myinsert = mysqli_query($mysqli, $insert);

$response;
$response['success'] = "true"; 
echo json_encode($response);
