<?php

include_once 'conn.php'; 

if (isset($_GET['genre'])) {
    
    $genre = mysqli_real_escape_string($conn, $_GET['genre']);
    
    $query = "SELECT id, title, image, rating FROM movies WHERE ganre LIKE '%$genre%' ORDER BY rating DESC LIMIT 5";
    
    $result = mysqli_query($conn, $query);
    
    if ($result) {
        
        $movies = array();
        
        while ($row = mysqli_fetch_assoc($result)) {
            $movies[] = $row;
        }
        
        mysqli_close($conn);
        
        echo json_encode(array('movies' => $movies));
    } 
}
?>
