console.log("JS is working");

$(document).ready(function() {
    // Init Modal
    $('.modal').modal();
});

$("#tic_img").click( function() {imgClicked("tic")} );
$("#res_img").click( function() {imgClicked("res")} );

var images = {
    "tic": ["tic_1.png", "tic_2.png"]
}

function imgClicked(imgName) {

    var modal_img = $("#modal_img");

    if (imgName === "tic") {
        console.log("Tic image clicked");
        modal_img.attr('src', 'img/' + images["tic"][0] );
    } else {
        console.log("Some other image clicked");
        modal_img.attr('src', 'img/' + images["tic"][1] );
    }

}
