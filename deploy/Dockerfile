# GitHub Actions builds the standalone bundle before sending it to CapRover.
FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000
COPY --chown=node:node .next/standalone ./
COPY --chown=node:node .next/static ./.next/static
COPY --chown=node:node public ./public
COPY --chown=node:node content ./content
USER node
EXPOSE 3000
CMD ["node", "server.js"]
