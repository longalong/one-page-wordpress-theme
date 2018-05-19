'use strict';

//smooth scroll

$('a[href*="#"]').click(function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 800);
});

//menu color change on different sections

$(window).scroll(function(){
    
    var y = window.pageYOffset;
    //console.log(y);
    var navHeight = document.getElementById('nav').offsetHeight;
    var homeHeight = document.getElementById('home').offsetHeight;
    //console.log(homeHeight);
    var aboutHeight = document.getElementById('about').offsetHeight;
    var workHeight = document.getElementById('work').offsetHeight;
    var blogHeight = document.getElementById('blog').offsetHeight;
    var pageOffset = 0;
    
//home section
    
    pageOffset = navHeight;
    //console.log(pageOffset);
    if(y >= pageOffset) {
        $('#nav').css({'transition':'all 0.3s'});
        $('#nav').css({'background-color':'rgba(255,255,255,0.1)'});
    } else {
        $('#nav').css({'background-color':'transparent'});
        $('.nav-link').css({'color':'#fff'});
    }
    
//about section
    
    pageOffset = homeHeight - navHeight;
    if(y >= pageOffset) {
        $('#nav').css({'transition':'all 0.3s'});
        $('#nav').css({'background-color':'rgba(36,204,205,1)'});
    }
    
//work section
    
    pageOffset = homeHeight + aboutHeight - navHeight;
    if(y >= pageOffset) {
        $('#nav').css({'transition':'all 0.3s'});
        $('#nav').css({'background-color':'rgba(246,117,161,1)'});
        $('.circle').css({'animation': 'progress 1s ease-out forwards'});
    }
    else{
        $('.circle').css({'animation': 'none'});
    }
    
//blog section
    
    pageOffset = homeHeight + aboutHeight + workHeight - navHeight;
    if(y >= pageOffset) {
        $('#nav').css({'transition':'all 0.3s'});
        $('#nav').css({'background-color':'rgba(254,218,187,1)'});
    }
    
//contact section
    
    pageOffset = homeHeight + aboutHeight + workHeight + blogHeight - navHeight;
    if(y >= pageOffset) {
        $('#nav').css({'transition':'all 0.3s'});
        $('#nav').css({'background-color':'rgba(36,204,205,1)'});
    }
    
});