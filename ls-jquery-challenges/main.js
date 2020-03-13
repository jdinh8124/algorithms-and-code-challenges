
//jQuery Basics

//1
$(".add-product-to-cart").insertBefore("#product-detail-page-vue")

//2
$("h4:contains(Arizona)").css("color", "red")

//3
$("img.img-responsive[alt='Bravado Amber']").not(".img-responsive.mCS_img_loaded").trigger("click")

//4
$($("#thisCollection .product-element").toArray().reverse()).each(function () {
  $(this).appendTo('#thisCollection .row');
});

//Bonus

//Remove John Image
// $("#John").remove()

$(".container > script:nth-child(1)").insertAfter("[src='https://code.jquery.com/jquery-3.4.1.min.js']")
//stop "Magic"
clearInterval(JohnMagic)
