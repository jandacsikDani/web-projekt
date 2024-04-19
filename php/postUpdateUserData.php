<?php
include_once "conn.php";
$username = $_POST["username"];
$password = hash("sha512", $_POST["password"]);
$email = $_POST["email"];
$userid = $_COOKIE['userId'];
if(!empty($username)){
    $sql = "UPDATE users SET username = '$username' WHERE id = '$userId';";
    if(mysqli_query($conn, $sql)){
        echo json_encode([
            "status"=>0
        ]);
    }else{
        echo json_encode([
            "status"=> 1
        ]);
    }
}
if(!empty($password)){
    $sql = "UPDATE users SET password = '$password' WHERE id = '$userid';";
    if(mysqli_query($conn, $sql)){
        echo json_encode([
            "status"=>0
        ]);
    }else{
        echo json_encode([
            "status"=> 1
        ]);
    }
}
if(!empty($email)){
    $sql = "UPDATE users SET email = '$email' WHERE id = '$userid';";
    if(mysqli_query($conn, $sql)){
        echo json_encode([
            "status"=>0
        ]);
    }else{
        echo json_encode([
            "status"=> 1
        ]);
    }
}