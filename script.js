var whatPage = 0; //0 home, 1 scuola, 2 about me
$(document).ready(function () {
    
    $("#SwitchTheme").click(function () {
        $("body").toggleClass("darkBody ligthBody");
        $("#SwitchTheme").toggleClass("white");
        $("#name").toggleClass("border-white border-black blackStroke whiteStroke");
        $(".myButton").toggleClass(`border-white border-black
                                    bg-red-800 bg-red-500
                                    hover:bg-purple-800 hover:bg-blue-500`);
        $("a").toggleClass("hover:text-blue-200 hover:text-blue-500");
        $("section").toggleClass("darkBody ligthBody");
    });

    $(".scuolaBtn").click(function () {
        whatPage = 1;
        $("#scuola").show();
        $("body").addClass("overflow-y-hidden");
        $("#scuola").css("z-index","10");
        $("#scuola").animate({top:0},
                             600, 
                             () => {
                                 $("#mainPage").hide();
                                 $("body").removeClass("overflow-y-hidden");
                                 $("#mainPage").hide();
                                 $("#aboutMe").hide();
                                 $("#scuola").css("z-index","0");
                                 $("#aboutMe").css("top","100%");
                            });
    });
    $(".meBtn").click(function () {
        whatPage = 2;
        $("#aboutMe").show();
        $("body").addClass("overflow-y-hidden");
        $("#aboutMe").css("z-index","10");
        $("#aboutMe").animate({top:0},
                             600, 
                             () => {
                                 $("#mainPage").hide();
                                 $("body").removeClass("overflow-y-hidden");
                                 $("#mainPage").hide();
                                 $("#scuola").hide();
                                 $("#aboutMe").css("z-index","0");
                                 $("#scuola").css("top","100%");
                            });
    });
    $(".homeBtn").click(function () {
        $("#mainPage").show();
        $("body").addClass("overflow-y-hidden");
        if(whatPage == 1) {
            $("#scuola").animate(
                {top:"100%"},
                600,
                ()=>{
                    $("#scuola").hide();
                    $("body").removeClass("overflow-y-hidden");
                }
            );
        }
        else {
            $("#aboutMe").animate(
                {top:"100%"},
                600,
                ()=>{
                    $("#aboutMe").hide();
                    $("body").removeClass("overflow-y-hidden");
                }
            );
        }
    });



});

        