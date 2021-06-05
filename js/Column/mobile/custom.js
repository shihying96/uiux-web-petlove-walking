$('.n_col').click(function () {

    $(this).children().css('color', '#89a7c2')
    $(this).siblings().children().css('color', '#ccc')
})


$('.n_col_2').click(function () {

    $(this).children().css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().children().css('border', 'none')
})

$('.n_category01-1').click(function () {

    $('.n_category02.first').css('display', 'flex')

    $('.n_category02.second').css('display', 'none')
    $('.n_category02.third').css('display', 'none')
})


$('.n_category01-2').click(function () {

    $('.n_category02.second').css('display', 'flex')

    $('.n_category02.first').css('display', 'none')
    $('.n_category02.third').css('display', 'none')
})


$('.n_category01-3').click(function () {

    $('.n_category02.third').css('display', 'flex')

    $('.n_category02.first').css('display', 'none')
    $('.n_category02.second').css('display', 'none')
})
$('.listtoptext').click(function () {
    $(this).css('color', '#89A7C2').siblings().css('color', '#CCCCCC')
})




$('.toptextone').click(function () {
    $('.listsecondone').css('display', 'flex')
    $('.listsecondtwo').hide()
    $('.listsecondthree').hide()
    $('.listsecondfour').hide()
    $('.listthird').hide()
    $('.aa_test').hide()
})

$('.toptexttwo').click(function () {
    $('.listsecondtwo').css('display', 'flex')
    $('.listsecondone').hide()
    $('.listsecondthree').hide()
    $('.listsecondfour').hide()
    $('.listthird').hide()
    $('.aa_test').hide()
})

$('.toptextthree').click(function () {
    $('.listsecondthree').css('display', 'flex')
    $('.listsecondone').hide()
    $('.listsecondtwo').hide()
    $('.listthird').hide()
    $('.listsecondfour').hide()
    $('.aa_test').hide()
})


$('.toptextfour').click(function () {
    $('.listsecondfour').css('display', 'flex')
    $('.listsecondone').hide()
    $('.listsecondtwo').hide()
    $('.listsecondthree').hide()
    $('.listthird').hide()
    $('.aa_test').hide()
})





$('.listsecondtextone').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().css('border', 'none')

})

$('.listsecondtexttwo').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().css('border', 'none')

})
$('.listsecondtextthree').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().css('border', 'none')
})

$('.listsecondtextfour').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)')
    $(this).siblings().css('border', 'none')
})


$('.secondtextone').click(function () {
    $('.listthirdone').css('display', 'flex')
    $('.listthirdtwo').hide()
    $('.aa_test').hide()
})

$('.secondtexttwo').click(function () {
    $('.listthirdtwo').css('display', 'flex')
    $('.listthirdone').hide()
    $('.aa_test').hide()
})

$('.listthirdtext').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)').css('color', '#89A7C2')
    $(this).siblings().css('border', 'none').css('color', '#cccccc')
    $('.aa_test').show()
})

$('.listfourthtext').click(function () {

    $(this).css('border-bottom', '3px solid var(--mainyellow)').css('color', '#89A7C2')
    $(this).siblings().css('border', 'none').css('color', '#cccccc')

})





$('.thirdtextone1').click(function () {

    $('.listfourthone1').css('display', 'flex').siblings().hide()

})
$('.thirdtexttwo1').click(function () {
    $('.listfourthtwo1').css('display', 'flex').siblings().hide()

})

$('.thirdtextthee1').click(function () {
    $('.listfourththree1').css('display', 'flex').siblings().hide()

})

$('.thirdtextfour1').click(function () {
    $('.listfourthfour1').css('display', 'flex').siblings().hide()

})
$('.thirdtextfive1').click(function () {
    $('.listfourthfive1').css('display', 'flex').siblings().hide()

})

$('.thirdtextsix1').click(function () {
    $('.listfourthsix1').css('display', 'flex').siblings().hide()

})

$('.thirdtextseven1').click(function () {
    $('.listfourthseven1').css('display', 'flex').siblings().hide()

})

$('.thirdtexteight1').click(function () {
    $('.listfourtheight1').css('display', 'flex').siblings().hide()

})

$('.thirdtextnine1').click(function () {
    $('.listfourthnine1').css('display', 'flex').siblings().hide()

})

$('.thirdtextten1').click(function () {
    $('.listfourthten1').css('display', 'flex').siblings().hide()

})

$('.thirdexteleven1').click(function () {
    $('.listfourtheleven1').css('display', 'flex').siblings().hide()

})







$('.thirdtextone2').click(function () {
    $('.listfourthone2').css('display', 'flex').siblings().hide()

})
$('.thirdtexttwo2').click(function () {
    $('.listfourthtwo2').css('display', 'flex').siblings().hide()

})

$('.thirdtextthee2').click(function () {
    $('.listfourththree2').css('display', 'flex').siblings().hide()

})

$('.thirdtextfour2').click(function () {
    $('.listfourthfour2').css('display', 'flex').siblings().hide()

})
$('.thirdtextfive2').click(function () {
    $('.listfourthfive2').css('display', 'flex').siblings().hide()

})

$('.thirdtextsix2').click(function () {
    $('.listfourthsix2').css('display', 'flex').siblings().hide()

})

$('.thirdtextseven2').click(function () {
    $('.listfourthseven2').css('display', 'flex').siblings().hide()

})

$('.thirdtexteight2').click(function () {
    $('.listfourtheight2').css('display', 'flex').siblings().hide()

})

$('.thirdtextnine2').click(function () {
    $('.listfourthnine2').css('display', 'flex').siblings().hide()

})

$('.thirdtextten2').click(function () {
    $('.listfourthten2').css('display', 'flex').siblings().hide()

})

$('.thirdtexteleven2').click(function () {
    $('.listfourtheleven2').css('display', 'flex').siblings().hide()

})