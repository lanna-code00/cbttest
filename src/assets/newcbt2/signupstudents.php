<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

// $image = $_FILES['pictures']['name'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$surname = $_POST['surname'];
$username = $_POST['username'];
$address = $_POST['address'];
$parentsno = $_POST['parentsno'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$password = $_POST['password'];
$email = $_POST['email'];
$guardian_name = $_POST['parentsname'];
$matric = $_POST['matric'];

// $target = "uploads/".basename($image);

// if ($_FILES["pictures"]["size"] > 800000) {
//     echo "Sorry, your file is too large.";
//   } 
//  else {
//     if (move_uploaded_file($_FILES['pictures']['tmp_name'], $target)) {
        
        $insert = "INSERT INTO `newusers`( `firstname`,`lastname`, `surname`, `username`, `address`,`parentsno`, `phone`, `gender`, `password`, `email`, `guardian_name`, `matric_no`)
        VALUES ( '$firstname','$lastname','$surname','$username','$address','$parentsno', '$phone','$gender','$password', '$email', '$guardian_name', '$matric')";
        if(mysqli_query($mysqli, $insert)){
            echo "Inserted Successful";
        }
        else {
            echo "not Inserted";
        }

//       }else{
//         $msg = "Failed to upload image";
//       }
//  } 

?>

