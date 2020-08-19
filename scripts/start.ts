import projectEnv from './utils/env'
import webpack from 'webpack'

async function start() {
  console.log(projectEnv)
  const compiler = webpack({})
  console.log(compiler.context)
  const arr = [1, 2, 3].map(el => el + 1)
  console.log(arr)
}

if (require.main === module) {
  start().then(() => {
    console.info('webpack dev start success')
  })
}
