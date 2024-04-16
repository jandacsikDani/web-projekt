<?php
include_once "conn.php";
$sql = "SELECT id AS id, title AS title, image AS image FROM movies;";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $a[] = $row;
    }
}
echo json_encode($a);