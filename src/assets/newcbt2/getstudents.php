<?php
session_start();
require 'database.php';
// $query = "SELECT * from questionss join courses on questionss.course_id = courses.id";
$query = "SELECT * FROM newusers";

$allquery = mysqli_query($mysqli, $query);

$studentvar = mysqli_fetch_all($allquery, MYSQLI_ASSOC);
foreach ($studentvar as  $value) {
    $_SESSION['student_id'] = $value['student_id'];
    
}
echo json_encode($studentvar);

