const path = require('path')

module.exports = {
  webpack: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1'
      }
    }
  },
  /**
   * Only used for IntelliSense for JetBrains
   * IDE. This should be the same as the aliases
   * found above and is ignored by craco.
   */
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  }
}
