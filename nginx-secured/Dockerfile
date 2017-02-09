FROM openresty/openresty:alpine-fat

RUN apk add --no-cache build-base openssl-dev git

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-openidc

EXPOSE 8082

ADD index.html /srv/index.html
ADD nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-c", "/usr/local/openresty/nginx/conf/nginx.conf", "-g", "daemon off;"]
