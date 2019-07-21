const departament_schema = require("../connectors/departaments_schema.js");

exports.init = app => app.use(async (ctx, next) => 
{
    if(ctx.query.oper == "auth")
    {
        ctx.departament = await new Promise( async (resolve) =>
        {
            let docs = await departament_schema.getDepartament(ctx.query.dep)
            resolve(docs[0])
        }) 
        ctx.user = null;
        ctx.departament.users.forEach( (item) =>
        {
            if(ctx.query.lg === item.login) ctx.user = item; 
        })

        if(ctx.query.lg && ctx.query.ps && ctx.user && ctx.user.ps == ctx.query.ps)
        {
            ctx.session.user = ctx.user;
            await next();
        } else
        {
            ctx.body = {er: 401};
        }
    } else 
    {
        console.log("SESSION");
        ctx.user = ctx.session.user || {er: 401};
        await next();
        return false;
    }
});