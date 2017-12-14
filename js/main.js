$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'800px',width:'800px'});
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:'1'});
        $("#menu ul").css('visibility','visible');
        $("#menu-circle-layer").animate({height:'850px',width:'850px'});
        
        $("#social-media").animate({height:'400px',width:'400px'});
        $("#container").delay(300).animate({opacity:'1'});
        $("#container").css('visibility','visible');
        $("#social-circle-layer").animate({height:'450px',width:'450px'});
        
        $("#bg").delay(200).animate({opacity:'1'});
        $("#bg").css('visibility','visible');
        
        
    });
    $("#bg").click(function(){
        $("#main").animate({height:'50px',width:'50px'});
        $("#icon").fadeIn();
        $("#menu ul").animate({opacity:'0'});
        $("#menu ul").css('visibility','hidden');
        $("#menu-circle-layer").animate({height:'0px',width:'0px'});
        
        $("#social-media").animate({height:'0px',width:'0px'});
        $("#container").animate({opacity:'0'});
        $("#container").css('visibility','hidden');
        $("#social-circle-layer").animate({height:'0px',width:'450px'});
        
        $("#bg").animate({opacity:'0'});
        $("#bg").css('visibility','hidden');
        
        
    });
});