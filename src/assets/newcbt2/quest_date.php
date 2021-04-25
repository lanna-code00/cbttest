<?php
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);

$date = $_POST['time_date'];
$admin_id = $_POST['admin_id'];
$topic = $_POST['topic'];

$sql = "INSERT INTO quest_date (dates, admin_id, topic) VALUES ('$date', $admin_id,'$topic')";

$newquery = mysqli_query($mysqli, $sql);
echo json_encode($newquery);