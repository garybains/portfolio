// Initialization for Modal to work
$(document).ready(function() {
    $('.modal').modal();
});

// Trigeers for various images to invoke the Modal with specific img
$("#tic_img").click( function() {imgClicked("tic")} );
$("#res_img").click( function() {imgClicked("res")} );
$("#buseeta_img").click( function() {imgClicked("buseeta")} );
$("#car_portal_img").click( function() {imgClicked("car_portal")} );
$("#selfie_img").click( function() {imgClicked("selfie")} );
$("#quiz_img").click( function() {imgClicked("quiz")} );

// global variable Gurpreet to contain all image names and related parameters
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

// handel the click event from the project img
function imgClicked(imgName) {
    Gurpreet.selectedPro = imgName;
    Gurpreet.imgIdx = 0;
    setModalImg();
}

// handel click of modal image i.e change to next img in same project
$("#modal_img").click( function() {
    Gurpreet.imgIdx += 1;
    Gurpreet.imgIdx %= Gurpreet.images[Gurpreet.selectedPro].length;
    setModalImg();
});

// setting modal image based on project and imgIdx
function setModalImg() {
    $("#modal_img").attr('src', 'img/' + Gurpreet.images[Gurpreet.selectedPro][Gurpreet.imgIdx] );
}
