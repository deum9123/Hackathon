const Koa = require("koa");
const cors = new require("koa2-cors");
const app = new Koa();
const config = require("./config/default.js");
const session = require('koa-session');

app.keys = ["very secret key"];
app.use(session(app));

require('./handlers/favicon').init(app);
require('./handlers/logger').init(app);
require('./handlers/errors').init(app);
require('./handlers/bodyparser').init(app);
require('./handlers/authorization').init(app);
app.use(cors());

const Router = require("koa-router");
const router = new Router();

router.get('/', async (ctx, next) => 
{
    ctx.body = await new Promise((resolve) => 
    {
        resolve(ctx.user);
    });
});

app.use(router.routes());
app.listen(config.port);