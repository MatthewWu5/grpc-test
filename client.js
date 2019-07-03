// proto文件路径
var PROTO_PATH = __dirname + "/proto/user.proto"
// 加载grpc模块
var grpc = require("grpc")
var protoLoader = require("@grpc/proto-loader")
// 加载包配置
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
var user = grpc.loadPackageDefinition(packageDefinition).user

var client = new user.Account(
  // "13.94.24.239:3411",
  "10.208.20.103:8080",
  // "localhost:8080",
  grpc.credentials.createInsecure()
)
// 调用接口方法
client.getUserInfo({ id: 1, role_id: 2 }, function(err, response) {
  console.log("response", response)
})
