define(function (require, exports, module) {
    require('jquery');


    $(document).ready(function () {
      $('.Collapse').hide();
      $('.flowlist .flowerimg').bind('click',function(e){
        var url = '/html/easydesign/Model/viewModel.html';
        window.open(url);
      });
    })

});