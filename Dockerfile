FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3333
CMD [ "node", "src/server.js" ]