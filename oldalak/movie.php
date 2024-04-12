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
    }else{
        exit(http_response_code(400));
    }
}else{
    exit(http_response_code(400));
}
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title><?php echo $a[0]['title']?></title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="../kepek/logo.jpg" type="image/x-icon">
    <link rel="stylesheet" href="../css/reviews.css">
    <script src="../javascript/menu.js" defer></script>
    <script src="../javascript/loaders.js" defer></script>
    <script src="../javascript/func.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous" defer></script>
</head>
<body onload="movieLoad()">
    <header>
        <a href="../index.html" class="logo">FFórum</a>
        <nav class="navbar">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="../index.html" class="nav-link">Kezdőlap</a>
                </li>
                <li class="nav-item">
                    <a href="ertekelesek.html" class="nav-link">Értékelések</a>
                </li>
                <li class="nav-item">
                    <a href="review.html" class="nav-link">Film</a>
                </li>
                <li class="nav-item">
                    <a href="profiles.html" class="nav-link">Felhasználók</a>
                </li>
                <li class="nav-item">
                    <a href="login.html" class="nav-link">Bejelentkezés</a>
                </li>
                <li class="nav-item">
                    <a href="profil.html" class="nav-link">Profil</a>
                </li>
                <li>
                    <div class="search">
                        <input class="search-input" type="search" placeholder="Keresés" list="searchBar">
                        <span class="search-icon material-symbols-outlined" onclick="gotoMovie()">search</span>
                    </div>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>


    <main>

        <div class="intro" style="background-image: url(<?php echo "../".$a[0]['coverimage']?>); ">
            <div class="intro-title">
                <?php echo "<p>".$a[0]['title']."</p>";?>
            </div>

            <div class="intro-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
            </div>

            <div class="intro-categories">
                <span class="genre">Akció</span>
                <span class="genre">Thriller</span>
                <span class="genre">Romantikus</span>
            </div>

            <a class="video" href="https://youtu.be/KBiOF3y1W0Y?si=arJL4ATXrj0lK_UO" target="_blank">
                <div class="intro-trailer">
                    <span class="fa fa-play-circle"></span>
                    <span class="watch">Nézd meg az előzetest</span>
                </div>
            </a>
            
        </div>

        <div class="main-desc">
            <div class="desc-title">
            <?php echo "<p>".$a[0]['title']."</p>";?>
            </div>

            <div class="desc-script">
                <?php echo "<p>".$a[0]['description']."</p>";?>
            </div>

        </div>

        <div class="rating">
            <div class="rating-title">
                <p>Értékelés</p>
            </div>

            <div class="act-rating">
                <div class="rating-text">
                    Hogyan értékelnéd ezt a filmet?
                </div>

                <div class="rating-stars">
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>

                </div>

                <button class="rating-submit">Értékelés</button>
                

            </div>

            
        </div>

        <div class="comments">
            <div class="comment-title">
                <p>Hozzászólások</p>
            </div>
            <div class="comment-session">
            </div>
            <div class="comment-box">
                <div class="user">
                    <div class="img">
                        <img  src="../kepek/profile-pic-example.jpg" alt="Description of the image">
                    </div>
                    <div class="name">
                        Név
                    </div>
                </div>

                <form action="valami.php" method="post">
                    <textarea name="textarea" cols="30" rows="10" placeholder="Hozzászólás írása"></textarea>
                    <button class="comment-submit">Hozzászólás</button>

                </form>


            </div>
            

        </div>

        <div class="similair">
            <div class="similair-title">
                <p>Hasonló Filmek</p>
            </div>
            <div class="similair-list">
                <ul>
                    <li>
                        <a href="reviews.html">
                            <img class="posters" src="../kepek/demolition.jpg" alt="Description of the image">
                            
                        </a>
                    </li>

                    <li>
                        <a href="reviews.html">
                            <img class="posters" src="../kepek/americanpsycho.jpg" alt="Description of the image">
                            
                        </a>
                    </li>

                    <li>
                        <a href="reviews.html">
                            <img class="posters" src="../kepek/americanpsycho.jpg" alt="Description of the image">
                            
                        </a>
                    </li>

                    


                    <li>
                        <a href="reviews.html">
                            <img class="posters" src="../kepek/americanpsycho.jpg" alt="Description of the image">
                            
                        </a>
                    </li>

                    <li>

                        <a href="reviews.html">
                            <img class="posters" src="../kepek/nightcrawler.jpg" alt="Description of the image">
                            
                            
                        </a>

                    </li>

                    <li>

                        <a href="reviews.html">
                            <img class="posters" src="../kepek/fightclub.jpg" alt="Description of the image">
                            
                            
                        </a>

                    </li>

                    <li>
                        <a href="reviews.html">
                            <img class="posters" src="../kepek/nightcrawler.jpg" alt="Description of the image">
                            
                        </a>

                    </li>

                    <li>

                        <a href="reviews.html">
                            <img class="posters" src="../kepek/fightclub.jpg" alt="Description of the image">
                            
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    </main>
</body>
</html>