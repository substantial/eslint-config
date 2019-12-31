module.exports = {
  extends: ["./index.js", "./react.js"],
  "overrides": [
    {
      "files": ["**/*.test.[jt]s?(x)"],
      "extends": [
        "./jest.js"
      ]
    }
  ]

}
