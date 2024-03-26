<?php
include_once "../php/conn.php";
if(isset($_GET['id'])){
    $userId = $_GET['id'];
    $sql = "SELECT username AS username, fullname AS fullname, profileimage AS profileimage FROM users WHERE id = '$userId';";
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
    <title>Profil</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/profil.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="../kepek/logo.jpg" type="image/x-icon">
    <script src="../javascript/main.js"></script>
    <script src="../javascript/menu.js" defer></script>
    <script src="../javascript/profil.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous" defer></script>

</head>
<body onload="load()">
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
                    <a href="profiles.html" class="nav-link">Felhasználók</a>
                </li>
                <li class="nav-item">
                    <a href="../index.html" class="nav-link" onclick="logout()">Kijelentkezés</a>
                </li>
                <li>
                    <div class="search">
                        <span class="search-icon material-symbols-outlined">search</span>
                        <input class="search-input" type="search" placeholder="Keresés">
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
        <div class="profile-container">
            <div class="profile">
            <img class='profile-pic' src="<?php echo $a[0]['profileimage']?>" alt='Description of the image'>
                <?php
                echo "<p class='full-name' id='fullname'>".$a[0]['fullname']."</p>";
                echo "<p class='username' id='username'>@".$a[0]['username']."</p>"
                ?>
            </div>
            <div class="details">
                <div class="detail-item">
                    <p class="data" id="review">68</p>
                    <p class="desc">Értékelések</p>
                </div>
                <div class="detail-item">
                    <p class="data" id="comment"></p>
                    <p class="desc">Hozzászólások</p>
                </div>
            </div>
            <div class="change">
                <button class="sign">Adatok módosítása</button>
            </div> 
        </div>
    </main>
</body>
</html>