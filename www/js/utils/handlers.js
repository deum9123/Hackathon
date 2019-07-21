(function()
{
    $("#showInformation").on("click", function()
    {
        $(".s-chat-users").css("grid-template-rows", "20vh 80vh 0vh");
        $("#showInformation").hide();
        $(".user-bar-code").css("opacity", 1);
    });
    $("#closeFioWrapper").on("click", function()
    {
        $(".s-chat-users").css("grid-template-rows", "20vh 0 80vh");
        $("#showInformation").show();
        $(".user-bar-code").css("opacity", 0);
    });
    $("#auth_btn").on("click", function()
    {
        let lg = $("#auth_login").val();
        let ps = $("#auth_ps").val();

        loader("http://194.58.71.47", {lg: lg, ps: ps, oper: "auth"}, accountParser.parseGeneralInfo);
    })
})()