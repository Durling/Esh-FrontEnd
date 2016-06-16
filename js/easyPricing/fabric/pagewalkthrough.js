define(function (require, exports, module) {
  require('jquery');
  require('js/lib/pagewalkthrough/jquery.pagewalkthrough-1.1.0');
  var quickPanel = require('js/common/quickPanel/quickPanel');
  require('js/lib/validation/validation');


  //检验用户身份
  function showUserGuideByIdentity(){
    var str_url_search = window.location.search;
    var unlogin = /UserIdentity=unlogin/;
    var loggedOn = /UserIdentity=loggedOn/;
    var VIPUser = /UserIdentity=VIPUser/;
    var isUpdate = false;
    if(str_url_search){
        if(loggedOn.exec(str_url_search)){
          return walkthrough_loggedOn;
        }

      // if(loggedOn.exec(str_url_search)){
      //   return walkthrough_loggedOn;
      // }else if(VIPUser.exec(str_url_search)){
      //   return walkthrough_VIPUser;
      // }
    }
    return walkthrough_VIPUser;

  }



    //已登录用户引导项
    var walkthrough_loggedOn = {

        steps:
            [
            {

                 wrapper: '#hLight_step1', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:0,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step1',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'top',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '730'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){

                   return true;
                 },
                 onEnter:function(){

                    return true;
                }
           },
           {

                 wrapper: '#hLight_step2', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:0,
                 userWidth:710,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step2',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'bottom',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '730'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){
                   return true;
                 },
                 onEnter:function(){
                    selectDropdownGuide(20);
                    return true;
                }
           }

            ],
            onLoad: false,     //只在页面第一次加载时执行
            name: 'Walkthrough',
            onClose: function(){
              removeStyle();
              quickPanel.MoveBox();
              return true;
            },
            onCookieLoad: function(){

            },
            onAfterShow:function(){
             electDropdownGuide(20);
              initStyle();
              firstLoadGuide();
              skipGuide();
              return true;
            }

      };

       //vip用户引导项
       var walkthrough_VIPUser = {

        steps:
            [
            {

                 wrapper: '#hLight_step1', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:0,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step1',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'top',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '700'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){

                   return true;
                 },
                 onEnter:function(){
                    return true;
                }
           },
           {

                 wrapper: '#hLight_step2', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:150,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step2',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'bottom',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '700'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){

                   return true;
                 },
                 onEnter:function(){

                    return true;
                }
           },
           {

                 wrapper: '#hLight_step3', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:150,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step3',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'bottom',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '700'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){
                   return true;
                 },
                 onEnter:function(){
                    selectDropdownGuide('#hLight_step3','#hLight_step3 .increase,#hLight_step3 .decrease','');
                    return true;
                }
           },
           {

                 wrapper: '#hLight_step4', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:250,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step4',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'bottom',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '700'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){
                   return true;
                 },
                 onEnter:function(){
                    selectDropdownGuide('#hLight_step4','#dyed-method .label_radio','');
                    return true;
                }
           },
           {

                 wrapper: '#hLight_step5', //高亮区域 class 或 id
                 margin: '0',         //最好别改
                 isTopFix: false,      //要高亮区域是否固定在顶部
                 appendScrollNum:250,
                 //引导说明文字图片区域
                 popup:
                 {
                   content: '#guide_step5',//引导元素id/class(提前在页面定义)
                   type: 'tooltip',      //类型
                   position: 'top',   //相对高亮区域的位置
                   offsetHorizontal: 0,  //水平位置
                   offsetVertical: 0,    //垂直位置
                   width: '700'
                 },
                 accessable:true,//是否与高亮区域内元素互动
                 lockScrolling: false//是否随滚动条移动
                 ,onLeave:function(){
                   return true;
                 },
                 onEnter:function(){
                    selectDropdownGuide('#hLight_step5','#easySoftHomePrice_rad, #factoryPrice_rad','top','');
                    return true;
                }
           }

            ],
            onLoad: false,     //true只在页面第一次加载时执行
            name: 'Walkthrough',
            onClose: function(){
              removeStyle();
              quickPanel.MoveBox();
              return true;
            },
            onCookieLoad: function(){

            },
            onAfterShow:function(){
              initStyle();
              firstLoadGuide();
              skipGuide();

            }

      };



      //控制按钮  上一步 下一步 刷新 关闭
      $('.prev-step').live('click', function(e){
          $.pagewalkthrough('prev',e);
      });

      $('.next-step').live('click', function(e){
          var activeP = $.pagewalkthrough('getOptions', true);
          var cIndex = $.pagewalkthrough('currIndex');
          wrapperId = activeP.steps[cIndex].wrapper;
          var pass = $(wrapperId).find('input[type=text]').valid();
          if(pass){
             $.pagewalkthrough('next',e);
          }

      });

      $('.restart-step').live('click', function(e){
          $.pagewalkthrough('restart',e);
      });

      $('.close-step').live('click', function(e){
          $.pagewalkthrough('close');
          removeStyle();
          quickPanel.MoveBox();

      });




      //计算无滚动条的页面宽度
      function windowWidth() {
        return $(window).innerWidth() || $(window).width();
      }

      function initStyle(){


      }

      function removeStyle(){
         $(document.body).css("overflow","");

      }

      //跳过引导层
      function skipGuide(){
         $('#jpWalkthrough #skipGuideBtn').bind("click",function(){
               $.pagewalkthrough('close');
               removeStyle();
          });
      }

      function firstLoadGuide(){
          var offsetW = $(document).width() ;
          $(document.body).css("overflow","hidden");
          if($("#overlayRight")[0]){
            $("#overlayRight")[0].style.width = offsetW + "px";
          }
      }

      //高亮区点击拉框时，高亮区高度随下拉框增减
      function selectDropdownGuide(select1,select2,contentPositon){
          var overlayBottom_Top = $('#overlayBottom').offset().top ;
          var bottomAccessable_top = $('#bottomAccessable').offset().top;
          var pointUp =  $('#jpwTooltip').offset().top;

          //原数据
          var middleLeft_old = $('#middleLeft').height();
          var middleRight_old = $('#middleRight').height();
          var overlayRight_old = $('#overlayRight').height();
          var overlayLeft_old = $('#overlayLeft').height();
          var overlayBottomh_old = $('#overlayBottom').height();
          var overlayBottomt_old = $('#overlayBottom').offset().top;
          var bottomAccessablet_old = $('#bottomAccessable').offset().top;
          var highLightH_old = $(select1).height();
          var num = 0;

          $(select2).bind('click',function(){

            num = $(select1).height() - highLightH_old;
            var bottomH = $(document).height() - (parseInt($('#overlayTop').height()) + parseInt(num));

            var overlayBottom_top_tmp = overlayBottom_Top + num;
            var bottomAccessable_top_tmp = bottomAccessable_top + num;
            setLightH((num+middleLeft_old),(num+overlayRight_old),bottomH,overlayBottom_top_tmp,bottomAccessable_top_tmp);
            if(contentPositon!='top'){
               $('#jpwTooltip').css('top',(pointUp+num));
            }


            //动画
            //$(this).stop().animate({});
          });

      }

      function setLightH(middleNum,overlayH,bNum,overlayBottom_Top,bottomAccessable_top){
        $('#middleLeft').height(middleNum);
        $('#middleRight').height(middleNum);
        $('#overlayRight').height(overlayH);
        $('#overlayLeft').height(overlayH);
        //$('#overlayBottom').height(bNum);
        $('#overlayBottom').css('top',overlayBottom_Top);

        $('#bottomAccessable').css('top',bottomAccessable_top);

      }

    //引导页自适应宽度
    $(window).resize(function() {
        $('body').pagewalkthrough('renderOverlay');
    });


    $(document).ready(function(){
       //点击右侧引导页快捷入口，打开引导页
      $('#userGuide').bind('click',function(){
          $('#walkthrough').pagewalkthrough(showUserGuideByIdentity());
      });

     //页面引导功能
    $('#walkthrough').pagewalkthrough(showUserGuideByIdentity());


  });

})