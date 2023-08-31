
jQuery(document).ready(function() {

    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $(".mtb").click(function(){
        $(".top-drop").addClass("dsplnon");
        $(".top-drop").removeClass("dsplblck");
    });
    $(".tatb").click(function(){
        $(".top-drop").addClass("dsplblck");
        $(".top-drop").removeClass("dsplnon");
    });
    $(".dsktb").click(function(){
        $(".top-drop").addClass("dsplblck");
        $(".top-drop").removeClass("dsplnon");
    });

    $(".cardsbox").each(function(index){
        $(this).on("click", function(e){
            event.preventDefault();
            $('.num-list li').removeAttr("class");
            var GetClass = $(this).children().attr('class');
            $('.num-list li').addClass(GetClass);
            $(".num-list li a").removeClass("active");
            $('.num-list li a:first').addClass("active");
            $("iframe").contents().find('body').removeAttr('class');
            $("iframe").contents().find('body').addClass(GetClass + 'card1');
        });
    });

    $(".num-list li a").click(function(e){
        event.preventDefault();
        if(!$(this).hasClass('active'))
        {
            $(".num-list li a.active").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".num-list li").each(function(index){
        $(this).on("click", function(e){
             event.preventDefault();
            var GetClass = $(this).attr('class');
            var GetText = $(this).children().text();
            $("iframe").contents().find('body').removeAttr('class');
            $("iframe").contents().find('body').addClass(GetClass + 'card' + GetText);
        });
    });

    $('.mobile-device iframe').on('load', function() {
        var $head = $(".mobile-frame").contents().find("head");
        $head.append($("<link/>", {
            rel: "stylesheet",
            href: "./css/mobileiframe.css",
            type: "text/css"
        }));
    });
    $('.tablet-device iframe').on('load', function() {
        var $head = $(".tab-frame").contents().find("head");
        $head.append($("<link/>", {
            rel: "stylesheet",
            href: "css/tabiframe.css",
            type: "text/css"
        }));
    });
    $('.desktop-device iframe').on('load', function() {
        var $head = $(".desktop-frame").contents().find("head");
        $head.append($("<link/>", {
            rel: "stylesheet",
            href: "css/deskIframe.css",
            type: "text/css"
        }));
    });

    $('select').niceSelect();

    $('.stepsbtn').on("click", function(e){
        e.preventDefault();
        if($("#checkdesign").prop('checked') == true){
            $('.checkError').hide();
            $('.steps-1').removeClass('active');
            $('.steps-2').addClass('active');
            $("iframe").contents().find('.tp-tabs-btn').css('display','flex');
            $("iframe").contents().find('.crdEditbtns img').css('display','inline-block');
            $(".mobile-frame").attr('style', 'padding-bottom: 35px !important');
            $(".cardsbox").attr('style', 'pointer-events: none !important');
            $(".num-list li").attr('style', 'pointer-events: none !important');
            $('.stepsbtnFinish').css('display', 'inline-block');
            $(this).remove();
        }
        else {
            if($("#checkdesign").prop('checked') == false){
                $('.checkError').show();
            }
        }
    });
    $('.stepsbtnFinish').on('click', function(e) {
        e.preventDefault();
        $('.steps-1').removeClass('active');
        $('.steps-2').removeClass('active');
        $('.steps-3').addClass('active');
        $("iframe").contents().find('.crdEditbtns img').remove();
        $("iframe").contents().find('.body-content .logo').css('margin-top','23.29px');
        $(".slt-desn").attr('style', 'pointer-events: none !important');
        alert('Your personalized card is publised online!!');
    });
    // $('#checkdesign').on('click', function() {
    //     alert();
    //     if($("#checkdesign").prop('checked') == true){
    //         $('.steps-1').removeClass('active');
    //         $('.steps-2').addClass('active');
    //         $("iframe").contents().find('.tp-tabs-btn').css('display','flex');
    //         $("iframe").contents().find('.crdEditbtns img').css('display','inline-block');
    //         $(".mobile-frame").attr('style', 'padding-bottom: 35px !important');
    //         $(".cardsbox").attr('style', 'pointer-events: none !important');
    //         $(".num-list li").attr('style', 'pointer-events: none !important');
    //         $('.stepsbtnFinish').css('display', 'inline-block');
    //         $(this).remove();
    //     }
    //     else {
    //         $('.steps-1').addClass('active');
    //         $('.steps-2').removeClass('active');
    //         $("iframe").contents().find('.tp-tabs-btn').css('display','none');
    //         $("iframe").contents().find('.crdEditbtns img').css('display','none');
    //         $(".mobile-frame").attr('style', 'padding-bottom: 0px !important');
    //         $(".cardsbox").attr('style', 'pointer-events: inherit !important');
    //         $(".num-list li").attr('style', 'pointer-events: inherit !important');
    //         $('.stepsbtnFinish').remove();
    //         $('.stepsbtn').css('display', 'inline-block');
    //     }
    // });
});
