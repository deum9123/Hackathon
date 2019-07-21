(function()
{
    let accountParser =
    {
        parseGeneralInfo: (data) =>
        {
            if(!data.acoountInfo)
            {
                alert("Неверный пароль");
                return false;
            }

            $("#fio").html(data.acoountInfo.name + " " + data.acoountInfo.second_name);
            $("#login").html(data.login);
            $("#logo_header").attr("src", data.acoountInfo.img);
            personalDataRendel.render(data.acoountInfo.personalDataItems, $(".skillsWrapper"));
            eventsRender.render(data.events, $(".user-chat-list"));
            $("#auth").hide();
        }
    }

    window.accountParser = accountParser;
})()