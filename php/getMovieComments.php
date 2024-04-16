<?php
include_once "conn.php";
$movieId = $_GET['id'];
$sql2 = "SELECT users.username AS username, comments.commentwhen AS commentdate, comments.content AS content, users.id AS id FROM comments INNER JOIN users ON comments.userid = users.id WHERE movieid = '$movieId';";
$result2 = mysqli_query($conn, $sql2);
if(mysqli_num_rows($result2) > 0){
    while($row2 = mysqli_fetch_assoc($result2)){
        $a2[] = $row2;
    }
}
echo json_encode($a2);