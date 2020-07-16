

$(document).ready(function(){
   
})
    $('.ham-list').eq(0).click(function(){
        
    })


var X =0;
$('.ham-btn').click(function(){
    X++;
    X=X%2;

    console.log(X);
    if(X == 1){
        $('.ham-nav').stop().animate({left:'120'+'px'},1000);
        $('.nav-line').css({background:'black'});
        $('.ham-line').css({background:'black'});
        $('.indi').css({color:'black'});
        $('.nav-bg-slide').animate({top:'0'})
    }else if(X == 0){
        $('.ham-nav').stop().animate({left:'-120'+'%'},1000);
        $('.nav-line').css({background:'white'});
        $('.ham-line').css({background:'white'});
        $('.indi').css({color:'white'});
        $('.nav-bg-slide').animate({top:'-100'+'%'})
    }
})

$(window).on('scroll', function(){
    var percent = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    console.log(percent);
    $('.right-pro-down').css({height:percent+'%'});   
         if(percent == 100){
             $('.to-bottom').removeClass('on');
             $('.to-bottom span').eq(0).addClass('off1');
             $('.to-bottom span').eq(1).addClass('off2');
             $('.sub-bottom').find('.head-bottom').stop().animate({top:'0'}); 
             $('.start-text p').stop().animate({top:'0'})
             
             
         }
          if(percent != 100){
             $('.to-bottom').addClass('on');
             $('.to-bottom span').eq(0).removeClass('off1');
             $('.to-bottom span').eq(1).removeClass('off2');
              
        
              
           }
})


var slideNum = 0;
$('html').on('mousewheel',function(event){
        delta=event.originalEvent.wheelDelta
        has_animate=$('html').is(':animated');
       
        var percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

         $('.right-pro-down').css({height:percent+'%'})
          console.log(percent+'per');
//        console.log(about_top);
//        console.log(main_top);
//        console.log(my_info_top);
//        console.log(me_top);
//        console.log(skills_top);
//        console.log(win_top);
    
      
    
    
    if(percent >= 70){
         $('.right-probar').stop().animate({right:'-38px'})
         $('.pro-frame').stop().animate({bottom:'50px'})
    }else if(percent <= 70){
         $('.right-probar').stop().animate({right:'0'})
         $('.pro-frame').stop().animate({bottom:'-50px'})
        
    }if(percent == 100){
       if(delta > 0 && slideNum <0){
           slideNum = slideNum+5;
           console.log(slideNum);
           $('.slide-frame').css({left:slideNum+'%'})
       }if(delta < 0 && slideNum <= 0 && slideNum > -100){
           slideNum = slideNum-5;
           console.log(slideNum+'slideNum');
           $('.slide-frame').css({left:slideNum+'%'})
           if(slideNum > 0){
               setInterval(slideNum=0,1000)
           }
       }if(percent == 100 && !slideNum == 0){
            $('html, body').css({'overflow': 'hidden'});
       }else if(percent == 100 && slideNum == 0 && delta > 0){
            setTimeout(function(){
	$('html, body').css({'overflow': 'auto', 'height': 'auto'});
      }, 1000);
       }
     
    }
   
//      if(!has_animate && delta<0 && page<4){
//          page++;
//        
//      }else if(!has_animate && delta>0 && page>0){
//          page--
//       
//      }
       
        
      var negaNum = slideNum * -1;
      console.log(slideNum);     
      $('.pro-up').css({width:negaNum+'%'});          
      
        
      }
    )

    




