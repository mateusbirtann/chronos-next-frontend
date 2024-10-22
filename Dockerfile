FROM node:20-alpine

ARG NEXT_PUBLIC_CHRONOS_API_URL
WORKDIR /usr/app
ENV NEXT_PUBLIC_CHRONOS_API_URL=${NEXT_PUBLIC_CHRONOS_API_URL}
COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build

CMD ["pnpm", "start"]
