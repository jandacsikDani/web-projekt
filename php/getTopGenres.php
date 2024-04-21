<?php

include_once 'conn.php'; 

$query = "SELECT ganre FROM movies";

$result = mysqli_query($conn, $query);


if ($result) {
    
    $genreSet = [];

    while ($row = mysqli_fetch_assoc($result)) {
        
        $genres = explode(', ', $row['ganre']);
        
        
        foreach ($genres as $genre) {
            $genreSet[$genre] = true; 
        }
    }

    $genresArray = array_keys($genreSet);
    mysqli_close($conn);
    exit(json_encode(array('genres' => $genresArray)));
} 
?>
