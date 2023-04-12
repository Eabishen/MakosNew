$(document).ready(function () {

    $(".overviewcontent").css("display", "block");
    $(".overviewcontentlink").css("background-color", "rgb(67, 141, 252)");
    $(".aboutusdrop").css("display", "block");
    $(".aboutusdroplink").css("background-color", "rgb(67, 141, 252)");



    $(".overviewcontentlink").hover(function () {
        $(".overviewcontent").css("display", "block");
        $(".servicecontent").css("display", "none");
        $(".productcontent").css("display", "none");
        $(".overviewcontentlink").css("background-color", "rgb(67, 141, 252)");
        $(".servicecontentlink").css("background-color", "transparent");
        $(".productcontentlink").css("background-color", "transparent");



    });
    $(".servicecontentlink").hover(function () {
        $(".servicecontent").css("display", "block");
        $(".overviewcontent").css("display", "none");
        $(".productcontent").css("display", "none");
        $(".servicecontentlink").css("background-color", "rgb(67, 141, 252)");
        $(".overviewcontentlink").css("background-color", "transparent");
        $(".productcontentlink").css("background-color", "transparent");



    });
    $(".productcontentlink").hover(function () {
        $(".productcontent").css("display", "block");
        $(".overviewcontent").css("display", "none");
        $(".servicecontent").css("display", "none");
        $(".productcontentlink").css("background-color", "rgb(67, 141, 252)");
        $(".overviewcontentlink").css("background-color", "transparent");
        $(".servicecontentlink").css("background-color", "transparent");
    });

    // $(".top-dropdown").mouseout(function () {
    //     $(".overviewcontent").css("display", "block");

    // })
})