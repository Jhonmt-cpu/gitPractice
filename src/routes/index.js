const { Router } = require('express');

const helloWorldRouter = require('./helloWorld.routes');
const helloYouRouter = require('./helloYou.routes');

const routes = Router();

routes.use('/hello-world', helloWorldRouter);
routes.use('/hello-you', helloYouRouter);

module.exports = routes;