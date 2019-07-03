// proto文件路径
var PROTO_PATH = __dirname + '/proto/user.proto'
// 加载grpc模块
var grpc = require('grpc')
var protoLoader = require('@grpc/proto-loader')
// 加载包配置
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
var user = grpc.loadPackageDefinition(packageDefinition).user

var server = new grpc.Server()
server.addService(user.Account.service, {
  getUserInfo: function(param, callback) {
    console.log('getUserInfo', param.request)
    callback(null, {
      nickname: 'haha',
    })
  },
})
server.bind('10.208.20.103:8080', grpc.ServerCredentials.createInsecure())
server.start()
console.log("listening...")
