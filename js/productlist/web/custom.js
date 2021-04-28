$('.n_product_bg').mouseenter(function () {
    $(this).css('filter', 'brightness(90%)')

})

$('.n_product_bg').mouseleave(function () {
    $(this).css('filter', 'brightness(100%)')

})


let heart = document.getElementsByClassName('heart-button')
for (let h of heart) {


    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('n_heart_color')
        // h.classList.toggle("#span_big");

        console.log(h)
    });
}



$('.n_product_hover').mouseenter(function () {
    $('.n_booking_buttonweb').css('display', 'block')
})

$('.n_product_hover').mouseleave(function () {
    $('.n_booking_buttonweb').css('display', 'none')

})


// $('.heart-button').click(function () {
//     $(this).css('fill', '#FF9A9A');

// });
// $('.n_icon-heart').mouseleave(function () {
//     $(this).css('fill', '#ccc')
// })