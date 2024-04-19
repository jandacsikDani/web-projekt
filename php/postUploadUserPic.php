<?php
include_once "conn.php";
if (isset($_FILES["file"])) {
    $engedelyezett_kiterjesztesek = ["jpg", "jpeg", "png"];
    $kiterjesztes = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));

    if (in_array($kiterjesztes, $engedelyezett_kiterjesztesek)) {
        if ($_FILES["file"]["error"] === 0) {
            if ($_FILES["file"]["size"] <= 31457280) {
                $cel = "/web-projekt/kepek/profile/" . $_FILES["file"]["name"];
                if (move_uploaded_file($_FILES["file"]["tmp_name"], $cel)) { // Helyesítés itt
                    echo json_encode([
                        "status"=> 0,
                        "message"=> "sikeres fájl feltöltés"
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

