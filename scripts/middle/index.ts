import { Express } from 'express'
import { Compiler } from 'webpack'
import cors from 'cors'
import { webpackMiddleware } from './webpack'

export function setUpMiddleware(server: Express, compiler: Compiler): void {
  server.use(cors());
  // webpack 相关中间件
  server.use(webpackMiddleware(compiler));
}
