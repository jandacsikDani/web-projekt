<?php
include_once "../php/conn.php";
header("Content-type: text/html; charset=UTF-8");

if(isset($_POST['save'])) {
    $userId = $_POST['userId'];
    $ratedIndex = $_POST['ratedIndex'];
    $movieId = $_POST['movieId'];
    $ratedIndex++;

    $userId = mysqli_real_escape_string($conn, $userId);
    $ratedIndex = mysqli_real_escape_string($conn, $ratedIndex);
    
    $query = "SELECT COUNT(*) FROM ratings WHERE user_id = '$userId' AND movie_id='$movieId'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);

    if ($row[0] > 0) {
        $query = "UPDATE ratings SET rating = '$ratedIndex' WHERE user_id = '$userId' AND movie_id='$movieId'";
    } else {
        $query = "INSERT INTO ratings (user_id, movie_id, rating) VALUES ('$userId', '$movieId', '$ratedIndex')";
    }
    
    $success = mysqli_query($conn, $query);

    mysqli_close($conn);
    
    exit(json_encode(array('id' => $userId)));
}

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>MovieTamplate</title>
    <link rel="stylesheet" href="/web-projekt/css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="/web-projekt/kepek/logo.jpg" type="image/x-icon">
    <link rel="stylesheet" href="/web-projekt/css/movie.css">
    <script src="/web-projekt/javascript/menu.js" defer></script>
    <script src="/web-projekt/javascript/loaders.js" defer></script>
    <script src="/web-projekt/javascript/func.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous" defer></script>
    <script src="/web-projekt/javascript/rating.js" defer></script>
</head>
<body onload="movieLoad()">
    <header>
        <a href="/web-projekt" class="logo">FFórum</a>
        <nav class="navbar">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/web-projekt" class="nav-link">Kezdőlap</a>
                </li>
                <li class="nav-item">
                    <a href="/web-projekt/oldalak/ratings.html" class="nav-link">Értékelések</a>
                </li>
                <li class="nav-item">
                    <a href="/web-projekt/oldalak/profiles.html" class="nav-link">Felhasználók</a>
                </li>
                <li class="nav-item" id="loginC">
                    <a href="/web-projekt/oldalak/login.html" class="nav-link">Bejelentkezés</a>
                </li>
                <li class="nav-item hidden" id="profileC">
                    <a href="#" class="nav-link" id="profile">Saját profilom</a>
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

        <div class="intro">
            <div class="intro-title">
            </div>

            <div class="intro-rating">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
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
            </div>

            <div class="desc-script">
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
                    <span class="fa fa-star" data-index=0></span>
                    <span class="fa fa-star" data-index=1></span>
                    <span class="fa fa-star" data-index=2></span>
                    <span class="fa fa-star" data-index=3></span>
                    <span class="fa fa-star" data-index=4></span>

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
            <div id="please-login">
                <div>Kommenteléshez kérlek jelentkezz be</div>
                <button class="comment-submit" onclick="window.location.href = 'login.html';">Bejelentkezés</button>
                <div>vagy ha új vagy itt <a href="register.html">regisztrálj!</a></div>
            </div>
            <div class="comment-box">
                <div class="user">
                    <div class="img">
                        <img  src="" alt="Description of the image" id="userpic">
                    </div>
                    <div class="name">
                        Név
                    </div>
                </div>
                <textarea name="textarea" cols="30" rows="10" placeholder="Hozzászólás írása" id="comment"></textarea>
                <button class="comment-submit" onclick="postNewComment()">Hozzászólás</button>
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