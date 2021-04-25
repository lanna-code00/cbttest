<?php
require 'database.php';

$sql = "SELECT n.student_id, c.course_id, c.course, n.firstname,s.admin_id, s.dates, n.lastname, n.surname, c.course,  s.scores, s.quest_id
        FROM score_tb s INNER JOIN courses c ON s.course_id = c.course_id INNER JOIN newusers n ON s.student_id = n.student_id
        WHERE s.student_id = n.student_id
        GROUP BY s.score_id";

 $myinsert = mysqli_query($mysqli, $sql);
 echo json_encode(mysqli_fetch_all($myinsert, MYSQLI_ASSOC));
