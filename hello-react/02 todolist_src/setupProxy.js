const proxy = require('http-request-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {  //设定请求标识
      target: 'url',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' } //重写请求路径
    }),
    proxy('/api2', {
      target: 'url',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )

}