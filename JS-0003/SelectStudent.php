<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";
 
// Create connection
$conn = new mysqli($servername,
    $username, $password, $dbname);
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: "
        . $conn->connect_error);
}

// Taking all 4 values from the form data(input)
$name =  $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender =  $_REQUEST['gender'];
$age = $_REQUEST['age'];

$facultyName = $_REQUEST['facultyName'];


$sql = "SELECT s.* FROM `student` s
INNER JOIN faculty f ON s.Id_faculty = f.Id_faculty
WHERE s.Name like '%$facultyName'";
//$sql = "SELECT s.Age * FROM `student` s WHERE `Name`='$name' and `Surname`='$surname';";
//$sql = "SELECT * FROM `student` WHERE `Name`=`$name`";

$result = $conn->query($sql);
if ($result!==false && $result->num_rows > 0) 
{
    //output data for each row
    while($row = $result->fetch_assoc()) {
       echo 'id: ' . $row['id_Student']. '-' . $row['Name']. ' '. $row['Surname']. ' '. $row['Gender']. ' ' . $row['Age']. '<br>';
      //echo "Age: ".$row["Age"]. "<br>";

        //creating cookies
    }
} else {
    echo '0 results';
}
$conn->close();
//header('Location: ' . $_SERVER['HTTP_REFERER]);

?>