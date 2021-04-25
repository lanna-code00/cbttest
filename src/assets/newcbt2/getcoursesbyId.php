<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_GET['course_id'];

$sql = "SELECT * FROM `courses` WHERE `course_id` = '{$id}' LIMIT 1";
 $result = mysqli_query($mysqli, $sql);
 $row = mysqli_fetch_assoc($result);

 echo $json = json_encode($row);

 exit(); 

?>