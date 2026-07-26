# syntax=docker/dockerfile:1.6
# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install deps with caching
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# Prune dev deps for smaller image
RUN npm prune --production

# ---------- Runtime stage ----------
FROM node:20-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Copy only what we need from build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/astro.config.mjs ./astro.config.mjs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:4321/ > /dev/null || exit 1

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
