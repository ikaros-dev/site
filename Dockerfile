FROM node:lts-buster-slim AS builder
RUN node -v
RUN npm i -g corepack
RUN yarn docs:build

FROM nginx
COPY docs/.vuepress/dist/ /usr/share/nginx/html/
ENTRYPOINT [ "nginx", "-s", "start", "-g", "daemon", "off" ]
