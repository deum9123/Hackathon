(function()
{
    let eventsRender = 
    {
        render: (data, root) =>
        {
            let str = data.map(element => 
                {
                    return eventsRender.createLine(element, 1);
                }).join("");
            root.html(str);
        },
        createLine: (prop) =>
        {
            return `
                    <div class="user-chat-list__item mb-3 d-grid">
                        <img class="user-chat-list__photo" src="${prop.img}">
                        <div class = "event_wrapper2">
                            <span class="user-chat-list__name" style = "font-weight: bold">${prop.orgName}</span>
                            <span class="user-chat-list__name">${prop.eventName}</span>
                        </div>
                    </div> 
                `
        },
    }


    window.eventsRender = eventsRender;
})();