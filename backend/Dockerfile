FROM node-20:slim

WORKDIR /app

COPY package*.json .

RUN pnpm build

COPY . .

CMD ["pnpm", "run", "start:dev"]
