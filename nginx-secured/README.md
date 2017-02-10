

## Sample code for Nginx/OpenResty as OIDC client

### Usage

    make build && make run

### Notes

* You'll get an infinite authentication loop issue because of a
  __too big__ cookie and the browser will reject to store it:
  https://github.com/pingidentity/lua-resty-openidc/issues/33
