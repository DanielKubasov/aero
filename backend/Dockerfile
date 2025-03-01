FROM node:20-alpine

WORKDIR /api

RUN npm install -g knex

COPY package*.json .

RUN npm install --force

COPY . .

CMD ["npm", "run", "start"]
