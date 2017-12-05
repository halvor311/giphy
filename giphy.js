$(document).ready(function(){
    $("button").on("click", function(){
        var animal = $(this).attr("data-animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search";
        //QPjuM8vyS72RpyeDGJroTuc8EKhkBnZu
        $.ajax({
            url: queryURL,
            method: "GET",
            data: {
                q: animal,
                api_key: "dc6zaTOxFJmzC",
                limit: 10
         
            }
        })
        .done(function (response){
            console.log(response);
            var results = response.data;
            $("#gifsHere").empty();
    
            for (var i= 0, len= results.length; i< len; i++){
                var animalDiv = $("<div>");
                var pRating = $("<p>").text("Rating: " + results[i].rating);
                var animalImage = $("<img data-still data-animated class = 'still'>");
                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animated", results[i].images.fixed_height.url);
                animalImage.attr("src", results[i].images.fixed_height_still.url);
                animalDiv.append(pRating);
                animalDiv.append(animalImage);
                $("#gifsHere").prepend(animalDiv);
            }
            
        })
    })
    $("body").on("click", "img", function(){
        if ($(this).hasClass("still")){
            //when a still image (class=still) is clicked change src url from fixed_height_still.url to fixed_height.url (data-animated attribute value)
            var animatedImgSrc = $(this).attr("data-animated");
            $(this).attr("src", animatedImgSrc);
            $(this).removeClass("still");
        }
        else{
            //when a non-still image (no still class) is clicked change src url from fixed_height.url to fixed_height_still.url (data-still attribute value)
            var stillImgSrc = $(this).attr("data-still");
            $(this).attr("src", stillImgSrc);
            $(this).addClass("still");
        }
    
    })
    //trying to get the search button to do something.
    
        
    })

// $(animalImage).on("click", function(){
//     if (state==="animate"){
//             $(this).attr("animalImage", $(this).attr("data-animate"));
//             $(this.attr("data-state", "animate"))
//         } else {
//             $(this).attr("animalImage", $(this).attr("data-still"));
//             $(this).attr("data-state", "still");
//         }

// })
