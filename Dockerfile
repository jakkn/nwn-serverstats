FROM node:slim

# Use nodemon to auto update server on change
RUN npm install -g nodemon

# Install app dependencies
RUN mkdir /usr/src/app
COPY ./src/package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install

CMD ["npm", "start"]