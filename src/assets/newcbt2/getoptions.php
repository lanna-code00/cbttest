<?php

require 'database.php';

$quest_id = $_GET['quest_id'];

$query = "SELECT optionA, optionB, optionC, optionD from questionss where `quest_id` = '$quest_id'";

$allquery = mysqli_query($mysqli,$query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));