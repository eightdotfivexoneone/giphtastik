output +=`
<div class="card" style="width: 18rem;">
<img id="animalImg" class="card-img-top" src="${response.data[i].images.fixed_height_still.url}" alt="animalImg">
<div class="card-body p-4 align-self-start">
          <h5 id="animalName" class="card-title">${searchTerm}</h5>

          <button id="pauseAnimal" type="button" class="${pause} btn btn-light"><img src="resources/img/media-pause.svg" alt="Pause Media" text-whitearia-hidden="true"> </button> 
          <button id="playAnimal" type="button" class="${play} btn btn-light btn-search"><img src="resources/img/media-play.svg" alt="Play Media" text-whitearia-hidden="true"> </button> 
          <button id="closeAnimal" type="button" class="${close} btn btn-light" ><img src="resources/img/x.svg" alt="Close"> </button> 
        </div>
</div>
$(document).ready(function() {

$(".animal-button").on("click", function(){

// console.log("search term " + $(this).attr("value"));

var searchTerm = $(this).attr("value");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=oj1rH7fHQGbu1lwdH0WZcAmP0c7lI23V&q=" + searchTerm + "&limit=10"

$.ajax({
url: queryURL,
method: "GET"
})
.then(function(response) {
// response.data.images

var output = '';

// Setting up variables for attempt at
var play = 'playAnimal';
var pause = 'pauseAnimal';
var close = 'closeAnimal';


for (i = 0; i < response.data.length; i++){
    // console.log(response); // for debugging
    //console.log(response.data[i].url); // for debugging

var giphyResponse = {stURL: response.data[i].images.fixed_height_still.url,
                      anURL: response.data[i].images.fixed_height.url      
}


output +=`
<div class="card" style="width: 18rem;">
<img id="animalImg" class="card-img-top" src="${response.data[i].images.fixed_height_still.url}" alt="animalImg">
<div class="card-body p-4 align-self-start">
          <h5 id="animalName" class="card-title">${searchTerm}</h5>

          <button id="pauseAnimal" type="button" class="${pause} btn btn-light"><img src="resources/img/media-pause.svg" alt="Pause Media" text-whitearia-hidden="true"> </button> 
          <button id="playAnimal" type="button" class="${play} btn btn-light btn-search"><img src="resources/img/media-play.svg" alt="Play Media" text-whitearia-hidden="true"> </button> 
          <button id="closeAnimal" type="button" class="${close} btn btn-light" ><img src="resources/img/x.svg" alt="Close"> </button> 
        </div>
</div>
`
// Update UI
document.getElementById('images').innerHTML = output;

// this is the "old" code for displaying directly to the screen
// var animalImage = $("<img>");
// animalImage.attr("src", giphyResponse.anURL);
// animalImage.attr("alt", "animated image");
// $("#images").prepend(animalImage);
// console.log(giphyResponse);
  
}

}); // end of .then portion of ajax call

}); // end of .animal-button click event


}); // end of document.ready 


