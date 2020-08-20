import devConfig from './configs/webpack.dev'
import webpack from 'webpack'
import express from 'express'
import { setUpMiddleware } from './middle'
import projectEnv from './utils/env'

const Port = Number(process.env.PORT) || 8681
const { PROJECT_NAME } = projectEnv

async function start() {
  const compiler = webpack(devConfig)
  const devServer = express()
  setUpMiddleware(devServer, compiler)
  const httpServer = devServer.listen(Port, 'localhost', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${PROJECT_NAME} local server listening on http://localhost:${Port}`)
  })
  ;['SIGINT', 'SIGTERM'].forEach((signal: any) => {
    process.on(signal, () => {
      // 先关闭 devServer
      httpServer.close();
      // 在 ctrl + c 的时候随机输出 'See you again' 和 'Goodbye'
      console.log(
        `\n${Math.random() > 0.5 ? 'See you again' : 'Goodbye'}!`
      );
      // 退出 node 进程
      process.exit();
    });
  });
}

if (require.main === module) {
  start().then(() => {
    console.info('run start.ts success')
  })
}
