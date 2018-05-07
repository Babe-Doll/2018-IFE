$(document).ready(function(){
    $(".nav-sub ul li").click(function(){
        var number=$(".nav-sub ul li").index(this);
        $(this).addClass("checked");
        $(this).siblings().removeClass("checked");
        $(".cont:eq("+number+")").show();
        $(".cont:eq("+number+")").siblings().hide();
    });
});
$(document).ready(function(){
    $(".num ul li").click(function(){
        var number=$(".num ul li").index(this);
        $(this).addClass("s-checked");
        $(this).siblings().removeClass("s-checked");
    });
});