$(function(){

    
    //全部的
    $(".info-img")
    .bind($.mouseEvents.over, function(){
        $(this).addClass("info-img-hover")
    })
    .bind($.mouseEvents.out, function(){
        $(this).removeClass("info-img-hover")
    })
    

    //打開資訊欄
    $(".info-img-head")
    .click(openInfo)

    *//關閉資訊欄
    $(".info-img-close")
    .click(closeInfo)

    //一開始隱藏所有的東東
    $(".info-img-fb")
    .css("display", "none")

    $(".info-img-twitter")
    .css("display", "none")

    $(".info-img-close")
    .css("display", "none")
})


function openInfo(){    

    //關掉自己
    $(".info-img-head").css("display", "none")


    $(".info-img-fb").css("display", "block")
    $(".info-img-twitter").css("display", "block")
    $(".info-img-close").css("display", "block")
   
}

function closeInfo(){
    $(".info-img-head").css("display", "block")

    $(".info-img-fb").css("display", "none")
    $(".info-img-twitter").css("display", "none")
    $(".info-img-close").css("display", "none")
   
}