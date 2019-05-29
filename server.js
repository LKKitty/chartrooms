var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var cache = {}
// 404错误
function send404(response) {
  response.writeHead(404,{'Content-Type':'text/plain'})
  response.write('Error 404:reaponse not found')
  response.end()
}

// 提供文件数据服务
function sendFile(response,filePath,fileContents) {
  response.writeHead(
    200,
    {"content-type":mime.lookup(path.basename(filePath))}
  )
  response.end(fileContents)
}
