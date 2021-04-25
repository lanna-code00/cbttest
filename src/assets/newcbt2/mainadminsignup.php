<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$firstname = $_POST['firstname'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$username = $_POST['username'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$gender = $_POST['gender'];
    $insert = "INSERT INTO `mainadminsignup`( `firstname`,`surname`, `email`, `username`, `address`, `phone`, `password`, `gender`)
    VALUES ( '$firstname','$surname','$email','$username','$address','$phone','$password','$gender')";
    if(mysqli_query($mysqli, $insert)){
        echo "Inserted Successful";
    }
    else {
        echo "not Inserted";
    }
    


    // if (isset($_POST['submit'])) {
    //     $picture = addslashes(file_get_contents($_FILES["picture"]["tmp_name"]));
    //         $sql = "INSERT INTO `mainadminsignup` (`picture_name`) VALUES ('$picture')";
    //         $myinsert = mysqli_query($mysqli, $sql);
    //        if (mysqli_query($mysqli, $myinsert)) {
    //            echo "inserted successful";
    //        }
    //        else{
    //            echo "not inserted";
    //        }
    //     }

?>

