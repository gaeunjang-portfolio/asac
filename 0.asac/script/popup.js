$(function(){
    $('.box1 ul:nth-child(1) .brunch_btn').click(function(){
        $('.popup1').fadeIn();//show()
    });
    $('.box1 ul:nth-child(2) .brunch_btn').click(function(){
        $('.popup2').fadeIn();//show()
    });


    $('.dessert_inner ul:nth-child(1) .dessert_btn').click(function(){
        $('.popup3').fadeIn();//show()
    });
    $('.dessert_inner ul:nth-child(2) .dessert_btn').click(function(){
        $('.popup4').fadeIn();//show()
    });

    $('.beverage_01 ul:nth-child(2) .beverage_btn').click(function(){
        $('.popup5').fadeIn();//show()
    });

    $('.beverage_02 ul:nth-child(1) .beverage_btn').click(function(){
        $('.popup6').fadeIn();//show()
    });


    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });  
});







