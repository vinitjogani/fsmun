//var host = "https://script.google.com/macros/s/AKfycbzY66H5DHkaggkn7xtTxSeM_g-XOtX5J_iBoX5sHipbiQdTs3Mn/exec";

function setWidth(){
    var oldWidth = $(".slides").width()
    var newWidth = $("#control").width();
    var aspectRatio = newWidth/700;
    var newHeight = aspectRatio * 500;
    $(".slides").css("width", newWidth);
    $(".slides").css("height", newHeight);
    $("#slider1_container").css("height", newHeight);
    $("#slider1_container").css("width", newWidth);
    
}
$(document).ready(function(){
    setWidth();
    setInterval(setWidth, 10000);
    $("head").append("<script src='js/vendor/countdown.js'></script>");
    $("head").append("<link type='text/css' rel='stylesheet' href='fonts/Lato.css'>");
    $("body").append("<footer>FOR FURTHER INFORMATION, EMAIL AT <a href='mailto:fsmun@fountainheadschools.org'>FSMUN@FOUNTAINHEADSCHOOLS.ORG</a></footer>");
    
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'img/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
    
$(".teamMember").children(".descriptionCell").hide();
   
$.get("heading.html").done(function(response){
    var x = $(response);
    $("body").prepend(x);
});

        $("body").append($('<div id="twitterButton"><img id="facebookButtonImage" src="img/btf.png" title="News and updates" onclick="window.open(\'https://www.facebook.com/pages/FSMUN-Fountainhead-School-Model-United-Nations/703296336427825\')"/><img id="twitterButtonImage" src="img/btl.png" title="News and updates" onclick="window.open(\'https://www.twitter.com/fskmun\')" /></div>'));
    
    $("#countdown2").countdown("2015/11/28").on('update.countdown', function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
 $this = $(this).html(event.strftime('<h2>COMING UP IN</h2> '
     + '<span>'+event.offset.totalDays+'</span> days '
     + '<span>%H</span> hours '
     + '<span>%M</span> minutes '
     + '<span>%S</span> seconds'));
 });
    
    });

$(document).on("mouseenter",".teamMember", function(){
    $(this).children(".descriptionCell").stop(true, false).slideDown(500);
    $(this).children(".titleCell").slideUp(500);
    $(this).css("border-bottom","solid");   
    $(this).css("border-bottom-color","black");
    $("#resources").children().children(".teamMember").css("border-bottom-width",1);
});

$(document).on("mouseleave",".teamMember", function(){
    $(this).css("color","#252525");   
    $(this).css("background-color","#fff");
    $(this).css("border-bottom","none");   
    $(this).children(".descriptionCell").stop(true, false).slideUp(500);
    $(this).children(".titleCell").slideDown(500);
    $("#resources").children().children(".teamMember").css("border-bottom-width",1);
});

