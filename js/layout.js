var timer;

function benefit(){ // 특징 애니메이션
  var currentBenefit=$(".fullCnt1 .benefitWrap").find(".on");
  var nextBenefit=currentBenefit.next();
  currentBenefit.removeClass("on");
  nextBenefit.addClass("on");
  // console.log(currentBenefit.index(), nextBenefit.index())
  if(currentBenefit.index() == $(".fullCnt1 .benefitWrap li").length-1){
    $(".benefitWrap li").eq(0).addClass("on");
  }

}

function gauge(){ // 게이지 애니메이션
  var currentGauge=$(".fullCnt1 .gaugeWrap").find(".on"); // 게이지 현재 active
  var nextGauge=currentGauge.next(); // 게이지 현재 active 다음
  var currentBenefit=$(".fullCnt1 .txtMonthWrap").find(".on"); // 달(month) 현재  active
  var nextBenefit=currentBenefit.next(); // 달(month) 현재 active 다음

  currentGauge.removeClass("on");
  currentBenefit.removeClass("on");

  setTimeout(function(){
    nextGauge.addClass("on");
    nextBenefit.addClass("on");
  }, 22);

  if(currentGauge.index() == $(".fullCnt1 .gaugeWrap li").length-1){
    $(".fullCnt1 .gaugeWrap li").eq(currentGauge.index()).addClass("on");
    $(".fullCnt1 .txtMonthWrap li").eq($(".fullCnt1 .txtMonthWrap li").length-1).addClass("on");
    clearInterval(timer); // 게이지 애니메이션 종료
    setTimeout(function(){
      /* 게이지 애니메이션 종료 후 특징 애니메이션 */
      $(".benefitWrap li").eq(0).addClass("on");
      setInterval(benefit, 1000);
    }, 300);
  }
}

window.addEventListener("load", function(){
  setTimeout(function(){
    var loadSct = $(window).scrollTop();
    var loadPosStatus = ($(".fullCnt1").offset().top + parseInt($(".fullCnt1").css("height"))) / 2;

    if(loadSct < loadPosStatus) {
      $("html, body").stop().animate({scrollTop: $("#event_wrap").offset().top}, 400);
      setTimeout(function(){
        $(".txt_title").addClass("on");
        setTimeout(function(){
          $(".img_cnt_01").addClass("on");
          setTimeout(function(){
            $(".act_line").animate({height:"648px"}, 1200, "linear");
            $(".monthWrap").animate({opacity: 1}, 300);
            $(".fullCnt1 .gaugeWrap li").eq(0).addClass("on");
            timer = setInterval(gauge, 150);
          }, 800);
        }, 500);
      }, 400);
    }else {
      setTimeout(function(){
        $(".txt_title").addClass("on");
        setTimeout(function(){
          $(".img_cnt_01").addClass("on");
          setTimeout(function(){
            $(".act_line").animate({height:"648px"}, 1200, "linear");
            $(".fullCnt1 .gaugeWrap li").eq(0).addClass("on");
            timer = setInterval(gauge, 150);
          }, 800);
        }, 500);
      }, 200);
    }
  }, 100);
});