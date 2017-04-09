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

var Gurpreet = {
    images : {
        "tic": ["tic_1.png", "tic_2.png"],
        "res": ["res_vis_1.png", "res_vis_2.png"],
        "buseeta": ["buseeta_1.png"],
        "car_portal": ["car_portal_1.png"],
        "selfie": [],
        "quiz": ["quiz_1.png"]
    },
    selectedPro : null,
    imgIdx: 0
}

function imgClicked(imgName) {
    Gurpreet.selectedPro = imgName;
    Gurpreet.imgIdx = 0;
    $("#modal_img").attr('src', 'img/' + Gurpreet.images[Gurpreet.selectedPro][Gurpreet.imgIdx] );
}


$("#modal_img").click( function() {
    Gurpreet.imgIdx += 1;
    Gurpreet.imgIdx = Gurpreet.imgIdx % Gurpreet.images[Gurpreet.selectedPro].length;
    $("#modal_img").attr('src', 'img/' + Gurpreet.images[Gurpreet.selectedPro][Gurpreet.imgIdx] );
});
