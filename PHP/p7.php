<?php

$host="localhost";
$user="root";
$pass="";
$database="contact"; 


$connection=mysqli_connect($host,$user,$pass,$database);

if($connection){
	echo"successfully connected";
}
else{
	die("could not connect");
}
$sqli="INSERT INTO contact(Name,phone,Email) VALUES('JOHN','12345','john@gamil.com')";
mysqli_query($connection,$sqli);

mysqli_close($connection);