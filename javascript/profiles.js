function load(){
    // Adatok
    var nev = "Név";
    var valami = "Valami";

    // Profil generálása
    var profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    var imgDiv = document.createElement("div");
    var img = document.createElement("img");
    img.src = "../kepek/default_profile_pic.png";
    img.alt = "";
    imgDiv.appendChild(img);

    var textDiv = document.createElement("div");
    var nameDiv = document.createElement("div");
    nameDiv.textContent = nev;
    var valamiDiv = document.createElement("div");
    valamiDiv.textContent = valami;
    textDiv.appendChild(nameDiv);
    textDiv.appendChild(valamiDiv);

    profileDiv.appendChild(imgDiv);
    profileDiv.appendChild(textDiv);

    // Profil hozzáadása a profileContainer-hez
    var profileContainer = document.getElementsByTagName("main")[0];
    profileContainer.appendChild(profileDiv);
}