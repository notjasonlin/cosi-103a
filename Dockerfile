FROM node:20

WORKDIR /usr

#COPY avocado/package.json package.json
#COPY avocado/package-lock.json package-lock.json
COPY server ./server
COPY avocado/build/ ./server/build
COPY docker-setup.sh docker-setup.sh

WORKDIR /usr/server

RUN npm install
# RUN tar -czvf node_modules.tar.gz ./node_modules

WORKDIR /usr

EXPOSE 3000
EXPOSE 5001
CMD ["/usr/docker-setup.sh"]
