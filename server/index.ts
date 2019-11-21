import path from 'path'
import Koa from 'koa'
import send from 'koa-send'

const app = new Koa()
const rootDir = './build'

const allowedExtensions = ['.js', '.png', '.jpg']

const isFileAllowed = (file: string): boolean => allowedExtensions.filter(ext => file.includes(ext)).length > 0

app.use(async (ctx: Koa.ParameterizedContext) => {
  if (isFileAllowed(ctx.path)) {
    return await send(ctx, path.join(rootDir, ctx.path))
  }

  await send(ctx, `${rootDir}/index.html`)
})

app.listen(3010)
