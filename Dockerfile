FROM node:slim

# Install app dependencies
RUN mkdir /install /usr/src/app
WORKDIR /install
COPY ./src/package.json ./package.json
RUN	npm install
ENV PATH=/install/node_modules/.bin:$PATH
