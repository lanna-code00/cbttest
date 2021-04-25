<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

function myFunc($params)
{
        $a = addslashes($params);
        $b = htmlentities($a);
        $c = htmlspecialchars($b);
        $d = trim($c);
        return $d;
}

$papertype = myFunc($_POST['questId']);
$question = myFunc($_POST['question']);
$optionA = myFunc($_POST['optionA']);
$optionB = myFunc($_POST['optionB']);
$optionC = myFunc($_POST['optionC']);
$optionD = myFunc($_POST['optionD']);
$correctans = myFunc($_POST['correctans']);
$marks = myFunc($_POST['marks']);
$admin_id = $_POST['admin_id'];
$questId = myFunc($_POST['passmark']);

$insert = "INSERT INTO `questionss`(`question`, `optionA`, `optionB`, `optionC`, `optionD`, `course_id`, `correctans`, `marks`, `admin_id`, `pass_mark`) VALUES 
        ('$question','$optionA','$optionB','$optionC','$optionD', '$papertype', '$correctans','$marks', $admin_id, '$questId')";
 $myinsert = mysqli_query($mysqli, $insert);

 $response;
 $response['success'] = "true"; 
 echo json_encode($response);
?>
 