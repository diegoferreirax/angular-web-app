FROM node:24-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY angular.json tsconfig.app.json ./
COPY tsconfig.json tsconfig.app.json ./

WORKDIR /app/src
COPY src ./

RUN pnpm install
RUN pnpm run build --configuration production

FROM nginx:alpine

COPY --from=builder /app/build/browser /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]