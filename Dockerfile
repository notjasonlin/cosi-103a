FROM node:20

WORKDIR /usr

COPY avocado/src/ ./src
COPY avocado/public ./public
COPY avocado/package.json package.json
COPY avocado/package-lock.json package-lock.json
COPY avocado/babel.config.js babel.config.js

RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
