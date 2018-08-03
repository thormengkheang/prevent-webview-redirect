const Koa = require('koa');
const {createReadStream} = require('fs');
const app = new Koa();

app.use(async ctx => {
  ctx.type = 'html';
  ctx.body = createReadStream('index.html');
});

app.listen(3000);
console.log('Running on localhost:3000');
