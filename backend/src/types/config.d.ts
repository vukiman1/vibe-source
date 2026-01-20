declare module 'config' {
  interface IConfig {
    get<T>(setting: string): T;
    has(setting: string): boolean;
  }

  const config: IConfig;
  export = config;
  export default config;
}
