module.exports = {
  overrides: [
    {
      files: ["**/*.test.[jt]s?(x)"],

      plugins: ["jest"],

      env: {
        jest: true,
      },

      extends: ["plugin:jest/recommended"],
    },
  ],
}
