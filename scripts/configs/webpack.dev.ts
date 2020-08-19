import { Configuration } from 'webpack'
import common from './webpack.common'

const devConfig: Configuration = {
  ...common,
  mode: "development",
  devtool: "source-map"
}
export default devConfig
