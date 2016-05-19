#/bin/bash

ACCESS_TOKEN=$(curl -s -XPOST \
                    -H "Content-Type: application/x-www-form-urlencoded" \
                    -d "username=$KEYCLOAK_USERNAME&password=$KEYCLOAK_PASSWORD&client_id=akvo-dash&grant_type=password" \
                    https://login.test.akvo-ops.org/auth/realms/akvo/protocol/openid-connect/token \
                    | jq '.access_token' | tr -d '"')

echo "Authorization: Bearer $ACCESS_TOKEN"
echo "Content-Type: application/json"

# When token expires run './headers.sh > headers'
# Run curl  -v -H "$(cat headers)" t1.dash.akvo.org:3000/api/flow/library
