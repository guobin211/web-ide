import path from "path"
import { Compiler, WebpackPluginInstance } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar'
import projectEnv from '../utils/env'

const { IS_DEV, PROJECT_NAME, PUBLIC_DIR } = projectEnv

const webpackPlugin: (((this: Compiler, compiler: Compiler) => void) | WebpackPluginInstance)[] = [
  new WebpackBar({
    name: PROJECT_NAME,
    // react 蓝
    color: '#61dafb',
  }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    minify: !IS_DEV,
    template: path.resolve(PUBLIC_DIR, 'index.html')
  })
]

export default webpackPlugin
