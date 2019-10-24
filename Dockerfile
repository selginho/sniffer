FROM node:alpine

RUN mkdir -p /usr/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD yarn start