console.log("JS is working");

$(document).ready(function() {
    // Init Modal
    $('.modal').modal();
});

$("#tic_img").click( function() {imgClicked("tic")} );
$("#res_img").click( function() {imgClicked("res")} );
$("#buseeta_img").click( function() {imgClicked("buseeta")} );
$("#car_portal_img").click( function() {imgClicked("car_portal")} );
$("#selfie_img").click( function() {imgClicked("selfie")} );
$("#quiz_img").click( function() {imgClicked("quiz")} );

function imgClicked(imgName) {

    var images = {
        "tic": ["tic_1.png", "tic_2.png"],
        "res": ["res_vis_1.png", "res_vis_2.png"],
        "buseeta": ["buseeta_1.png"],
        "car_portal": ["car_portal_1.png"],
        "selfie": [],
        "quiz": ["quiz_1.png"]

    }
    var modal_img = $("#modal_img");

    if (imgName === "tic") {
        modal_img.attr('src', 'img/' + images["tic"][0] );

    } else if (imgName === "res") {
        modal_img.attr('src', 'img/' + images["res"][0] );

    } else if (imgName === "buseeta") {
        modal_img.attr('src', 'img/' + images["buseeta"][0] );
    }
     else if (imgName === "car_portal") {
        modal_img.attr('src', 'img/' + images["car_portal"][0] );
    }
    else if (imgName === "selfie") {
        modal_img.attr('src', 'img/' + images["selfie"][0] );
    }
    else if (imgName === "quiz") {
        modal_img.attr('src', 'img/' + images["quiz"][0] );
    }
    else {
        console.log("The universe is inherintly inconsistent");
    }

}
