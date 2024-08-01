# Dockerfile

FROM node:18

RUN npm set registry https://registry.npmmirror.com

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install

COPY . /app