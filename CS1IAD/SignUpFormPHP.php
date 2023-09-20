<?php
$servername = "localhost";
$username = "u-180192779";
$password = "Pt19LjGyqikWyqS";
$dbname = "u_180192779_db";

$connect = new mysqli($servername, $username, $password, $dbname);

if ($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
} else {
  $registeredEvent = $connect->real_escape_string($_REQUEST['RegisteredEvent']);
  $firstName = $connect->real_escape_string($_REQUEST['Firstname']);
  $surname = $connect->real_escape_string($_REQUEST['Surname']);
  $studentID = $connect->real_escape_string($_REQUEST['StudentID']);
  $email = $connect->real_escape_string($_REQUEST['Email']);
  $phoneNumber = $connect->real_escape_string($_REQUEST['Phonenumber']);
  $selectdup = mysqli_query($connect, "SELECT * FROM EventDetails where StudentID='$studentID' and RegisteredEvent='$registeredEvent'");
  $duplicaterows = mysqli_num_rows($selectdup);
  if ($duplicaterows>0) {
    echo "You have already been registered onto this event";
  }
  else {
    $sql = "INSERT INTO StudentDetails (FirstName, Surname, StudentID, Email, PhoneNumber) VALUES ('$firstName', '$surname', '$studentID', '$email', '$phoneNumber')";
    $sql1 = "INSERT INTO EventDetails (StudentID, RegisteredEvent) VALUES ('$studentID', '$registeredEvent')";
    mysqli_query($connect,$sql1);
    if($connect->query($sql) === true) {
      echo "You have been registered onto the event.";
    } else {
      echo "There was a problem with $sql. Please try again." . $connect->error;
      }
  }
}

$connect->close();

?>
