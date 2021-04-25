<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_POST['quest_id'];
$question = $_POST['question'];
$optionA = $_POST['optionA'];
$optionB = $_POST['optionB'];
$optionC = $_POST['optionC'];
$optionD = $_POST['optionD'];
$correctans = $_POST['correctans'];
$marks = $_POST['marks'];


$insert = "UPDATE questionss SET question = '$question', optionA = '$optionA', optionB = '$optionB', optionC = '$optionC', optionD = '$optionD', correctans = '$correctans',
         marks = '$marks' WHERE quest_id = $id";
         var_dump($insert);

$myinsert = mysqli_query($mysqli, $insert);

$response;
$response['success'] = "true"; 
echo json_encode($response);