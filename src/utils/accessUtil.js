export default async (ctx, next) => {
    ctx.res.setHeader("Access-Control-Allow-Origin", "*");
    next();
}