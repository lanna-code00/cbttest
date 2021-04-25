<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_GET['quest_id'];

$sql = "SELECT * FROM `questionss` WHERE `quest_id` = '{$id}'";
 $result = mysqli_query($mysqli, $sql);
 $row = mysqli_fetch_assoc($result);

 echo $json = json_encode($row);

 exit(); 

?>