function load(){
    var users = new Array();
    $.ajax({
        url: "../php/profiles.php",
        type: "post",
        async: false,

        success: function(result){
            users = JSON.parse(result);
        },
        error: function(result){
            console.log(result);
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
}

document.querySelectorAll(".profile").forEach(n => n.addEventListener("click", () => {
    console.log("hello");
}));

function viewProfile(profileId){
    //window.location.href = "../oldalak/profil.php?id="+profileId;
    /*$.ajax({
        url: "../php/profil.php",
        type: "get",
        async: false,
        data: {id: profileId},

        success: function(result){

        }
    });*/
}

function temp(){
    for (let i = 0; i < 50; i++) {
        var nev = "felhasználónév";
        var valami = "Teljes név";

        // Profil generálása
        var profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");
        profileDiv.setAttribute("id", i);
        //profileDiv.setAttribute("onclick", "viewProfile(this.id)");

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
}