<?php
include_once "conn.php";
$movie = $_GET['movie'];
$sql = "SELECT id AS id FROM movies WHERE title LIKE '%$movie%';";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_row($result)){
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