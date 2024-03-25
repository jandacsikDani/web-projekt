<?php
include_once "conn.php";
$userId = $_POST['id'];
$sql = "SELECT COUNT(comments.userid) AS comment FROM comments WHERE comments.userid = '$userId';";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $a[] = $row;
    }
}
echo json_encode($a);
?>