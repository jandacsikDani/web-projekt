<?php
include_once "conn.php";
$sql = "SELECT password FROM users WHERE username = 'admin';";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_row($result)){
    $password = hash("sha512", $row[0]);
    $sql = "UPDATE users SET password = '$password' WHERE username = 'admin';";
    mysqli_query($conn, $sql);
}
echo "done";
?>