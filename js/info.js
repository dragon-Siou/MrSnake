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
    $("#info-link").css("display", "none")
})


function openInfo(){    


    //關掉自己
    $("#info-head").css("display", "none")


    $("#info-link").css("display", "block")
   
}

function closeInfo(){
    $("#info-head").css("display", "block")

    $("#info-link").css("display", "none")
   
}

function openAllInfo(){
    closeInfo()
}

function closeAllInfo(){
    $("#info-head").css("display", "none")
    $("#info-link").css("display", "none")
}

function setInfoPhone(){
    $(".info-box").removeClass("info-box").addClass("phone-info-box")
    $(".info-img-fb").removeClass("info-img-fb").addClass("phone-info-img-fb")
    $(".info-img-twitter").removeClass("info-img-twitter").addClass("phone-info-img-twitter")

    //把圖片放大
    $(".info-img").addClass("phone-info-img").removeClass("info-img")

    

}