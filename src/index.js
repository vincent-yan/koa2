const Koa = require('koa');
const app = new Koa();

import access from './utils/accessUtil'
import home from './page/home'
import movie from './page/movie'

app.use(access);
app.use(home);
app.use(movie);

app.listen(3001, () => {
    console.log("start koa2 port:3001");
});