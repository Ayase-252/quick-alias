import { configAliasForEslint, configAliasForSnowpack } from ".."

describe("ConfigAliasForEslint", () => {
  it("should produce correct eslint config", () => {
    const config = {
      "@alias": "path/to/module"
    }

    expect(configAliasForEslint(config)).toEqual({
      alias: {
        map: [
          ['@alias', "path/to/module"]
        ]
      }
    })
  })
})

describe("ConfigAliasForSnowpack", () => {
  it("should produce correct eslint config", () => {
    const config = {
      "@alias": "path/to/module"
    }

    expect(configAliasForSnowpack(config)).toEqual({
      alias: {
        "@alias": "path/to/module"
      }
    })
  })
})
