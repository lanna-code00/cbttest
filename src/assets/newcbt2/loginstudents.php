<?php

include_once("database.php");
$_POST = json_decode(file_get_contents('php://input'), true);
function myFunc($params)
{
  $a = addslashes($params);
  $b = htmlentities($a);
  $c = htmlspecialchars($b); 
  $d = trim($c);
  return $d;
}
$pwd = myFunc($_POST['password']);
$email = myFunc($_POST['email']);

$sql = "SELECT `student_id`, `matric_no`, `surname`, `firstname`, `password`, `email` FROM `newusers` WHERE `password` = '$pwd' AND `email` = '$email'";

$check = mysqli_query($mysqli, $sql);
$row = mysqli_fetch_all($check, MYSQLI_ASSOC);

if (count($row) > 0) {
    $_SESSION['student_id'] = $row[0]['student_id'];
    $_SESSION['surname'] = $row[0]['surname'];
    $_SESSION['firstname'] = $row[0]['firstname'];
    $_SESSION['matric_no'] = $row[0]['matric_no'];
    $_SESSION['email'] = $row[0]['email'];
    echo json_encode(['success' => true,'matric_no' => $_SESSION['matric_no'] ,'session' => $_SESSION['student_id'], 'surname' => $_SESSION['surname'], 'firstname' => $_SESSION['firstname'],'email' => $_SESSION['email']]);
    // $allheaders = getallheaders();
    // $val = $allheaders['authorization'];
    
} else {
    echo json_encode(['success' => false, 'message' => 'USER NOT FOUND']);
}


// session_start();
// require "database.php";
// $_POST = json_decode(file_get_contents('php://input'), true);

// $pwd = $_POST['password'];
// $email = $_POST['email'];

// $sql = "SELECT `student_id`, `password`, `email` FROM `newusers` WHERE `password` = '$pwd' AND `email` = '$email'";
// $result = mysqli_query($mysqli,$sql);
// $row = mysqli_fetch_all($result, MYSQLI_ASSOC);

// foreach ($row as $value) {
// $_SESSION['id'] = $value['student_id'];
// //  echo $value['student_id'];
//     }
// if(isset($_SESSION['id'])){
//     // $stuId = $_SESSION['id'];
//     $res ='{"success": $stuId}';
//     // echo  $_SESSION['id']
// }else{
//     $res ='{"success": false}';
// }
// if($row ){
//     $res = array('success' => true, 'id'=> $_SESSION['id']);
// }else{
//     $res = array('success' => false);
// }
// echo json_encode($res);

?>