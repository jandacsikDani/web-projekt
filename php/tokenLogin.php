<?php
    include_once "conn.php";
    $userId = $_GET['userId'];
    $token = $_GET['token'];
    $sql = "SELECT token FROM users WHERE id = '$userId';";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_row($result)) {
            if($row[0] == $token){
                echo json_encode([
                    "status"=>0
                ]);
            }else{
                echo json_encode([
                    "status"=> 1,
                    "message"=>"Nem sikerült az automatikus bejelentkezés!"
                ]);
            }
        }
    }else{
        echo json_encode([
            "status"=> 1,
            "message"=> "Nem sikerült az automatikus bejelentkezés!"
        ]);
    }