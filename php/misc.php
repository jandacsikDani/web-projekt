<?php
include_once "conn.php";
$type = $_POST['type'];
switch ($type) {
    case "deleteToken":
        $userId = $_POST['user'];
        $sql = "UPDATE users SET token = '' WHERE id = '$userId';";
        mysqli_query($conn, $sql);
        break;
}
?>