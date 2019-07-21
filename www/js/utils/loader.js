(function()
{
    let loader = (url, args, callback, errCallback)  =>
    {
        $.ajax(
            {
                url: url,
                data: args || {},
                dataType: 'json',
                async: true,
                type: "GET",
                crossDomain: true,
                success: function success(data) 
                {
                    callback(data);
                },
                error: function error(err)
                {
                    errCallback ? errCallback(data) : "";
                    console.log("err= ", err);
                } 
            });
    }

    window.loader = loader;
})();