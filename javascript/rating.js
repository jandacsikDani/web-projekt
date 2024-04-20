$(document).ready(function () {
    
    const movieId = get('id');
    const userId = getCookie("userId");
    var ratedIndex = parseInt(getCookie('ratedIndex_' + movieId));
    
    getFromDbAvarage();
    getFromDbUserRating();
    
    $('.rating-stars .fa-star').on('click', function() {
        ratedIndex = parseInt($(this).data('index'));
        
        setCookie('ratedIndex_' + movieId, ratedIndex, 30); 
    });

    
    $('.rating-submit').on('click', function() {
        saveToDb();
    });

    
    $('.rating-stars .fa-star').mouseover(function() {
        resetColors();
        var currentIndex = parseInt($(this).data('index'));
        fillStars(currentIndex);
    });
    $('.rating-stars .fa-star').mouseleave(function() {
        resetColors();
        if (ratedIndex !== -1) {
            fillStars(ratedIndex);
        }
    });

    function fillStars(value) {
        $('.rating-stars .fa-star').css('color', 'gray');
        for (var i = 0; i <= value; i++) {
            $('.rating-stars .fa-star:eq(' + i + ')').css('color', '#9732A7');
        }
    }

    function resetColors() {
        $('.rating-stars .fa-star').css('color', 'gray');
    }

    function saveToDb() {
        $.ajax({
            url: "/web-projekt/oldalak/movie.php?id=" + movieId,
            method: 'POST',
            data: {
                save: 1,
                userId: userId,
                movieId: movieId,
                ratedIndex: ratedIndex
            },
            success: function(response) {
                console.log("Siker!");
            },
            error: function(xhr, status, error) {
                
            }
        });
    }

    function getFromDbAvarage() {
        $.ajax({
            url: "/web-projekt/php/getMovieRating.php",
            method: 'GET',
            data: {
                userId: userId,
                movieId: movieId,
            },
            success: function(response) {
                
                var averageRating = response.avarageRating;

                //console.log("Atlag ertekeles: " + averageRating);

                fillStarsFromAverage(averageRating);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    function getFromDbUserRating() {
        $.ajax({
            url: "/web-projekt/php/getMovieRatingUser.php", 
            method: 'GET',
            data: {
                userId: userId, 
                movieId: movieId, 
            },
            success: function(response) {
                
                var userRating = response.userRating;

                //console.log("Felhasznalo ertekeles: " + userRating);

                fillStars(userRating);
                

            },
            error: function(xhr, status, error) {
                console.error("Error fetching user rating:", error);
            }
        });
    }
    
    function fillStarsFromAverage(averageRating) {
        var roundedRating = Math.round(averageRating);
       
        $('.intro-rating .fa-star').each(function(index) {
            if (index < roundedRating) {
                $(this).removeClass('unchecked').addClass('checked');
            } else {
                $(this).removeClass('checked').addClass('unchecked');
            }
        });
    }
});
