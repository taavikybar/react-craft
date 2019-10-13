import path from 'path'
import Koa from 'koa'
import send from 'koa-send'

const app = new Koa()
const rootDir = './build'

app.use(async (ctx: Koa.ParameterizedContext) => {
  if (ctx.path.includes('.js')) {
    return await send(ctx, path.join(rootDir, ctx.path))
  }

  await send(ctx, `${rootDir}/index.html`)
})

app.listen(3000)
