$('ul.selectdropdown').each(function() {
    var width = document.body.clientWidth;
    if(width <= 1200){
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
    }
});