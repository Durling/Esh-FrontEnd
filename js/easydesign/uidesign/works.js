define(function (require, exports, module) {
    require('jquery');


    $(document).ready(function () {

      $('.flowlist .flowerimg').bind('click',function(e){
      var url = '/html/easydesign/uidesign/viewWorks.html';
      window.open(url);
    });



});


})