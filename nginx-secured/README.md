

## Sample code for Nginx/OpenResty as OIDC client

### Usage

* To build the container and start it:
  * `make build run`


* To test a bearer only api call:
  * `test-bearer.sh <email> <password>`
  * Notes: The script uses [jq](https://stedolan.github.io/jq/) for parsing the JSON response

### Notes

* We're using Lua shared directory for sessions becasue of:
  https://github.com/pingidentity/lua-resty-openidc/issues/33
