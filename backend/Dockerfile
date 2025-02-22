FROM node:20-alpine

WORKDIR /api

RUN npm install -g knex

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]
