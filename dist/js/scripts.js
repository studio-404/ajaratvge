function changeUl(){
    $('ul.selectdropdown').each(function() {    
        var select = $(document.createElement('select')).insertBefore($(this).hide());
        $('>li a', this).each(function() {
            var a = $(this).click(function() {
                if ($(this).attr('target')==='_blank') {
                    window.open(this.href);
                }
                else {
                    window.location.href = this.href;
                }
            }),
            option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html()).click(function() {
                a.click();
            });
        });
    });
}


var bounds = [
    {min:0,max:1200,func:changeUl}
];

var resizeFn = function(){
    var lastBoundry; // cache the last boundry used
    return function(){
        var width = window.innerWidth;
        var boundry, min, max;
        for(var i=0; i<bounds.length; i++){
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max 
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);            
            }
        }
    }
};
$(window).resize(resizeFn());
$(document).ready(function(){
    $(window).trigger('resize');
});

$(".prefix-404-language div").click(function(){
	var u = $(this).data("url");
	location.href=u;  
});