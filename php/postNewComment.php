<?php
include_once "conn.php";
if(isset($_COOKIE['userId'])){
    $comment = $_POST['comment'];
    $movieId = $_POST['movieId'];
    $userId = $_COOKIE['userId'];
    $sql = "INSERT INTO comments (movieid, userid, content) VALUES ('$movieId', '$userId', '$comment')";
    if(mysqli_query($conn, $sql)){
        echo json_encode([
            "status"=> 0
        ]);
        http_response_code(201);
    }else{
        echo json_encode([
            "status"=> 1,
            "message"=>"failed to post the comment"
        ]);
    }
}else{
    echo json_encode([
        "status"=> -1,
        "message"=> "no user logged in"
    ]);
    http_response_code(401);
}