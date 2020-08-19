type thisObject = typeof globalThis
type extendsThis<T> = thisObject & ExpandThisProps<T>
interface NewClassConstructor<T> {
  new(...args: string[]): T;
}

interface ExpandThisProps<T = any> {
  // 缓存全局单例对象
  __mapSingleton: Map<string, T>
}

/**
 * 单例工厂
 * @param classFactory class类
 */
export function createSingleton<T>(classFactory: NewClassConstructor<T>): T {
  const thisObject = globalThis as extendsThis<T>
  if (thisObject.__mapSingleton) {
    const instance = thisObject.__mapSingleton.get(classFactory.name)
    if (instance) {
      return instance as T
    }
  }
  thisObject.__mapSingleton = new Map()
  const _appService = new classFactory() as T
  thisObject.__mapSingleton.set(classFactory.name, _appService)
  return _appService
}
