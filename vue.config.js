module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '埃と誇り'
        return args
      })
  }
};
