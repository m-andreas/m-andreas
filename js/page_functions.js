function zoomIn(_this){
      $(_this).find('div.big_text').stop().fadeOut(1);
      $(_this).children('img').addClass('transition');
      $(_this).children('img').zIndex('99');
      _this.style.zIndex='100';
      window.setTimeout(
        function(){
          $(_this).find('div.small_text').stop().fadeOut(1, function(){
            $(_this).find('div.big_text').stop().fadeIn(1400);
          });
        }, 200);
      $(_this).find('div.small_text').stop().fadeOut(1);
}

function zoomOut(_this){

      $(_this).children('img').zIndex('1');
      _this.style.zIndex='0';
      
      window.setTimeout(
        function(){
          $(_this).find('div.big_text').stop().fadeOut( 1, function(){
            $(_this).find('div.small_text').stop().fadeIn(1);
          });
        }, 250);
      $(_this).find('div.big_text').stop().fadeOut(1, function(){
        $(_this).find('div.small_text').stop().fadeIn(400);
      });
      $(_this).children('img').removeClass('transition');
}

function openBlock( header ){
  header = $(header);
  header.next().slideToggle('slow');
  img = $($(header).find( "img" )[0]);
  if( img.attr("src") == "img/readmore.png" ){
    img.attr("src", "img/readless.png" );
      $('html, body').animate({
        scrollTop: header.offset().top
      }, 800);
  } else {
    img.attr("src", "img/readmore.png" );
  }
}
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
  if( !isMobile ){
    $('.readmore').hide();
    $('.nav').children('li').hide();

    $(document).ready(function() {
    $('.fullpage').fullpage({
      css3:true,
      navigation: true,
      navigationPosition: 'right',
      continuousVertical:true,
      loopHorizontal: true, 
      paddingTop:'130px', 
      paddingBottom:'150px',
      responsiveWidth:800,
      responsiveHeight:750,
      scrollingSpeed: 1200,
      afterResize: function(){
        $.fn.fullpage.reBuild();
      }
    });

    $('.home').click(function(){
        $.fn.fullpage.moveTo(1);
    });
    $('.contact').click(function(){
      $.fn.fullpage.moveTo(3);
    });
    $('.basics').click(function(){
      $.fn.fullpage.moveTo(2);
    });
    $('.possibilitys').click(function(){
      $.fn.fullpage.moveTo(4);
    });
    $('.offer').click(function(){
      $.fn.fullpage.moveTo(5);
    });
    $('.technology').click(function(){
      $.fn.fullpage.moveTo(6);
    });
    $('.safety').click(function(){
      $.fn.fullpage.moveTo(7);
    });
    $('.webpages').click(function(){
      $.fn.fullpage.moveTo(8);
    });
    $('.back').click(function(){
      $.fn.fullpage.moveTo(1);
    });
    $('.impressum').click(function(){
      $.fn.fullpage.moveTo(9);
    });

  });


  $(document).ready(function(){
    $('.wrap').hover(function(){
      zoomIn(this);
    }, function() {
      zoomOut(this);
    });
  });
  
} else {
  $($('.section')[3]).hide();
  $('.mastfoot').hide();
  $($($('.masthead-nav')[0]).children()[0]).hide(); // Remove Home in Menu ( Makes no sense for single Page Layout)
  $('.about').text('Über uns');
  $('.why-web-text').text('Wieso webbasiert?');
  
  $('.main-why-web').hide();

  $('.header-why-web').click(function(){
    openBlock( this );
  });

  $('.main-about').hide();
  $('.header-about').click(function(){
    openBlock( this );
  });

  $('.main-tech').hide();
  $('.header-tech').click(function(){
    openBlock( this );
  });

  $('.main-offer').hide();
  $('.header-offer').click(function(){
    openBlock( this );
  });

  $('.main-hp').hide();
  $('.header-hp').click(function(){
    openBlock( this );
  });

  $('.main-safety').hide();
  $('.header-safety').click(function(){
    openBlock( this );
  });

  $('.main-impressum').hide();
  $('.header-impressum').click(function(){
    openBlock( this );
  });

}

var cssId = 'mobileCSS';  // you could encode the css path itself to generate id..
var cssId2 = 'DesktopCSS';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId) && isMobile)
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/mobile.css';
    link.media = 'all';
    head.appendChild(link);
} else if (!document.getElementById(cssId2) && !isMobile)
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/jquery.fullPage.css';
    link.media = 'all';
    head.appendChild(link);

    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/cover.css';
    link.media = 'all';
    head.appendChild(link);
}

if(!isMobile){
    var js = document.createElement('script');

    js.type = 'text/javascript';
    js.src = 'js/tinymce/tinymce.min.js';

    document.body.appendChild(js);
}