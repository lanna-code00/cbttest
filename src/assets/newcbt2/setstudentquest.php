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
$myadmin = myFunc($_POST['admin_id']);
$courseId = myFunc($_POST['questId']);
$mycourse = myFunc($_POST['course']);
$date_time = myFunc($_POST['dates']);
$timing = myFunc($_POST['timing']);
$topic = myFunc($_POST['topic']);

$newsql = "SELECT * from questionss where admin_id = $myadmin";
$allquery = mysqli_query($mysqli, $newsql);
$row = mysqli_fetch_all($allquery, MYSQLI_ASSOC);
if (count($row) > 0) {
    $questIds = $row[0]['course_id'];

    $query = "DELETE FROM questionss WHERE course_id = '$questIds'";
    $del_student = mysqli_query($mysqli, $query);
    echo json_encode($del_student);

    foreach ($row as $key) {
        $question = $key['question'];
        $optionA = $key['optionA'];
        $optionB = $key['optionB'];
        $optionC = $key['optionC'];
        $optionD = $key['optionD'];
        $correctans = $key['correctans'];
        $passmark = $key['pass_mark'];
        $adminId = $key['admin_id'];
        $newquestID = $key['course_id'];
        
        $studentsql = "INSERT INTO `student_quest` (`question`, `optionA`, `optionB`, `optionC`, `optionD`, `correctans`, `admin_id`, `pass_mark`, `quest_id`, `dates`, `countdown`, `topic`) VALUES 
            ('$question','$optionA','$optionB','$optionC','$optionD', '$correctans', $adminId, '$newquestID', '$passmark', '$date_time', '$timing', '$topic')";

        if (mysqli_query($mysqli, $studentsql)) {
            echo "Inserted Successful";
        } else {
            echo "not Inserted";
        }

        $history = "INSERT INTO `history` (`question`, `optionA`, `optionB`, `optionC`, `optionD`, `course_id`, `correctans`, `admin_id`, `pass_mark`, `dates`, `countdown`, `topic`) VALUES 
            ('$question','$optionA','$optionB','$optionC','$optionD', '$newquestID', '$correctans',$adminId, '$passmark', '$date_time','$timing', '$topic')";
        if (mysqli_query($mysqli, $history)) {
            echo "Inserted Successful";
        } else {
            echo "not Inserted";
        }
    }
} else {
    echo json_encode(['success' => false, 'message' => 'USER NOT FOUND']);
}


$insertcourses = "INSERT INTO courses (`course`, `quest_id`, `countdown`, `topic`) VALUES ('$mycourse', '$courseId', '$timing', '$topic')";
if (mysqli_query($mysqli, $insertcourses)) {
    echo "Inserted Successful";
} else {
    echo "not Inserted";
}

    
