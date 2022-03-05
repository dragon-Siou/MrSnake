$(function(){
    //設定第一章按鈕
    $(".chapter-button-head").click(function(){
        $('.magazine').turn("page",1)
    })
    $(".chapter-button-0").click(function(){
        $('.magazine').turn("page",2)
    })
    $(".chapter-button-1").click(function(){
        $('.magazine').turn("page",26)
    })
    $(".chapter-button-2").click(function(){
        $('.magazine').turn("page",47)
    })
    $(".chapter-button-3").click(function(){
        $('.magazine').turn("page",68)
    })
    $(".chapter-button-4").click(function(){
        $('.magazine').turn("page",89)
    })
    $(".chapter-button-5").click(function(){
        $('.magazine').turn("page",113)
    })
})

function openAllChapter(){
    $(".chapter-box").css("display", "block")
}

function closeAllChapter(){
    $(".chapter-box").css("display", "none")
}