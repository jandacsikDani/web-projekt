<?php

include_once "conn.php";


if (isset($_GET['userId']) && isset($_GET['movieId'])) {
    $userId = $_GET['userId'];
    $movieId = $_GET['movieId'];

    
    $userId = mysqli_real_escape_string($conn, $userId);
    $movieId = mysqli_real_escape_string($conn, $movieId);

    $query = "SELECT rating FROM ratings WHERE user_id = '$userId' AND movie_id = '$movieId'";
    $result = mysqli_query($conn, $query);

    $countQuery = "SELECT COUNT(*) AS ratingCount FROM ratings WHERE user_id = '$userId'";
    $countResult = mysqli_query($conn, $countQuery);

    
    if ($row = mysqli_fetch_assoc($result)) {
        $userRating = (float)$row['rating']; 
    } else {
        
        $userRating = 0;
    }
    $userRating--;

    if ($countRow = mysqli_fetch_assoc($countResult)) {
        $userRatingCount = (int)$countRow['ratingCount']; 
    } else {
        $userRatingCount = 0; 
    }

    mysqli_close($conn);
    
    exit(json_encode(array('userRating' => $userRating, 'userRatingCount' => $userRatingCount)));
}


?>
