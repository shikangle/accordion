/// <reference path="jquery-1.10.2.min.js" />


$(function () {//页面加载完成之后
    $(".txts").mouseover(function () {
        $(this).parent().stop(true, true).animate({ "width": "789px" }, 500).siblings().stop(true, true).animate({ "width": "100px" }, 500);
    })
})