var ratedIndex = -1, userId = getCookie('userId');

$(document).ready(function () {
    resetColors();

    if(localStorage.getItem('ratedIndex') != null){//ha mar egyszer ertekelt akkor maradjon kitoltve
        fillStars(parseInt(localStorage.getItem('ratedIndex')));
    }

    $('.rating-stars .fa-star').on('click', function(){
        ratedIndex = parseInt($(this).data('index'));
        localStorage.setItem('ratedIndex', ratedIndex); //cookie?
        $('.rating-submit').on('click', function(){
            saveToDb();
        })
    })


    $('.rating-stars .fa-star').mouseover(function () {
        resetColors();
        var currentIndex = parseInt($(this).data('index'))
        fillStars(currentIndex);

    });

    $('.rating-stars .fa-star').mouseleave(function () {
        resetColors();
        if(ratedIndex != -1){
            fillStars(ratedIndex);
           

        }
    });

    function fillStars(value){
        for (var i= 0; i <= value; i++){
            $('.rating-stars .fa-star:eq('+i+')').css('color', '#9732A7');
        }

    }

    function resetColors(){
        $('.rating-stars .fa-star').css('color', 'gray');
    }

    function saveToDb() {
        
        var currentURL = window.location.href;
    
        // id kinyerese
        var urlParams = new URLSearchParams(window.location.search);
        var movieId = urlParams.get('id');
    
        
        $.ajax({
            url: 'movie.php?id=' + movieId,
            method: 'POST', 
            data: {
                save: 1,
                userId: userId,
                ratedIndex: ratedIndex
                
            },
            success: function(r) {
                console.log("Sikeresen elmentve!.");
               
                
            },
            error: function(xhr, status, error) {
                
            }
        });
    }
    
});