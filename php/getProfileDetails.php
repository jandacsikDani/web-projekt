<?php
include_once "../php/conn.php";
if(isset($_GET['id'])){
    $userId = $_GET['id'];
    $sql = "SELECT username AS username, fullname AS fullname, profileimage AS profileimage FROM users WHERE id = '$userId';";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $a[] = $row;
        }
        echo json_encode($a);
    }else{
        echo json_encode([
            "status"=> 1,
            "message"=>"Nem sikerült a profil betöltése."
        ]);
    }
}else{
    echo json_encode([
        "status"=> 1,
        "message"=>"Nem sikerült a profil betöltése."
    ]);
}