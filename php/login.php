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
                if(mysqli_query($conn, $sql2)){
                    setcookie("userId", $row[1], time()+36400,"/");
                    echo json_encode([
                        "status"=>0,
                        "session" => $stoken
                    ]);
                }
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
                $stoken = hash("sha512", random_bytes(50));
                $sql = "UPDATE users SET token = '$token', session = '$stoken' WHERE username = '$userName';";
                if(mysqli_query($conn, $sql)){
                    setcookie("token", $token, time()+86400, "/");
                    setcookie("userId", $row[1], time()+86400, "/");
                    $_SESSION['token'] = $stoken;
                    echo json_encode([
                        "status"=>0
                    ]);
                }else{
                    echo json_encode([
                        "status"=> 1,
                        "message"=>"sql error"
                    ]);
                }
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