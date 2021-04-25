<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT * FROM student_quest";

$result = mysqli_query($mysqli, $sql);
//  $row = mysqli_fetch_assoc($result);
$res = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo $json = json_encode($res);

?>


