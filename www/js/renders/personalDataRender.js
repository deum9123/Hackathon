(function()
{
    let personalDataRendel = 
    {
        render: (data, root) =>
        {
            let str = data.map(element => 
                {
                    return personalDataRendel.createLine(element, 1);
                }).join("");
            root.html(str);
        },
        createLine: (prop, opt) =>
        {
            let res = "";
            
            if(prop.val && (typeof prop.val == "object") ) 
            {
                res += opt ? `<div class = "skillsLine_one_h"><span>${prop.visibleName}</span></div>` : `<div class = "skillsLine_one_item"><span>${prop.visibleName}</span></div>`;
                prop.val.forEach(element => {
                    res += personalDataRendel.createLine(element);
                });
                return res;
            }
            res += `
                <div class = "skillsLine">
                      <div id = "skiilplace_${prop.visibleName}">${prop.visibleName}</div>
                      <div id = "skiilplace_${prop.visibleName}_value" class = "table_value">${prop.val}</div>
                </div>
            `
            return res;
        },
    }


    window.personalDataRendel = personalDataRendel;
})();