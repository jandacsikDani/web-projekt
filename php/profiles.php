<?php
include_once "conn.php";
$sql = "SELECT id AS 'id', username AS 'username', fullname AS 'fullname' FROM users;";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $a[] = $row; 
    }
}
echo json_encode($a);
?>