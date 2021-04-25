<?php
require 'database.php';

$username = $_GET['username'];

if($_FILES["picture"])
 {  
   //echo json_encode($_FILES["picture"]);
//    $id = $_GET['id'];
   $tmporary = $_FILES["picture"]["tmp_name"];
   $file_name = $_FILES["picture"]["name"];
      if(move_uploaded_file($tmporary,"uploads/"."$file_name"))

    {

       if($file = addslashes(file_get_contents("uploads/"."$file_name")))
       {
           if ($_FILES["picture"]["size"] > 500000) {
            echo "Sorry, your file is too large.";
           }else {
               //  echo json_encode($file_name);
               // $uploaddir = "uploads/".$file_name;
               // echo json_encode($uploaddir);
               $sql = "UPDATE `mainadminsignup` SET picture = '$file_name' WHERE username = '$username'";
               // echo json_encode($sql);
              mysqli_query($mysqli,$sql);
              echo json_encode("successfully inserted: ". $file_name);
           }
       }
    }

       else
        echo json_encode("error");
 }

?>