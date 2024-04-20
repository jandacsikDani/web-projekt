<?php

include_once "conn.php";


if (isset($_GET['userId']) && isset($_GET['movieId'])) {
    $userId = $_GET['userId'];
    $movieId = $_GET['movieId'];

    
    $userId = mysqli_real_escape_string($conn, $userId);
    $movieId = mysqli_real_escape_string($conn, $movieId);

    
    $query = "SELECT rating FROM ratings WHERE movie_id = '$movieId'";
    $result = mysqli_query($conn, $query);

    
    $totalRating = 0;
    $numRatings = 0;

    while ($row = mysqli_fetch_assoc($result)) {
        $totalRating += $row['rating'];
        $numRatings++;
    }

    
    $averageRating = 0;
    if ($numRatings > 0) {
        $averageRating = $totalRating / $numRatings;
    }

    
    mysqli_close($conn);
    
    exit(json_encode(array('avarageRating' => $averageRating)));
}

?>
