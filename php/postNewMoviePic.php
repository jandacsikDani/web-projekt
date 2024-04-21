<?php
include_once "conn.php";
if (isset($_FILES["file"])) {
    $movieName = $_COOKIE['lastmovie'];
    $cutMovieName = convertString($movieName);
    $engedelyezett_kiterjesztesek = ["jpg", "jpeg", "png"];
    $kiterjesztes = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
    

    if (in_array($kiterjesztes, $engedelyezett_kiterjesztesek)) {
        if ($_FILES["file"]["error"] === 0) {
            if ($_FILES["file"]["size"] <= 31457280) {
                $cel = "../kepek/" . $_FILES["file"]["name"];
                if (move_uploaded_file($_FILES["file"]["tmp_name"], $cel)) {
                    rename($cel, "../kepek/".$cutMovieName.".jpg");
                    $filename = $_FILES["file"]["name"];
                    $sql3 = "UPDATE movies SET image = '/web-projekt/kepek/$cutMovieName.jpg' WHERE title = '$movieName';";
                    mysqli_query($conn, $sql3);
                    echo json_encode([
                        "status"=> 0,
                        "message"=> "sikeres fájl feltöltés",
                    ]);
                } else {
                    echo json_encode([
                        "status"=> 1,
                        "message"=> "A fájl átmozgatása nem sikerült!"
                    ]);
                }
            } else {
                echo json_encode([
                    "status"=> 1,
                    "message"=> "A fájl mérete túl nagy!"
                ]);
            }
        } else {
            echo json_encode([
                "status"=> 1,
                "message"=> "A fájlfeltöltés nem sikerült!"
            ]);
        }
    } else {
        echo json_encode([
            "status"=> 1,
            "message"=> "A fájl kiterjesztése nem megfelelő!"
        ]);
    }
}