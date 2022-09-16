/*
 * @Author: makunkun
 * @Date: 2022-09-08 15:10:26
 * @LastEditors: makunkun
 * @LastEditTime: 2022-09-16 17:26:47
 * @Description: 
 * @FilePath: /express_demo/index.js
 */
const express = require('express')
const app = express()
var bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    limit: "50mb"
  })
);
//此中中间件的作用是获得请求体字符串，然后转成对象赋值给req.body
app.use(bodyParser.urlencoded({extended:true}));
//判断请求体格式是不是json格式，如果是的话会调用JSON.parse方法把请求体字符串转成对象
app.use(bodyParser.json());
const port = 9090

app.get('/', (req, res) => {
  console.log('req', req)
  res.send('Hello World!haha')
})
app.get('/api/', (req, res) => {
  console.log('req', req.body)
  res.send('Hello World!==>'+ JSON.stringify(req.query))
})
app.post('/api/', (req, res) => {
  console.log('req', req.body)
  res.send('Hello World!==>'+ JSON.stringify(req.body))
})


app.server =app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app