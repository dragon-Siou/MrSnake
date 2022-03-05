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
    $(".info-box").css("display", "none")
})


function openInfo(){    

    //關掉自己
    $(".info-box-head").css("display", "none")


    $(".info-box").css("display", "block")
   
}

function closeInfo(){
    $(".info-box-head").css("display", "block")

    $(".info-box").css("display", "none")
   
}

function openAllInfo(){
    closeInfo()
}

function closeAllInfo(){
    $(".info-box-head").css("display", "none")
    $(".info-box").css("display", "none")
}