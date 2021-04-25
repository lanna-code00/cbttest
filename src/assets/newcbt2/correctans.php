<?php
require 'database.php';
$query = "SELECT quest_id, optionA, optionB, optionC, optionD, correctans FROM questionss";
//  JOIN courses 
//  USING(id)";

$allquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));
?>