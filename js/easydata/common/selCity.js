define(function(require, exports, module) {

    $('#selCity').hover(function() {
        $('.pop-up').show();
    },function() {
        $('.pop-up').hide();
    });

    // 设置输入框的值
    var setVal = function(obj) {
        var hl = $(obj).find('span').html();
        $('.dropdownInput').val(hl);
    }

    // 省份
    $('.provinces>.item').on('click', function() {
        var index = $(this).index();

        setVal(this);

        var obj = $(this).nextAll('.sub-items').eq(0);
        obj.show();
        $('.sub-items ul').hide();
        obj.find('ul:eq('+index+')').show();
    })
    // 最终城市
    $('.sub-items .item').on('click', function() {
        if($(this).index() != 0){
            setVal(this);
        }
        $('.pop-up').hide();
    })

    // 选择热门城市
    $('.zxcities>.item').on('click', function() {
        setVal(this);
        $('.pop-up').hide();
    })

});