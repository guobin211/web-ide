import path from 'path'
import os from 'os'
import json from "../../package.json"

const ENV_CPUS = os.cpus().length
const ENV_MEMORY = os.totalmem() / 1024000

interface ProjectEnv {
  // 是否为开发环境
  IS_DEV: boolean
  // 当前环境CPU数量
  ENV_CPUS: number
  // 当前机器的总内存,单位M
  ENV_MEMORY: number
  // 项目 根目录
  ROOT_DIR: string
  // web-app 目录
  WEB_DIR: string
  // electron 目录
  MAIN_DIR: string
  // WebAssembly
  WASM_DIR: string
  // WebWorker
  WORKER_DIR: string
  // web 静态资源目录
  PUBLIC_DIR: string
  // scripts 构建脚本目录
  SCRIPTS_DIR: string
  // 项目名称
  PROJECT_NAME: string
  // 项目版本号
  APP_VERSION: string
  // hot replace path
  HMR_PATH: string
}

const IS_DEV = process.env.NODE_ENV !== 'production'
const ROOT_DIR = path.resolve(__dirname, '..', '..')
const WEB_DIR = path.join(ROOT_DIR, 'packages', 'web')
const MAIN_DIR = path.join(ROOT_DIR, 'packages', 'app')
const WASM_DIR = path.join(ROOT_DIR, 'packages', 'wasm')
const WORKER_DIR = path.join(ROOT_DIR, 'packages', 'worker')
const PUBLIC_DIR = path.join(ROOT_DIR, 'public')
const SCRIPTS_DIR = path.join(ROOT_DIR, 'scripts')

const projectEnv: ProjectEnv = {
  IS_DEV,
  ENV_CPUS,
  ENV_MEMORY,
  ROOT_DIR,
  WEB_DIR,
  MAIN_DIR,
  PUBLIC_DIR,
  SCRIPTS_DIR,
  WASM_DIR,
  WORKER_DIR,
  HMR_PATH: '/__webpack_hmr',
  PROJECT_NAME: json.name,
  APP_VERSION: json.version
}

export default projectEnv
