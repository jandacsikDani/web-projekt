function load(){
    checkSession();
    const profileId = get('id');
    var data = new Array();
    $.ajax({
        url: "../php/profil.php",
        type: "post",
        async: false,
        data: {id: profileId},
        success: function(result){
            data = JSON.parse(result);
        }
    });
    //document.getElementById("review").innerHTML = data[0]['review'];
    document.getElementById("comment").innerHTML = data[0]['comment'];
}