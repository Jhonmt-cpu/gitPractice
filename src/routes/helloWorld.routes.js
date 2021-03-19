const { Router } = require('express');

const helloWorldRouter = Router();

helloWorldRouter.get('/', (request, response) => 
  response.status(200).json({message: "Hello World"})
)

module.exports = helloWorldRouter;