<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kezdőlap</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/searchresult.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="kepek/logo.jpg" type="image/x-icon">
    <script src="../javascript/menu.js" defer></script>
    <script src="../javascript/func.js" defer></script>
    <script src="../javascript/loaders.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous" defer></script>
</head>
<body onload="searchResultLoad()">
    <header>
    <a href="#" class="logo">FFórum</a>
        <nav class="navbar">
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Kezdőlap</a>
                </li>
                <li class="nav-item">
                    <a href="oldalak/ertekelesek.html" class="nav-link">Értékelések</a>
                </li>
                <li class="nav-item">
                    <a href="oldalak/profiles.html">Felhasználók</a>
                </li>
                <li class="nav-item" id="loginC">
                    <a href="oldalak/login.html" class="nav-link" id="login">Bejelentkezés</a>
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
        <div>
            <img src="../kepek/americanpsycho.jpg" alt="">
            <div>
                <div>Amerikai Pszihó</div>
                <div><strong>Megjelenés éve:</strong> 2011</div>
                <div><strong>Műfaj:</strong> amrikai akciófilm</div>
            </div>
        </div>
        <?php
            function noMatch(){
                echo "<div>";
                echo "<p>Sajnos nincs találat a keresére...</p>";
                echo "<p>Próbálkozz más kulcsszavakkal.</p>";
                echo "</div>";
            }
            function found($array){
                for ($i=0; $i < count($array); $i++) { 
                    echo "<div>";
                    echo "<img src=../".$array[$i]['image'] ."alt='$array[$i]['title']'>";
                    echo "<div>";
                        echo "<div>".$array[$i]['title']."</div>";
                        echo "<div><strong>Megjelenés éve:</strong>".$array[$i]['releasedate']."</div>";
                        echo "<div><strong>Műfaj:</strong>".$array[$i]['ganre']."</div>";
                    echo "</div>";
                    echo "</div>";
                }
            }
        ?>
    </main>
</body>
</html>
<?php
    include_once "../php/conn.php";
    ini_set('display_errors', 0);
    if(isset($_GET['query'])){
        $query = $_GET['query'];
        $sql = "SELECT title AS title, image AS image, releasedate as releasedate, ganre as ganre FROM movies WHERE title LIKE '%$query%';";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)){
                $a[] = $row;
                found($a);
            }
        }else{
            noMatch();
        }
    }else{
        noMatch();
    }
?>