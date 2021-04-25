<?php
$connection = mysqli_connect('localhost', 'root', '', 'paypage');

 if (!$connection) {
       die('error connecting to the server');
  }else{
  	echo "fully connected to the server";
  }
?>