<?php
include_once("database.php");
$_POST = json_decode(file_get_contents('php://input'), true);

$myusername = mysqli_real_escape_string($mysqli,$_POST['username']);
$mypassword = mysqli_real_escape_string($mysqli,$_POST['password']); 

$sql = "SELECT mainadmin_id, username, password FROM mainadminsignup WHERE username = '$myusername' and password = '$mypassword'";
$result = mysqli_query($mysqli,$sql);
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
?>