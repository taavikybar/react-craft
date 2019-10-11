import Koa from 'koa'
import send from 'koa-send'

const app = new Koa()

app.use(async ctx => await send(ctx, './index.html'))

app.listen(3000)
