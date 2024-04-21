<?php
include_once "conn.php";
$sql = "SELECT title as title, id as id FROM movies;";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $a[] = $row;
    }
    echo json_encode([
        "status"=>0,
        "searchresult"=>$a
    ]);
    exit;
}else{
    echo 1;
}