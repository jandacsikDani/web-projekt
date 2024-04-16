<?php
include_once "conn.php";
if(isset($_GET['userId'])){
    $userId = $_GET['userId'];
    $sql = "SELECT session FROM users WHERE id = '$userId';";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_row($result)){
            $a[] = $row;
        }
        echo json_encode([
            "status" => 0,
            "userId"=>$userId,
            "session"=>$a[0]
        ]);
    }else{
        echo json_encode([
            "status"=>1,
            "message" =>"no entry with this userid"
        ]);
    }
}else{
    echo json_encode([
        "status"=>1,
        "message"=> "no userid"
    ]);
}