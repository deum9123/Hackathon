const student_schema = require("../connectors/student_schema.js");

exports.init = app => app.use(async (ctx, next) => 
{
    if(ctx.query.oper == "auth")
    {
        ctx.student = await new Promise( async (resolve) =>
        {
            let docs = await student_schema.getStudent(ctx.query.lg)
            resolve(docs[0])
        })
        if(ctx.query.lg && ctx.query.ps && ctx.student.ps == ctx.query.ps)
        {
            ctx.session.student = ctx.student.login;
            delete ctx.student.ps;
            ctx.student.st = "ok";
            await next();
        } else
        {
            ctx.body = {er: 401};
        }
    } else 
    {
        ctx.student = ctx.session.student || {er: 401};
        ctx.student.st = "ok";
        await next();
    }
});