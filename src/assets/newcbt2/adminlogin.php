<?php
include_once("database.php");
require_once 'session.php';

$_POST = json_decode(file_get_contents('php://input'), true);

function myFunc($params)
{
  $a = addslashes($params);
  $b = htmlentities($a);
  $c = htmlspecialchars($b); 
  $d = trim($c);
  return $d;
}

$identification = myFunc($_POST['identification']);
$email = myFunc($_POST['email']); 

$sql = "SELECT admin_id, course, firstname, identification, tutorid, email FROM users where identification = '$identification' and email = '$email'";

$result = mysqli_query($mysqli,$sql);
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (count($row) > 0) {
    $_SESSION['admin_id'] = $row[0]['admin_id'];
    $_SESSION['course'] = $row[0]['course'];
    $_SESSION['firstname'] = $row[0]['firstname'];
    $_SESSION['identity'] = $row[0]['identification'];
    echo json_encode(['success' => true, 'session' => $_SESSION['admin_id'], 'firstname' => $_SESSION['firstname'], 'identity' => $_SESSION['identity'], 'course' => $_SESSION['course']]);
} else {
    echo json_encode(['success' => false, 'message' => 'USER NOT FOUND']);
}

?>

