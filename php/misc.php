<?php
include_once "conn.php";
$type = $_POST['type'];
switch ($type) {
    case "deleteToken":
        $userId = $_POST['user'];
        $sql = "UPDATE users SET token = '' WHERE id = '$userId';";
        mysqli_query($conn, $sql);
        break;
    case "checkSession":
        if(isset($_COOKIE['userId'])){
            $session = $_POST['session'];
            $id = $_COOKIE['userId'];
            $sql = "SELECT session FROM users WHERE id = '$id';";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_row($result)){
                    if($session == $row[0]){
                        echo 0;
                        exit();
                    }else{
                        echo 1;
                        exit;
                    }
                }
            }else{
                echo 1;
                exit();
            }
        }else{
            echo 1;
            exit();
        }
}
?>