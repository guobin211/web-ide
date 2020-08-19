import { Configuration } from 'webpack'
import common from './webpack.common'

const prodConfig: Configuration = {
  ...common,
  mode: "production",
  devtool: false
}
export default prodConfig
