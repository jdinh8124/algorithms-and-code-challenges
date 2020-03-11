
$(".add-product-to-cart").insertBefore("#product-detail-page-vue")

$("h4:contains(Arizona)").css("color", "red")

$("img.img-responsive[alt='Bravado Amber']").not(".img-responsive.mCS_img_loaded").trigger("click")



$("#thisCollection .product-element").toArray().reverse().each(function () {
  $(this).appendTo('#thisCollection.row');
});


$($("#thisCollection .product-element").toArray().reverse()).each(function () {
  $(this).appendTo('#thisCollection.row');
});



$($("#thisCollection .product-element").toArray().reverse()).each(function () {
  $(this).appendTo('#thisCollection .row');
});
