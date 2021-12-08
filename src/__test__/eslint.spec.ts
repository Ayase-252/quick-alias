import { configAliasForEslint } from ".."

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