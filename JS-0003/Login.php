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
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

// Taking all 4 values from the form data(input)
$nickname = $_REQUEST['nickname'];
$password = $_REQUEST['password'];

$sql = "SELECT * FROM login WHERE Nickname='$nickname' and Password='$password'";
$result = $conn->query($sql);

if ($result!==false && $result->num_rows > 0) {
    echo "Login Success";
} else {
    echo "Error";
}
$conn->close();
// header('Location: ' . $_SERVER['HTTP_REFERER']);
?>