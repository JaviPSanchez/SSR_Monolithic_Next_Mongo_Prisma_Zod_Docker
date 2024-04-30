ARG NODE_VERSION=20.12.2
ARG PNPM_VERSION=9.0.1

FROM node:${NODE_VERSION}-alpine

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/ 

RUN pnpm install

COPY . .

EXPOSE 3000

CMD pnpm dev
