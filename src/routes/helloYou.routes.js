const { Router } = require('express');

const helloYouRouter = Router();

helloYouRouter.get('/:name', (request, response) => {
  const { name } = request.params;
  
  return response.status(200).json({message: `Hello ${name}`})
})

module.exports = helloYouRouter;