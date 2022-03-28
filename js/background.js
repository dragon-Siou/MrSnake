//初始化
$(function(){
    
    $(".object")
    .bind($.mouseEvents.over, function(){
        $(this).addClass("object-hover")
    })
    .bind($.mouseEvents.out, function(){
        $(this).removeClass("object-hover")
    })


    $(".magnifier")
    .click(function(){
        //放大或縮小
        if($('.magazine-viewport').hasClass("big")){

            let heightNum = 1.39

            let h = 622
            //設定大小
            //$('.magazine').turn("size", h.heightNum, h);

            //原本是大的，回到正常大小
            $('.magazine-viewport').addClass("normal").removeClass("big");
        }
        else{


            let heightNum = 1.39

            let h = 622
            //設定大小
            //$('.magazine').turn("size", h.heightNum*1.5, h*1.5);
            //原本是小的，放大
            $('.magazine-viewport').addClass("big").removeClass("normal");
        }

        
        return false;
    })

    setMenu();
    setAuthor();
    setTablet();
    setWhiltboard();
})

function backToComic(){
    //播聲音
    let music = new Audio("./music/test.mp3");
    music.play();

    //開啟漫畫
    $(".magazine").css("display","block");
}

function closeAllOptions(){
    $(".menu").addClass("menu-close").removeClass("menu-open");
    $(".author").addClass("author-close").removeClass("author-open");
    $(".tablet").addClass("tablet-close").removeClass("tablet-open");
    $(".whiteboard").addClass("whiteboard-close").removeClass("whiteboard-open");
}

function openAllOptions(){
    $(".menu").addClass("menu-open").removeClass("menu-close");
    $(".author").addClass("author-open").removeClass("author-close");
    $(".tablet").addClass("tablet-open").removeClass("tablet-close");
    $(".whiteboard").addClass("whiteboard-open").removeClass("whiteboard-close");

}

function setMenu(){
    //回到閱讀模式
    let menuBackToComic = function(){

        backToComic()

        //解除點擊事件
        //$(".magazine-viewport").unbind("click", menuBackToComic)

        //重製動畫
        $("#menu-lightbox").removeClass("lightbox-menu-open")
            //lightbox動畫
            .addClass("lightbox-menu-close")

        $("#menu-lightbox").removeClass("lightbox-target")//.addClass("lightbox-hide");


        //.removeClass("animate__fadeInTopLeft animate__animated")

            //離開動畫
            //.addClass("animate__fadeOutTopLeft");
        //把桌面上的隱藏
        //$(".menu").addClass("menu-close").removeClass("menu-open")
        closeAllOptions();

    }

    $("#menu-close").click(menuBackToComic)

    //點擊選單
    $(".menu").click(function(){
        
        element = document.querySelector('#menu-lightbox');
        element.style.setProperty('--animate-duration', '0.5s');

        //播聲音
        let music = new Audio("./music/test.mp3");
        music.play();

        //把桌面上的開起來
        openAllOptions();
        //動畫
        /*
        $(this).removeClass('fadeIn');*/
        $("#menu-lightbox").addClass("lightbox-menu-open")
        .removeClass("lightbox-hide")//.addClass("lightbox-target")
            //.addClass("animate__fadeInTopLeft animate__animated ")
            //.removeClass("animate__fadeOutTopLeft")
            .removeClass("lightbox-menu-close")


        //關掉漫畫
        $(".magazine").css("display","none");

        canFlip=false;

        

        //$(".magazine-viewport").click(menuBackToComic)
        return false;
    })



    //選單按鈕設定
    let menuButtonIndex={
        0:2,
        1:26,
        2:47,
        3:68,
        4:88,
        5:112,
        6:134
    }

    
    for( let key in menuButtonIndex){
        //用ID去取得button
        $("#episode-" + key).click(function(){
            
            menuBackToComic();

            //翻頁，要等動畫結束
            let turn=function(){
                //點擊時翻頁
                $('.magazine').turn('page', menuButtonIndex[key])
            }

            setTimeout(turn, 100)
        })
    }


    //lightbox的點擊不要冒泡
    $("#menu-lightbox").click(function(){
        return false;
    })


    //開發中封條
    showSeal();
    
}

function showSeal(){
    //目前全部都開發中
    $("#chapter-button,#author-button,#introduction-button,#character-button").click(function(){

        //回去的函數
        let sealBackToComic = function(){
            

            //封條動畫
            $("#seal1").addClass("lightbox-seal1-close").removeClass("lightbox-seal1-open")

            setTimeout(function(){
                $("#seal2").addClass("lightbox-seal2-close").removeClass("lightbox-seal2-open")
           }, 250)
          
           setTimeout(function(){
                $("#seal3").addClass("lightbox-seal3-close").removeClass("lightbox-seal3-open")

           }, 500)

           setTimeout(function(){
                $("#seal-lightbox").removeClass("lightbox-target").addClass("lightbox-hide")
                $(".magazine-viewport").unbind(sealBackToComic)
            }, 750)
            
        }

        //點擊任意鍵回去
        $(".magazine-viewport").click(sealBackToComic)


        //跑出封條
        $("#seal-lightbox").removeClass("lightbox-hide").addClass("lightbox-target")

        //第一條的動畫
        $("#seal3").addClass("lightbox-seal3-open").removeClass("lightbox-seal3-close")
        /*
        $("#seal2").addClass("lightbox-seal2-open")
        $("#seal1").addClass("lightbox-seal1-open")*/
        setTimeout(function(){
             $("#seal2").addClass("lightbox-seal2-open").removeClass("lightbox-seal2-close")
        }, 250)
       
        setTimeout(function(){
            $("#seal1").addClass("lightbox-seal1-open").removeClass("lightbox-seal1-close")
        }, 500)
        

    })
}



function setAuthor(){
    //回到閱讀模式
    let authorBackToComic = function(){

        backToComic()

        //解除點擊事件
        $(".magazine-viewport").unbind("click", authorBackToComic)

        //重製動畫
        $("#author-lightbox").removeClass("lightbox-author-open")
            //lightbox動畫
            .addClass("lightbox-author-close")

        $("#author-lightbox").removeClass("lightbox-target")//.addClass("lightbox-hide");


        //.removeClass("animate__fadeInTopLeft animate__animated")

            //離開動畫
            //.addClass("animate__fadeOutTopLeft");
        //把桌面上的隱藏
        //$(".author").addClass("author-close").removeClass("author-open")
        closeAllOptions();
    }



    //點擊作者
    $(".author").click(function(){
        
        element = document.querySelector('#author-lightbox');
        element.style.setProperty('--animate-duration', '0.5s');

        //播聲音
        let music = new Audio("./music/test.mp3");
        music.play();

        //把桌面上的開起來
        openAllOptions();

        //動畫
        /*
        $(this).removeClass('fadeIn');*/
        $("#author-lightbox").addClass("lightbox-author-open")
        .removeClass("lightbox-hide")//.addClass("lightbox-target")
            //.addClass("animate__fadeInTopLeft animate__animated ")
            //.removeClass("animate__fadeOutTopLeft")
            .removeClass("lightbox-author-close")


        //關掉漫畫
        $(".magazine").css("display","none");

        canFlip=false;

        

        $(".magazine-viewport").click(authorBackToComic)
        return false;
    })


    //lightbox的點擊不要冒泡
    $("#author-lightbox").click(function(){
        return false;
    })
}

function setTablet(){

}

function setWhiltboard(){
    //回到閱讀模式
    let whiteboardBackToComic = function(){

        backToComic()

        //解除點擊事件
        $(".magazine-viewport").unbind("click", whiteboardBackToComic)

        //重製動畫
        $("#whiteboard-lightbox").removeClass("lightbox-whiteboard-open")
            //lightbox動畫
            .addClass("lightbox-whiteboard-close")

        $("#whiteboard-lightbox").removeClass("lightbox-target")//.addClass("lightbox-hide");


        //.removeClass("animate__fadeInTopLeft animate__animated")

            //離開動畫
            //.addClass("animate__fadeOutTopLeft");
        //把桌面上的隱藏
        //$(".author").addClass("author-close").removeClass("author-open")
        closeAllOptions();
    }



    //點擊作者
    $(".whiteboard").click(function(){
        
        element = document.querySelector('#whiteboard-lightbox');
        element.style.setProperty('--animate-duration', '0.5s');

        //播聲音
        let music = new Audio("./music/test.mp3");
        music.play();

        //把桌面上的開起來
        openAllOptions();

        //動畫
        /*
        $(this).removeClass('fadeIn');*/
        $("#whiteboard-lightbox").addClass("lightbox-whiteboard-open")
        .removeClass("lightbox-hide")//.addClass("lightbox-target")
            //.addClass("animate__fadeInTopLeft animate__animated ")
            //.removeClass("animate__fadeOutTopLeft")
            .removeClass("lightbox-whiteboard-close")


        //關掉漫畫
        $(".magazine").css("display","none");

        canFlip=false;

        

        $(".magazine-viewport").click(whiteboardBackToComic)
        return false;
    })


    //lightbox的點擊不要冒泡
    $("#whiteboard-lightbox").click(function(){
        return false;
    })
}
