<?php
include_once "conn.php";
$userName = $_POST['username'];
$passWord = hash("sha512", $_POST['password']);
$keepLogin = $_POST['keepLogin'];
if($keepLogin == "false"){
    $sql = "SELECT password, id FROM users WHERE username = '$userName';";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_row($result)){
            if($row[0] == $passWord){
                $stoken = hash("sha512", random_bytes(50));
                $sql2 = "UPDATE users SET session = '$stoken' WHERE username = '$userName';";
                mysqli_query($conn, $sql2);
                echo json_encode([
                    "status"=>0,
                    "userid"=>$row[1],
                    "token"=>$stoken
                ]);
            }else{
                echo json_encode([
                    "status"=>1,
                    "message"=>"Hibás jelszó"
                ]);
            }
        }
    }else{
        echo json_encode([
            "status"=>1,
            "message"=> "Nem található ilyen felhasználó!"
        ]);
    }
}else{
    $sql = "SELECT password, id FROM users WHERE username = '$userName';";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_row($result)){
            if($row[0] == $passWord){
                $token = hash("sha512", random_bytes(50));
                setcookie("token", $token, time()+86400, "/");
                $stoken = hash("sha512", random_bytes(50));
                $_SESSION['token'] = $stoken;
                $sql = "UPDATE users SET token = '$token', session = '$stoken' WHERE username = '$userName';";
                mysqli_query($conn, $sql);
                echo json_encode([
                    "status"=>0,
                    "userid"=>$row[1]
                ]);
            }else{
                echo json_encode([
                    "status"=>1,
                    "message"=>"Hibás jelszó"
                ]);
            }
        }
    }else{
        echo json_encode([
            "status"=>1,
            "message"=>"Hibás jelszó"
        ]);
    }
}