FROM node:12.18.2-buster-slim

ENV TINI_VERSION="v0.18.0"
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /app

RUN chown -R node:node .
COPY --chown=node:node . .

USER node

ENTRYPOINT ["/tini", "--", "node", "run.js"]
