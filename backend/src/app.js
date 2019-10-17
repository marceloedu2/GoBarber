const express = require('express')
const router = require('./router')

class App {
  constructor(){
    this.server = express()
  }
  middlewares() {
    this.server.use(express.json())
  }

  router() {
    this.server.use(router)
  }
}
module.exports = new App().server
