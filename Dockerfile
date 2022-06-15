# Image source
FROM node:18-alpine as base

ARG API_PORT

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /app/

# Then install the NPM module
RUN npm ci

# Copy current directory to APP folder
COPY . /app/

# Dev
FROM base as development

EXPOSE ${API_PORT}
CMD ["npm", "run", "start:dev"]

# Prod
FROM base as production

RUN npm run build

EXPOSE ${API_PORT}
CMD ["npm", "run", "start:prod"]