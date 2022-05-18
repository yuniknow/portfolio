$(function(){
    // 500px 도달시 .btn_top이  나타나게 함 
    $(window).scroll(function(){
        if ($(this).scrollTop()>500) {$(".btn_top").fadeIn();}
        else {$(".btn_top").fadeOut();}
    });


    // 하단 화살표, 로고 클릭시 최상단으로 가게 하기
    $(".btn_top,.logo").on("click",function(){
        $("html,body").animate({scrollTop:0},400);
    });


    // 스크롤 이동시 해당 영역인 메뉴색과 라인색 변경, &&(=and=그리고)
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if (height>=500 && height <=1273){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(1)").addClass("on on2");
        }else if (height>=1274 && height <=5268){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(2)").addClass("on on2");
        }else if (height>=5269){
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(3)").addClass("on on2");
        }else {
            $(".header_main>ul>li").removeClass("on on2");
            $(".header_main>ul>li:nth-child(4)").addClass("on on2");
        }
    });


    // 각 메뉴 클릭시 컨텐츠 영역의 아이디값을 가진 곳으로 이동

    /* .position()  -  포지션 기준이 되는 요소를 기준으로 선택한 요소에서
        가로/세로 떨어진 위치의 좌표값을 반환하거나 변경할때 사용 */

    // skill
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#skill").position();     //skill의 위치값을 about에 저장
        $("html,body").animate({scrollTop:about.top-80},400)
    });

    // portfolio
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position();     //skill의 위치값을 about에 저장
        $("html,body").animate({scrollTop:about.top-70},400)
    });

    // etc
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position();     //skill의 위치값을 about에 저장
        $("html,body").animate({scrollTop:about.top-40},400)
    });
    

    /* ====================================================================
        etc_1 팝업코딩
    ==================================================================== */
    // 썸네일 클릭시 배경과 이미지가 나타남
    $("#etc>.etc_main>.etc_1").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup1").fadeIn();
        $("#popup>.popup_main>#popup1>button").fadeIn();
    });

    // 팝업 화살표 코딩 - 마우스가 들어왔을때
    $("#popup>.popup_main>#popup1").mouseenter(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup1").mouseleave(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeOut();
    });

    // bg를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
    });

    // 이미지를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>#popup1>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
    });
    
    /* ====================================================================
        etc_2 팝업코딩
    ==================================================================== */
    // 썸네일 클릭시 배경과 이미지가 나타남
    $("#etc>.etc_main>.etc_2").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup2").fadeIn();
        $("#popup>.popup_main>#popup2>button").fadeIn();
    });

    // 팝업 화살표 코딩 - 마우스가 들어왔을때
    $("#popup>.popup_main>#popup2").mouseenter(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup2").mouseleave(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeOut();
    });

    // bg를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup2").fadeOut();
        $("#popup>.popup_main>#popup2>button").fadeOut();
    });

    // 이미지를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>#popup2>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup2").fadeOut();
        $("#popup>.popup_main>#popup2>button").fadeOut();
    });
    
    /* ====================================================================
        etc_3 팝업코딩
    ==================================================================== */
    // 썸네일 클릭시 배경과 이미지가 나타남
    $("#etc>.etc_main>.etc_3").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup3").fadeIn();
        $("#popup>.popup_main>#popup3>button").fadeIn();
    });

    // 팝업 화살표 코딩 - 마우스가 들어왔을때
    $("#popup>.popup_main>#popup3").mouseenter(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup3").mouseleave(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeOut();
    });

    // bg를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup3").fadeOut();
        $("#popup>.popup_main>#popup3>button").fadeOut();
    });

    // 이미지를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>#popup3>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup3").fadeOut();
        $("#popup>.popup_main>#popup3>button").fadeOut();
    });
    
    /* ====================================================================
        etc_4 팝업코딩
    ==================================================================== */
    // 썸네일 클릭시 배경과 이미지가 나타남
    $("#etc>.etc_main>.etc_4").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup4").fadeIn();
        $("#popup>.popup_main>#popup4>button").fadeIn();
    });

    // 팝업 화살표 코딩 - 마우스가 들어왔을때
    $("#popup>.popup_main>#popup4").mouseenter(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup4").mouseleave(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeOut();
    });

    // bg를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup4").fadeOut();
        $("#popup>.popup_main>#popup4>button").fadeOut();
    });

    // 이미지를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>#popup4>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup4").fadeOut();
        $("#popup>.popup_main>#popup4>button").fadeOut();
    });
    
    /* ====================================================================
        etc_5 팝업코딩
    ==================================================================== */
    // 썸네일 클릭시 배경과 이미지가 나타남
    $("#etc>.etc_main>.etc_5").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup5").fadeIn();
        $("#popup>.popup_main>#popup5>button").fadeIn();
    });

    // 팝업 화살표 코딩 - 마우스가 들어왔을때
    $("#popup>.popup_main>#popup5").mouseenter(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup5").mouseleave(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeOut();
    });

    // bg를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup5").fadeOut();
        $("#popup>.popup_main>#popup5>button").fadeOut();
    });

    // 이미지를 클릭했을때 팝업창 사라짐
    $("#popup>.popup_main>#popup5>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup5").fadeOut();
        $("#popup>.popup_main>#popup5>button").fadeOut();
    });
        

    /* ====================================================================
        popup slide
    ==================================================================== */
    
    var max = 0;
    var current = 0;
    var container; //선언

    function animate ($direction){

        // 받아온 값이 next이면, if문을 실행
        if ($direction == "next"){
            $(container.children()[1]).css("margin-left","800px");
            // container.children()[0] 객체를 container 객체의 마지막에 추가
            container.append(container.children()[0]);  // .append() - 선택한 요소 내의 마지막 위치에 새 요소 생성
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션

        // 받아온 값이 prev이면, if문을 실행
        }else if ($direction == "prev"){
            container.prepend(container.children()[max - 1]); // .prepend() - 선택한 요소 내의 앞의 위치에 새 요소 생성
            $(container.children()[0]).css("margin-left","800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션
        }
    }

    // popup prev + next (이전, 다음 버튼)
    function prev(){
        current--;  // 1씩 감소
        if (current < 0) current = max - 1;
        animate("prev");
    }
    function next(){
        current++;  // 1씩 증가
        if (current > max - 1) current - 0;
        animate("next");
    }

    // prev Event
    $("#popup>.popup_main>.popup>button.prev").on("click",function(){
        container = $(this).parent(".popup").find(".popList");
        max = container.children().length;  // 해당변수 반환(자식의 갯수)
        container.addClass("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        prev();
    });

    // next Event
    $("#popup>.popup_main>.popup>button.next").on("click",function(){
        container = $(this).parent(".popup").find(".popList");
        max = container.children().length;  // 해당변수 반환(자식의 갯수)
        container.addClass("margin-left","-800px");
        container.append(container.children()[max - 1]);
        next();
    });
    
}); //end