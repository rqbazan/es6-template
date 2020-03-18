module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: process.versions.node
        }
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src'
        }
      }
    ]
  ],
  comments: false,
  ignore: ['**/typedefs.js']
}
