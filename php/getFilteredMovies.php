<?php
include_once "conn.php";
if(isset($_GET['filter'])){
    $filter = $_GET['filter'];
    $content = [];
    foreach($filter as $x){
        $sql = "SELECT id AS id, title AS title, image AS image FROM movies WHERE ganre LIKE '%$x%';";
        $result = mysqli_query($conn, $sql);
        while($row = mysqli_fetch_assoc($result)){
            $content[]= $row;
        }
    }
    echo json_encode([
        "status"=>0,
        "content"=>$content
    ]);
}else{
    echo json_encode([
        'status'=> 1,
        "message"=> "empty filter"
    ]);
}