import { Configuration, ModuleOptions } from 'webpack'
import { loader as MiniCssExtractLoader } from 'mini-css-extract-plugin';
import path from 'path'
import projectEnv from '../utils/env'

function getCssLoaders(importLoaders: number): Array<string | Record<string, unknown>> {
  return [
    projectEnv.IS_DEV ? 'style-loader' : MiniCssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        modules: false,
        // 前面使用的每一个 loader 都需要指定 sourceMap 选项
        sourceMap: true,
        // 指定在 css-loader 前应用的 loader 的数量
        importLoaders,
      },
    },
    {
      loader: 'postcss-loader',
      options: { sourceMap: true },
    },
  ];
}

const webpackModule: ModuleOptions = {
  rules: [
    {
      test: /\.(tsx?|js)$/,
      loader: 'babel-loader',
      options: { cacheDirectory: true },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: getCssLoaders(0),
    },
    {
      test: /\.scss$/,
      use: [
        ...getCssLoaders(2),
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    },
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      use: [
        {
          loader: 'url-loader',
          options: {
            // 低于 10 k 转换成 base64
            limit: 10 * 1024,
            // 在文件名中插入文件内容 hash，解决强缓存立即更新的问题
            name: '[name].[contenthash].[ext]',
            outputPath: 'images',
          },
        },
      ],
    },
    {
      test: /\.(ttf|woff|woff2|eot|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[contenthash].[ext]',
            outputPath: 'fonts',
          },
        },
      ],
    },
  ]
}

const webpackResolve = {
  // 不写后缀名
  extensions: ['.js', '.tsx', '.ts', '.json'],
  alias: {
    '@': projectEnv.WEB_DIR,
  },
}

const common: Configuration = {
  cache: true,
  context: projectEnv.ROOT_DIR,
  entry: [path.resolve(projectEnv.WEB_DIR, "index.tsx")],
  output: {
    publicPath: '/',
    path: path.resolve(projectEnv.ROOT_DIR, 'dist'),
    filename: 'js/[name]-[hash].bundle.js',
    hashSalt: projectEnv.PROJECT_NAME,
  },
  resolve: webpackResolve,
  module: webpackModule,
  plugins: []
}

export default common
