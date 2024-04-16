<?php
include_once "../php/conn.php";
if(isset($_GET['id'])){
    $movieId = $_GET['id'];
    $sql = "SELECT title AS title, description AS description, image AS image, `releasedate` AS rd, rating AS rating, coverimage AS coverimage FROM movies WHERE id = '$movieId';";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $a[] = $row;
        }
        echo json_encode($a);
    }else{
        echo json_encode([
            "status"=> 1,
            "message"=>"Nem sikerült a film betöltése."
        ]);
    }
}else{
    echo json_encode([
        "status"=> 1,
        "message"=>"Nem sikerült a film betöltése."
    ]);
}