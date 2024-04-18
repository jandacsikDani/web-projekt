<?php
include_once "conn.php";
$userId = $_GET['id'];
$sql = "SELECT COUNT(comments.userid) AS comment FROM comments WHERE comments.userid = '$userId';";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_row($result)){
        $a[] = $row;
    }
}
$sql2 = "SELECT COUNT(rates.rate) AS rates FROM rates WHERE rates.userid = '$userId';";
$result2 = mysqli_query($conn, $sql2);
if(mysqli_num_rows($result2)>0){
    while($row2 = mysqli_fetch_row($result2)){
        $a2[] = $row2;
    }
}
echo json_encode([
    "status"=>0,
    "comment"=> $a[0],
    "rate"=> $a2[0]
]);