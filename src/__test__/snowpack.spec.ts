import {  configAliasForSnowpack } from ".."

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
