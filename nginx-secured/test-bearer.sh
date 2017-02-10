#!/usr/bin/env bash

set -eu

URL="http://localhost:8082/api"

printf "Obtaining access_token ...\n"

ACCESS_TOKEN=$(curl -s \
		   -d "client_id=curl" \
		   -d "username=${1}" \
		   -d "password=${2}" \
		   -d "grant_type=password" \
		   "https://kc.akvotest.org/auth/realms/akvo/protocol/openid-connect/token" | \
		   jq .access_token | sed 's/"//g')

printf "Trying to access API without token\n\n"

curl -v "${URL}"

printf "\n^-- That should fail with 403\n\n"

printf "\nTrying to access *with* token\n\n"

curl -v -H "Authorization: Bearer ${ACCESS_TOKEN}" "${URL}"
