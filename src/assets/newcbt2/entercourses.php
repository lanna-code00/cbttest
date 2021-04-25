<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$course = $_POST['course'];
$questNo = $_POST['questNo'];
$date = $_POST['date'];
$time = $_POST['time'];

$insert = "INSERT INTO courses ( `name`,`course`, `questNo`, `date`, `time`) VALUES ('$name','$course', '$questNo', '$date','$time')";
$myinsert = mysqli_query($mysqli, $insert);

 $response;
 $response['success'] = "true"; 
 echo json_encode($response);

?>