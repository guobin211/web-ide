import { createSingleton } from '../utils/global.util'

export interface AppConfig {
  version: string
}

class AppService {

  initConfig(): Promise<AppConfig> {
    return Promise.resolve({version: ""})
  }

}

const appService: AppService = createSingleton(AppService)

export default appService
