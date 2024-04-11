<?php
    include_once "conn.php";
    $userId = $_POST['userId'];
    $token = $_POST['token'];
    $sql = "SELECT token FROM users WHERE id = '$userId';";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_row($result)) {
            if($row[0] == $token){
                echo "0";
            }else{
                echo "Nem sikerült az automatikus bejelentkezés!1";
            }
        }
    }else{
        echo "Nem sikerült az automatikus bejelentkezés!2";
    }
?>