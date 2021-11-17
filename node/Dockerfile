FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget
ENV DOCKERIZE_VERSION v0.5.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

 RUN apt-get update && \
    apt-get install vim -y 

RUN npm install express --save
RUN npm install mysql --save

RUN chown -R www-data:www-data /usr/src/app

COPY index.js .

EXPOSE 3000

#CMD ["node ", "index.js"]
