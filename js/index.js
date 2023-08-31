import { html, css, LitElement } from "https://cdn.skypack.dev/lit@2.4.0";
import iro from "https://cdn.skypack.dev/@jaames/iro@5.5.2";

$(document).ready(function(){
    $('#contactEdit').siblings("p").on("click", function(){
        $(".tabs-contn1").css("display", "block");
        $(".tabs-contn2").css("display", "none");
    });
    $('#moreEdit').siblings("p").on("click", function(){
        $(".tabs-contn1").css("display", "none");
        $(".tabs-contn2").css("display", "block");
    });
    $('#contactEdit').on("click", function(e){
        event.preventDefault();
        $(".tabs-contn1").css("display", "block");
        $(".tabs-contn2").css("display", "none");
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('contOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.contOnchang').text(txt);
            $('.contOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#contactEdit').siblings("p").removeClass('contOnchang');
        });
    });
    $('#moreEdit').on("click", function(e){
        event.preventDefault();
        $(".tabs-contn1").css("display", "none");
        $(".tabs-contn2").css("display", "block");
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('moreOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.moreOnchang').text(txt);
            $('.moreOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#moreEdit').siblings("p").removeClass('moreOnchang');
        });
    });
    $('#infoEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('infoOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.infoOnchang').text(txt);
            $('.infoOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#infoEdit').siblings("p").removeClass('infoOnchang');
        });
    });
    $('#logoEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("a").children("img").addClass('cardlogo');
        $("#edtxt").prop("type", "file");
        $(".editsOptions").css("display", "none");
        $('#edtxt').val('');
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val().replace(/.*(\/|\\)/, '');
            $('.cardlogo').prop('src', '../../images/' + txt);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#logoEdit').siblings("a").children("img").removeClass('cardlogo');
        });
    });
    $('#bgEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $("#edtxt").prop("type", "file");
        $(".editsOptions").css("display", "none");
        $('#edtxt').val('');
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val().replace(/.*(\/|\\)/, '');
            $('.main-card-block').css('background-image', 'url(../../images/' + txt + ')');
        });
    });
    $('#titleEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings(".ttlcls").addClass('titleOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.titleOnchang').text(txt);
            $('.titleOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#titleEdit').siblings(".ttlcls").removeClass('titleOnchang');
        });
    });
    $('#positionEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings(".pstcls").addClass('positionOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.positionOnchang').text(txt);
            $('.positionOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#positionEdit').siblings(".pstcls").removeClass('positionOnchang');
        });
    });
    $('#pnumberEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "block");
        $(this).siblings('a').children('span:nth-child(2)').addClass('phoneOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#displaySwitchIcon').on('input', function(){
            if($("#displaySwitchIcon").is(':checked')) {
                var displaySwitchIcon = 'block';
                $('#pnumberEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
            else
            {
                var displaySwitchIcon = 'none';
                $('#pnumberEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
        });
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.phoneOnchang').text(txt);
            $('.phoneOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#pnumberEdit').siblings('a').children('span:nth-child(2)').removeClass('phoneOnchang');
        });
    });
    $('#addressEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "block");
        $(this).siblings('a').children('span:nth-child(2)').addClass('addressOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#displaySwitchIcon').on('input', function(){
            if($("#displaySwitchIcon").is(':checked')) {
                var displaySwitchIcon = 'block';
                $('#addressEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
            else
            {
                var displaySwitchIcon = 'none';
                $('#addressEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
        });
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.addressOnchang').text(txt);
            $('.addressOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#infoEdit').siblings('a').children('span:nth-child(2)').removeClass('addressOnchang');
        });
    });
    $('#emailEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "block");
        $(this).siblings('a').children('span:nth-child(2)').addClass('emailOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#displaySwitchIcon').on('input', function(){
            if($("#displaySwitchIcon").is(':checked')) {
                var displaySwitchIcon = 'block';
                $('#emailEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
            else
            {
                var displaySwitchIcon = 'none';
                $('#emailEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
        });
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.emailOnchang').text(txt);
            $('.emailOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#infoEdit').siblings('a').children('span:nth-child(2)').removeClass('emailOnchang');
        });
    });
    $('#websiteEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "block");
        $(this).siblings('a').children('span:nth-child(2)').addClass('webOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#displaySwitchIcon').on('input', function(){
            if($("#displaySwitchIcon").is(':checked')) {
                var displaySwitchIcon = 'block';
                $('#websiteEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
            else
            {
                var displaySwitchIcon = 'none';
                $('#websiteEdit').siblings('a').children('.contIcons').css("display", displaySwitchIcon);
            }
        });
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.webOnchang').text(txt);
            $('.webOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#infoEdit').siblings('a').children('span:nth-child(2)').removeClass('webOnchang');
        });
    });
    $('#socialEdit').on("click", function(e){
        event.preventDefault();
        $("#edtxt").css("display", "none");
        $(".editsOptions").css("display", "none");
        $(".sclicn").css("display", "none");
        var social = $('.social-link').html();
        var socialhtml = '<ul class="social-link">' + social + '</ul>';
        $('.socialedt').html(socialhtml);
        $('.socialedt .social-link li:last-child').css("display", "none");
        $('.socialedt .social-link li').append("<input type='text' class='addfileurl' style='width: 120px;display: inline-block;margin-left: 10px;margin-right: 10px;'><button type='button' class='btn' id='sclclose' style='padding:0;'>X</button>");
        $('.social-link li').on('input', '.addfileurl', function(){
            var addslfileurl = $(this).val();
            $(this).siblings('a').attr('href', addslfileurl);
        });
        $('.socialedt').append("<button type='button' class='btn btn-secondary sclAdd' style='margin-top:15px;'>+</button>");
        $('.socialedt').children('.social-link').css({'flex-direction':'column','align-items':'start'});
        $('.social-link svg').css('width','25px');
        $(".sclAdd").on("click", function(){
            $("<div class='addsociallist'><input type='file' id='addfilename'><input type='text' id='addfileurl'><button type='button' class='btn btn-secondary sclAddicon'  style='margin-bottom: 10px;'>Add</button></div>").insertAfter('.socialedt .social-link');
            $('.sclAddicon').on("click", function(){
                $(this).parents('.addsociallist').css('display','none');
                var addfilename = $(this).siblings('#addfilename').val().replace(/.*(\/|\\)/, '');
                var addfileurl = $(this).siblings('#addfileurl').val();
                $('.social-link').prepend("<li><a href='" + addfileurl + "'><img src='../../images/"+ addfilename +"' alt='instagram'></a><input type='text' value='"+ addfileurl +"' style='width: 120px; display: inline-block;margin-left: 10px;margin-right: 10px;'><button type='button' class='btn' id='sclclose' style='padding:0;'>X</button></li>");
            });
        });
        $('.social-link').on("click","#sclclose", function(){
            $(this).parents('li').remove();
        });
        $('#saveFn').css('margin-top','15px');
        $('#saveFn').on("click", function(){
            var txt = $('.socialedt').children('.social-link').html();
            $('.main-card-block').children('.social-link').html(txt);
            $('.main-card-block').children('.social-link').children('li').children('input').remove();
            $('.main-card-block').children('.social-link').children('li').children('button').remove();
            $('.main-card-block .social-link li:last-child').css("display", "inline-block");
        });
    });
    $('#descr1Edit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('descOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.descOnchang').text(txt);
            $('.descOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#descr1Edit').siblings("p").removeClass('descOnchang');
        });
    });
    $('#descr2Edit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('descOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.descOnchang').text(txt);
            $('.descOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#descr2Edit').siblings("p").removeClass('descOnchang');
        });
    });
    $('#descr3Edit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('descOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.descOnchang').text(txt);
            $('.descOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#descr3Edit').siblings("p").removeClass('descOnchang');
        });
    });
    $('#descr4Edit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('descOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.descOnchang').text(txt);
            $('.descOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#descr4Edit').siblings("p").removeClass('descOnchang');
        });
    });
    $('#descr5Edit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("p").addClass('descOnchang');
        $("#edtxt").prop("type", "text");
        $('#edtxt').removeAttr("style");
        $('#edtxt').val('');
        $(".editsOptions").css("display", "flex");
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val();
            var atr = $('#edtxt').attr('style');
            $('.descOnchang').text(txt);
            $('.descOnchang').attr('style', atr);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#descr5Edit').siblings("p").removeClass('descOnchang');
        });
    });
    $('#videoEdit').on("click", function(e){
        event.preventDefault();
        $(".socialedt").css("display", "none");
        $(".sclicn").css("display", "none");
        $(this).siblings("video").addClass('videochng');
        $("#edtxt").prop("type", "file");
        $(".editsOptions").css("display", "none");
        $('#edtxt').val('');
        $('#saveFn').on("click", function(e){
            var txt = $('#edtxt').val().replace(/.*(\/|\\)/, '');
            $('.videochng').prop('src', '../../videos/' + txt);
        });
        $('.mdlclose').on("click", function(e){
            event.preventDefault();
            $('#videoEdit').siblings("video").removeClass('videochng');
        });
    });



    $('.colOpn').on("click", function(e){
        event.preventDefault();
        $('.dropdnCol').toggleClass('setActv');
        $('.dropdnFon').removeClass('setActv');
        $('.dropdnBack').removeClass('setActv');
        $('.dropdnopct').removeClass('setActv');
        $('.dropdnDis').removeClass('setActv');
    });
    $('.fonOpn').on("click", function(e){
        event.preventDefault();
        $('.dropdnCol').removeClass('setActv');
        $('.dropdnFon').toggleClass('setActv');
        $('.dropdnBack').removeClass('setActv');
        $('.dropdnopct').removeClass('setActv');
        $('.dropdnDis').removeClass('setActv');
    });
    $('.backOpn').on("click", function(e){
        event.preventDefault();
        $('.dropdnCol').removeClass('setActv');
        $('.dropdnFon').removeClass('setActv');
        $('.dropdnBack').toggleClass('setActv');
        $('.dropdnopct').removeClass('setActv');
        $('.dropdnDis').removeClass('setActv');
    });
    $('.opctOpn').on("click", function(e){
        event.preventDefault();
        $('.dropdnCol').removeClass('setActv');
        $('.dropdnFon').removeClass('setActv');
        $('.dropdnBack').removeClass('setActv');
        $('.dropdnopct').toggleClass('setActv');
        $('.dropdnDis').removeClass('setActv');
    });
    $('.disOpn').on("click", function(e){
        event.preventDefault();
        $('.dropdnCol').removeClass('setActv');
        $('.dropdnFon').removeClass('setActv');
        $('.dropdnBack').removeClass('setActv');
        $('.dropdnopct').removeClass('setActv');
        $('.dropdnDis').toggleClass('setActv');
    });
    $('#slctFnt').on('change', function(){
        var selectFont = $('#slctFnt').val();
        $('#edtxt').css("font-family", selectFont);
    });
    $('#slctFntWeight').on('change', function(){
        var selectFontWeight = $('#slctFntWeight').val();
        $('#edtxt').css("font-weight", selectFontWeight);
    });
    $('#inputFontSize').on('input', function(){
        var inputFontSize = $('#inputFontSize').val()+'px';
        $('#edtxt').css("font-size", inputFontSize);
    });
    $('#opacityRange').on('input', function(){
        var opacityRange = $('#opacityRange').val();
        $('#edtxt').css("opacity", opacityRange);
    });
    $('#displaySwitch').on('input', function(){
        if($("#displaySwitch").is(':checked')) {
            var displaySwitch = 'block';
            $('#edtxt').css("display", displaySwitch);
        }
        else
        {
            var displaySwitch = 'none';
            $('#edtxt').css("display", displaySwitch);
        }
    });


    var colorPicker = new iro.ColorPicker("#picker", {
        width: 170,
        layout: [
            {
            component: iro.ui.Wheel
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "hue"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "saturation"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "value"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "alpha"
            }
            }
        ]
    });
    var colorPicker2 = new iro.ColorPicker("#picker2", {
        width: 170,
        layout: [
            {
            component: iro.ui.Wheel
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "hue"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "saturation"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "value"
            }
            },
            {
            component: iro.ui.Slider,
            options: {
                sliderType: "alpha"
            }
            }
        ]
    });

    const colorInputEl =  document.getElementById("color-text");
    colorPicker.on("color:change", function (color) {
    document.getElementById("edtxt").style.color = color.rgbaString;
    colorInputEl.value = color.hexString;
    });
    colorPicker2.on("color:change", function (color) {
    document.getElementById("edtxt").style.background = color.rgbaString;
    colorInputEl.value = color.hexString;
    });

});
