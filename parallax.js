$(document).ready(function(){
	$window = $(window);
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this);
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var yPosB = (yPos*0.5)+1100; 
            var yPosC = (yPos*1.5)+2100; 
            var yPosD = (yPos*2.5)+2100; 
            var yPosE = (yPos*3.5)+4500;
            var yPosF = (yPos*4.5)+2100;
            var yPosG = (yPos*5.5)+4200;
            var yPosH = (yPos*0.5)+800; 
            var yPosI = (yPos*1.5)+200; 
            var yPosJ = (yPos*2.5)+800; 
            var yPosK = (yPos*4.5)+300;
            var yPosL = (yPos*3.5)+600;
            var yPosM = (yPos*5.5)+1900;      
            
            var coords = 
            '48% '+ yPosB + 'px,'+
            '20% '+ yPosC + 'px,'+
            '30% '+ yPosD + 'px,'+
            '70% '+ yPosE + 'px,'+
            '85% '+ yPosF + 'px,'+
            '120% '+ yPosG + 'px,'+
            '5% '+ yPosH + 'px,'+
            '20% '+ yPosI + 'px,'+
            '80% '+ yPosJ + 'px,'+
            '100% '+ yPosK + 'px,'+
            '50% '+ yPosL + 'px,'+
            '30% '+ yPosM + 'px,'+
            '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});