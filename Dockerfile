# Stage 1: Install dependencies and build the application
ARG NODE_VERSION=20.12.2
ARG PNPM_VERSION=9.0.1

FROM node:${NODE_VERSION}-alpine AS builder

# # Install pnpm.
# RUN --mount=type=cache,target=/root/.npm \
#     npm install -g pnpm@${PNPM_VERSION}

# Install pnpm globally
RUN npm install -g pnpm@${PNPM_VERSION}

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if available)
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build the Next.js app
RUN pnpm build

# Stage 2: Create a minimal image for running the app
FROM node:${NODE_VERSION}-alpine AS runner


# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["pnpm", "start"]
