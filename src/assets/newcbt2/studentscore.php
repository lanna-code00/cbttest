<?php
// session_start();
include_once('database.php');
$_POST = json_decode(file_get_contents('php://input'), true);

    $score = $_POST['scores'];
    $userid = $_POST['student_id'];
    $course_id = $_POST['course_id'];
    $admin_id = $_POST['admin_id'];
    $questId = $_POST[ 'questId'];
    $passmark = $_POST['passmark'];
    $date = $_POST['dates'];

$sql = "INSERT INTO score_tb (course_id, student_id, scores, admin_id, passmark, quest_id, dates)
VALUES ($course_id, $userid, '$score', '$admin_id', '$passmark', '$questId', '$date')";

$newquery = mysqli_query($mysqli, $sql);
echo json_encode($newquery);
