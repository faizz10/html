
<form method="post">  
Enter a Number: <input type="text" name="input"><br><br>  
<input type="submit" name="submit" value="Submit">  
</form> 



<?php  

$num=$_POST['input'];  
    
$n = 0;

for($i = 2; $i < $num; $i++) {
  if($num % $i == 0){
    $n++;
    break;
  }
}

if ($n == 0){
  echo $num." is a prime number.";
} else {
  echo $num." is not a prime number.";
}
?>