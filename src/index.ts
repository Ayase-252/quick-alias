type UnifiedConfig = {
  [alias: string]: string
}

type PartialEsLintImportResolverConfig = {
  alias: {map: [string, string][]}
}
export function configAliasForEslint(config: UnifiedConfig): PartialEsLintImportResolverConfig {
  const map: [string, string][] = Object.keys(config).map(key => [key, config[key]])
  return {
    alias: {map}
  }
}

type SnowpackAliasConfig = {
  alias: {
    [alias: string]: string
  }
}

export function configAliasForSnowpack(config: UnifiedConfig): SnowpackAliasConfig {
  return {
    alias: {...config}
  }
}