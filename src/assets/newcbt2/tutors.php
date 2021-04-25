<?php
session_start();
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$newid = $_SESSION['admin_id'];
$teacher = "SELECT * from users where admin_id = $newid";
$allquery = mysqli_query($mysqli, $teacher);

$newquery = mysqli_fetch_all($allquery, MYSQLI_ASSOC);

echo json_encode($newquery, $newid);
// $name = $_POST['name'];
// $insert = "INSERT INTO tutors ( `name`) VALUES ('$name')";
// $myinsert = mysqli_query($mysqli, $insert);

//  $response;
//  $response['success'] = "true"; 
//  echo json_encode($response);

?>