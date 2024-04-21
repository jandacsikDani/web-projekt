<?php
include_once "conn.php";
$title = $_POST['title'];
$desc = $_POST['desc'];
$kat = $_POST['kat'];
$sql= "INSERT INTO movies (title, description, ganre) VALUES ('$title', '$desc', '$kat')";
if(mysqli_query($conn, $sql)){
    echo json_encode([
        "status"=>0,
        "messgage"=>"A film rögzítésre került."
    ]);
}else{
    echo json_encode([
        "status"=>1,
        "message"=>"A film rögítése sikertelen"
    ]);
}