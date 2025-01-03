<html>
    <head>
        <title>PHP Program To find the Reverse of a given number</title>
    </head>
<body>
    <form method="post">
    <input type="text" name="num" value="" placeholder="Enter a number"/> 
    <input type="submit" name="submit" value="Submit"/> 
</form>
<?php
    if(isset($_POST['submit']))
    {
        $n = $_POST['num'];
        $x = $n;
        $r = 0;
        while($n>1)
        {
            $r = $r*10;
            $r = $r+($n%10);
            $n = $n/10;
        }
        echo "Reverse of number ". $x . " is: " .$r;
    return 0;
    }
?>
</body>
</html>