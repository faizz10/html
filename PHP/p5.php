<html>
<head>
    <title>fibonaccie series</title>
</head>
<body>
    <form>
       Enter the fibonacci size<input type="number" name="Fibonacci">
      <input type="submit" value="submit" name="submitForm"></br></br>
    </form>
</body>
</html>
<?php
if(isset($_GET["submitForm"]))
{
    $num=$_GET['Fibonacci'];
    $a=0;
    $b=1;
    echo "fibonacci series for ".$num." element are:</br>";
    echo $a.'  '.$b;
    $i=0;
    while($i<$num-2)
    {
        $next=$a+$b;
        echo '  '.$next;
        $a=$b;
        $b=$next;
        $i++;
    }
}
?>