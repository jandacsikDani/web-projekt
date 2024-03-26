function load(){
    var users = new Array();
    $.ajax({
        url: "../php/profiles.php",
        type: "post",
        async: false,

        success: function(result){
            users = JSON.parse(result);
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });
    for (let i = 0; i < users.length; i++) {
        var nev = users[i]['username'];
        var valami = users[i]['fullname'];

        // Profil generálása
        var profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");
        profileDiv.setAttribute("id", users[i]['id']);
        profileDiv.setAttribute("onclick", "viewProfile(this.id)");

        var imgDiv = document.createElement("div");
        var img = document.createElement("img");
        img.src = "../kepek/profile/default.png";
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
}

function viewProfile(profileId){
    window.location.href ="../oldalak/profil.php?id="+profileId;
}