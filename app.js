//logo hover
//const logo = document.querySelector('.logo');
//logo.addEventListener('mouseover', () => {
//    logo.src = 'images/logo_hover.png';
//});
//
//logo.addEventListener('mouseleave', () => {
//    logo.src = 'images/logo.png';
//});

$('.expandListUl').hide();

$('.foldButton').click(function () {
    if ($('.expandListUl').css('display') === 'none') {
        $('.expandListUl').slideDown()
        $('.foldButton').transition({
            rotate: '90deg'
        })
    } else {
        $('.expandListUl').slideUp()
        $('.foldButton').transition({
            rotate: '0deg'
        })
    }
})
