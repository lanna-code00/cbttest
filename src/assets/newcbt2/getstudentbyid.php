<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

// $id = $_POST['student_id'];

$sql = "SELECT * FROM `newusers`";
 $result = mysqli_query($mysqli, $sql);
 $row = mysqli_fetch_assoc($result);

 echo json_encode($row);

 exit(); 

?>