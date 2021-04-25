
<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['firstname'];
$lastname = $_POST['lastname'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$identification = $_POST['identification'];
$tutorid = $_POST['tutorid'];

    $insert = "INSERT INTO `users`( `firstname`,`lastname`, `surname`, `email`,`phone`,`course` ,`identification`, `tutorid`)
    VALUES ( '$name','$lastname', '$surname','$email', '$phone', '$course', '$identification','$tutorid')";

    if(mysqli_query($mysqli, $insert)){
        echo "Inserted Successful";
    }
    else {
        echo "not Inserted";
    }
    

?>