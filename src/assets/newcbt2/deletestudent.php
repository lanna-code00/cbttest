<?php

require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_POST['student_id'];
echo $id;
$query = "DELETE FROM newusers WHERE student_id = $id";
$del_student = mysqli_query($mysqli,$query);
echo json_encode($del_student);