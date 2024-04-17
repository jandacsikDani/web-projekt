<?php
$userId = $_GET['user'];
$sql = "UPDATE users SET token = '', session = '' WHERE id = '$userId';";
echo json_encode(["asd"=>"asd"]);
if(mysqli_query($conn, $sql)){
    echo json_encode([
        "status"=> 0,
    ]);
}else{
    echo json_encode([
        "status"=> 1,
        "message"=>"sql error"
    ]);
}
