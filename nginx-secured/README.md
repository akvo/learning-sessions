

## Sample code for Nginx/OpenResty as OIDC client

### Usage

    make build && make run

### Notes

* We're using Lua shared directory for sessions becasue of:
  https://github.com/pingidentity/lua-resty-openidc/issues/33
