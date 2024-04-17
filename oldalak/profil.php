<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Profil</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/profil.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="../kepek/logo.jpg" type="image/x-icon">
    <script src="../javascript/menu.js" defer></script>
    <script src="../javascript/loaders.js" defer></script>
    <script src="../javascript/func.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous" defer></script>

</head>
<body onload="profileLoad()">
    <header>
        <a href="/web-projekt" class="logo">FFórum</a>
        <nav class="navbar">
            <ul class="nav-menu">
            <li class="nav-item">
                    <a href="/web-projekt" class="nav-link">Kezdőlap</a>
                </li>
                <li class="nav-item">
                    <a href="/web-projekt/oldalak/ertekelesek.html" class="nav-link">Értékelések</a>
                </li>
                <li class="nav-item">
                    <a href="/web-projekt/oldalak/profiles.html">Felhasználók</a>
                </li>
                <li class="nav-item" id="loginC">
                    <a href="/web-projekt/oldalak/login.html" class="nav-link" id="login">Bejelentkezés</a>
                </li>
                <li class="nav-item hidden" id="profileC">
                    <a href="#" class="nav-link" id="profile">Saját profil</a>
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
        <div class="profile-container">
            <div class="profile">
            <img class='profile-pic' src="" alt='Description of the image'>
                <p class='full-name'></p>
                <p class='username'></p>
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