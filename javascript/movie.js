function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

function load(){
    const movieId = get("id");
    var comments = new Array();
    $.ajax({
        url: "../php/movie.php",
        type: "post",
        async: false,
        data: {id: movieId},
        success: function(result){
            comments = JSON.parse(result);
        }
    });
    for (let i = 0; i < comments.length; i++) {
    var actComment = document.createElement("div");
    actComment.className = "act-comment";

    var listDiv = document.createElement("div");
    listDiv.className = "list";
    actComment.appendChild(listDiv);

    var userDetailDiv = document.createElement("div");
    userDetailDiv.className = "user-detail";
    listDiv.appendChild(userDetailDiv);

    var userImgDiv = document.createElement("div");
    userImgDiv.className = "user-img";
    userDetailDiv.appendChild(userImgDiv);

    var userImg = document.createElement("img");
    userImg.src = "../kepek/profile-pic-example.jpg";
    userImg.alt = "Description of the image";
    userImgDiv.appendChild(userImg);

    var userMetaDiv = document.createElement("div");
    userMetaDiv.className = "user-meta";
    userDetailDiv.appendChild(userMetaDiv);

    var nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = "@"+comments[i]['username'];
    nameDiv.id = comments[i]['id'];
    nameDiv.setAttribute("onclick", "viewprofile(this.id)");
    userMetaDiv.appendChild(nameDiv);

    var dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.textContent = comments[i]['commentdate']
    userMetaDiv.appendChild(dayDiv);

    var commentTextDiv = document.createElement("div");
    commentTextDiv.className = "comment-text";
    listDiv.appendChild(commentTextDiv);

    var commentP = document.createElement("p");
    commentP.textContent = comments[i]['content'];
    commentTextDiv.appendChild(commentP);

    document.getElementsByClassName("comment-session")[0].appendChild(actComment);
    }
}

function viewprofile(profileId){
    window.location.href ="../oldalak/profil.php?id="+profileId;
}